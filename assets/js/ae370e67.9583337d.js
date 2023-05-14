"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2158],{9613:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var i=t(9496);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),c=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=c(e.components);return i.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},f=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),f=n,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return t?i.createElement(m,l(l({ref:r},d),{},{components:t})):i.createElement(m,l({ref:r},d))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=f;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7220:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(2564),n=(t(9496),t(9613));const a={id:"divine_uri.HeadersSelector",title:"Interface: HeadersSelector",sidebar_label:"@divine/uri.HeadersSelector",custom_edit_url:null},l=void 0,o={unversionedId:"api/interfaces/divine_uri.HeadersSelector",id:"api/interfaces/divine_uri.HeadersSelector",title:"Interface: HeadersSelector",description:"@divine/uri.HeadersSelector",source:"@site/docs/api/interfaces/divine_uri.HeadersSelector.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/divine_uri.HeadersSelector",permalink:"/WSF/docs/api/interfaces/divine_uri.HeadersSelector",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"divine_uri.HeadersSelector",title:"Interface: HeadersSelector",sidebar_label:"@divine/uri.HeadersSelector",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"@divine/uri.HawkCredentials",permalink:"/WSF/docs/api/interfaces/divine_uri.HawkCredentials"},next:{title:"@divine/uri.Metadata",permalink:"/WSF/docs/api/interfaces/divine_uri.Metadata"}},s={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"headers",id:"headers",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"selector",id:"selector",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4}],d={toc:c},p="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(p,(0,i.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_uri"},"@divine/uri"),".HeadersSelector"),(0,n.kt)("p",null,"Provides request headers for ",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.URI"},"URI")," and its subclasses, most notably ",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.HTTPURI"},"HTTPURI"),"."),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"SelectorBase")),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"HeadersSelector"))))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"headers"},"headers"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"headers"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"StringParams")),(0,n.kt)("p",null,"The headers to send."),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/uri/src/selectors.ts#L54"},"uri/src/selectors.ts:54")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"selector"},"selector"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"selector"),": ",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_uri.Selector"},(0,n.kt)("inlineCode",{parentName:"a"},"Selector"))),(0,n.kt)("p",null,"The selector that must match for this configuration to apply."),(0,n.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,n.kt)("p",null,"SelectorBase.selector"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/uri/src/selectors.ts#L34"},"uri/src/selectors.ts:34")))}u.isMDXComponent=!0}}]);