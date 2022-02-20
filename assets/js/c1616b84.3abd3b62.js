"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8786],{9613:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return f}});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),c=u(r),f=i,m=c["".concat(p,".").concat(f)]||c[f]||s[f]||a;return r?n.createElement(m,l(l({ref:t},o),{},{components:r})):n.createElement(m,l({ref:t},o))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=c;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:i,l[1]=d;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2775:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return o},default:function(){return c}});var n=r(9624),i=r(42),a=(r(9496),r(9613)),l=["components"],d={id:"divine_uri.DBMetadata",title:"Interface: DBMetadata",sidebar_label:"DBMetadata",custom_edit_url:null},p=void 0,u={unversionedId:"api/interfaces/divine_uri.DBMetadata",id:"api/interfaces/divine_uri.DBMetadata",title:"Interface: DBMetadata",description:"@divine/uri.DBMetadata",source:"@site/docs/api/interfaces/divine_uri.DBMetadata.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/divine_uri.DBMetadata",permalink:"/WSF/docs/api/interfaces/divine_uri.DBMetadata",editUrl:null,tags:[],version:"current",frontMatter:{id:"divine_uri.DBMetadata",title:"Interface: DBMetadata",sidebar_label:"DBMetadata",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"DBConnection",permalink:"/WSF/docs/api/interfaces/divine_uri.DBDriver.DBConnection"},next:{title:"DBParams",permalink:"/WSF/docs/api/interfaces/divine_uri.DBParams"}},o=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"FIELDS",id:"fields",children:[{value:"Inherited from",id:"inherited-from",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"HEADERS",id:"headers",children:[{value:"Inherited from",id:"inherited-from-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"STATUS",id:"status",children:[{value:"Inherited from",id:"inherited-from-2",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"STATUS_TEXT",id:"status_text",children:[{value:"Inherited from",id:"inherited-from-3",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2}],s={toc:o};function c(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/divine_uri"},"@divine/uri"),".DBMetadata"),(0,a.kt)("p",null,"Like ",(0,a.kt)("a",{parentName:"p",href:"divine_uri.Metadata"},"Metadata"),", except that ",(0,a.kt)("inlineCode",{parentName:"p"},"[FIELD]")," is always present as well and is an array of ",(0,a.kt)("a",{parentName:"p",href:"../classes/divine_uri.DBResult"},"DBResult"),"."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"divine_uri.Metadata"},(0,a.kt)("inlineCode",{parentName:"a"},"Metadata")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,a.kt)("a",{parentName:"p",href:"divine_uri.WithFields"},(0,a.kt)("inlineCode",{parentName:"a"},"WithFields")),"<",(0,a.kt)("a",{parentName:"p",href:"../classes/divine_uri.DBResult"},(0,a.kt)("inlineCode",{parentName:"a"},"DBResult")),">",">"),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"DBMetadata"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"fields"},"[FIELDS]"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"[FIELDS]"),": ",(0,a.kt)("a",{parentName:"p",href:"../classes/divine_uri.DBResult"},(0,a.kt)("inlineCode",{parentName:"a"},"DBResult")),"[]"),(0,a.kt)("p",null,"Defines how field information is attached to an object."),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,"Required.","_","_","@FIELDS@236646"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/wsf/blob/9b9430b/uri/src/uri.ts#L46"},"uri/src/uri.ts:46")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"headers"},"[HEADERS]"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"[HEADERS]"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"StringParams")),(0,a.kt)("p",null,"Additional metadata as key-value pairs. Example: HTTP response headers."),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"divine_uri.Metadata"},"Metadata"),".",(0,a.kt)("a",{parentName:"p",href:"divine_uri.Metadata#%5Bheaders%5D"},"[HEADERS]")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/wsf/blob/9b9430b/uri/src/uri.ts#L58"},"uri/src/uri.ts:58")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"status"},"[STATUS]"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"[STATUS]"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"The response status. Example: the HTTP status or a Node.js ",(0,a.kt)("inlineCode",{parentName:"p"},"errno")," value."),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"divine_uri.Metadata"},"Metadata"),".",(0,a.kt)("a",{parentName:"p",href:"divine_uri.Metadata#%5Bstatus%5D"},"[STATUS]")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/wsf/blob/9b9430b/uri/src/uri.ts#L52"},"uri/src/uri.ts:52")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"status_text"},"[STATUS","_","TEXT]"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"[STATUS","_","TEXT]"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The response status message. Example: the HTTP status text or a Node.js ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," value."),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"divine_uri.Metadata"},"Metadata"),".",(0,a.kt)("a",{parentName:"p",href:"divine_uri.Metadata#%5Bstatus_text%5D"},"[STATUS_TEXT]")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/wsf/blob/9b9430b/uri/src/uri.ts#L55"},"uri/src/uri.ts:55")))}c.isMDXComponent=!0}}]);