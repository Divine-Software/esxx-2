"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7991],{9613:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(9496);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(f,l(l({ref:r},p),{},{components:t})):n.createElement(f,l({ref:r},p))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5012:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=t(9624),i=t(42),a=(t(9496),t(9613)),l=["components"],o={id:"divine_uri.ParamsSelector",title:"Interface: ParamsSelector",sidebar_label:"ParamsSelector",custom_edit_url:null},c=void 0,s={unversionedId:"api/interfaces/divine_uri.ParamsSelector",id:"api/interfaces/divine_uri.ParamsSelector",title:"Interface: ParamsSelector",description:"@divine/uri.ParamsSelector",source:"@site/docs/api/interfaces/divine_uri.ParamsSelector.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/divine_uri.ParamsSelector",permalink:"/WSF/docs/api/interfaces/divine_uri.ParamsSelector",editUrl:null,tags:[],version:"current",frontMatter:{id:"divine_uri.ParamsSelector",title:"Interface: ParamsSelector",sidebar_label:"ParamsSelector",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"MultiPartField",permalink:"/WSF/docs/api/interfaces/divine_uri.MultiPartField"},next:{title:"PasswordCredentials",permalink:"/WSF/docs/api/interfaces/divine_uri.PasswordCredentials"}},p=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"params",id:"params",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"selector",id:"selector",children:[{value:"Inherited from",id:"inherited-from",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],u={toc:p};function d(e){var r=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/divine_uri"},"@divine/uri"),".ParamsSelector"),(0,a.kt)("p",null,"Provides configuration parameters for ",(0,a.kt)("a",{parentName:"p",href:"../classes/divine_uri.URI"},"URI")," and its subclasses."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SelectorBase")),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ParamsSelector"))),(0,a.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"divine_uri.DBParamsSelector"},(0,a.kt)("inlineCode",{parentName:"a"},"DBParamsSelector"))),(0,a.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"divine_uri.HTTPParamsSelector"},(0,a.kt)("inlineCode",{parentName:"a"},"HTTPParamsSelector"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"params"},"params"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"params"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"URIParams")),(0,a.kt)("p",null,"The parameters to apply."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/wsf/blob/9b9430b/uri/src/selectors.ts#L70"},"uri/src/selectors.ts:70")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"selector"},"selector"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"selector"),": ",(0,a.kt)("a",{parentName:"p",href:"divine_uri.Selector"},(0,a.kt)("inlineCode",{parentName:"a"},"Selector"))),(0,a.kt)("p",null,"The selector that must match for this configuration to apply."),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,"SelectorBase.selector"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/wsf/blob/9b9430b/uri/src/selectors.ts#L34"},"uri/src/selectors.ts:34")))}d.isMDXComponent=!0}}]);