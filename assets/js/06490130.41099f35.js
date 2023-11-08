"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8518],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=o.createContext({}),p=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},w=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),w=l,m=s["".concat(d,".").concat(w)]||s[w]||u[w]||r;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=w;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}w.displayName="MDXCreateElement"},49435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(87462),l=(n(67294),n(3905));const r={title:"Android ViewModel \uc0dd\uc131 \uacfc\uc815",slug:"viewmodel-creation-process",authors:["pingu"],tags:["android","viewmodel"]},a=void 0,i={permalink:"/viewmodel-creation-process",editUrl:"https://github.com/trip-draw/trip-draw.github.io/tree/main/blog/2023-10-04-Android ViewModel \uc0dd\uc131 \uacfc\uc815/2023-10-04-Android ViewModel \uc0dd\uc131 \uacfc\uc815.md",source:"@site/blog/2023-10-04-Android ViewModel \uc0dd\uc131 \uacfc\uc815/2023-10-04-Android ViewModel \uc0dd\uc131 \uacfc\uc815.md",title:"Android ViewModel \uc0dd\uc131 \uacfc\uc815",description:"\uc548\ub155\ud558\uc138\uc694. \ud2b8\ub9bd\ub4dc\ub85c\uc6b0\uc758 \ud551\uad6c\uc785\ub2c8\ub2e4.",date:"2023-10-04T00:00:00.000Z",formattedDate:"2023\ub144 10\uc6d4 4\uc77c",tags:[{label:"android",permalink:"/tags/android"},{label:"viewmodel",permalink:"/tags/viewmodel"}],readingTime:8.07,hasTruncateMarker:!1,authors:[{name:"\ud551\uad6c",title:"Android",url:"https://github.com/pingu244",imageURL:"https://github.com/pingu244.png",key:"pingu"}],frontMatter:{title:"Android ViewModel \uc0dd\uc131 \uacfc\uc815",slug:"viewmodel-creation-process",authors:["pingu"],tags:["android","viewmodel"]},prevItem:{title:"\ubb34\uc911\ub2e8 \ubc30\ud3ec \uacfc\uc815",permalink:"/nonstop-deploy"},nextItem:{title:"\uc2a4\ud504\ub9c1 \ud14c\uc2a4\ud2b8 \uaca9\ub9ac",permalink:"/spring-test-isolation"}},d={authorsImageUrls:[void 0]},p=[{value:"ViewModel\uc774\ub780?",id:"viewmodel\uc774\ub780",level:2},{value:"ViewModel\uc758 \uc774\uc810",id:"viewmodel\uc758-\uc774\uc810",level:2},{value:"\uc815\ub9ac\ub97c \ud574\ubd05\uc2dc\ub2e4",id:"\uc815\ub9ac\ub97c-\ud574\ubd05\uc2dc\ub2e4",level:3},{value:"\ucc38\uace0\uc790\ub8cc",id:"\ucc38\uace0\uc790\ub8cc",level:2}],c={toc:p},s="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(s,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\uc548\ub155\ud558\uc138\uc694. \ud2b8\ub9bd\ub4dc\ub85c\uc6b0\uc758 \ud551\uad6c\uc785\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc800\ub294 \uc774\ubc88 \ud504\ub85c\uc81d\ud2b8\ub97c \ud558\uba74\uc11c \ucc98\uc74c\uc73c\ub85c MVVM\uc744 \uc811\ud558\uac8c \ub418\uc5c8\ub294\ub370\uc694, \uc774\ubc88 \uae00\uc5d0\uc11c\ub294 ViewModel\uc758 \uc0dd\uc131 \uacfc\uc815\uc5d0 \ub300\ud574 \ub9d0\uc500\ub4dc\ub9ac\ub824\uace0 \ud569\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ub3c4\ub300\uccb4 \uc598\ub294 \ubb50\ud558\ub294 \uc544\uc774\uc774\uace0 \uc5b4\ub5bb\uac8c \ub9cc\ub4e4\uc5b4\uc9c0\ub294 \uac78\uae4c\uc694?"),(0,l.kt)("h2",{id:"viewmodel\uc774\ub780"},"ViewModel\uc774\ub780?"),(0,l.kt)("p",null,"ViewModel\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694? \uacf5\uc2dd \ubb38\uc11c\uc5d0\ub294 \uc774\ub807\uac8c \ub098\uc640\uc788\uc2b5\ub2c8\ub2e4. "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"ViewModel \ud074\ub798\uc2a4\ub294 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1 \ub610\ub294 \ud654\uba74 \uc218\uc900 \uc0c1\ud0dc \ud640\ub354\uc785\ub2c8\ub2e4. UI\uc5d0 \uc0c1\ud0dc\ub97c \ub178\ucd9c\ud558\uace0 \uad00\ub828 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \ucea1\uc290\ud654\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc0ac\uc6a9\uc790 \uc774\ubca4\ud2b8\ub97c \ucc98\ub9ac\ud558\uc5ec \ub370\uc774\ud130, \ub3c4\uba54\uc778 \uce21\uc5d0\uc11c \ud654\uba74 UI\ub85c \ub370\uc774\ud130\ub97c \ubcc0\ud658\ud574\uc8fc\ub294 \uc5ed\ud560 \ub610\ub294 \ud654\uba74\uc5d0 \ud45c\uc2dc\ud574\uc57c\ud558\ub294 \ud56d\ubaa9\uc744 \ub4e4\uace0 \uc788\uc5b4\uc8fc\ub294 (holder) \uc5ed\ud560\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"./blog_udf.png",src:n(39585).Z,width:"824",height:"579"})),(0,l.kt)("p",null,"\uacf5\uc2dd\ubb38\uc11c\uc5d0\uc11c\ub294 \uc704\uc640 \uac19\uc740 \ub2e8\ubc29\ud5a5 \ub370\uc774\ud130 \ud750\ub984(UDF)\ub97c \uad8c\uc7a5\ud569\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ubcf4\uc774\ub294 \uac83\uacfc \uac19\uc774 UI \uc694\uc18c\uc5d0\uc11c \uc774\ubca4\ud2b8\ub97c ViewModel\ub85c \ubcf4\ub0b4\uba74 ViewModel \uce21\uc5d0\uc11c \uc774\ub97c \ucc98\ub9ac\ud558\uba70 \ub370\uc774\ud130\uc640 \ub3c4\uba54\uc778 \uacc4\uce35\uc5d0\uc11c \ub370\uc774\ud130\ub97c \ubc1b\uace0 \uc774\ub97c \ub2e4\uc2dc \ud654\uba74\uc5d0 \ub744\uc6cc\uc8fc\uac8c \ub429\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ub610\ud55c ViewModel\uc740 UI \uc0c1\ud0dc(UI State)\uc5d0 \ub300\ud55c \uc815\ubcf4\ub3c4 \ub4e4\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\ub807\uac8c ViewModel\uc740 ",(0,l.kt)("strong",{parentName:"p"},"UI \uad00\ub828 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uace0 \uad00\ub9ac\ud574\uc8fc\ub294 \uc5ed\ud560"),"\uc744 \ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"viewmodel\uc758-\uc774\uc810"},"ViewModel\uc758 \uc774\uc810"),(0,l.kt)("p",null,"ViewModel\uc758 \uac00\uc7a5 \ud070 \uc7a5\uc810\uc740 \uad6c\uc131 \ubcc0\uacbd\uc5d0\ub3c4 UI \uc0c1\ud0dc\ub97c \uc720\uc9c0\ud55c\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uae00\uaf34 \ud06c\uae30, \uc5b8\uc5b4, \ud14c\ub9c8 \ubcc0\uacbd, \ud654\uba74 \ubc29\ud5a5 \ub4f1 \uae30\uae30 \uc124\uc815\uc744 \ubcc0\uacbd\ud558\ub294 \uac83\uc744 \uad6c\uc131 \ubcc0\uacbd\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc774\ub807\uac8c \uad6c\uc131 \ubcc0\uacbd\uc774 \ubc1c\uc0dd\ud558\uac8c \ub418\uba74 Activity\ub294 \uc5c6\uc5b4\uc84c\ub2e4\uac00 \ub2e4\uc2dc \ub9cc\ub4e4\uc5b4\uc9c0\uac8c \ub429\ub2c8\ub2e4.\n\uadf8\ub807\uac8c \ub41c\ub2e4\uba74 \ud654\uba74\uc5d0 \uc788\ub358 \uac12\uc774 \ub2e4 \ub0a0\ub77c\uac00\uac8c \ub418\uaca0\uc8e0? "),(0,l.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc22b\uc790\uac00 \uc62c\ub77c\uac00\ub294 Activity\uac00 \uc788\ub2e4\uace0 \ud588\uc744 \ub54c,",(0,l.kt)("br",{parentName:"p"}),"\n","\ubc84\ud2bc\uc744 10\ubc88 \ub20c\ub7ec \ud654\uba74\uc758 \uc22b\uc790\ub97c 10\uc73c\ub85c \ub9cc\ub4e4\uace0 \ud654\uba74 \ud68c\uc804\uc744 \ud55c\ub2e4\uba74 \ud654\uba74\uc758 \uc22b\uc790\ub294 \ub2e4\uc2dc 0\uc774 \ub418\uc5b4 \uc788\uc744 \uac83 \uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\ub7ec\ud55c \ubb38\uc81c\uc810\uc740 ViewModel\uc744 \uc0ac\uc6a9\ud558\uac8c \ub418\uba74 \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4!"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"./blog_viewmodel_lifecycle.png",src:n(48713).Z,width:"522",height:"543"})),(0,l.kt)("p",null,"\uc704\uc758 \uadf8\ub9bc\uc740 ViewModel\uc758 \uc0dd\uba85\uc8fc\uae30\ub97c \uc798 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","Activity\uac00 \ucd5c\ucd08\ub85c \uc0dd\uc131\ub420 \ub54c ViewModel\uc774 \uc0dd\uc131\ub418\uac8c \ub418\uace0 \uad6c\uc131\ubcc0\uacbd\uc73c\ub85c \uc778\ud574 Activity\uac00 \ub2e4\uc2dc \uc2dc\uc791\ud558\ub354\ub77c\ub3c4 ViewModel\uc740 \uacc4\uc18d \uba54\ubaa8\ub9ac\uc5d0 \ub0a8\uc544\uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h1",{id:"viewmodel-\uc0dd\uc131-\uacfc\uc815"},"ViewModel \uc0dd\uc131 \uacfc\uc815"),(0,l.kt)("p",null,"\uadf8\ub807\ub2e4\uba74 \uc774\ub7f0 ViewModel\uc740 \uc5b4\ub5a4 \uc21c\uc11c\ub85c \ub9cc\ub4e4\uc5b4\uc9c0\ub294 \uac78\uae4c\uc694?"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"./blog_viewmodel_creation_process.png",src:n(19245).Z,width:"531",height:"506"})),(0,l.kt)("p",null,"ViewModel\uc740 \uc704\uc640 \uac19\uc740 \uacfc\uc815\uc744 \uac70\uccd0 \ub9cc\ub4e4\uc5b4\uc9d1\ub2c8\ub2e4. \ucf54\ub4dc\ub97c \ub72f\uc5b4 \ubcf4\uba70 \uc774\ud574\ud574\ubd05\uc2dc\ub2e4."),(0,l.kt)("p",null,"\uba3c\uc800 Activity\uc5d0\uc11c ViewModel\uc744 \uc694\uccad\ud558\uba70 ViewModelProvider\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"private val viewModel: MainViewModel by lazy {\n    ViewModelProvider(this)[MainViewModel::class.java]\n}\n")),(0,l.kt)("p",null,"\uc5ec\uae30\uc11c ViewModelProvider\ub294 \uc0dd\uc131\ub418\uba74\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"ViewModelStoreOwner"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"Factory"),"(optional)\uc744 \uc694\uad6c\ud569\ub2c8\ub2e4. Factory\ub97c \uc8fc\uc9c0\uc54a\uc73c\uba74 DefaultFactory\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc7a0\uae50! \uc5ec\uae30\uc11c \uc65c ViewModelStoreOwner\uc790\ub9ac\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"this"),"(\uc5ec\uae30\uc11c\ub294 Activity)\ub97c \ub118\uae30\uac8c \ub418\ub294\uac78\uae4c\uc694?\nViewModelStoreOwner \ub294 \ub9d0\uadf8\ub300\ub85c ViewModelStore\ub97c \uac00\uc9c0\uace0 \uc788\ub294 \uc778\ud130\ud398\uc774\uc2a4\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public interface ViewModelStoreOwner {\n    /**\n     * Returns owned {@link ViewModelStore}\n     *\n     * @return a {@code ViewModelStore}\n     */\n    @NonNull\n    ViewModelStore getViewModelStore();\n}\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/androidx/activity/ComponentActivity"},"ComponentActivity"),",\xa0",(0,l.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/androidx/fragment/app/Fragment"},"Fragment"),",\xa0",(0,l.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/androidx/navigation/NavBackStackEntry"},"NavBackStackEntry")," \uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"ViewModelStoreOwner"),"\ub97c \uad6c\ud604\ud558\uace0 \uc788\uc5b4\uc694. \uadf8\ub9ac\uace0 ",(0,l.kt)("inlineCode",{parentName:"p"},"ViewModelStoreOwner"),"\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"ViewModelStore"),"\ub97c \uc8fc\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"getViewModelStore()"),"\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@NonNull\n@Override\npublic ViewModelStore getViewModelStore() {\n    if (getApplication() == null) {\n        throw new IllegalStateException("Your activity is not yet attached to the "\n                + "Application instance. You can\'t request ViewModel before onCreate call.");\n        }\n    ensureViewModelStore();\n    return mViewModelStore;\n}\n\n@SuppressWarnings("WeakerAccess") /* synthetic access */\nvoid ensureViewModelStore() {\n    if (mViewModelStore == null) {\n        NonConfigurationInstances nc =\n                (NonConfigurationInstances) getLastNonConfigurationInstance();\n        if (nc != null) {\n            // Restore the ViewModelStore from NonConfigurationInstances\n            mViewModelStore = nc.viewModelStore;\n        }\n        if (mViewModelStore == null) {\n            mViewModelStore = new ViewModelStore();\n        }\n    }\n}\n')),(0,l.kt)("p",null,"ComponentActivity\uc5d0\uc11c\uc758 getviewModelStroe()\uc785\ub2c8\ub2e4.\nNonConfigurationInstances \ub294 \uad6c\uc131\ubcc0\uacbd \uc2dc\uc5d0\ub3c4 \ud654\uba74\uc758 \uc774\uc804 \uc0c1\ud0dc\ub97c \uc720\uc9c0\ud558\uace0 \ub370\uc774\ud130\ub97c \ubcf4\uc874\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ud074\ub798\uc2a4 \uc785\ub2c8\ub2e4.\n\uc9c0\ub09c\ubc88\uc5d0 \uc800\uc7a5\ud574\ub193\uc558\ub358 \uac83\ub4e4\uc744 \uaebc\ub0b4\uc624\uac70\ub098 \uc544\ub2c8\uba74 \uc0c8\ub85c \ub9cc\ub4e4\uc5b4 \ubc18\ud658\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub2e4\uc2dc \ub3cc\uc544\uc640\uc11c, ViewModelProvider\uc5d0\uc11c get()\uc744 \ud638\ucd9c\ud558\uc5ec ViewModel\uc744 \uc0dd\uc131\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@MainThread\npublic open operator fun <T : ViewModel> get(modelClass: Class<T>): T {\n    val canonicalName = modelClass.canonicalName\n        ?: throw IllegalArgumentException("Local and anonymous classes can not be ViewModels")\n    return get("$DEFAULT_KEY:$canonicalName", modelClass)\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Suppress("UNCHECKED_CAST")\n@MainThread\npublic open operator fun <T : ViewModel> get(key: String, modelClass: Class<T>): T {\n    val viewModel = store[key]\n    if (modelClass.isInstance(viewModel)) {\n        (factory as? OnRequeryFactory)?.onRequery(viewModel)\n        return viewModel as T\n    } else {\n        @Suppress("ControlFlowWithEmptyBody")\n        if (viewModel != null) {\n            // TODO: log a warning.\n        }\n    }\n    val extras = MutableCreationExtras(defaultCreationExtras)\n    extras[VIEW_MODEL_KEY] = key\n    // AGP has some desugaring issues associated with compileOnly dependencies so we need to\n    // fall back to the other create method to keep from crashing.\n    return try {\n        factory.create(modelClass, extras)\n    } catch (e: AbstractMethodError) {\n        factory.create(modelClass)\n    }.also { store.put(key, it) }\n}\n')),(0,l.kt)("p",null,"\ubc14\ub85c \uc774 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"get\uc73c\ub85c ViewModel\uc744 \uc694\uccad\ud588\uc744 \ub54c ViewModelStore\uc5d0 \uc788\uc73c\uba74 \uaebc\ub0b4\uc624\uace0 \uc5c6\ub2e4\uba74 factory\ub85c \uc0c8\ub85c \ub9cc\ub4e4\uc5b4\uc8fc\uac8c \ub429\ub2c8\ub2e4. "),(0,l.kt)("p",null,"\uadf8\ub807\ub2e4\uba74 ViewModelStore\ub294 \ubb34\uc5c7\uc77c\uae4c\uc694?"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class ViewModelStore {\n\n    private final HashMap<String, ViewModel> mMap = new HashMap<>();\n\n    final void put(String key, ViewModel viewModel) {\n        ViewModel oldViewModel = mMap.put(key, viewModel);\n        if (oldViewModel != null) {\n            oldViewModel.onCleared();\n        }\n    }\n\n    final ViewModel get(String key) {\n        return mMap.get(key);\n    }\n\n    Set<String> keys() {\n        return new HashSet<>(mMap.keySet());\n    }\n\n    /**\n     *  Clears internal storage and notifies ViewModels that they are no longer used.\n     */\n    public final void clear() {\n        for (ViewModel vm : mMap.values()) {\n            vm.clear();\n        }\n        mMap.clear();\n    }\n}\n")),(0,l.kt)("p",null,"\uc774\ub984\ucc98\ub7fc ViewModel\ub4e4\uc744 \uc800\uc7a5\ud558\ub294 \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4. "),(0,l.kt)("p",null,"key \uac12\uc5d0 \ud328\ud0a4\uc9c0 \uc774\ub984\uacfc \ud074\ub798\uc2a4 \uc774\ub984\uc774 \ud569\uccd0\uc9c4 \ud615\ud0dc(canonicalName)\uac00 \ub4e4\uc5b4\uac00\uace0 value \uac12\uc5d0\ub294 viewModel\uc774 \ub4e4\uc5b4\uac00\uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uad6c\uc131\ubcc0\uacbd\uc73c\ub85c ViewModelStore\uc758 Owner\uac00 destroy\ub418\uc5c8\ub2e4\uac00 \ub2e4\uc2dc \uc0dd\uc131\ub418\uc5b4\ub3c4 Owner\ub294 \uc774\uc804\uc758 ViewModelStore\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. destroy\ub418\uc5c8\ub2e4\uac00 \ub2e4\uc2dc \uc0dd\uc131\ub418\uc9c0 \uc54a\ub294\ub2e4\uba74 clear()\ub97c \ud638\ucd9c\ud574 \uc90d\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\uc815\ub9ac\ub97c-\ud574\ubd05\uc2dc\ub2e4"},"\uc815\ub9ac\ub97c \ud574\ubd05\uc2dc\ub2e4"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"ViewModelProvider\ub97c \uc0dd\uc131\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"ViewModelProvider\uc740 ViewModelStoreOwner\ub97c \ucc38\uc870\ud558\uace0 \uc5ec\uae30\uc11c ViewModelStore\ub97c \uc694\uccad\ud55c\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ViewModelStore\uac00 \uc788\ub2e4\uba74 \uc8fc\uace0 \uc5c6\ub2e4\uba74 \ub9cc\ub4e4\uc5b4\ub0b8\ub2e4."))),(0,l.kt)("li",{parentName:"ol"},"ViewModelStore\uac00 \uc694\uccad\ud558\ub294 ViewModel\uc744 \uac00\uc838\uc628\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc5c6\uc73c\uba74 Factory\ub85c \uc0c8\ub85c \ub9cc\ub4e4\uc5b4\ub0b4\uba70 ViewModelStore\uc5d0 \uc800\uc7a5\ud55c\ub2e4.")))),(0,l.kt)("p",null,"\ud558\ub098\ud558\ub098 \ucf54\ub4dc\ub85c \ubcf4\ub2c8 \ubcf5\uc7a1\ud574 \ubcf4\uc77c \uc218\ub3c4 \uc788\uc9c0\ub9cc \uc694\uc57d\ud558\uc790\uba74 \uc704\uc640 \uac19\uc774 \uac04\ub2e8\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uad81\uae08\ud558\ub2e4\uba74 \uc9c1\uc811 \ucf54\ub4dc\ub85c \ud655\uc778\ud574\ubcf4\ub294 \uac83\uc744 \ucd94\ucc9c\ub4dc\ub9bd\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\ucc38\uace0\uc790\ub8cc"},"\ucc38\uace0\uc790\ub8cc"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.android.com/topic/libraries/architecture/viewmodel?hl=ko"},"ViewModel \uac1c\uc694 \xa0|\xa0 Android \uac1c\ubc1c\uc790 \xa0|\xa0 Android Developers")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.charlezz.com/?p=44167"},"ViewModel\uc774\ub780 \ubb34\uc5c7\uc778\uac00? ViewModel \ucd08\ubcf4\ub97c \uc704\ud55c \uac00\uc774\ub4dc | \ucc30\uc2a4\uc758 \uc548\ub4dc\ub85c\uc774\ub4dc")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.android.com/topic/architecture/ui-layer/stateholders?hl=ko"},"\uc0c1\ud0dc \ud640\ub354 \ubc0f UI \uc0c1\ud0dc \xa0|\xa0 Android \uac1c\ubc1c\uc790 \xa0|\xa0 Android Developers")))}u.isMDXComponent=!0},39585:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/blog_udf-5415e55478b96249aec34a53b3fc05e4.png"},19245:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/blog_viewmodel_creation_process-bf099f07ea19d86eafa140a2b4494c00.png"},48713:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/blog_viewmodel_lifecycle-5a3f2dd726242652c6951b3b26d3247e.png"}}]);