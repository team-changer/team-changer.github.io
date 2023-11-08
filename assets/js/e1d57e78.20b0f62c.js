"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(n),c=l,g=s["".concat(o,".").concat(c)]||s[c]||u[c]||a;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:l,i[1]=p;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},59126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var r=n(87462),l=(n(67294),n(3905));const a={title:"\ud68c\uc6d0 \uc0ad\uc81c N+1 \ubb38\uc81c @Query\ub85c \ud574\uacb0\ud558\uae30 (feat. \ucee4\ubc84\ub9c1 \uc778\ub371\uc2a4)",slug:"JPA N + 1 Problem",authors:["huchu"],tags:["jpa","problem solving"]},i=void 0,p={permalink:"/JPA N + 1 Problem",editUrl:"https://github.com/trip-draw/trip-draw.github.io/tree/main/blog/2023-11-08-\ud68c\uc6d0 \uc0ad\uc81c N+1 \ubb38\uc81c @Query\ub85c \ud574\uacb0\ud558\uae30 (Feat \ucee4\ubc84\ub9c1 \uc778\ub371\uc2a4).mdx",source:"@site/blog/2023-11-08-\ud68c\uc6d0 \uc0ad\uc81c N+1 \ubb38\uc81c @Query\ub85c \ud574\uacb0\ud558\uae30 (Feat \ucee4\ubc84\ub9c1 \uc778\ub371\uc2a4).mdx",title:"\ud68c\uc6d0 \uc0ad\uc81c N+1 \ubb38\uc81c @Query\ub85c \ud574\uacb0\ud558\uae30 (feat. \ucee4\ubc84\ub9c1 \uc778\ub371\uc2a4)",description:"\ub4e4\uc5b4\uac00\uae30",date:"2023-11-08T00:00:00.000Z",formattedDate:"2023\ub144 11\uc6d4 8\uc77c",tags:[{label:"jpa",permalink:"/tags/jpa"},{label:"problem solving",permalink:"/tags/problem-solving"}],readingTime:8.62,hasTruncateMarker:!1,authors:[{name:"\ud6c4\ucd94",title:"Backend",url:"https://github.com/Combi153",imageURL:"https://github.com/Combi153.png",key:"huchu"}],frontMatter:{title:"\ud68c\uc6d0 \uc0ad\uc81c N+1 \ubb38\uc81c @Query\ub85c \ud574\uacb0\ud558\uae30 (feat. \ucee4\ubc84\ub9c1 \uc778\ub371\uc2a4)",slug:"JPA N + 1 Problem",authors:["huchu"],tags:["jpa","problem solving"]},prevItem:{title:"Local Caching \uc801\uc6a9\ud558\uae30",permalink:"/Local Caching"},nextItem:{title:"Git submodule \ub3c4\uc785\ud558\uae30",permalink:"/git-submodule"}},o={authorsImageUrls:[void 0]},d=[{value:"\ub4e4\uc5b4\uac00\uae30",id:"\ub4e4\uc5b4\uac00\uae30",level:2},{value:"\ubc30\uacbd",id:"\ubc30\uacbd",level:2},{value:"\ucffc\ub9ac",id:"\ucffc\ub9ac",level:2},{value:"\uc2e4\ud5d8 \uacb0\uacfc",id:"\uc2e4\ud5d8-\uacb0\uacfc",level:3},{value:"\uc6d0\uc778 \ud30c\uc545",id:"\uc6d0\uc778-\ud30c\uc545",level:2},{value:"\ud574\uacb0",id:"\ud574\uacb0",level:2},{value:"\uac10\uc0c1 \uc0ad\uc81c",id:"\uac10\uc0c1-\uc0ad\uc81c",level:3},{value:"Trip \uc0ad\uc81c",id:"trip-\uc0ad\uc81c",level:3}],m={toc:d},s="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\ub4e4\uc5b4\uac00\uae30"},"\ub4e4\uc5b4\uac00\uae30"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.teamtripdraw.android"},"\ud2b8\ub9bd\ub4dc\ub85c\uc6b0")," \ud300 \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ud68c\uc6d0 \uc0ad\uc81c API\ub97c \uac1c\ubc1c\ud588\uace0, \ub354\ubbf8 \ub370\uc774\ud130\uac00 \uc874\uc7ac\ud558\ub294 DEV \uc11c\ubc84\uc5d0\uc11c \ud68c\uc6d0 \uc0ad\uc81c API\ub97c \ud14c\uc2a4\ud2b8 \ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://velog.velcdn.com/images/153plane/post/5a1ea83f-5836-4a7f-81ed-06870ffa97b7/image.png",alt:null})),(0,l.kt)("p",null,"\uae5c\uc9dd \ub180\ub784 \uacb0\uacfc\uac00 \ub098\uc654\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"API \uc694\uccad\uc744 \ucc98\ub9ac\ud558\ub294\ub370 \ucd1d 16\ucd08 \uc774\uc0c1\uc774 \uac78\ub838\uace0, \ucffc\ub9ac\uac00 19078\uac1c \uc2e4\ud589 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc5b4\uc9f8\uc11c \uc774\ub7f0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\ub294\uc9c0 \ud30c\uc545\ud558\uace0 \ubb38\uc81c\ub97c \ud574\uacb0\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h1",{id:"\ud68c\uc6d0-\uc0ad\uc81c-n1-\ubb38\uc81c"},"\ud68c\uc6d0 \uc0ad\uc81c N+1 \ubb38\uc81c"),(0,l.kt)("h2",{id:"\ubc30\uacbd"},"\ubc30\uacbd"),(0,l.kt)("p",null,"\ud68c\uc6d0 \uc0ad\uc81c\ub294 \uc11c\ube44\uc2a4\uc5d0\uc11c \ud68c\uc6d0\uc5d0 \uad00\ud55c \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \uc0ad\uc81c\ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc11c\ube44\uc2a4\uc5d0\uc11c \ud68c\uc6d0\uacfc \uad00\ub828\ud55c \ub370\uc774\ud130\ub294 Member, Trip, Post, Point \uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"member_id \ub97c \ud1b5\ud574 \ud68c\uc6d0 \uc0ad\uc81c \uc694\uccad\uc744 \ud558\uba74, Member, Trip, Post, Point\uac00 Hard Delete \ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"DB Schema\ub97c \uadf8\ub824\ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://velog.velcdn.com/images/153plane/post/87252cbe-8041-44e8-9e75-9724b8aaae49/image.png",alt:null})),(0,l.kt)("p",null,"Trip\uacfc Point\ub294 1:N \uad00\uacc4, Point\uc640 Post\ub294 1:1 \uad00\uacc4\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc0ad\uc81c\ud588\ub358 \ud68c\uc6d0\uc740 Trip \uc57d 100\uac1c, Trip \ud558\ub098 \ub2f9 Point \uc57d 100\uac1c, Point \ub9c8\ub2e4 Post \ud558\ub098\uc529\uc744 \uac16\uace0 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub530\ub77c\uc11c \ucffc\ub9ac 19078\uac1c\ub294 \uc0ad\uc81c\ub41c \ub370\uc774\ud130\uc758 \uc218\uc640 \ub3d9\uc77c\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\ub97c \ud1b5\ud574 JPA N+1 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\ub2e4\uace0 \uc720\ucd94\ud558\uace0 \ucffc\ub9ac \ub85c\uadf8\ub97c \uc0b4\ud3b4\ubcf4\uc558\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\ucffc\ub9ac"},"\ucffc\ub9ac"),(0,l.kt)("p",null,"\ucffc\ub9ac \ub85c\uadf8\ub97c \ubcf4\uae30 \uc704\ud574 \uc2e4\ud5d8\uc744 \uc9c4\ud589\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"Trip \uac1c\uc218, Point \uac1c\uc218, Post \uac1c\uc218\ub97c \ub2ec\ub9ac\ud558\uba70, \ud68c\uc6d0\uc744 \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\uc2e4\ud5d8-\uacb0\uacfc"},"\uc2e4\ud5d8 \uacb0\uacfc"),(0,l.kt)("p",null,"\uc2e4\ud5d8 \uacb0\uacfc \ud68c\uc6d0 \uc0ad\uc81c \uc2dc \uc2e4\ud589\ub418\ub294 \ucffc\ub9ac\ub97c \ub2e4\uc74c\uacfc \uac19\uc774 \uad00\ucc30\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select post_id,\n       address,\n       created_at,\n       member_id,\n       point_id,\n       post_image_url,\n       route_image_url,\n       title,\n       trip_id,\n       updated_at,\n       writing\nfrom post\nwhere member_id = ?\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \ud68c\uc6d0 Id\ub85c \uac10\uc0c1\uc744 \uac80\uc0c9\ud588\uc744 \ub54c, \uac10\uc0c1\uc774 \uc5ec\ub7ec \uac1c\ub77c\uba74 \uac10\uc0c1\uc758 \uac1c\uc218\ub9cc\ud07c point\ub97c \uac80\uc0c9\ud569\ub2c8\ub2e4.\nselect point_id,\n       created_at,\n       has_post,\n       latitude,\n       longitude,\n       recorded_at,\n       trip_id,\n       updated_at\nfrom point\nwhere point_id = ?\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select trip_id,\n       created_at,\n       image_url,\n       member_id,\n       name,\n       route_image_url,\n       status,\n       updated_at\nfrom trip\nwhere member_id = ?\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \ud68c\uc6d0 Id\ub85c \uc5ec\ud589\uc744 \uac80\uc0c9\ud588\uc744 \ub54c, \uc5ec\ud589\uc774 \uc5ec\ub7ec \uac1c\ub77c\uba74 \uc5ec\ud589\uc758 \uac1c\uc218\ub9cc\ud07c point\ub97c \uac80\uc0c9\ud569\ub2c8\ub2e4.\nselect trip_id,\n       point_id,\n       created_at,\n       has_post,\n       latitude,\n       longitude,\n       recorded_at,\n       updated_at\nfrom point\nwhere trip_id = ?\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select member_id,\n       created_at,\n       nickname,\n       oauth_id,\n       oauth_type,\n       updated_at\nfrom member\nwhere member_id = ?\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \uc9c0\uc6cc\uc57c \ud560 \uac10\uc0c1\uc758 \uac1c\uc218\ub9cc\ud07c \ucffc\ub9ac\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4.\ndelete\nfrom post\nwhere post_id = ?\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \uc9c0\uc6cc\uc57c \ud560 \uc704\uce58\uc815\ubcf4\uc758 \uac1c\uc218\ub9cc\ud07c \ucffc\ub9ac\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4.\ndelete\nfrom point\nwhere point_id = ?\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \uc9c0\uc6cc\uc57c \ud560 \uc5ec\ud589\uc758 \uac1c\uc218\ub9cc\ud07c \ucffc\ub9ac\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4.\ndelete\nfrom trip\nwhere trip_id = ?\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"delete\nfrom member\nwhere member_id = ?\n")),(0,l.kt)("p",null,"\uc774\ucc98\ub7fc Trip, Point, Post \ub370\uc774\ud130\uc758 \uac1c\uc218\uc5d0 \ub530\ub77c \ucffc\ub9ac\uac00 n \uac1c \uc774\uc0c1 \uc2e4\ud589\ub418\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uace0 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc6d0\uc778-\ud30c\uc545"},"\uc6d0\uc778 \ud30c\uc545"),(0,l.kt)("p",null,"\ubc31\uc5d4\ub4dc\uc5d0\uc11c\ub294 \uac01 \ub370\uc774\ud130\ub97c \uc0ad\uc81c\ud560 \ub54c JPA\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"deleteSomethingById()")," \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/woowacourse-teams/2023-trip-draw/assets/106813090/48855639-1fa8-4d9e-9cd0-60947cb6caa5",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2023-09-23 \u110b\u1169\u1112\u116e 10 19 14"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/woowacourse-teams/2023-trip-draw/assets/106813090/29dc8a4e-24b4-433d-a5ef-242b43fa2fd0",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2023-09-23 \u110b\u1169\u1112\u116e 10 19 53"})),(0,l.kt)("p",null,"\uc774 \uba54\uc11c\ub4dc\ub294 entity\ub97c \uc0ad\uc81c\ud560 \ub54c, \uba3c\uc800 select \ubb38\uc73c\ub85c entity\ub97c \ucc3e\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select post_id,\n       address,\n       created_at,\n       member_id,\n       point_id,\n       post_image_url,\n       route_image_url,\n       title,\n       trip_id,\n       updated_at,\n       writing\nfrom post\nwhere member_id = ?\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \ud68c\uc6d0 Id\ub85c \uac10\uc0c1\uc744 \uac80\uc0c9\ud588\uc744 \ub54c, \uac10\uc0c1\uc774 \uc5ec\ub7ec \uac1c\ub77c\uba74 \uac10\uc0c1\uc758 \uac1c\uc218\ub9cc\ud07c point\ub97c \uac80\uc0c9\ud569\ub2c8\ub2e4.\nselect point_id,\n       created_at,\n       has_post,\n       latitude,\n       longitude,\n       recorded_at,\n       trip_id,\n       updated_at\nfrom point\nwhere point_id = ?\n")),(0,l.kt)("p",null,"\uadf8\ud6c4 entity\uc758 id\ub97c \uc870\uac74\uc73c\ub85c delete \ubb38\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \uc9c0\uc6cc\uc57c \ud560 \uac10\uc0c1\uc758 \uac1c\uc218\ub9cc\ud07c \ucffc\ub9ac\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4.\ndelete\nfrom post\nwhere post_id = ?\n")),(0,l.kt)("p",null,"\ub530\ub77c\uc11c \ud68c\uc6d0\uc774 \uc5ec\ub7ec Post\ub97c \uac16\ub294 \uacbd\uc6b0 Post\uc758 \uac1c\uc218\ub9cc\ud07c \uad00\ub828\ub41c select \ubb38\uc744 \uc2e4\ud589\ud558\uac70\ub098 delete \ubb38\uc744 \uc2e4\ud589\ud558\ub294 \uc0c1\ud669\uc774 \ubc1c\uc0dd\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\ud574\uacb0"},"\ud574\uacb0"),(0,l.kt)("h3",{id:"\uac10\uc0c1-\uc0ad\uc81c"},"\uac10\uc0c1 \uc0ad\uc81c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public interface PostRepository extends JpaRepository<Post, Long> {\n\n    //(...)\n    @Modifying\n    @Query("DELETE FROM Post p WHERE p.member.id = :memberId")\n    void deleteByMemberId(@Param(value = "memberId") Long memberId);\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@Query")," \uc560\ub178\ud14c\uc774\uc158\uc744 \ud1b5\ud574 JPQL\ub85c delete \ubb38\uc744 \uc791\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"WHERE \uc870\uac74\uc808\ub85c memberId \uc5d0 \ud574\ub2f9\ud558\ub294 \ubaa8\ub4e0 Post\ub97c \uc9c0\uc6b0\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc704\uc640 \uac19\uc774 JPQL\uc744 \uc791\uc131\ud568\uc73c\ub85c\uc368 \ud558\ub098\uc758 \ucffc\ub9ac\ub85c \ubaa8\ub4e0 Post\uac00 \uc9c0\uc6cc\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"trip-\uc0ad\uc81c"},"Trip \uc0ad\uc81c"),(0,l.kt)("p",null,"Trip \uc0ad\uc81c\ub294 \ub2e4\uc18c \ubcf5\uc7a1\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"Trip\uc744 \uc0ad\uc81c\ud558\uae30 \uc704\ud574\uc11c\ub294 Trip\uc5d0 \ud3ec\ud568\ub41c \ubaa8\ub4e0 Point\ub97c \uc6b0\uc120 \uc0ad\uc81c\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"Point \ud14c\uc774\ube14\uc774 trip_id\ub97c \uc678\ub798\ud0a4\ub85c \uac16\uace0 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://velog.velcdn.com/images/153plane/post/87252cbe-8041-44e8-9e75-9724b8aaae49/image.png",alt:null})),(0,l.kt)("p",null,"\uc678\ub798\ud0a4 \uc81c\uc57d\uc870\uac74\uc744 \ub9cc\uc871\ud558\uba74\uc11c \uc0ad\uc81c\ub97c \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub530\ub77c\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \uacfc\uc815\uc744 \ubc1f\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Trip table\uc5d0\uc11c \ud68c\uc6d0 Id\ub85c ",(0,l.kt)("inlineCode",{parentName:"li"},"\uc0ad\uc81c\ud560 \uc5ec\ud589 Id\uc758 \ubaa9\ub85d"),"\uc744 \uc870\ud68c\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Point table\uc5d0\uc11c IN() \ubb38\ubc95\uc73c\ub85c trip_id\uac00 ",(0,l.kt)("inlineCode",{parentName:"li"},"\uc0ad\uc81c\ud560 \uc5ec\ud589 Id \ubaa9\ub85d"),"\uc5d0 \ud3ec\ud568\ub418\uba74 \uc0ad\uc81c\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Trip table\uc5d0\uc11c \ud68c\uc6d0 Id\ub85c \uc5ec\ud589\uc744 \uc0ad\uc81c\ud569\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@RequiredArgsConstructor\n@Component\npublic class TripDeleteEventHandler {\n\n    private final TripRepository tripRepository;\n    private final PointRepository pointRepository;\n\n    @EventListener\n    public void deletePostByMemberId(MemberDeleteEvent event) {\n        // \ud68c\uc6d0 Id\ub85c \uc0ad\uc81c\ud560 Trip Id\uc758 \ubaa9\ub85d \uc870\ud68c\n        List<Long> tripIds = tripRepository.findAllTripIdsByMemberId(event.memberId());\n        // IN() \ubb38\ubc95\uc73c\ub85c trip_id\uac00 \uc0ad\uc81c\ud560 tripIds \uc5d0 \ud3ec\ud568\ub418\uba74 \uc0ad\uc81c\n        pointRepository.deleteByTripIds(tripIds);\n        // \ud68c\uc6d0 Id\ub85c Trip \uc0ad\uc81c\n        tripRepository.deleteByMemberId(event.memberId());\n    }\n}\n")),(0,l.kt)("p",null,"Point\ub97c \uc0ad\uc81c\ud558\uae30 \uc704\ud574 Trip \uc744 \uc9c1\uc811 \uc870\ud68c\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud558\uc9c0\ub9cc TripId\uc758 \ubaa9\ub85d\uc744 \uc870\ud68c\ud55c \ud6c4, \uc774 TripId\ub97c \ud1b5\ud574 Point\ub97c \uc9c0\uc6b0\ub294 \uac83\uc73c\ub85c \uacb0\uc815\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public interface TripRepository extends JpaRepository<Trip, Long> {\n\n    // (...)\n\n    List<Trip> findAllByMemberId(Long memberId);\n\n    @Query("SELECT t.id FROM Trip t WHERE t.member.id = :memberId")\n    List<Long> findAllTripIdsByMemberId(@Param(value = "memberId") Long memberId);\n\n    @Modifying\n    @Query("DELETE FROM Trip t WHERE t.member.id = :memberId")\n    void deleteByMemberId(@Param(value = "memberId")\n}\n')),(0,l.kt)("p",null,"\uad6c\uccb4\uc801\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"@Query"),"\ub97c \uc124\uc815\ud55c findAllTripIdsByMemberId \uba54\uc11c\ub4dc\ub97c \ud65c\uc6a9\ud574 TripId\uc758 \ubaa9\ub85d\uc744 \uc870\ud68c\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"findAllByMemberId \ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"List<Trip>"),"\uc744 \uc870\ud68c\ud560 \uc218\ub3c4 \uc788\uc9c0\ub9cc \uc774\ub7ec\ud55c \ubc29\ubc95\uc744 \ud0dd\ud55c \uac83\uc740 TripId \ub9cc \uc870\ud68c\ud558\ub294 \uac83\uc774 \ud2b9\ubcc4\ud788 \ub354 \ube60\ub974\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"Trip table\uc5d0\uc11c member_id \ub294 FK\uc774\uace0, trip_id \ub294 PK \uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc989, \ub450 \uceec\ub7fc \ubaa8\ub450 index\ub85c \uc124\uc815\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub530\ub77c\uc11c member_id \ub85c trip_id\ub97c \uc870\ud68c\ud558\ub294 \uac83\uc740 ",(0,l.kt)("strong",{parentName:"p"},"\ucee4\ubc84\ub9c1 \uc778\ub371\uc2a4"),"\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ucee4\ubc84\ub9c1 \uc778\ub371\uc2a4\ub294 \ud14c\uc774\ube14\uc744 \uc77d\ub294 \uacfc\uc815\uc774 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \uc18d\ub3c4\uac00 \ube60\ub985\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/woowacourse-teams/2023-trip-draw/assets/106813090/b50b7f17-bcb0-4f09-a30e-e3579718092c",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2023-09-23 \u110b\u1169\u1112\u116e 10 41 42"})),(0,l.kt)("p",null,"\uc774\ud6c4 Point \uc0ad\uc81c, Trip \uc0ad\uc81c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"@Query")," \ub97c \ud65c\uc6a9\ud569\ub2c8\ub2e4. \ud558\ub098\uc758 \ucffc\ub9ac\ub85c \ubaa8\ub4e0 Point, Trip \uc774 \uc9c0\uc6cc\uc9c8 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public interface PointRepository extends JpaRepository<Point, Long> {\n\n    @Modifying\n    @Query("DELETE FROM Point p WHERE p.trip.id IN :tripIds")\n    void deleteByTripIds(@Param(value = "tripIds") List<Long> tripIds);\n}\n')),(0,l.kt)("p",null,"\ub9ac\ud329\ud130\ub9c1 \uc774\ud6c4 \ub354 \uc774\uc0c1 N + 1 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294 \uac83\uc744 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://velog.velcdn.com/images/153plane/post/1b65a7cd-7c4e-4193-add3-9af02e2b8520/image.png",alt:null})),(0,l.kt)("p",null,"\ud68c\uc6d0\uc744 \uc0ad\uc81c\ud560 \ub54c \uc774\uc81c \ub370\uc774\ud130\uc758 \uc218\uc640 \uad00\uacc4\uc5c6\uc774 7\uac1c\uc758 \ucffc\ub9ac\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub610\ud55c \uc0ad\uc81c \uc694\uccad \ucc98\ub9ac \uc2dc\uac04\ub3c4 299ms \ub85c \ub9e4\uc6b0 \ub2e8\ucd95\ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n(\ub2e8, \uc0ad\uc81c \uc694\uccad \ucc98\ub9ac \uc2dc\uac04\uc740 \ub370\uc774\ud130\uc758 \uac1c\uc218\uc5d0 \ub530\ub77c \ucc28\uc774\uac00 \ub0a0 \uc218 \uc788\uc2b5\ub2c8\ub2e4.)"))}u.isMDXComponent=!0}}]);