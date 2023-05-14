"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2912],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=a,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5956:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(2564),a=(r(9496),r(9613));const i={id:"divine_web_service.WebResourceCtor",title:"Interface: WebResourceCtor<Context>",sidebar_label:"@divine/web-service.WebResourceCtor",custom_edit_url:null},o=void 0,s={unversionedId:"api/interfaces/divine_web_service.WebResourceCtor",id:"api/interfaces/divine_web_service.WebResourceCtor",title:"Interface: WebResourceCtor<Context>",description:"@divine/web-service.WebResourceCtor",source:"@site/docs/api/interfaces/divine_web_service.WebResourceCtor.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/divine_web_service.WebResourceCtor",permalink:"/WSF/docs/api/interfaces/divine_web_service.WebResourceCtor",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"divine_web_service.WebResourceCtor",title:"Interface: WebResourceCtor<Context>",sidebar_label:"@divine/web-service.WebResourceCtor",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"@divine/web-service.WebResource",permalink:"/WSF/docs/api/interfaces/divine_web_service.WebResource"},next:{title:"@divine/web-service.WebResponseHeaders",permalink:"/WSF/docs/api/interfaces/divine_web_service.WebResponseHeaders"}},c={},l=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"path",id:"path",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_web_service"},"@divine/web-service"),".WebResourceCtor"),(0,a.kt)("p",null,"The static side of a web resource."),(0,a.kt)("p",null,"Specifies how a resource is constructed and configures for what paths the resource applies to."),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Context")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The type of the WebService context.")))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new WebResourceCtor"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"context"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"args"),")"),(0,a.kt)("p",null,"Constructs a resource instance. Invoked by ",(0,a.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebService"},"WebService")," when a resource's path matches the request path."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"context")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Context")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The WebService context.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/WSF/docs/api/classes/divine_web_service.WebArguments"},(0,a.kt)("inlineCode",{parentName:"a"},"WebArguments"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The request arguments.")))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/resource.ts#L98"},"web-service/src/resource.ts:98")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"path"},"path"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"path"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"RegExp")),(0,a.kt)("p",null,"A regular expression that is used when checking if this filter should process a given request."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/resource.ts#L89"},"web-service/src/resource.ts:89")))}d.isMDXComponent=!0}}]);