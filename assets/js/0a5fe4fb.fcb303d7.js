"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),b=i,f=d["".concat(s,".").concat(b)]||d[b]||u[b]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(2564),i=(r(9496),r(9613));const a={id:"divine_web_service.WebFilterCtor",title:"Interface: WebFilterCtor<Context>",sidebar_label:"@divine/web-service.WebFilterCtor",custom_edit_url:null},l=void 0,o={unversionedId:"api/interfaces/divine_web_service.WebFilterCtor",id:"api/interfaces/divine_web_service.WebFilterCtor",title:"Interface: WebFilterCtor<Context>",description:"@divine/web-service.WebFilterCtor",source:"@site/docs/api/interfaces/divine_web_service.WebFilterCtor.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/divine_web_service.WebFilterCtor",permalink:"/WSF/docs/api/interfaces/divine_web_service.WebFilterCtor",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"divine_web_service.WebFilterCtor",title:"Interface: WebFilterCtor<Context>",sidebar_label:"@divine/web-service.WebFilterCtor",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"@divine/web-service.WebFilter",permalink:"/WSF/docs/api/interfaces/divine_web_service.WebFilter"},next:{title:"@divine/web-service.WebResource",permalink:"/WSF/docs/api/interfaces/divine_web_service.WebResource"}},s={},c=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"path",id:"path",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_web_service"},"@divine/web-service"),".WebFilterCtor"),(0,i.kt)("p",null,"The static side of a web filter."),(0,i.kt)("p",null,"Specifies how a filter is constructed and configures for what paths the filter applies to."),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Context")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The type of the WebService context.")))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new WebFilterCtor"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"context"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"args"),")"),(0,i.kt)("p",null,"Constructs a filter instance. Invoked by ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebService"},"WebService")," when a filter's path matches the request path."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"context")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Context")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The WebService context.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/WSF/docs/api/classes/divine_web_service.WebArguments"},(0,i.kt)("inlineCode",{parentName:"a"},"WebArguments"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The request arguments.")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/resource.ts#L35"},"web-service/src/resource.ts:35")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"path"},"path"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"RegExp")),(0,i.kt)("p",null,"A regular expression that is used when checking if this filter should process a given request."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/resource.ts#L26"},"web-service/src/resource.ts:26")))}u.isMDXComponent=!0}}]);