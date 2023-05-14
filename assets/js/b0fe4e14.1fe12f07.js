"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9355],{9613:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>c});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,c=m["".concat(d,".").concat(k)]||m[k]||u[k]||i;return n?a.createElement(c,l(l({ref:t},o),{},{components:n})):a.createElement(c,l({ref:t},o))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(2564),r=(n(9496),n(9613));const i={id:"divine_web_service.WebRequest",title:"Class: WebRequest",sidebar_label:"@divine/web-service.WebRequest",custom_edit_url:null},l=void 0,s={unversionedId:"api/classes/divine_web_service.WebRequest",id:"api/classes/divine_web_service.WebRequest",title:"Class: WebRequest",description:"@divine/web-service.WebRequest",source:"@site/docs/api/classes/divine_web_service.WebRequest.md",sourceDirName:"api/classes",slug:"/api/classes/divine_web_service.WebRequest",permalink:"/WSF/docs/api/classes/divine_web_service.WebRequest",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"divine_web_service.WebRequest",title:"Class: WebRequest",sidebar_label:"@divine/web-service.WebRequest",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"@divine/web-service.WebFilterBase",permalink:"/WSF/docs/api/classes/divine_web_service.WebFilterBase"},next:{title:"@divine/web-service.WebResourceBase",permalink:"/WSF/docs/api/classes/divine_web_service.WebResourceBase"}},d={},p=[{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"incomingMessage",id:"incomingmessage",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"log",id:"log",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"method",id:"method",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"params",id:"params",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"remoteAddress",id:"remoteaddress",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"url",id:"url",level:3},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"userAgent",id:"useragent",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"Accessors",id:"accessors",level:2},{value:"headers",id:"headers",level:3},{value:"Returns",id:"returns",level:4},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"remoteUserAgent",id:"remoteuseragent",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"Methods",id:"methods",level:2},{value:"addFinalizer",id:"addfinalizer",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"body",id:"body",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"close",id:"close",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"header",id:"header",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"param",id:"param",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"setParam",id:"setparam",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"toString",id:"tostring",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-17",level:4}],o={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_web_service"},"@divine/web-service"),".WebRequest"),(0,r.kt)("p",null,"A wrapper around Node.js' ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html#class-httpincomingmessage"},"IncomingMessage"),"."),(0,r.kt)("p",null,"This class respects headers such as ",(0,r.kt)("inlineCode",{parentName:"p"},"x-forwarded-*")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"x-http-method-override")," if configured to do so."),(0,r.kt)("h2",{id:"implements"},"Implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AuthSchemeRequest"))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new WebRequest"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"incomingMessage"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"config"),")"),(0,r.kt)("p",null,"Parses the Node.js request based on configuration."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"incomingMessage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"IncomingMessage")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The wrapped Node.js incoming message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,r.kt)("a",{parentName:"td",href:"/WSF/docs/api/interfaces/divine_web_service.WebServiceConfig"},(0,r.kt)("inlineCode",{parentName:"a"},"WebServiceConfig")),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"WebService configuration specifiying how ",(0,r.kt)("inlineCode",{parentName:"td"},"incomingMessage")," should be parsed.")))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/request.ts#L74"},"web-service/src/request.ts:74")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"id"},"id"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The request ID. It's either generated or extracted from the incoming message, if\n",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_web_service.WebServiceConfig#trustrequestid"},"trustRequestID")," is configured."),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/request.ts#L56"},"web-service/src/request.ts:56")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"incomingmessage"},"incomingMessage"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"incomingMessage"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"IncomingMessage")),(0,r.kt)("p",null,"The wrapped Node.js incoming message."),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/request.ts#L74"},"web-service/src/request.ts:74")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"log"},"log"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"log"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Console")),(0,r.kt)("p",null,"A per-request logger. Decorated with request ID if ",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_web_service.WebServiceConfig#logrequestid"},"logRequestID")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/request.ts#L59"},"web-service/src/request.ts:59")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"method"},"method"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"method"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The request method."),(0,r.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,r.kt)("p",null,"AuthSchemeRequest.method"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/request.ts#L43"},"web-service/src/request.ts:43")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"params"},"params"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"params"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Params")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")),(0,r.kt)("p",null,"Custom parameters from filters etc may be stored here."),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/request.ts#L62"},"web-service/src/request.ts:62")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"remoteaddress"},"remoteAddress"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"remoteAddress"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The IP address from which the request was issued."),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/request.ts#L49"},"web-service/src/request.ts:49")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"url"},"url"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"url"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"URL")),(0,r.kt)("p",null,"A reconstructed URL for this request"),(0,r.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,r.kt)("p",null,"AuthSchemeRequest.url"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/request.ts#L46"},"web-service/src/request.ts:46")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"useragent"},"userAgent"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"userAgent"),": ",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_web_service.UserAgent"},(0,r.kt)("inlineCode",{parentName:"a"},"UserAgent"))),(0,r.kt)("p",null,"The parsed user agent"),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/request.ts#L52"},"web-service/src/request.ts:52")),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"headers"},"headers"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"headers"),"(): ","[",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"][]"),(0,r.kt)("p",null,"All headers in a format compatible with the ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthSchemeRequest")," interface."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,"[",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"][]"),(0,r.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,r.kt)("p",null,"AuthSchemeRequest.headers"),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/request.ts#L109"},"web-service/src/request.ts:109")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"remoteuseragent"},"remoteUserAgent"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"remoteUserAgent"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"A short description of the remote client, including agent name, version and remote address."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/request.ts#L102"},"web-service/src/request.ts:102")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"addfinalizer"},"addFinalizer"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"addFinalizer"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"finalizable"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("p",null,"Registers a ",(0,r.kt)("inlineCode",{parentName:"p"},"Finalizable")," object with this request."),(0,r.kt)("p",null,"Finalizers are functions that will be invoked as part of the ",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebRequest#close"},"close")," method and are used to free up\ntemporary per-request resources."),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"object"))))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"finalizable")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Finalizable")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"Finalizable")," object whose finalizer should be called when this request is closed.")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("p",null,"The object that was passed is returned as-is."),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/request.ts#L231"},"web-service/src/request.ts:231")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"body"},"body"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"body"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"contentType?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"maxContentLength?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,r.kt)("p",null,"Parses the incoming request body."),(0,r.kt)("p",null,"A reference to the parsed message is kept and will be returned directly if this method is called multiple times.\nThe ",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebRequest#close"},"close")," method will free up temporary resources generated by this method, if any (for instance, file\nobjects from the ",(0,r.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," parser)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebError"},"WebError"),"(",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/enums/divine_web_service.WebStatus#payload_too_large"},"PAYLOAD_TOO_LARGE"),") if the request body was larger than\nallowed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebError"},"WebError"),"(",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/enums/divine_web_service.WebStatus#unsupported_media_type"},"UNSUPPORTED_MEDIA_TYPE"),") if the body could not be\nparsed."),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"object"))))),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"contentType?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"ContentType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"What parser to use. Defaults to the ",(0,r.kt)("inlineCode",{parentName:"td"},"content-type")," request header.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"maxContentLength")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The maximum number of bytes to parse. Defaults to ",(0,r.kt)("a",{parentName:"td",href:"/WSF/docs/api/interfaces/divine_web_service.WebServiceConfig#maxcontentlength"},"maxContentLength"),".")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,r.kt)("p",null,"The parsed request entity."),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/request.ts#L184"},"web-service/src/request.ts:184")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"close"},"close"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"close"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"Closes this request and frees up all resources held by it by invoking all registered finalizers."),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/request.ts#L244"},"web-service/src/request.ts:244")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"header"},"header"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"header"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"def?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"concatenate?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Returns the value of a request header."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebError"},"WebError"),"(",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/enums/divine_web_service.WebStatus#bad_request"},"BAD_REQUEST"),") if the requested header is missing and no\ndefault was provided."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"keyof ",(0,r.kt)("inlineCode",{parentName:"td"},"IncomingHttpHeaders")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the request header to fetch (case-insensitive).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"def?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The default value to return, in case the header was not found. If not specified, an exception will be thrown instead.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"concatenate")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies wheter to concatenate multiple headers with the same name into a single comma-separated string or not. If ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", only the first header will be returned.")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The header value as a string."),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/request.ts#L149"},"web-service/src/request.ts:149")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"param"},"param"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"param"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"def?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicTypes")),(0,r.kt)("p",null,"Returns the value of a custom parameter (set by ",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebRequest#setparam"},"setParam"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebError"},"WebError"),"(",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/enums/divine_web_service.WebStatus#internal_server_error"},"INTERNAL_SERVER_ERROR"),") if the requested header is missing and no\ndefault was provided."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the parameter to fetch.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"def?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BasicTypes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The default value to return, in case the parameter was not found. If not specified, an exception will be thrown instead.")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BasicTypes")),(0,r.kt)("p",null,"The parameter value."),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/request.ts#L123"},"web-service/src/request.ts:123")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setparam"},"setParam"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setParam"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"param"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebRequest"},(0,r.kt)("inlineCode",{parentName:"a"},"WebRequest"))),(0,r.kt)("p",null,"Sets a custom parameter. Useful for providing resources with custom properties from a ",(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_web_service.WebFilter"},"WebFilter"),", for\ninstance."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"param")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the parameter to set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BasicTypes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The parameter value.")))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebRequest"},(0,r.kt)("inlineCode",{parentName:"a"},"WebRequest"))),(0,r.kt)("p",null,"This WebArguments."),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/request.ts#L217"},"web-service/src/request.ts:217")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tostring"},"toString"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toString"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Returns a short description about this request, including request method, URL and content type."),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/request.ts#L250"},"web-service/src/request.ts:250")))}u.isMDXComponent=!0}}]);