"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",T={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||T[m]||i;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>T,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={title:"\uc2a4\ud504\ub9c1 \ud14c\uc2a4\ud2b8 \uaca9\ub9ac",slug:"spring-test-isolation",authors:["herb"],tags:["test"]},s=void 0,o={permalink:"/spring-test-isolation",editUrl:"https://github.com/trip-draw/trip-draw.github.io/tree/main/blog/2023-10-03-\uc2a4\ud504\ub9c1 \ud14c\uc2a4\ud2b8 \uaca9\ub9ac.md",source:"@site/blog/2023-10-03-\uc2a4\ud504\ub9c1 \ud14c\uc2a4\ud2b8 \uaca9\ub9ac.md",title:"\uc2a4\ud504\ub9c1 \ud14c\uc2a4\ud2b8 \uaca9\ub9ac",description:"\ud14c\uc2a4\ud2b8 \uaca9\ub9ac",date:"2023-10-03T00:00:00.000Z",formattedDate:"2023\ub144 10\uc6d4 3\uc77c",tags:[{label:"test",permalink:"/tags/test"}],readingTime:5.105,hasTruncateMarker:!1,authors:[{name:"\ud5c8\ube0c",title:"Backend",url:"https://github.com/greeng00se",imageURL:"https://github.com/greeng00se.png",key:"herb"}],frontMatter:{title:"\uc2a4\ud504\ub9c1 \ud14c\uc2a4\ud2b8 \uaca9\ub9ac",slug:"spring-test-isolation",authors:["herb"],tags:["test"]},nextItem:{title:"\ube44\ub3d9\uae30 \uc608\uc678 \ub85c\uae45",permalink:"/log-async-exception"}},c={authorsImageUrls:[void 0]},l=[{value:"\ud14c\uc2a4\ud2b8 \uaca9\ub9ac",id:"\ud14c\uc2a4\ud2b8-\uaca9\ub9ac",level:3},{value:"\uae30\uc874\uc758 \ud14c\uc2a4\ud2b8 \uaca9\ub9ac",id:"\uae30\uc874\uc758-\ud14c\uc2a4\ud2b8-\uaca9\ub9ac",level:3},{value:"TestExecutionListener",id:"testexecutionlistener",level:3},{value:"AbstractTestExecutionListener \uc0c1\uc18d\ud558\uc5ec \uad6c\ud604",id:"abstracttestexecutionlistener-\uc0c1\uc18d\ud558\uc5ec-\uad6c\ud604",level:3},{value:"Listener \ub4f1\ub85d",id:"listener-\ub4f1\ub85d",level:3},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:3}],p={toc:l},u="wrapper";function T(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\ud14c\uc2a4\ud2b8-\uaca9\ub9ac"},"\ud14c\uc2a4\ud2b8 \uaca9\ub9ac"),(0,a.kt)("p",null,"\ud14c\uc2a4\ud2b8\uc758 \uc21c\uc11c\uc5d0 \ub530\ub77c \uc131\uacf5 \uc2e4\ud328 \uc5ec\ubd80\uac00 \uacb0\uc815\ub418\ub294 \ube44\uacb0\uc815\uc801\uc778(non-determinism) \ud14c\uc2a4\ud2b8\uac00 \ub418\uc5b4\uc11c\ub294 \uc548\ub418\uace0, \ud14c\uc2a4\ud2b8\ub294 \ud56d\uc0c1 \uc21c\uc11c\uc5d0 \uc0c1\uad00\uc5c6\uc774 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc218\ud589\ub418\ub3c4\ub85d \ubcf4\uc7a5\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \uc790\uc6d0\uc758 \uacf5\uc720, \uc678\ubd80 API, \uc2dc\uac04 \ub4f1\uc73c\ub85c \ube44\uacb0\uc815\uc801\uc778 \ud14c\uc2a4\ud2b8\uac00 \ub418\uace0\ub294 \ud569\ub2c8\ub2e4. \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ud14c\uc2a4\ud2b8 \ub300\uc5ed\uc744 \uc0ac\uc6a9\ud558\uac70\ub098, \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc7ac\uc2e4\ud589\ud558\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"@DirtiesContext"),", \uc790\uc6d0\uc744 \ucd08\uae30\ud654\ud558\uae30 \uc704\ud574 \ud14c\uc2a4\ud2b8 \uc774\ud6c4\uc5d0 \ud14c\uc774\ube14\uc744 \ub864\ubc31 \ud558\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"@Transactional"),"\ub4f1 \ub2e4\uc591\ud55c \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ud574\ub2f9 \uae00\uc5d0\uc11c\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc790\uc6d0\uc758 \uacf5\uc720\ub97c \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \ud14c\uc2a4\ud2b8 \uaca9\ub9ac\ub97c \uc218\ud589\ud558\ub294 \ubd80\ubd84\uc5d0 \ub300\ud574 \uc791\uc131\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4.  "),(0,a.kt)("admonition",{title:"Independent - FIRST",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\ud14c\uc2a4\ud2b8\ub07c\ub9ac \uc11c\ub85c \uc758\uc874\ud558\uba74 \uc548 \ub41c\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc11c\ub85c \uc758\uc874\ud558\uac8c \ub41c\ub2e4\uba74 \ud558\ub098\uc758 \ud14c\uc2a4\ud2b8\uac00 \uc2e4\ud328\ud560 \ub54c, \ub610 \ub2e4\ub978 \ud558\ub098\uc758 \ud14c\uc2a4\ud2b8\uac00 \uc2e4\ud328\ud560 \uc218 \uc788\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub2e4\ub978 \ud14c\uc2a4\ud2b8\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\uace0, \ub3c5\ub9bd\uc801\uc73c\ub85c \uc2e4\ud589 \uac00\ub2a5\ud55c \ud14c\uc2a4\ud2b8\uac00 \uc88b\uc740 \ud14c\uc2a4\ud2b8\ub2e4.  ")),(0,a.kt)("h3",{id:"\uae30\uc874\uc758-\ud14c\uc2a4\ud2b8-\uaca9\ub9ac"},"\uae30\uc874\uc758 \ud14c\uc2a4\ud2b8 \uaca9\ub9ac"),(0,a.kt)("p",null,"\uae30\uc874 \ud14c\uc2a4\ud2b8\uc758 \uacbd\uc6b0 @Sql \uc560\ub108\ud14c\uc774\uc158\uc744 \uc774\uc6a9\ud558\uc5ec \uac01 \ud14c\uc2a4\ud2b8 \uc774\ud6c4\ub9c8\ub2e4 truncate \uad6c\ubb38\uc744 \uc2e4\ud589\ud558\uc5ec \ud14c\uc2a4\ud2b8\ub97c \uc9c4\ud589\ud588\uc2b5\ub2c8\ub2e4. \ube60\ub974\uac8c \uc801\uc6a9\ud560 \uc218 \uc788\uc9c0\ub9cc \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud558\uba74\uc11c \uc0c8\ub85c\uc6b4 \ud14c\uc774\ube14\uc774 \ucd94\uac00\ub418\ub294 \uacbd\uc6b0, \ud14c\uc774\ube14\uc744 \uc9c1\uc811 \ucd94\uac00\ud574 \uc918\uc57c \ud55c\ub2e4\ub294 \ubb38\uc81c\uc810\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=AcceptanceTest",title:"AcceptanceTest"},'@Sql(value = "/truncate.sql", executionPhase = ExecutionPhase.AFTER_TEST_METHOD)\n@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)\npublic abstract class AcceptanceTest {\n\n    @LocalServerPort\n    private int port;\n\n    @BeforeEach\n    public void setUp() {\n        RestAssured.port = port;\n    }\n}\n')),(0,a.kt)("h3",{id:"testexecutionlistener"},"TestExecutionListener"),(0,a.kt)("p",null,"\uc2a4\ud504\ub9c1\uc5d0\uc11c\ub294 TextExecutionListner\ub97c \uc774\uc6a9\ud558\uc5ec \uac01 \ud14c\uc2a4\ud2b8 \uc2e4\ud589 \ub2e8\uacc4\uc5d0\uc11c \uc774\ubca4\ud2b8\ub97c \uc218\uc2e0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc774\ub97c \uc774\uc6a9\ud558\uba74 JUnit\uc758 @BeforeEach\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uacfc \uc720\uc0ac\ud558\uac8c, \ud14c\uc2a4\ud2b8\uc758 \uc0dd\uba85\uc8fc\uae30 \uc774\uc804 \ub610\ub294 \uc774\ud6c4\uc5d0 \ud544\uc694\ud55c \uc791\uc5c5\uc744 \uc2e4\ud589\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=TextExecutionListner",title:"TextExecutionListner"},"public interface TestExecutionListener {\n    default void beforeTestClass(TestContext testContext) throws Exception {}\n    default void prepareTestInstance(TestContext testContext) throws Exception {}\n    default void beforeTestMethod(TestContext testContext) throws Exception {}\n    default void beforeTestExecution(TestContext testContext) throws Exception {}\n    default void afterTestExecution(TestContext testContext) throws Exception {}\n    default void afterTestMethod(TestContext testContext) throws Exception {}\n    default void afterTestClass(TestContext testContext) throws Exception {}\n}\n")),(0,a.kt)("h3",{id:"abstracttestexecutionlistener-\uc0c1\uc18d\ud558\uc5ec-\uad6c\ud604"},"AbstractTestExecutionListener \uc0c1\uc18d\ud558\uc5ec \uad6c\ud604"),(0,a.kt)("p",null,"AbstractTestExecutionListener\ub97c \uc0c1\uc18d\ubc1b\uc544 \ud14c\uc2a4\ud2b8 \uaca9\ub9ac \ud658\uacbd\uc744 \ub9cc\ub4e4\uc5b4\uc8fc\ub294 \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4. \ub610\ud55c \uc778\ud130\ud398\uc774\uc2a4\uc778 TextExecutionListner\uc640 \ub2ec\ub9ac Ordered\uac00 \uad6c\ud604\ub418\uc5b4 \uc788\uc5b4 \ud574\ub2f9 \ud074\ub798\uc2a4\ub97c \uc0c1\uc18d\ubc1b\uc544 \uad6c\ud604\ud55c \ud074\ub798\uc2a4\ub294 \ud504\ub808\uc784\uc6cc\ud06c\uac00 \uc81c\uacf5\ud558\ub294 \ub9ac\uc2a4\ub108 \ub2e4\uc74c\uc5d0 \uc2e4\ud589\uc2dc\ud0a4\ub3c4\ub85d \ud569\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub2e4\uc74c\uacfc \uac19\uc774 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \uac01\uac01\uc758 \ud14c\uc774\ube14\uc5d0 \ud574\ub2f9\ud558\ub294 Truncate \ucffc\ub9ac\ub97c \ub9cc\ub4e4\uc5b4\uc11c \uc870\ud68c\ud558\uace0, Test \uba54\uc11c\ub4dc\uac00 \ub05d\ub0a0\ub54c \ub9c8\ub2e4 \ud574\ub2f9 \ucffc\ub9ac\ub97c \uc2e4\ud589\ud558\uc5ec \ud14c\uc774\ube14\uc744 \ucd08\uae30\ud654\uc2dc\ud0a4\ub3c4\ub85d \uc124\uc815\ud588\uc2b5\ub2c8\ub2e4.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=DatabaseCleaner",title:"DatabaseCleaner"},'\npublic class DatabaseCleaner extends AbstractTestExecutionListener {\n\n    private static final String TRUNCATE_TABLE_QUERY = """\n            SELECT Concat(\'TRUNCATE TABLE \', TABLE_NAME, \';\') \n            FROM INFORMATION_SCHEMA.TABLES\n            WHERE TABLE_SCHEMA = \'PUBLIC\'\n            """;\n\n    @Override\n    public void afterTestMethod(TestContext testContext) {\n        JdbcTemplate jdbcTemplate = getJdbcTemplate(testContext);\n        List<String> truncateTableQueries = getTruncateTableQueries(jdbcTemplate);\n        truncateTables(jdbcTemplate, truncateTableQueries);\n    }\n\n    private JdbcTemplate getJdbcTemplate(TestContext testContext) {\n        return testContext.getApplicationContext().getBean(JdbcTemplate.class);\n    }\n\n    private List<String> getTruncateTableQueries(JdbcTemplate jdbcTemplate) {\n        return jdbcTemplate.queryForList(TRUNCATE_TABLE_QUERY, String.class);\n    }\n\n    private void truncateTables(JdbcTemplate jdbcTemplate, List<String> truncateTableQueries) {\n        jdbcTemplate.execute("SET REFERENTIAL_INTEGRITY FALSE");\n        truncateTableQueries.forEach(jdbcTemplate::execute);\n        jdbcTemplate.execute("SET REFERENTIAL_INTEGRITY TRUE");\n    }\n}\n\n')),(0,a.kt)("h3",{id:"listener-\ub4f1\ub85d"},"Listener \ub4f1\ub85d"),(0,a.kt)("p",null,"@TestExecutionListeners\ub97c \uc774\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790 \uc815\uc758 \ub9ac\uc2a4\ub108\ub97c \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","mergeMode\uc758 \uae30\ubcf8\uac12\uc740 REPLACE_DEFAULTS\ub85c \ub9ac\uc2a4\ub108\uac00 \uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uacbd\uc6b0 \ub4f1\ub85d\ub41c \ub9ac\uc2a4\ub108\ub85c \ubcc0\uacbd\ub429\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","MERGE_WITH_DEFAULTS\ub85c \uc124\uc815\ud55c\ub2e4\uba74 Ordered \uae30\uc900\uc73c\ub85c \uc21c\uc11c\uac00 \uacb0\uc815\ub429\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc774\ud6c4 \uaca9\ub9ac\uac00 \ud544\uc694\ud55c \ud14c\uc2a4\ud2b8\ub4e4\uc740 \ub2e4\uc74c\uc758 \ucd94\uc0c1 \ud074\ub798\uc2a4\ub97c \uc0c1\uc18d\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=AcceptanceTest",title:"AcceptanceTest"},"\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\n@TestExecutionListeners(\n        value = DatabaseCleaner.class,\n        mergeMode = TestExecutionListeners.MergeMode.MERGE_WITH_DEFAULTS\n)\npublic abstract class AbcceptanceTest {\n\n    @LocalServerPort\n    private int port;\n\n    @BeforeEach\n    public void setUp() {\n        RestAssured.port = port;\n    }\n}\n\n")),(0,a.kt)("h3",{id:"\ucc38\uace0-\uc790\ub8cc"},"\ucc38\uace0 \uc790\ub8cc"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.baeldung.com/spring-testexecutionlistener"},"The Spring TestExecutionListener, Baeldung"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://tecoble.techcourse.co.kr/post/2020-09-15-test-isolation/"},"\uc778\uc218\ud14c\uc2a4\ud2b8\uc5d0\uc11c \ud14c\uc2a4\ud2b8 \uaca9\ub9ac\ud558\uae30, \ud14c\ucf54\ube14"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/nonDeterminism.html"},"Eradicating Non-Determinism in Tests, martin fowler"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://mangkyu.tistory.com/264"},"@SpringBootTest\uc758 \ud14c\uc2a4\ud2b8 \uaca9\ub9ac\uc2dc\ud0a4\uae30, MangKyu")))}T.isMDXComponent=!0}}]);