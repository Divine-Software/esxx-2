"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9287],{9613:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>f});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=d(a),u=n,f=m["".concat(p,".").concat(u)]||m[u]||k[u]||i;return a?r.createElement(f,l(l({ref:t},o),{},{components:a})):r.createElement(f,l({ref:t},o))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2449:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=a(2564),n=(a(9496),a(9613));const i={id:"divine_uri.MessageParser",title:"Class: MessageParser",sidebar_label:"@divine/uri.MessageParser",custom_edit_url:null},l=void 0,s={unversionedId:"api/classes/divine_uri.MessageParser",id:"api/classes/divine_uri.MessageParser",title:"Class: MessageParser",description:"@divine/uri.MessageParser",source:"@site/docs/api/classes/divine_uri.MessageParser.md",sourceDirName:"api/classes",slug:"/api/classes/divine_uri.MessageParser",permalink:"/WSF/docs/api/classes/divine_uri.MessageParser",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"divine_uri.MessageParser",title:"Class: MessageParser",sidebar_label:"@divine/uri.MessageParser",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"@divine/uri.JSONParser",permalink:"/WSF/docs/api/classes/divine_uri.JSONParser"},next:{title:"@divine/uri.MultiPartParser",permalink:"/WSF/docs/api/classes/divine_uri.MultiPartParser"}},p={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"contentType",id:"contenttype",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"_assertSerializebleData",id:"_assertserializebledata",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"parse",id:"parse",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"serialize",id:"serialize",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"parse",id:"parse-1",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"register",id:"register",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"serialize",id:"serialize-1",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"serializeToBuffer",id:"serializetobuffer",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-8",level:4}],o={toc:d},m="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_uri"},"@divine/uri"),".MessageParser"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"message/*")," parser handles all kinds of messages, including ",(0,n.kt)("inlineCode",{parentName:"p"},"message/rfc822"),"."),(0,n.kt)("p",null,"The parsed data is a ",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_uri.MimeMessage"},"MimeMessage"),", but the serializer can handle any ",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_uri.MimeMessageLike"},"MimeMessageLike")," object."),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser"},(0,n.kt)("inlineCode",{parentName:"a"},"Parser"))),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"MessageParser"))))),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,n.kt)("strong",{parentName:"p"},"new MessageParser"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"contentType"),")"),(0,n.kt)("p",null,"Constructs a new Parser instance."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"contentType")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ContentType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The media type this parser object was instanciated for.")))),(0,n.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser"},"Parser"),".",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser#constructor"},"constructor")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/uri/src/parsers.ts#L214"},"uri/src/parsers.ts:214")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"contenttype"},"contentType"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"contentType"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"ContentType")),(0,n.kt)("p",null,"The media type this parser object was instanciated for."),(0,n.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser"},"Parser"),".",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser#contenttype"},"contentType")),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/uri/src/parsers.ts#L214"},"uri/src/parsers.ts:214")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"_assertserializebledata"},"_","assertSerializebleData"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,n.kt)("strong",{parentName:"p"},"_assertSerializebleData"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"condition"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"cause?"),"): asserts condition"),(0,n.kt)("p",null,"A helper method used by parser subclasses to report invalid input."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"condition")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Must be ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", or else a ",(0,n.kt)("a",{parentName:"td",href:"/WSF/docs/api/classes/divine_uri.ParserError"},"ParserError")," will be raised.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"unknown")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Some kind of extra information that will be provided in ",(0,n.kt)("a",{parentName:"td",href:"/WSF/docs/api/classes/divine_uri.AuthSchemeError#data"},"data"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"cause?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"unknown")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If this error was caused by some other kind of failure, the original error will be available as ",(0,n.kt)("a",{parentName:"td",href:"/WSF/docs/api/classes/divine_uri.AuthSchemeError#cause"},"cause"),".")))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,"asserts condition"),(0,n.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser"},"Parser"),".",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser#_assertserializebledata"},"_assertSerializebleData")),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/uri/src/parsers.ts#L246"},"uri/src/parsers.ts:246")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"parse"},"parse"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"parse"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"stream"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_uri.MimeMessage"},(0,n.kt)("inlineCode",{parentName:"a"},"MimeMessage")),">"),(0,n.kt)("p",null,"Parses a stream and returns the result as a parser-specific representation."),(0,n.kt)("p",null,"This method must be implemented by the actual subclass."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"ParserError  On parser errors."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"stream")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"AsyncIterable"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"Buffer"),">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The stream to parse.")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_uri.MimeMessage"},(0,n.kt)("inlineCode",{parentName:"a"},"MimeMessage")),">"),(0,n.kt)("p",null,"The parsed stream."),(0,n.kt)("h4",{id:"overrides"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser"},"Parser"),".",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser#parse"},"parse")),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/uri/src/parsers/forms.ts#L109"},"uri/src/parsers/forms.ts:109")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"serialize"},"serialize"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"serialize"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"AsyncIterable"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"Buffer"),">"),(0,n.kt)("p",null,"Serializes a parsed or manually constructed object back into a Buffer or byte stream."),(0,n.kt)("p",null,"This method must be implemented by the actual subclass."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"ParserError  On serialization errors."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/WSF/docs/api/interfaces/divine_uri.MimeMessageLike"},(0,n.kt)("inlineCode",{parentName:"a"},"MimeMessageLike"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"A parser-specific representation that is to be serialized.")))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"AsyncIterable"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"Buffer"),">"),(0,n.kt)("p",null,"A Buffer or a byte stream."),(0,n.kt)("h4",{id:"overrides-1"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser"},"Parser"),".",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser#serialize"},"serialize")),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/uri/src/parsers/forms.ts#L137"},"uri/src/parsers/forms.ts:137")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"parse-1"},"parse"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"parse"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,n.kt)("inlineCode",{parentName:"p"},"stream"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"contentType"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_uri.Finalizable"},(0,n.kt)("inlineCode",{parentName:"a"},"Finalizable")),">"),(0,n.kt)("p",null,"Parses a given string, Buffer or byte stream using a parser registered for a specific media type."),(0,n.kt)("p",null,"NOTE: This method ",(0,n.kt)("em",{parentName:"p"},"always returns an object"),". Primitives are never returned. This means that text, for instance\nwill be returned as a String object, ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," as Object(",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_uri#null"},"NULL"),") and ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," as Object(",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_uri#void"},"VOID"),"). You\nmay use ",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_uri#toprimitive"},"toPrimitive")," to return the original value, or use ",(0,n.kt)("inlineCode",{parentName:"p"},".valueOf()")," and test the result against the\n",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_uri#null"},"NULL")," and ",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_uri#void"},"VOID")," symbols."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"ParserError  On parser errors or if the media type is not recognized."),(0,n.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The type of the returned object.")))),(0,n.kt)("h4",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"stream")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"Buffer")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"AsyncIterable"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"Buffer"),">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The source that should be parsed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"contentType")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"ContentType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The media type that specifies what parser to use.")))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"T")," & ",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_uri.Finalizable"},(0,n.kt)("inlineCode",{parentName:"a"},"Finalizable")),">"),(0,n.kt)("p",null,"An ",(0,n.kt)("em",{parentName:"p"},"object")," (always an object) that represents the original source after parsing. It's\npossible that the Parser subclass allocated temporary resources as part of the process.\nThese resources may be cleaned up by calling ",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_uri#finalize"},"FINALIZE"),"."),(0,n.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser"},"Parser"),".",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser#parse-1"},"parse")),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/uri/src/parsers.ts#L106"},"uri/src/parsers.ts:106")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"register"},"register"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"register"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"parser"),"): typeof ",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser"},(0,n.kt)("inlineCode",{parentName:"a"},"Parser"))),(0,n.kt)("p",null,"Registers a new parser/serializer. All subclasses must register their MIME media type support with this method."),(0,n.kt)("h4",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"type")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"RegExp")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The content/media type the parser can handle.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"parser")),(0,n.kt)("td",{parentName:"tr",align:"left"},"typeof ",(0,n.kt)("a",{parentName:"td",href:"/WSF/docs/api/classes/divine_uri.Parser"},(0,n.kt)("inlineCode",{parentName:"a"},"Parser"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The Parser subclass to register.")))),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,"typeof ",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser"},(0,n.kt)("inlineCode",{parentName:"a"},"Parser"))),(0,n.kt)("p",null,"The Parser base class (for method chaining)."),(0,n.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser"},"Parser"),".",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser#register"},"register")),(0,n.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/uri/src/parsers.ts#L85"},"uri/src/parsers.ts:85")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"serialize-1"},"serialize"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"serialize"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,n.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"contentType?"),"): ","[",(0,n.kt)("inlineCode",{parentName:"p"},"Buffer")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"Readable")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"AsyncIterable"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"Buffer"),">",", ",(0,n.kt)("inlineCode",{parentName:"p"},"ContentType"),"]"),(0,n.kt)("p",null,"Converts a parsed (or manually constructed) object back into a byte stream representation."),(0,n.kt)("p",null,"Buffers and ReadableStream will be passed through as-is. Strings will just be encoded using the ",(0,n.kt)("inlineCode",{parentName:"p"},"charset")," param\nfrom ",(0,n.kt)("inlineCode",{parentName:"p"},"contentType")," (or UTF-8 if not present). Everything else is serialized using a Parser subclass."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"ParserError  On serialization errors or if the media type is not recognized."),(0,n.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"unknown")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The type of the object that is to be serialized.")))),(0,n.kt)("h4",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The object that is to be serialized.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"contentType?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"ContentType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The media type that specifies what parser to use.")))),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,"[",(0,n.kt)("inlineCode",{parentName:"p"},"Buffer")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"Readable")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"AsyncIterable"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"Buffer"),">",", ",(0,n.kt)("inlineCode",{parentName:"p"},"ContentType"),"]"),(0,n.kt)("p",null,"A tuple containing the Buffer/byte stream and the actual media type. Note that the parser\nmay return a slightly different media type than was given (for instance,\n",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.MultiPartParser"},"MultiPartParser")," might add a boundary param if none was given)."),(0,n.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser"},"Parser"),".",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser#serialize-1"},"serialize")),(0,n.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/uri/src/parsers.ts#L132"},"uri/src/parsers.ts:132")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"serializetobuffer"},"serializeToBuffer"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"serializeToBuffer"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,n.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"contentType?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[",(0,n.kt)("inlineCode",{parentName:"p"},"Buffer"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ContentType"),"]",">"),(0,n.kt)("p",null,"Converts a parsed (or manually constructed) object into a Buffer."),(0,n.kt)("p",null,"This is a convenience method that just invokes ",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser#parse-1"},"parse")," and then converts the byte stream into a single\nBuffer."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"ParserError  On serialization errors or if the media type is not recognized."),(0,n.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,n.kt)("h4",{id:"parameters-7"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The object that is to be serialized.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"contentType?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"ContentType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The media type that specifies what parser to use.")))),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<","[",(0,n.kt)("inlineCode",{parentName:"p"},"Buffer"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ContentType"),"]",">"),(0,n.kt)("p",null,"A tuple containing the Buffer and the actual media type. Note that the parser may return a\nslightly different media type than was given (for instance, ",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.MultiPartParser"},"MultiPartParser")," might\nadd a boundary param if none was given)."),(0,n.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser"},"Parser"),".",(0,n.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.Parser#serializetobuffer"},"serializeToBuffer")),(0,n.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Divine-Software/WSF/blob/c3447be/uri/src/parsers.ts#L183"},"uri/src/parsers.ts:183")))}k.isMDXComponent=!0}}]);