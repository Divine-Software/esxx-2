"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[645],{9613:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(r),f=i,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(h,s(s({ref:t},l),{},{components:r})):n.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8151:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(2564),i=(r(9496),r(9613));const a={sidebar_position:2},s="Filters",o={unversionedId:"serve/filters",id:"serve/filters",title:"Filters",description:"WebFilters are used to curry resources. They can intercept requests before the resource handler gets to",source:"@site/docs/serve/filters.md",sourceDirName:"serve",slug:"/serve/filters",permalink:"/WSF/docs/serve/filters",draft:!1,editUrl:"https://github.com/Divine-Software/WSF/tree/master/website/docs/serve/filters.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"HTTP Resources",permalink:"/WSF/docs/serve/resources"},next:{title:"Remote Procedure Calls",permalink:"/WSF/docs/serve/rpc"}},c={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"filters"},"Filters"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_web_service.WebFilter"},"WebFilters")," are used to curry resources. They can intercept requests before the resource handler gets to\nhandle them, or modify the response afterwards. Like ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_web_service.WebResource"},"WebResources"),", the paths a filter applies to is\nspecified by a regular expression in a static ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_web_service.WebFilterCtor#path"},"path")," property. Unlike resources, it's both allowed and encouraged for\nmultiple filters to be active during the request processing; the filters will be invoked in the order they were\nregistered."),(0,i.kt)("p",null,"When a ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_web_service.WebFilter"},"WebFilter")," matches an incoming request, an instance is ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_web_service.WebFilterCtor#constructor"},"constructed")," (via ",(0,i.kt)("inlineCode",{parentName:"p"},"new"),"), where it\nreceives a reference to the ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebService#context"},"WebService Context"),", a custom object that you provide when the ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebService"},"WebService")," is created.\nThis is how the filter instances can access various services and configurations in your application."),(0,i.kt)("p",null,"Then, the ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_web_service.WebFilter#filter"},"filter")," method is invoked. It receives three arguments: a ",(0,i.kt)("inlineCode",{parentName:"p"},"next")," function that invokes the next filter or\nresource handler in the chain, ",(0,i.kt)("inlineCode",{parentName:"p"},"args"),", the request arguments, and finally a ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," function that can be used to\nfetch a reference to the resource that the request matched."),(0,i.kt)("p",null,"The filter can inspect the incoming request in the ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/serve/resources#request-arguments"},"same way")," resources can, and then\ndecide if ",(0,i.kt)("inlineCode",{parentName:"p"},"next")," should be called to generate a ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebResponse"},"WebResponse")," \u2014 which may be modified before it's returned. If the filter\nneeds to provide information to downstream filters or the active resource, it can do so either by setting custom\nparameters on the request via ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_web_service.WebRequest#setparam"},"WebRequest.setParam"),", or fetch a reference to the actual ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_web_service.WebResource"},"WebResource")," instance via the\n",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," argument."),(0,i.kt)("p",null,"Filters can generate responses in the ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/serve/resources#generating-responses"},"same way")," as resources do, but usually just\npass along the return value from ",(0,i.kt)("inlineCode",{parentName:"p"},"next"),"."))}d.isMDXComponent=!0}}]);