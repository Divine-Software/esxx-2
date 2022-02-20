"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7281],{9613:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,m=c["".concat(u,".").concat(f)]||c[f]||s[f]||i;return r?n.createElement(m,l(l({ref:t},d),{},{components:r})):n.createElement(m,l({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2935:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var n=r(9624),a=r(42),i=(r(9496),r(9613)),l=["components"],o={id:"divine_uri.Metadata",title:"Interface: Metadata",sidebar_label:"Metadata",custom_edit_url:null},u=void 0,p={unversionedId:"api/interfaces/divine_uri.Metadata",id:"api/interfaces/divine_uri.Metadata",title:"Interface: Metadata",description:"@divine/uri.Metadata",source:"@site/docs/api/interfaces/divine_uri.Metadata.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/divine_uri.Metadata",permalink:"/WSF/docs/api/interfaces/divine_uri.Metadata",editUrl:null,tags:[],version:"current",frontMatter:{id:"divine_uri.Metadata",title:"Interface: Metadata",sidebar_label:"Metadata",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"HeadersSelector",permalink:"/WSF/docs/api/interfaces/divine_uri.HeadersSelector"},next:{title:"MimeMessage",permalink:"/WSF/docs/api/interfaces/divine_uri.MimeMessage"}},d=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"HEADERS",id:"headers",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"STATUS",id:"status",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"STATUS_TEXT",id:"status_text",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],s={toc:d};function c(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/divine_uri"},"@divine/uri"),".Metadata"),(0,i.kt)("p",null,"Defines how response/result metadata is attached to an object."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Metadata"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"divine_uri.DBMetadata"},(0,i.kt)("inlineCode",{parentName:"a"},"DBMetadata"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"headers"},"[HEADERS]"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"[HEADERS]"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"StringParams")),(0,i.kt)("p",null,"Additional metadata as key-value pairs. Example: HTTP response headers."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/wsf/blob/c27a4d4/uri/src/uri.ts#L58"},"uri/src/uri.ts:58")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"status"},"[STATUS]"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"[STATUS]"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The response status. Example: the HTTP status or a Node.js ",(0,i.kt)("inlineCode",{parentName:"p"},"errno")," value."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/wsf/blob/c27a4d4/uri/src/uri.ts#L52"},"uri/src/uri.ts:52")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"status_text"},"[STATUS","_","TEXT]"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"[STATUS","_","TEXT]"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The response status message. Example: the HTTP status text or a Node.js ",(0,i.kt)("inlineCode",{parentName:"p"},"code")," value."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/wsf/blob/c27a4d4/uri/src/uri.ts#L55"},"uri/src/uri.ts:55")))}c.isMDXComponent=!0}}]);