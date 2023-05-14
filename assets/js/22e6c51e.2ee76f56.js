"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8471],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),c=i,m=u["".concat(o,".").concat(c)]||u[c]||v[c]||a;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:i,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>v,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(2564),i=(n(9496),n(9613));const a={id:"divine_uri.EventStreamEvent",title:"Interface: EventStreamEvent",sidebar_label:"@divine/uri.EventStreamEvent",custom_edit_url:null},l=void 0,p={unversionedId:"api/interfaces/divine_uri.EventStreamEvent",id:"api/interfaces/divine_uri.EventStreamEvent",title:"Interface: EventStreamEvent",description:"@divine/uri.EventStreamEvent",source:"@site/docs/api/interfaces/divine_uri.EventStreamEvent.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/divine_uri.EventStreamEvent",permalink:"/WSF/docs/api/interfaces/divine_uri.EventStreamEvent",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"divine_uri.EventStreamEvent",title:"Interface: EventStreamEvent",sidebar_label:"@divine/uri.EventStreamEvent",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"@divine/uri.DirectoryEntry",permalink:"/WSF/docs/api/interfaces/divine_uri.DirectoryEntry"},next:{title:"@divine/uri.FileWatchEvent",permalink:"/WSF/docs/api/interfaces/divine_uri.FileWatchEvent"}},o={},s=[{value:"Properties",id:"properties",level:2},{value:"data",id:"data",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"event",id:"event",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"retry",id:"retry",level:3},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:s},u="wrapper";function v(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_uri"},"@divine/uri"),".EventStreamEvent"),(0,i.kt)("p",null,"Represents a ",(0,i.kt)("inlineCode",{parentName:"p"},"text/event-stream")," (SSE/server-sent events) event."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"data"},"data"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"data"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The event data, as a string."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/uri/src/parsers/event-stream.ts#L10"},"uri/src/parsers/event-stream.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"event"},"event"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"event"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The event name."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/uri/src/parsers/event-stream.ts#L7"},"uri/src/parsers/event-stream.ts:7")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The event ID, to update the client's ",(0,i.kt)("em",{parentName:"p"},"last event ID")," value."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/uri/src/parsers/event-stream.ts#L13"},"uri/src/parsers/event-stream.ts:13")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"retry"},"retry"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"retry"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The client reconnection time, in milliseconds."),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/uri/src/parsers/event-stream.ts#L16"},"uri/src/parsers/event-stream.ts:16")))}v.isMDXComponent=!0}}]);