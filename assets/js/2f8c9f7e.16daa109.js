"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6521],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(n),f=i,v=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return n?r.createElement(v,l(l({ref:t},p),{},{components:n})):r.createElement(v,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8818:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=n(9624),i=n(42),a=(n(9496),n(9613)),l=["components"],o={id:"divine_uri.FileWatchEvent",title:"Interface: FileWatchEvent",sidebar_label:"FileWatchEvent",custom_edit_url:null},c=void 0,u={unversionedId:"api/interfaces/divine_uri.FileWatchEvent",id:"api/interfaces/divine_uri.FileWatchEvent",title:"Interface: FileWatchEvent",description:"@divine/uri.FileWatchEvent",source:"@site/docs/api/interfaces/divine_uri.FileWatchEvent.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/divine_uri.FileWatchEvent",permalink:"/WSF/docs/api/interfaces/divine_uri.FileWatchEvent",editUrl:null,tags:[],version:"current",frontMatter:{id:"divine_uri.FileWatchEvent",title:"Interface: FileWatchEvent",sidebar_label:"FileWatchEvent",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"EventStreamEvent",permalink:"/WSF/docs/api/interfaces/divine_uri.EventStreamEvent"},next:{title:"Finalizable",permalink:"/WSF/docs/api/interfaces/divine_uri.Finalizable"}},p=[{value:"Properties",id:"properties",children:[{value:"type",id:"type",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"uri",id:"uri",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],d={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/divine_uri"},"@divine/uri"),".FileWatchEvent"),(0,a.kt)("p",null,"The event produced by ",(0,a.kt)("a",{parentName:"p",href:"../classes/divine_uri.FileURI#watch"},"FileURI.watch"),"."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"create"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"update"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"delete"')),(0,a.kt)("p",null,"The type of event."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/wsf/blob/9b9430b/uri/src/protocols/file.ts#L16"},"uri/src/protocols/file.ts:16")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"uri"},"uri"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"uri"),": ",(0,a.kt)("a",{parentName:"p",href:"../classes/divine_uri.FileURI"},(0,a.kt)("inlineCode",{parentName:"a"},"FileURI"))),(0,a.kt)("p",null,"The file resource that changed"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/wsf/blob/9b9430b/uri/src/protocols/file.ts#L19"},"uri/src/protocols/file.ts:19")))}s.isMDXComponent=!0}}]);