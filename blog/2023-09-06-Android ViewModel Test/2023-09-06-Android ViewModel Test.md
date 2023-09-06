---
title: Android ViewModel Test
slug: viewmodel-test
authors: [otter]
tags: [android, viewmodel, test]
---

안녕하세요! 트립드로우 팀의 수달입니다.  
이 글을 통해 안드로이드에서 ViewModel에 대한 테스트를 작성하는 방법에 대해 설명드려고 합니다. 단위 테스트가 무엇인지 이해하고, 적용해 본 경험이 있는 사람을 대상으로 설명하겠습니다.  
이 글을 읽고 ViewModel 테스트와 친해지길 바랍니다! 화이팅!

## Android ViewModel Test

일반적인 ViewModel은 사전 준비 없이 테스트하게 된다면 테스트에 실패합니다. 여기에는 크게 두 가지 경우가 있습니다. ViewModel의 LiveData value 변경에 대한 테스트, Coroutine과 같은 비동기 작업에 대한 테스트입니다. 두 경우에 대한 실패 원인은 같습니다. 이는 테스트가 MainThread에서 작동하지 않는다는 것입니다.

### WorkerThread

테스트는 WorkerThread에서 작동합니다.

테스트는 MainThread에서 수행하지 않고, WorkerThread에서 작동합니다. 이것이 왜 LiveData value 변경 테스트와 Coroitine 테스트의 실패의 원인이 될까요?  
우선, 테스트가 WorkerThread에서 작동한다는 것을 확인해 보고, 이것이 왜 테스트 실패의 원인이 되는지 알아보겠습니다. 아래의 코드를 보면 테스트가 "Test worker" 스레드에서 동작하는 것을 확인할 수 있습니다.

```kotlin
class StudyTestThread {

    @Test
    fun `테스트는 메인 스레드에서 수행되지 않는다`() {
        val currentThread = Thread.currentThread()
        assertFalse(currentThread.isDaemon)
    }

    @Test
    fun `테스트는 테스트 작업 스레드에서 수행된다`() {
        val currentThreadName = Thread.currentThread().name
        assertEquals("Test worker", currentThreadName)
    }
}
```

## LiveData Test

아래의 `ViewModel`코드를 보면 \_products라는 LivaData value에 변경이 발생하고 있습니다.

```kotlin
class MainViewModel(private val productRepository: ProductRepository) : ViewModel() {

    private val _products: MutableLiveData<List<Product>> = MutableLiveData(emptyList())
    val products: LiveData<List<Product>> get() = _products

    fun fetchAllProducts() {
        _products.value = productRepository.getAllProducts()
    }
}
```

아래의 `ViewModelTest` 코드를 보면 products라는 LivaData value에 변경이 발생하고 있는지 확인하고 있습니다.

```kotlin
internal class MainViewModelTest {

    private lateinit var sut: MainViewModel
    private lateinit var productRepository: ProductRepository

    @Before
    fun setUp() {
        productRepository = Fake.ProductRepository()
        sut = MainViewModel(productRepository)
    }

    @Test
    fun `전체 상품을 조회한다`() {
        // given
        val products = productRepository.getAllProducts()

        // when
        sut.fetchAllProducts()

        // then
        assertEquals(products, sut.products.value)
    }
}
```

이렇게 테스트하면 LiveData의 value를 변경하는 `sut.fetchAllProducts()` 부분에서 오류가 발생합니다.  
![Alt text](image-3.png)

### setValue() / postValue()

LiveData의 setValue() / postValue()는 MainThread에서 작동합니다.

```java
@MainThread
protected void setValue(T value) {
    assertMainThread("setValue");   // 메인 스레드에서 수행
    mVersion++;
    mData = value;
    dispatchingValue(null);
}

protected void postValue(T value) {
    boolean postTask;
    synchronized (mDataLock) {
        postTask = mPendingData == NOT_SET;
        mPendingData = value;
    }
    if (!postTask) {
        return;
    }
    // 메인 스레드에서 수행
    ArchTaskExecutor.getInstance().postToMainThread(mPostValueRunnable);
}
```

앞서 설명드렸듯이 테스트는 `Tast worker` 스레드에서 동작하지만, 테스트에서 확인하고자하는 LiveData의 값 변경은 `Main` 스레드에서 작업이 일어나야합니다. 이 과정에서 오류가 발생합니다.

### InstantTaskExecutorRule()

스레드가 달라서 발생하는 문제를 해결하기 위해 InstantTaskExecutorRule을 설정해주어야 합니다.

```kotlin
internal class MainViewModelTest {

    @get:Rule
    val instantExecutorRule = InstantTaskExecutorRule() //rule 설정

    private lateinit var sut: MainViewModel
    private lateinit var productRepository: ProductRepository

    @Before
    fun setUp() { /* ... */ }

    @Test
    fun `전체 상품을 조회한다`() { /* ... */ }
}
```

[InstantTaskExecutorRule](https://developer.android.com/reference/androidx/arch/core/executor/testing/InstantTaskExecutorRule)은 안드로이드 앱 구성요소에 대한 테스트를 동기적인 환경에서 실행하고, 메인 스레드에서 동작하는 것처럼 실행합니다.

```java
public class InstantTaskExecutorRule extends TestWatcher {
    @Override
    protected void starting(Description description) {
        super.starting(description);
        ArchTaskExecutor.getInstance().setDelegate(new TaskExecutor() {
            @Override
            public void executeOnDiskIO(@NonNull Runnable runnable) {
                runnable.run();
            }

            @Override
            public void postToMainThread(@NonNull Runnable runnable) {
                runnable.run();
            }

            @Override
            public boolean isMainThread() {
                return true;    // 항상 메인 스레드인 것처럼 사용할 수 있습니다.
            }
        });
    }

    @Override
    protected void finished(Description description) {
        super.finished(description);
        ArchTaskExecutor.getInstance().setDelegate(null);
    }
}
```

## Coroutine Test

`viewModelscope.launch`를 사용하는 코드에 대한 테스트를 기준으로 설명드리겠습니다.

```kotlin
class MainViewModel(private val productRepository: ProductRepository) : ViewModel() {

    private val _products: MutableLiveData<List<Product>> = MutableLiveData(emptyList())
    val products: LiveData<List<Product>> get() = _products

    fun fetchAllProducts() {
        viewModelScope.launch { // 새로운 비동기 스레드 사용
            _products.value = productRepository.getAllProducts()
        }
    }
}
```

```kotlin
internal class MainViewModelTest {

    @get:Rule
    val instantExecutorRule = InstantTaskExecutorRule()

    private lateinit var sut: MainViewModel
    private lateinit var productRepository: ProductRepository

    @Before
    fun setUp() { /* ... */ }

    @Test
    fun `전체 상품을 조회한다`() { /* ... */ }
}
```

이 또한 LiveData와 같은 이유로 테스트에 실패합니다.

![Alt text](image-11.png)

### viewModelScope.launch

viewModelScope.launch는 Dispatcher가 적용되지 않으면 MainThread에서 작동합니다.

```kotlin
public fun CoroutineScope.launch(
    context: CoroutineContext = EmptyCoroutineContext,
    start: CoroutineStart = CoroutineStart.DEFAULT,
    block: suspend CoroutineScope.() -> Unit
): Job {
    val newContext = newCoroutineContext(context)
    val coroutine = if (start.isLazy)
        LazyStandaloneCoroutine(newContext, block) else
        StandaloneCoroutine(newContext, active = true)
    coroutine.start(start, coroutine, block)
    return coroutine
}
```

테스트는 `Tast worker` 스레드에서 동작하고, 코루틴은 `Main` 스레드에서 작업이 일어나야합니다. 이 과정에서 오류가 발생합니다.

### Dispatchers.setMain / Dispatchers.resetMain

스레드가 달라서 발생하는 문제를 해결하기 위해 `TestDispatcher.Main`으로 설정해주어야 합니다. 즉, 테스트가 Main Thread에서 일어나도록 합니다.  
테스트가 종료된 후에는 테스트가 메인 스레드에 영향을 주지 않도록 `Tast worker` 스레드에서 동작하도록 재설정합니다.

```kotlin
internal class MainViewModelTest {

    @get:Rule
    val instantExecutorRule = InstantTaskExecutorRule()

    private lateinit var sut: MainViewModel
    private lateinit var productRepository: ProductRepository

    @Before
    @OptIn(ExperimentalCoroutinesApi::class)
    fun setUp() {
        Dispatchers.setMain(UnconfinedTestDispatcher()) // 테스트에서 사용할 스레드를 메인 스레드로 변경합니다.
        productRepository = Fake.ProductRepository()
        sut = MainViewModel(productRepository)
    }

    @After
    @OptIn(ExperimentalCoroutinesApi::class)
    fun tearDown() {
        Dispatchers.resetMain() // 테스트에서 사용할 스레드를 다시 테스트 스레드로 돌려놓습니다.
    }

    @Test
    fun `전체 상품을 조회한다`() {
        // given
        val products = productRepository.getAllProducts()

        // when
        sut.fetchAllProducts()

        // then
        assertEquals(products, sut.products.value)
    }
}

```

### Coroutine Rule

앞서 설명 드린 대로 테스트가 시작할 때 스레드를 설정하고, 테스트가 끝날 때 스레드를 다시 설정하는 코드가 있으면 테스트가 조금 더 귀찮아질 겁니다. 그러니 룰을 생성해 이 문제를 해결하도록 하겠습니다.  
아래의 코드처럼 룰을 작성해 줍니다.

```kotlin
@OptIn(ExperimentalCoroutinesApi::class)
class MainCoroutineRule constructor(
    private val testDispatcher: TestDispatcher = UnconfinedTestDispatcher()
) : TestWatcher() {

    @OptIn(ExperimentalCoroutinesApi::class)
    override fun starting(description: Description) {
        super.starting(description)
        Dispatchers.setMain(testDispatcher)
    }

    @OptIn(ExperimentalCoroutinesApi::class)
    override fun finished(description: Description) {
        super.finished(description)
        Dispatchers.resetMain()
    }
}
```

만들어 둔 룰을 테스트 룰에 적용해 준다면 테스트 시작과 종료 시점에 스레드를 설정하는 코드를 추가로 작성하지 않아도 됩니다.

```kotlin
internal class MainViewModelTest {

    @get:Rule
    val instantExecutorRule = InstantTaskExecutorRule()

    @get:Rule
    val mainCoroutineRule = MainCoroutineRule() // Dispatchers를 사용하는 스레드가 메인 스레드가 되도록 합니다.

    private lateinit var sut: MainViewModel
    private lateinit var productRepository: ProductRepository

    @Before
    fun setUp() {
        productRepository = Fake.ProductRepository()
        sut = MainViewModel(productRepository)
    }

    // 이제 매번 설정해줄 필요가 없어졌습니다!

    @Test
    fun `전체 상품을 조회한다`() { /* ... */ }
}
```

이해가 잘 되셨기를 바라며... 총총...
