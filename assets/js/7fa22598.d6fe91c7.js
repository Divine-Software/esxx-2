"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8387],{9613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(n),k=a,u=c["".concat(o,".").concat(k)]||c[k]||m[k]||i;return n?r.createElement(u,l(l({ref:t},s),{},{components:n})):r.createElement(u,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7832:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(9624),a=n(42),i=(n(9496),n(9613)),l=["components"],d={id:"divine_uri.Encoder",title:"Class: Encoder",sidebar_label:"Encoder",custom_edit_url:null},o=void 0,p={unversionedId:"api/classes/divine_uri.Encoder",id:"api/classes/divine_uri.Encoder",title:"Class: Encoder",description:"@divine/uri.Encoder",source:"@site/docs/api/classes/divine_uri.Encoder.md",sourceDirName:"api/classes",slug:"/api/classes/divine_uri.Encoder",permalink:"/WSF/docs/api/classes/divine_uri.Encoder",editUrl:null,tags:[],version:"current",frontMatter:{id:"divine_uri.Encoder",title:"Class: Encoder",sidebar_label:"Encoder",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"DatabaseURI",permalink:"/WSF/docs/api/classes/divine_uri.DatabaseURI"},next:{title:"EncoderError",permalink:"/WSF/docs/api/classes/divine_uri.EncoderError"}},s=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"type",id:"type",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"decode",id:"decode",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"encode",id:"encode",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"decode",id:"decode-1",children:[{value:"Parameters",id:"parameters-3",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"encode",id:"encode-1",children:[{value:"Parameters",id:"parameters-4",children:[],level:4},{value:"Returns",id:"returns-3",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"register",id:"register",children:[{value:"Parameters",id:"parameters-5",children:[],level:4},{value:"Returns",id:"returns-4",children:[],level:4},{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3}],level:2}],m={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/divine_uri"},"@divine/uri"),".Encoder"),(0,i.kt)("p",null,"The base class for all encoder subclasses. Encoders can be constructed manually, but usually aren't. Instead, this\nclass provides the static methods ",(0,i.kt)("a",{parentName:"p",href:"divine_uri.Encoder#encode"},"Encoder.encode")," and ",(0,i.kt)("a",{parentName:"p",href:"divine_uri.Encoder#decode"},"Encoder.decode"),"."),(0,i.kt)("p",null,"Encoders transform byte streams and are used, among other things, to handle the ",(0,i.kt)("inlineCode",{parentName:"p"},"content-encoding"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"content-transfer-encoding")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer-encoding")," headers in MIME and HTTP."),(0,i.kt)("p",null,"Below is a list of all known encoders:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Encoding"),(0,i.kt)("th",{parentName:"tr",align:null},"Encoder class"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"7bit")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"divine_uri.IdentityEncoder"},"IdentityEncoder"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"8bit")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"divine_uri.IdentityEncoder"},"IdentityEncoder"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"base64")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"divine_uri.Base64Encoder"},"Base64Encoder"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"base64url")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"divine_uri.Base64Encoder"},"Base64Encoder"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"binary")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"divine_uri.IdentityEncoder"},"IdentityEncoder"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"br")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"divine_uri.ZlibEncoder"},"ZlibEncoder"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"deflate")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"divine_uri.ZlibEncoder"},"ZlibEncoder"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"gzip")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"divine_uri.ZlibEncoder"},"ZlibEncoder"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"identity")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"divine_uri.IdentityEncoder"},"IdentityEncoder"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"quoted-printable")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"divine_uri.QuotedPrintableEncoder"},"QuotedPrintableEncoder"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"x-gzip")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"divine_uri.ZlibEncoder"},"ZlibEncoder"))))),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Encoder"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"divine_uri.IdentityEncoder"},(0,i.kt)("inlineCode",{parentName:"a"},"IdentityEncoder"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"divine_uri.QuotedPrintableEncoder"},(0,i.kt)("inlineCode",{parentName:"a"},"QuotedPrintableEncoder"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"divine_uri.Base64Encoder"},(0,i.kt)("inlineCode",{parentName:"a"},"Base64Encoder"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"divine_uri.ZlibEncoder"},(0,i.kt)("inlineCode",{parentName:"a"},"ZlibEncoder"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("strong",{parentName:"p"},"new Encoder"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"type"),")"),(0,i.kt)("p",null,"Constructs a new Encoder instance."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The encoding format this encoder object was instanciated for.")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/wsf/blob/9b9430b/uri/src/encoders.ts#L114"},"uri/src/encoders.ts:114")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"decode"},"decode"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"decode"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"stream"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncIterable"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer"),">"),(0,i.kt)("p",null,"Decodes the provided byte stream into an new byte stream."),(0,i.kt)("p",null,"This method must be implemented by the actual subclass."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," EncoderError  On decoding errors."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"stream")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"AsyncIterable"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Buffer"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The stream to decode.")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AsyncIterable"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer"),">"),(0,i.kt)("p",null,"The decoded stream."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/wsf/blob/9b9430b/uri/src/encoders.ts#L138"},"uri/src/encoders.ts:138")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"encode"},"encode"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"encode"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"stream"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncIterable"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer"),">"),(0,i.kt)("p",null,"Encodes the provided byte stream into an new byte stream."),(0,i.kt)("p",null,"This method must be implemented by the actual subclass."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," EncoderError  On encoding errors."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"stream")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"AsyncIterable"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Buffer"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The stream to encode.")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AsyncIterable"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer"),">"),(0,i.kt)("p",null,"The encoded stream."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/wsf/blob/9b9430b/uri/src/encoders.ts#L127"},"uri/src/encoders.ts:127")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"decode-1"},"decode"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"decode"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"stream"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"types"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncIterable"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer"),">"),(0,i.kt)("p",null,"Decodes the provided stream using one or more encoders."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," EncoderError  On decoding errors or if the encoding format is not recognized."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"stream")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Buffer")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"AsyncIterable"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Buffer"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The data to encode. If a string, it will first converted to UTF-8.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"types")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"An encoding format or an ordered list of encoding formats to apply (in reverse!) to the                       stream.  A list may either be a comma-separated string or an array of strings.")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AsyncIterable"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer"),">"),(0,i.kt)("p",null,"An encoded byte stream."),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/wsf/blob/9b9430b/uri/src/encoders.ts#L80"},"uri/src/encoders.ts:80")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"encode-1"},"encode"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"encode"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"stream"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"types"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncIterable"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer"),">"),(0,i.kt)("p",null,"Encodes the provided stream using one or more encoders."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," EncoderError  On encoding errors or if the encoding format is not recognized."),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"stream")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Buffer")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"AsyncIterable"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Buffer"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The data to encode. If a string, it will first converted to UTF-8.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"types")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"An encoding format or an ordered list of encoding formats to apply to the stream. A list                       may either be a comma-separated string or an array of strings.")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AsyncIterable"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer"),">"),(0,i.kt)("p",null,"An encoded byte stream."),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/wsf/blob/9b9430b/uri/src/encoders.ts#L55"},"uri/src/encoders.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"register"},"register"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"register"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"encoder"),"): typeof ",(0,i.kt)("a",{parentName:"p",href:"divine_uri.Encoder"},(0,i.kt)("inlineCode",{parentName:"a"},"Encoder"))),(0,i.kt)("p",null,"Registers a new encoder. All subclasses must register their encoding type support with this method."),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The encoding format the encoder can handle.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"encoder")),(0,i.kt)("td",{parentName:"tr",align:"left"},"typeof ",(0,i.kt)("a",{parentName:"td",href:"divine_uri.Encoder"},(0,i.kt)("inlineCode",{parentName:"a"},"Encoder"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Encoder subclass to register.")))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,"typeof ",(0,i.kt)("a",{parentName:"p",href:"divine_uri.Encoder"},(0,i.kt)("inlineCode",{parentName:"a"},"Encoder"))),(0,i.kt)("p",null,"The Encoder base class (for method chaining)."),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/wsf/blob/9b9430b/uri/src/encoders.ts#L41"},"uri/src/encoders.ts:41")))}c.isMDXComponent=!0}}]);