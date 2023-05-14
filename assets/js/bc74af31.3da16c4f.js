"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7316],{9613:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return t?n.createElement(f,o(o({ref:r},l),{},{components:t})):n.createElement(f,o({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6357:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(2564),a=(t(9496),t(9613));const s={sidebar_position:2},o="Data Formats",i={unversionedId:"parse/parse",id:"parse/parse",title:"Data Formats",description:"Whenever you read something from an [URI], one of the built-in parsers is used to make sense of the byte stream",source:"@site/docs/parse/parse.md",sourceDirName:"parse",slug:"/parse/",permalink:"/WSF/docs/parse/",draft:!1,editUrl:"https://github.com/Divine-Software/WSF/tree/master/website/docs/parse/parse.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Databases",permalink:"/WSF/docs/connect/databases"},next:{title:"Bytes and Text",permalink:"/WSF/docs/parse/sequences"}},c={},p=[],l={toc:p},d="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-formats"},"Data Formats"),(0,a.kt)("p",null,"Whenever you read something from an ",(0,a.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.URI"},"URI"),", one of the built-in parsers is used to make sense of the byte stream\nreceived; likewise, whenever you write something, one of the parsers is responsible for converting whatever object or\nprimitive you try to write into a byte stream that can be transmitted and stored at the resource the URI references."),(0,a.kt)("p",null,"To parse or serialize something manually, you usually use the static methods ",(0,a.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser#parse"},"Parser.parse")," and ",(0,a.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser#serialize"},"Parser.serialize"),", but\nit's also possible to manually create a parser and calling its methods directly. Please see ",(0,a.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser"},"Parser")," for a list of all\nknown parsers and what media types the handle."),(0,a.kt)("p",null,"Additionally, byte streams may also be transformed by ",(0,a.kt)("em",{parentName:"p"},"encoders"),". Like parsers, encoders are usually invoked manually\nusing ",(0,a.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Encoder#encode"},"Encoder.encode")," and ",(0,a.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Encoder#decode"},"Encoder.decode"),", but you can instantiate encoders yourself too. See ",(0,a.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Encoder"},"Encoder")," for a list of\navailable encoders. Encoders are used to handle headers such as ",(0,a.kt)("inlineCode",{parentName:"p"},"content-encoding")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"transfer-encoding")," in HTTP, or\n",(0,a.kt)("inlineCode",{parentName:"p"},"content-transfer-encoding")," in MIME."),(0,a.kt)("p",null,"In the following sections, we'll discuss some of the available parsers and encoders."))}u.isMDXComponent=!0}}]);