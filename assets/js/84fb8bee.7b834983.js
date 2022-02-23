"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3602],{9613:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return u}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,b=m["".concat(o,".").concat(u)]||m[u]||c[u]||i;return r?n.createElement(b,l(l({ref:t},d),{},{components:r})):n.createElement(b,l({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7644:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=r(7813),a=r(7044),i=(r(9496),r(9613)),l=["components"],s={id:"divine_web_service.WebFilterBase",title:"Class: WebFilterBase<Context>",sidebar_label:"WebFilterBase",custom_edit_url:null},o=void 0,p={unversionedId:"api/classes/divine_web_service.WebFilterBase",id:"api/classes/divine_web_service.WebFilterBase",title:"Class: WebFilterBase<Context>",description:"@divine/web-service.WebFilterBase",source:"@site/docs/api/classes/divine_web_service.WebFilterBase.md",sourceDirName:"api/classes",slug:"/api/classes/divine_web_service.WebFilterBase",permalink:"/WSF/docs/api/classes/divine_web_service.WebFilterBase",editUrl:null,tags:[],version:"current",frontMatter:{id:"divine_web_service.WebFilterBase",title:"Class: WebFilterBase<Context>",sidebar_label:"WebFilterBase",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"WebError",permalink:"/WSF/docs/api/classes/divine_web_service.WebError"},next:{title:"WebRequest",permalink:"/WSF/docs/api/classes/divine_web_service.WebRequest"}},d=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Implements",id:"implements",children:[],level:2},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Type parameters",id:"type-parameters-1",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"_args",id:"_args",children:[],level:3},{value:"_context",id:"_context",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"filter",id:"filter",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Implementation of",id:"implementation-of",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],c={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_web_service"},"@divine/web-service"),".WebFilterBase"),(0,i.kt)("p",null,"An optional, trivial base class for filters, which simply stores a reference to the context and request arguments."),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Context")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The type of the WebService context.")))),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/WSF/docs/api/interfaces/divine_web_service.WebFilter"},(0,i.kt)("inlineCode",{parentName:"a"},"WebFilter")))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new WebFilterBase"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Context"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"_context"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_args"),")"),(0,i.kt)("p",null,"Constructs a resource or filter instance."),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Context"))))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_context")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Context")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The WebService context.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/WSF/docs/api/classes/divine_web_service.WebArguments"},(0,i.kt)("inlineCode",{parentName:"a"},"WebArguments"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The request arguments.")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/f1f8f16/web-service/src/resource.ts#L73"},"web-service/src/resource.ts:73")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"_args"},"_","args"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("strong",{parentName:"p"},"_","args"),": ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebArguments"},(0,i.kt)("inlineCode",{parentName:"a"},"WebArguments"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_context"},"_","context"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("strong",{parentName:"p"},"_","context"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"filter"},"filter"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"filter"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"next"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"resource"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_web_service#webresponses"},(0,i.kt)("inlineCode",{parentName:"a"},"WebResponses")),">"),(0,i.kt)("p",null,"Invoked by ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebService"},"WebService")," when the filter should process a request or response."),(0,i.kt)("p",null,"The filter may act on the request before or after a resource handles the request (or both). Call the ",(0,i.kt)("inlineCode",{parentName:"p"},"next"),"\nfunction to process the request normally and receive the default response. It's also possible to get a reference\nto the actual resource instance by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," function. Note that this function may throw a\n",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebError"},"WebError")," in case no resource matched the request."),(0,i.kt)("p",null,"The filter is free to modify the request, the resource instance and/or the response as part of its work."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"next")),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("a",{parentName:"td",href:"/WSF/docs/api/classes/divine_web_service.WebResponse"},(0,i.kt)("inlineCode",{parentName:"a"},"WebResponse")),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/WSF/docs/api/classes/divine_web_service.WebArguments"},(0,i.kt)("inlineCode",{parentName:"a"},"WebArguments")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"resource")),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("a",{parentName:"td",href:"/WSF/docs/api/interfaces/divine_web_service.WebResource"},(0,i.kt)("inlineCode",{parentName:"a"},"WebResource")),">")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_web_service#webresponses"},(0,i.kt)("inlineCode",{parentName:"a"},"WebResponses")),">"),(0,i.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_web_service.WebFilter"},"WebFilter"),".",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_web_service.WebFilter#filter"},"filter")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/f1f8f16/web-service/src/resource.ts#L77"},"web-service/src/resource.ts:77")))}m.isMDXComponent=!0}}]);