"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6499],{9613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,u(u({ref:t},s),{},{components:n})):r.createElement(f,u({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,u=new Array(a);u[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,u[1]=o;for(var c=2;c<a;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},334:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(2182),i=n(9028),a=(n(9496),n(9613)),u=["components"],o={id:"divine_uri.AuthSchemeRequest",title:"Interface: AuthSchemeRequest",sidebar_label:"AuthSchemeRequest",custom_edit_url:null},l=void 0,c={unversionedId:"api/interfaces/divine_uri.AuthSchemeRequest",id:"api/interfaces/divine_uri.AuthSchemeRequest",title:"Interface: AuthSchemeRequest",description:"@divine/uri.AuthSchemeRequest",source:"@site/docs/api/interfaces/divine_uri.AuthSchemeRequest.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/divine_uri.AuthSchemeRequest",permalink:"/WSF/docs/api/interfaces/divine_uri.AuthSchemeRequest",editUrl:null,tags:[],version:"current",frontMatter:{id:"divine_uri.AuthSchemeRequest",title:"Interface: AuthSchemeRequest",sidebar_label:"AuthSchemeRequest",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ContentHeaderParams",permalink:"/WSF/docs/api/interfaces/divine_headers.ContentHeaderParams"},next:{title:"AuthSelector",permalink:"/WSF/docs/api/interfaces/divine_uri.AuthSelector"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"headers",id:"headers",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"method",id:"method",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"url",id:"url",level:3},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_uri"},"@divine/uri"),".AuthSchemeRequest"),(0,a.kt)("p",null,"Information about the request that needs to be authenticated."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"headers"},"headers"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"headers"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Iterable"),"<","[",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"]",">"),(0,a.kt)("p",null,"Extra information available to aid the authentication. For HTTP, this is the request headers."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/bdc9277/uri/src/auth-schemes.ts#L27"},"uri/src/auth-schemes.ts:27")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"method"},"method"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"For HTTP request, the request method. Other protocols defines their own meaning of this field."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/bdc9277/uri/src/auth-schemes.ts#L21"},"uri/src/auth-schemes.ts:21")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"url"},"url"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"url"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"URL")),(0,a.kt)("p",null,"The URL that the authentication applies to."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/bdc9277/uri/src/auth-schemes.ts#L24"},"uri/src/auth-schemes.ts:24")))}h.isMDXComponent=!0}}]);