---
title: Git submodule 도입하기
slug: git-submodule
authors: [ huchu ]
tags: [ github, collaboration ]
---

## 들어가기

프로젝트를 진행하며 환경변수를 private 하게 관리해야 하는 상황을 마주합니다. 예를 들어, JWT를 발급할 때 사용하는 secret-key 는 외부에 노출되면 안 됩니다. 만약 secret-key 가 노출된다면
누구나 JWT를 발급해 서버에 접근할 수 있고 회원의 개인정보까지 유출될 수 있기 때문입니다.

트립드로우는 환경변수를 관리하기 위해 Git Submodule을 도입하기로 했습니다.

# Git Submodule

## submodule 이란?

Git Submodule 은 Git Repository 안에 다른 Git Repository를 포함해서 사용하는 기술입니다.

![](https://velog.velcdn.com/images/153plane/post/4c1503e4-c398-435c-8ef4-22832e24b9c7/image.png)

A, B 두 개의 Repository 가 있을 때 A Repository 에서 B Repository 를 submodule로 설정할 수 있습니다. 그러면 A Repository 에서 B Repository 에
자유롭게 접근할 수 있게 됩니다.

## submodule로 환경변수 관리

트립드로우 Repository에 submodule을 추가하는 것으로 어떻게 환경변수를 관리할 수 있을까요?

그것은 Private Repository를 submodule로 설정함으로써 가능합니다.

Github의 Private Repository는 권한이 허용된 자만 접근 가능합니다. 즉, 외부에 노출되지 않습니다. 따라서 Private Repository에 환경변수를 두고 트립드로우 Repository에
이를 submodule로 설정한다면 환경변수를 private 하게 관리하는 것이 가능해집니다.

## submodule의 장점

사실 환경변수를 비공개를 관리하는 가장 쉬운 방법은 환경변수 관련 파일을 .gitignore에 추가하는 것입니다.

그에 비해 submodule을 사용해 환경변수를 관리하는 방법은 번거롭게 느껴집니다. 그렇다면 submodule 을 사용해 얻을 수 있는 장점은 무엇일까요?

#### 1. 사람의 실수(human error)를 방지할 수 있다.

만약 개발자의 실수로 민감 정보 파일을 .gitignore에 추가하지 않으면 어떻게 될까요? 프로그램의 보안이 매우 취약해지고 회원 정보 유출 사태가 발생할 수도 있습니다. 민감 정보를 공개적인 장소에 노출하지 않는
것이
당연한 상식처럼 느껴지지만, 몸이 아프거나 일정이 급박하다면 어떤 개발자든 상식에 어긋나는 실수를 범할 수 있습니다. 결국 실수할만한 상황을 원천 차단하는 것이 중요합니다.

Private Repository와 submodule 을 이용한 방법은 .gitignore 설정을 추가하지 않아도 됩니다. 따라서 사람의 실수를 방지할 수 있습니다.

#### 2. 변경 사항을 체계적으로 추적하고 통제할 수 있다.

submodule은 Git Repository를 기반으로 합니다. 이것은 환경변수에 대해서도 Git의 버전 관리가 가능하다는 말입니다. submodule을 사용한다면 필요에 따라 변경 사항을 살펴보거나 이전의
버전으로 되돌리는 등의 행위를 할 수
있습니다.

#### 3. 통일성을 지킬 수 있다.

프로젝트의 팀원들이 .gitignore를 통해 개별로 민감 정보 파일을 관리한다고 생각해봅시다. 처음에는 파일의 내용이 모두 같아도 시간이 지남에 따라 팀원 간 파일의 내용이 달라질 수 있습니다. 환경변수에 관한
팀의 통일성이 깨진다면 "내
컴퓨터에서는 잘 되는데 네 컴퓨터에서는 잘 안 되는" 답답한 상황이 생기기 마련입니다.

Git의 submodule은 통일성을 지키기 편합니다. 한 팀원이 환경변수를 변경했다면 commit & push 하고, 다른 팀원은 변경사항을 update 하면 통일성이 지켜집니다. 모두가 같은
파일을 사용할 수 있는 것 입니다.

# submodule 설정하기

실습을 통해 Git submodule을 직접 사용해봅시다.

## 초기 설정

### Repository 생성

![](https://velog.velcdn.com/images/153plane/post/2a456ec0-a178-4d16-90c1-2e5ecc658bae/image.png)

Github 에서 Repository를 두 개 생성합니다. submodule로 설정할 Repository는 `Private`으로
생성합니다. `project-repository`, `submodule-repository` 를 생성했습니다.

### submodule 추가

메인 프로젝트인 `project-repository` 에 `submodule-repository` 를 submodule로 추가합니다.

```shell
git submodule add {submodule-repository_URL} {target_dir}
```

위와 같은 명령어로 submodule을 추가할 수 있습니다. `{target_dir}`로 submodule 디렉토리의 이름을 설정할 수 있습니다. 명시하지 않는다면 Repository의 이름으로 설정됩니다.

명령을 실행한 후 git status 로 변경사항을 확인해봅시다.

![](https://velog.velcdn.com/images/153plane/post/01abb7ec-88eb-47e3-aaea-4e30c42c1258/image.png)
.gitmodules 파일과 `submodule-repository`가 추가된 것을 확인할 수 있습니다.

![](https://velog.velcdn.com/images/153plane/post/f6a67169-d9a2-4d2d-b22f-655960cd9533/image.png)

.gitmodules 파일은 서브모듈의 URL 매핑 정보를 담은 설정 파일입니다.

submodule 추가에 따른 변경사항을 commit & push 함으로써 초기 설정이 완료됩니다.

## 협업할 때 사용하기

### submodule을 포함한 프로젝트 사용하기

팀원 중 한 명이 프로젝트에 submodule을 설정했다면 다른 팀원은 이를 그대로 사용하면 됩니다.

프로젝트 clone 부터 시작한다면 다음 명령을 차례로 실행하면 됩니다. 이미 clone 한 상태라면 init, update 명령만 실행하면 됩니다. init과 update 명령을 실행하지 않는다면 프로젝트에
submodule 디렉토리는 빈 상태 입니다.

1. clone

``` shell
git clone {Repository_URL}
```

2. init

```shell
git submodule init
```

init 명령은 submodule 정보를 기반으로 로컬에 환경설정 파일(configuration file)을 초기화합니다.

3. update

```shell
git submodule update
```

update 명령은 submodule의 원격 Repository에서 커밋 정보를 포함한 데이터를 가져온 후 프로젝트에 맞게 Checkout 합니다.

### submodule 변경하기

submodule 내용을 변경하는 방법은 크게 두 가지입니다. submodule Repository 에서 변경하는 방법과 메인 프로젝트 Repository에서 직접 변경하는 방법입니다.

#### submodule Repository에서 변경

submodule로 설정된 Repository에서 직접 내용을 변경하는 방법입니다.

다음 절차를 따릅니다.

1. submodule 변경사항 commit & push

```shell
git add .
git commit -m "{message}"
git push
```

submodule 에서 변경사항을 commit & push 합니다.

2. 메인 프로젝트 submodule update

```shell
git submodule update --remote
```

![](https://velog.velcdn.com/images/153plane/post/6ee65291-9998-4328-9863-e3016577fa55/image.png)

메인 프로젝트에서 `git submodule update --remote` 명령을 실행하면, submodule의 HEAD 가 새로운 commit을 가리키게 됩니다.

이때 `git status` 명령을 실행해보면, submodule이 update 된 것을 확인할 수 있습니다.
![](https://velog.velcdn.com/images/153plane/post/e8d5e5c4-b282-4c66-9934-c329e20ea129/image.png)

3. 메인 프로젝트 변경사항 commit & push

```shell
git add .
git commit -m "{message}"
git push
```

메인 프로젝트에 submodule의 변경사항을 반영하기 위해 commit & push 합니다.

#### 메인 프로젝트에서 변경

메인 프로젝트에서 직접 submodule에 접근해 내용을 변경하는 방법입니다.

앞서 submodule Repository에서 직접 변경하는 방법과 크게 다르지 않습니다. 다만 commit & push 순서가 중요합니다. submodule의 변경사항을 우선 commit & push 한 후 메인
프로젝트에서 submodule 변경 내용을 commit & push 해야합니다.

**⚠️ 주의**
![](https://velog.velcdn.com/images/153plane/post/165ccd1e-5c06-4b8b-b30d-c0c155a85d6f/image.png)

앞서 `git submodule udpate` 명령으로 submodule의 변경사항을 불러왔다면 submodule은 Detached HEAD 상태입니다.

이때 submodule 의 내용을 변경한 후 commit & push 하면 본래 사용하던 branch와 무관하게 commit이 쌓이게 됩니다. 기존에 사용하던 branch에 변경사항을 적용하려면 변경사항을
commit & push 하기 전에 사용하던 branch로 Checkout 을 수행해야 합니다. 만약, Remote Repository 보다 commit이 뒤에 있다면 git pull도 수행합니다.

### 팀원들이 update 사항 불러오기

한 팀원이 submodule 내용을 변경 후 메인 프로젝트에 반영했다면, 다른 팀원들도 이를 불러올 필요가 있습니다.

팀원 모두 메인 프로젝트에서 `git submodule update --remote` 명령을 실행합니다.

# 사용하기

그럼 이제 submodule 사용법을 알았으니, 직접 환경변수를 관리하고 사용해봅니다.

### 애플리케이션 코드

```java

@RestController
public class HelloController {

    @GetMapping("/hello")
    public ResponseEntity<String> hello(@Value("${credentials.greeting-message}") final String message) {
        return ResponseEntity.ok(message);
    }
}
```

다음과 같은 코드를 작성했습니다. `/hello`로 접근하면 인사말을 반환하는 코드입니다. 이때 인사말이 private으로 설정해야 하는 환경변수라고 생각해봅시다. `@Value` 애노테이션을 통해
application.yml
파일에서 message를 불러오도록 설정했습니다.

### submodule 코드

![](https://velog.velcdn.com/images/153plane/post/ce8f59c1-3ac2-4eb4-88e4-ff0c135fc1a9/image.png)

Private Repository 인 submodule 에 `application-hello.yml` 을 작성합니다. "hello"와 같은 값이 외부에 노출되면 안 되는 환경변수라고 생각하시면 됩니다.

### application.yml & Profiles

Spring 을 사용하는
프로그램에서는 [Profiles](https://docs.spring.io/spring-boot/docs/1.2.0.M1/reference/html/boot-features-profiles.html)를 설정함으로써
application의 configuration을 여러 개로 나누어 관리할 수 있습니다.

![](https://velog.velcdn.com/images/153plane/post/99a3b170-f41e-41a7-a9fe-c178da4b25fd/image.png)

메인 프로젝트 `application.yml`에 profiles를 hello로 설정합니다. 그러면 `application-hello.yml` 파일을 적용합니다. 이때 `application-hello.yml` 파일이
resources 폴더가 아닌 submodule 폴더에 있다는 것에 유의합니다. submodule 폴더에서 yml 파일을 import 할 수 있는 설정도 추가합니다.

![](https://velog.velcdn.com/images/153plane/post/8beb4f45-9abf-4927-a67f-1e3f176f970d/image.png)

애플리케이션을 실행해보면 환경변수를 잘 읽어오는 것을 확인할 수 있습니다.
