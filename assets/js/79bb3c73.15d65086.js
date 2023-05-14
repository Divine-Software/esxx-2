"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9483],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,b=d["".concat(o,".").concat(u)]||d[u]||v[u]||a;return n?r.createElement(b,s(s({ref:t},c),{},{components:n})):r.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>v,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(2564),i=(n(9496),n(9613));const a={id:"divine_web_service.EventAttributes",title:"Interface: EventAttributes",sidebar_label:"@divine/web-service.EventAttributes",custom_edit_url:null},s=void 0,l={unversionedId:"api/interfaces/divine_web_service.EventAttributes",id:"api/interfaces/divine_web_service.EventAttributes",title:"Interface: EventAttributes",description:"@divine/web-service.EventAttributes",source:"@site/docs/api/interfaces/divine_web_service.EventAttributes.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/divine_web_service.EventAttributes",permalink:"/WSF/docs/api/interfaces/divine_web_service.EventAttributes",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"divine_web_service.EventAttributes",title:"Interface: EventAttributes",sidebar_label:"@divine/web-service.EventAttributes",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"@divine/web-service.CORSFilterParams",permalink:"/WSF/docs/api/interfaces/divine_web_service.CORSFilterParams"},next:{title:"@divine/web-service.RPCEndpointOptions",permalink:"/WSF/docs/api/interfaces/divine_web_service.RPCEndpointOptions"}},o={},p=[{value:"Properties",id:"properties",level:2},{value:"EVENT_ID",id:"event_id",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"EVENT_RETRY",id:"event_retry",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"EVENT_TYPE",id:"event_type",level:3},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:p},d="wrapper";function v(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_web_service"},"@divine/web-service"),".EventAttributes"),(0,i.kt)("p",null,"Metadata to be transmitted along with a single event by the ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.EventStreamResponse"},"EventStreamResponse")," helper class."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"event_id"},"[EVENT","_","ID]"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"[EVENT","_","ID]"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Used to update the client's last event ID value."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/helpers.ts#L163"},"web-service/src/helpers.ts:163")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"event_retry"},"[EVENT","_","RETRY]"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"[EVENT","_","RETRY]"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The reconnection time. If the connection to the server is lost, the browser will wait for the specified time before attempting to reconnect."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/helpers.ts#L169"},"web-service/src/helpers.ts:169")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"event_type"},"[EVENT","_","TYPE]"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"[EVENT","_","TYPE]"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"A string identifying the type of event described."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/web-service/src/helpers.ts#L166"},"web-service/src/helpers.ts:166")))}v.isMDXComponent=!0}}]);