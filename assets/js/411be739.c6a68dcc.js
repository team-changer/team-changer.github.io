"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9391],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||l;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={title:"Gradle",last_update:{date:"2023/07/06",author:"\uba67\ub3fc\uc9c0"},slug:"Gradle",tags:["Android","Trip-Draw","StyleGuide","Gradle","Convention","\uc6b0\uc544\ud55c\ud14c\ud06c\ucf54\uc2a4","\uc6b0\ud14c\ucf54","\uba67\ub3fc\uc9d5","\ud551\uad6c","\uc218\ub2ec"]},o="Gradle",i={unversionedId:"android/gradle",id:"android/gradle",title:"Gradle",description:"Dependencies",source:"@site/docs/android/gradle.mdx",sourceDirName:"android",slug:"/android/Gradle",permalink:"/docs/android/Gradle",draft:!1,editUrl:"https://github.com/trip-draw/trip-draw.github.io/tree/main/docs/android/gradle.mdx",tags:[{label:"Android",permalink:"/docs/tags/android"},{label:"Trip-Draw",permalink:"/docs/tags/trip-draw"},{label:"StyleGuide",permalink:"/docs/tags/style-guide"},{label:"Gradle",permalink:"/docs/tags/gradle"},{label:"Convention",permalink:"/docs/tags/convention"},{label:"\uc6b0\uc544\ud55c\ud14c\ud06c\ucf54\uc2a4",permalink:"/docs/tags/\uc6b0\uc544\ud55c\ud14c\ud06c\ucf54\uc2a4"},{label:"\uc6b0\ud14c\ucf54",permalink:"/docs/tags/\uc6b0\ud14c\ucf54"},{label:"\uba67\ub3fc\uc9d5",permalink:"/docs/tags/\uba67\ub3fc\uc9d5"},{label:"\ud551\uad6c",permalink:"/docs/tags/\ud551\uad6c"},{label:"\uc218\ub2ec",permalink:"/docs/tags/\uc218\ub2ec"}],version:"current",lastUpdatedBy:"\uba67\ub3fc\uc9c0",lastUpdatedAt:1688601600,formattedLastUpdatedAt:"2023\ub144 7\uc6d4 6\uc77c",frontMatter:{title:"Gradle",last_update:{date:"2023/07/06",author:"\uba67\ub3fc\uc9c0"},slug:"Gradle",tags:["Android","Trip-Draw","StyleGuide","Gradle","Convention","\uc6b0\uc544\ud55c\ud14c\ud06c\ucf54\uc2a4","\uc6b0\ud14c\ucf54","\uba67\ub3fc\uc9d5","\ud551\uad6c","\uc218\ub2ec"]},sidebar:"AndroidSidebar",previous:{title:"Architecture",permalink:"/docs/android/Architecture"},next:{title:"IDE",permalink:"/docs/android/IDE"}},d={},p=[{value:"Dependencies",id:"dependencies",level:2},{value:"version catalogs",id:"version-catalogs",level:2}],s={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gradle"},"Gradle"),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ucd94\uac00\ud560\ub54c \uaf2d \uc678\ubd80 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ub77c\uc774\uc13c\uc2a4 \uace0\uc9c0\ub97c \ucd94\uac00\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ubc84\uc804\uc740 +\ub85c \uc801\uc9c0 \uc54a\uace0 \uba85\uc2dc\ud55c\ub2e4.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"implementation 'gun0912.ted:tedpermission-rx2:2.2.0' <- O\n//implementation 'gun0912.ted:tedpermission-rx2:2.+' <- X\n")),(0,a.kt)("h2",{id:"version-catalogs"},"version catalogs"),(0,a.kt)("p",null,"[\uc548\ub4dc\ub85c\uc774\ub4dc \uacf5\uc2dd\ubb38\uc11c]"," ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/build/migrate-to-catalogs?hl=ko"},"https://developer.android.com/studio/build/migrate-to-catalogs?hl=ko")),(0,a.kt)("p",null,"gradle \ubc84\uc804 7.0\ubd80\ud130 \uc0ac\uc6a9\uac00\ub2a5\ud558\uba70 7.4\ubc84\uc804 \ubd80\ud130 stable\ud574\uc84c\ub2e4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"version catalogs \ub294 \uc548\ub4dc\ub85c\uc774\ub4dc\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 version \uad00\ub9ac tool\ub85c\uc368 \ubaa8\ub4c8 \uc138\ubd80\uc801\uc73c\ub85c \ub098\ub204\ub294\uacbd\uc6b0 \ud3b8\ub9ac\ud558\uac8c \uc774\uc6a9\ud560\uc218\uc788\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"version catalogs \uc774\uc804\uc758 \ubc84\uc804\uad00\ub9ac \ubc29\ubc95\ub4e4(ex: project grade \uc5d0\uc11c\uc758 ext \uc124\uc815, BuildSrc\ubaa8\ub4c8) \uc5d0 \ube44\ud574 \uc790\ub3d9\uc644\uc131 \ud639\uc740 \ubc88\ub4e4\uae30\ub2a5\uc744 \uc81c\uacf5\ud558\uc5ec \ud3b8\ub9ac\ud558\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc5ec\ub7ec \ubaa8\ub4c8\uc758 \ubc84\uc804\uc744 \uc77c\uc815\ud558\uac8c \ub3d9\uae30\ud654 \uc2dc\ud0ac\uc218 \uc788\ub2e4."))))}u.isMDXComponent=!0}}]);