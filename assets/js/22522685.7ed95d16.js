"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6426],{9613:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>v});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},o=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=d(n),k=r,v=m["".concat(p,".").concat(k)]||m[k]||c[k]||i;return n?a.createElement(v,s(s({ref:t},o),{},{components:n})):a.createElement(v,s({ref:t},o))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(2564),r=(n(9496),n(9613));const i={id:"divine_web_service.EventStreamResponse",title:"Class: EventStreamResponse<T>",sidebar_label:"@divine/web-service.EventStreamResponse",custom_edit_url:null},s=void 0,l={unversionedId:"api/classes/divine_web_service.EventStreamResponse",id:"api/classes/divine_web_service.EventStreamResponse",title:"Class: EventStreamResponse<T>",description:"@divine/web-service.EventStreamResponse",source:"@site/docs/api/classes/divine_web_service.EventStreamResponse.md",sourceDirName:"api/classes",slug:"/api/classes/divine_web_service.EventStreamResponse",permalink:"/WSF/docs/api/classes/divine_web_service.EventStreamResponse",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"divine_web_service.EventStreamResponse",title:"Class: EventStreamResponse<T>",sidebar_label:"@divine/web-service.EventStreamResponse",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"@divine/web-service.CORSFilter",permalink:"/WSF/docs/api/classes/divine_web_service.CORSFilter"},next:{title:"@divine/web-service.WebArguments",permalink:"/WSF/docs/api/classes/divine_web_service.WebArguments"}},p={},d=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"body",id:"body",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"headers",id:"headers",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"status",id:"status",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"Methods",id:"methods",level:2},{value:"close",id:"close",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"serialize",id:"serialize",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"setHeader",id:"setheader",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"toString",id:"tostring",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-7",level:4}],o={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_web_service"},"@divine/web-service"),".EventStreamResponse"),(0,r.kt)("p",null,"Server-Sent Events (SSE) ",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebResponse"},"WebResponse")," serializer/helper class."),(0,r.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The type of events to transmit.")))),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"WebResponse"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"EventStreamResponse"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new EventStreamResponse"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"source"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dataType?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headers?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"keepaliveTimeout?"),")"),(0,r.kt)("p",null,"Converts an ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncIterable")," into a ",(0,r.kt)("em",{parentName:"p"},"Server-Sent Event")," response stream."),(0,r.kt)("p",null,"Each object yielded by the ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," generator will be serialized and converted to an SSE event. Symbols from the\n",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_web_service.EventAttributes"},"EventAttributes")," interface may be added to transmit event metadata. ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," values will\nresult in a comment event. If no value is emitted for ",(0,r.kt)("inlineCode",{parentName:"p"},"keepaliveTimeout")," milliseconds, a comment line will be\nsent automatically, in order to signal to the client that the server is still alive and the connection is open."),(0,r.kt)("p",null,"Exceptions from the generator will be serialized and sent as events of type ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"."),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The type of events to transmit.")))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"source")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AsyncIterable"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"T")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"T")," & ",(0,r.kt)("a",{parentName:"td",href:"/WSF/docs/api/interfaces/divine_web_service.EventAttributes"},(0,r.kt)("inlineCode",{parentName:"a"},"EventAttributes")),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"AsyncIterable")," which yields events to transmit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dataType?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"ContentType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The format of the individual events. Default is JSON.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"headers?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/WSF/docs/api/interfaces/divine_web_service.WebResponseHeaders"},(0,r.kt)("inlineCode",{parentName:"a"},"WebResponseHeaders"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Custom response headers to send.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keepaliveTimeout?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How often, in milliseconds, to automatically send comments/keep-alive lines.")))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebResponse"},"WebResponse"),".",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebResponse#constructor"},"constructor")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/helpers.ts#L230"},"web-service/src/helpers.ts:230")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"body"},"body"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"body"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadableStream")),(0,r.kt)("p",null,"The response body."),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebResponse"},"WebResponse"),".",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebResponse#body"},"body")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/response.ts#L22"},"web-service/src/response.ts:22")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"headers"},"headers"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"headers"),": ",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_web_service.WebResponseHeaders"},(0,r.kt)("inlineCode",{parentName:"a"},"WebResponseHeaders"))," = ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")),(0,r.kt)("p",null,"The HTTP headers to return. If the length of the response body is known, ",(0,r.kt)("inlineCode",{parentName:"p"},"content-length")," will be\nadded automatically."),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebResponse"},"WebResponse"),".",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebResponse#headers"},"headers")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/response.ts#L35"},"web-service/src/response.ts:35")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"status"},"status"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"status"),": ",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/enums/divine_web_service.WebStatus"},(0,r.kt)("inlineCode",{parentName:"a"},"WebStatus"))),(0,r.kt)("p",null,"The HTTP status code to return."),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebResponse"},"WebResponse"),".",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebResponse#status"},"status")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/response.ts#L35"},"web-service/src/response.ts:35")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"close"},"close"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"close"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"Closes the response by destroying the body, in case it is a readable stream."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebResponse"},"WebResponse"),".",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebResponse#close"},"close")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/response.ts#L80"},"web-service/src/response.ts:80")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"serialize"},"serialize"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"serialize"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"webreq"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"config"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"RawResponse"),">"),(0,r.kt)("p",null,"Serializes the response."),(0,r.kt)("p",null,"For successful ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD")," responses, if an ",(0,r.kt)("inlineCode",{parentName:"p"},"etag")," response header matches the ",(0,r.kt)("inlineCode",{parentName:"p"},"if-none-match")," request\nheader, ",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/enums/divine_web_service.WebStatus#not_modified"},"NOT_MODIFIED")," will be returned instead."),(0,r.kt)("p",null,"If ",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_web_service.WebServiceConfig#returnrequestid"},"returnRequestID")," is configured, the request ID will also be automatically added to the\nresponse."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"webreq")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/WSF/docs/api/classes/divine_web_service.WebRequest"},(0,r.kt)("inlineCode",{parentName:"a"},"WebRequest"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The request this is a response to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,r.kt)("a",{parentName:"td",href:"/WSF/docs/api/interfaces/divine_web_service.WebServiceConfig"},(0,r.kt)("inlineCode",{parentName:"a"},"WebServiceConfig")),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The WebService configuration.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"RawResponse"),">"),(0,r.kt)("p",null,"A serialized response."),(0,r.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebResponse"},"WebResponse"),".",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebResponse#serialize"},"serialize")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/response.ts#L99"},"web-service/src/response.ts:99")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setheader"},"setHeader"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setHeader"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.EventStreamResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"EventStreamResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,r.kt)("p",null,"Adds a custom header to the list of headers to return."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the header to return (case-insensitive).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The header value.")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.EventStreamResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"EventStreamResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,r.kt)("p",null,"This WebResponse."),(0,r.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebResponse"},"WebResponse"),".",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebResponse#setheader"},"setHeader")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/response.ts#L73"},"web-service/src/response.ts:73")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tostring"},"toString"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toString"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Returns a short description about this response, including status and content type."),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebResponse"},"WebResponse"),".",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebResponse#tostring"},"toString")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/response.ts#L133"},"web-service/src/response.ts:133")))}c.isMDXComponent=!0}}]);