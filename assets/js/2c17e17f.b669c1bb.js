"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3162],{9613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(r),f=i,m=c["".concat(o,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7402:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var n=r(7813),i=r(7044),a=(r(9496),r(9613)),l=["components"],u={id:"divine_uri.MultiPartField",title:"Interface: MultiPartField",sidebar_label:"MultiPartField",custom_edit_url:null},o=void 0,p={unversionedId:"api/interfaces/divine_uri.MultiPartField",id:"api/interfaces/divine_uri.MultiPartField",title:"Interface: MultiPartField",description:"@divine/uri.MultiPartField",source:"@site/docs/api/interfaces/divine_uri.MultiPartField.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/divine_uri.MultiPartField",permalink:"/WSF/docs/api/interfaces/divine_uri.MultiPartField",editUrl:null,tags:[],version:"current",frontMatter:{id:"divine_uri.MultiPartField",title:"Interface: MultiPartField",sidebar_label:"MultiPartField",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"MultiPartData",permalink:"/WSF/docs/api/interfaces/divine_uri.MultiPartData"},next:{title:"ParamsSelector",permalink:"/WSF/docs/api/interfaces/divine_uri.ParamsSelector"}},s={},d=[{value:"Properties",id:"properties",level:2},{value:"headers",id:"headers",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"value",id:"value",level:3},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:d};function f(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_uri"},"@divine/uri"),".MultiPartField"),(0,a.kt)("p",null,"A multi-part key-value field."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"headers"},"headers"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"headers"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"StringParams")),(0,a.kt)("p",null,"Multi-part keys may contain additional headers, available in this record."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/a3f6a79/uri/src/parsers/forms.ts#L42"},"uri/src/parsers/forms.ts:42")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The name of the field. Note that the name is actually optional."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/a3f6a79/uri/src/parsers/forms.ts#L36"},"uri/src/parsers/forms.ts:36")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ContentType")),(0,a.kt)("p",null,"The media type of the value."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/a3f6a79/uri/src/parsers/forms.ts#L39"},"uri/src/parsers/forms.ts:39")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"value"},"value"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_uri.MultiPartData"},(0,a.kt)("inlineCode",{parentName:"a"},"MultiPartData"))," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.URI"},(0,a.kt)("inlineCode",{parentName:"a"},"URI"))),(0,a.kt)("p",null,"The value of the filed."),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/a3f6a79/uri/src/parsers/forms.ts#L45"},"uri/src/parsers/forms.ts:45")))}f.isMDXComponent=!0}}]);