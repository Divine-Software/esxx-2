"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3425],{9613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9271:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=r(9624),a=r(42),o=(r(9496),r(9613)),s=["components"],i={sidebar_position:1},l="Bytes and Text",p={unversionedId:"parse/sequences",id:"parse/sequences",title:"Bytes and Text",description:"The most basic type of parsers are the byte and text parsers. There are two kind of byte parsers, one that collects all",source:"@site/docs/parse/sequences.md",sourceDirName:"parse",slug:"/parse/sequences",permalink:"/WSF/docs/parse/sequences",editUrl:"https://github.com/Divine-Software/WSF/tree/master/website/docs/parse/sequences.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Data Formats",permalink:"/WSF/docs/parse/"},next:{title:"JSON, TOML and YAML",permalink:"/WSF/docs/parse/json-toml-yaml"}},c=[],f={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bytes-and-text"},"Bytes and Text"),(0,o.kt)("p",null,"The most basic type of parsers are the byte and text parsers. There are two kind of byte parsers, one that collects all\nbytes in a byte stream into a ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/buffer.html"},"Buffer"),", and one that just passes each chunk through as they arrive",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". The text parser\ninterprets the byte stream according to some character encoding and converts to JavaScript strings."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Format"),(0,o.kt)("th",{parentName:"tr",align:null},"Main Media Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Parser"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://nodejs.org/api/buffer.html"},"Buffer")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"application/octet-stream")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/WSF/docs/api/classes/divine_uri.BufferParser"},"BufferParser"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Byte stream"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"application/vnd.esxx.octet-stream"),(0,o.kt)("sup",{parentName:"td",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/WSF/docs/api/classes/divine_uri.PassThroughParser"},"PassThroughParser"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Text"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"text/plain")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/WSF/docs/api/classes/divine_uri.StringParser"},"StringParser"))))),(0,o.kt)("p",null,"The Buffer parser is useful when you need to load some resource of unknown type, and the pass-through parser can be used\nfor large objects that wont fit in memory. The text parser understands the most common character encodings, specified by\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"charset")," media type parameter."),(0,o.kt)("p",null,"The following examples shows how an ISO-8859-1-encoded text file might be read into memory in a couple of different\nways",(0,o.kt)("sup",{parentName:"p",id:"fnref-3"},(0,o.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ContentType } from '@divine/headers';\nimport { URI } from '@divine/uri';\n\nconst latin1 = new URI('latin1-file.txt');\nconst buffer = await latin1.load<Buffer>(ContentType.bytes);\nconst string = (await latin1.load('text/plain; charset=iso-8859-1')).valueOf();\nconst stream: Buffer[] = [];\n\nfor await (const chunk of latin1 /* or latin1.load<AsyncIterator<Buffer>>(ContentType.stream) */ ) {\n    stream.push(chunk);\n}\n")),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"In the WSF, byte streams are represented as ",(0,o.kt)("inlineCode",{parentName:"li"},"AsyncIterable<Buffer>"),".",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"This custom media type is only used to identify the pass-through parser and should not be used otherwise.",(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-3"},"Notice how the ",(0,o.kt)("a",{parentName:"li",href:"/WSF/docs/api/classes/divine_uri.URI"},"URI")," class is also an ",(0,o.kt)("inlineCode",{parentName:"li"},"AsyncIterable<Buffer>"),", which can be iterated directly.",(0,o.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);