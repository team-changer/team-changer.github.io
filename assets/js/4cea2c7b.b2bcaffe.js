"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1734],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(r),p=a,h=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return r?n.createElement(h,c(c({ref:t},s),{},{components:r})):n.createElement(h,c({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var m=2;m<o;m++)c[m]=r[m];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},92503:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(87462),a=r(67294),o=r(86010),c=r(95999),i=r(86668),l=r(39960);const m={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function s(e){let{as:t,id:r,...s}=e;const{navbar:{hideOnScroll:u}}=(0,i.L)();if("h1"===t||!r)return a.createElement(t,(0,n.Z)({},s,{id:void 0}));const d=(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof s.children?s.children:r});return a.createElement(t,(0,n.Z)({},s,{className:(0,o.Z)("anchor",u?m.anchorWithHideOnScrollNavbar:m.anchorWithStickyNavbar,s.className),id:r}),s.children,a.createElement(l.Z,{className:"hash-link",to:`#${r}`,"aria-label":d,title:d},"\u200b"))}},95670:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>v,frontMatter:()=>u,metadata:()=>p,toc:()=>b});var n=r(87462),a=r(67294),o=r(3905),c=r(39960),i=(r(95999),r(92503));function l(e){let{className:t,name:r,children:n,githubUrl:o,twitterUrl:l}=e;return a.createElement("div",{className:t},a.createElement("div",{className:"card card--full-height"},a.createElement("div",{className:"card__header"},a.createElement("div",{className:"avatar avatar--vertical"},a.createElement("img",{className:"avatar__photo avatar__photo--xl",src:`${o}.png`,alt:`${r}'s avatar`}),a.createElement("div",{className:"avatar__intro"},a.createElement(i.Z,{as:"h3",className:"avatar__name"},r)))),a.createElement("div",{className:"card__body"},a.createElement("div",{className:"button-group button-group--block"},o&&a.createElement(c.Z,{className:"button button--outline button--primary",href:o},"GitHub"),l&&a.createElement(c.Z,{className:"button button--secondary",href:l},"Twitter")),n),a.createElement("div",{className:"card__footer"})))}function m(e){return a.createElement(l,(0,n.Z)({},e,{className:"col col--4 margin-bottom--lg"}))}function s(){return a.createElement("div",{className:"row"},a.createElement(m,{name:"\ub9ac\uc624",githubUrl:"https://github.com/Jaeyoung22"}),a.createElement(m,{name:"\ud6c4\ucd94",githubUrl:"https://github.com/Combi153"}),a.createElement(m,{name:"\ud5c8\ube0c",githubUrl:"https://github.com/greeng00se"}),a.createElement(m,{name:"\uc218\ub2ec",githubUrl:"https://github.com/otter66"}),a.createElement(m,{name:"\uba67\ub3fc\uc9c0",githubUrl:"https://github.com/2chang5"}),a.createElement(m,{name:"\ud551\uad6c",githubUrl:"https://github.com/pingu244"}))}const u={title:"\ud300 \uc18c\uac1c",sidebar_position:1,last_update:{date:"2023/07/12",author:"\ud5c8\ube0c"}},d="\ud300 \uc18c\uac1c",p={unversionedId:"common/index",id:"common/index",title:"\ud300 \uc18c\uac1c",description:"",source:"@site/docs/common/index.mdx",sourceDirName:"common",slug:"/common/",permalink:"/docs/common/",draft:!1,editUrl:"https://github.com/trip-draw/trip-draw.github.io/tree/main/docs/common/index.mdx",tags:[],version:"current",lastUpdatedBy:"\ud5c8\ube0c",lastUpdatedAt:168912e4,formattedLastUpdatedAt:"2023\ub144 7\uc6d4 12\uc77c",sidebarPosition:1,frontMatter:{title:"\ud300 \uc18c\uac1c",sidebar_position:1,last_update:{date:"2023/07/12",author:"\ud5c8\ube0c"}},sidebar:"CommonSidebar",next:{title:"\ube0c\ub79c\uce58 \ub8f0 \uc124\uc815",permalink:"/docs/common/github/branch-rule"}},h={},b=[],f={toc:b},g="wrapper";function v(e){let{components:t,...r}=e;return(0,o.kt)(g,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ud300-\uc18c\uac1c"},"\ud300 \uc18c\uac1c"),(0,o.kt)(s,{mdxType:"ActiveTeamRow"}))}v.isMDXComponent=!0}}]);