"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2912],{9613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,b=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9602:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(7813),a=r(7044),i=(r(9496),r(9613)),o=["components"],c={id:"divine_web_service.WebResourceCtor",title:"Interface: WebResourceCtor<Context>",sidebar_label:"WebResourceCtor",custom_edit_url:null},s=void 0,l={unversionedId:"api/interfaces/divine_web_service.WebResourceCtor",id:"api/interfaces/divine_web_service.WebResourceCtor",title:"Interface: WebResourceCtor<Context>",description:"@divine/web-service.WebResourceCtor",source:"@site/docs/api/interfaces/divine_web_service.WebResourceCtor.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/divine_web_service.WebResourceCtor",permalink:"/WSF/docs/api/interfaces/divine_web_service.WebResourceCtor",editUrl:null,tags:[],version:"current",frontMatter:{id:"divine_web_service.WebResourceCtor",title:"Interface: WebResourceCtor<Context>",sidebar_label:"WebResourceCtor",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"WebResource",permalink:"/WSF/docs/api/interfaces/divine_web_service.WebResource"},next:{title:"WebResponseHeaders",permalink:"/WSF/docs/api/interfaces/divine_web_service.WebResponseHeaders"}},p=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"path",id:"path",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_web_service"},"@divine/web-service"),".WebResourceCtor"),(0,i.kt)("p",null,"The static side of a web resource."),(0,i.kt)("p",null,"Specifies how a resource is constructed and configures for what paths the resource applies to."),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Context")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The type of the WebService context.")))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new WebResourceCtor"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"context"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"args"),")"),(0,i.kt)("p",null,"Constructs a resource instance. Invoked by ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebService"},"WebService")," when a resource's path matches the request path."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"context")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Context")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The WebService context.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/WSF/docs/api/classes/divine_web_service.WebArguments"},(0,i.kt)("inlineCode",{parentName:"a"},"WebArguments"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The request arguments.")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/f1f8f16/web-service/src/resource.ts#L98"},"web-service/src/resource.ts:98")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"path"},"path"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"RegExp")),(0,i.kt)("p",null,"A regular expression that is used when checking if this filter should process a given request."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/f1f8f16/web-service/src/resource.ts#L89"},"web-service/src/resource.ts:89")))}d.isMDXComponent=!0}}]);