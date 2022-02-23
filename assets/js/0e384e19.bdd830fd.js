"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9671],{9613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2335:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var r=n(7813),a=n(7044),i=(n(9496),n(9613)),o=["components"],s={sidebar_label:"Introduction",sidebar_position:1},c="The Divine Web Service Framework",l={unversionedId:"intro",id:"intro",title:"The Divine Web Service Framework",description:"Eons ago, before Node.js even existed, the author of this framework desired a powerful, secure and easy to use",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/WSF/docs/intro",editUrl:"https://github.com/Divine-Software/WSF/tree/master/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Accessing Resources",permalink:"/WSF/docs/connect/"}},d=[{value:"Overview",id:"overview",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-divine-web-service-framework"},"The Divine Web Service Framework"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Eons")," ago, before Node.js even existed, the author of this framework desired a powerful, secure and easy to use\nplatform for building web services. Out of that desire came ",(0,i.kt)("em",{parentName:"p"},"ESXX"),", a Java-based web application server that\nincorporated Rhino to run multithreaded web services written in JavaScript, provided safe and easy to use interfaces to\nSQL databases, used JSON or E4X for view models and the ",(0,i.kt)("em",{parentName:"p"},"Saxon XSLT processor")," to transform the documents/models into\nHTML for the clients."),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Divine Web Service Framework")," is the spiritual successor of that project, taking everything that was good about it\nand reimagining it for the modern era."),(0,i.kt)("p",null,"Gone is the server-side templating support \u2014 we write client side web applications now \u2014 and E4X is since long dead",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),",\nbut the focus on web standards and correctness, developer friendly and secure, injection-safe ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.DatabaseURI"},"interfaces"),"\nto SQL databases, aversion to callbacks \u2014 thanks God for ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," \u2014 and the ubiquitous ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.URI"},"URI")," class are some\nof the good things that remain."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In one sense, the WSF is just a collection of Node.js modules that happens to have something to do with the web. But\neach module serves a purpose, and together they form a powerful framework for writing TypeScript web services."),(0,i.kt)("p",null,"There are two main modules in WSF:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/WSF/docs/api/modules/divine_uri"},"@divine/uri"),', call it the "client" API if you wish, handles everything I/O: accessing local and remote resources of\nall kinds, parsing and serializing data, encoding and decoding byte streams, handling authentication.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/WSF/docs/api/modules/divine_web_service"},"@divine/web-service"),', the "server" API, is all about building world-class REST web APIs and RPC micro-services, with\nadvanced features such as streaming, ETag and precondition handling, and content negotiation. ',(0,i.kt)("em",{parentName:"li"},"Caveat emptor: the\nmodule does")," ",(0,i.kt)("strong",{parentName:"li"},"not yet")," ",(0,i.kt)("em",{parentName:"li"},"have all those advanced features. But it will one day."))),(0,i.kt)("p",null,"The bulk of the WSF documentation is provided in the form of API documentation, so please go ahead and click those links\nabove. In the following sections, we will instead focus on a few use cases and recipes for how to handle them."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ECMAScript_for_XML"},"E4X")," might be dead, but the ",(0,i.kt)("a",{parentName:"li",href:"/WSF/docs/api/modules/divine_x4e"},"@divine/x4e")," module is worth checking out if you need to work with HTML or XML. It\nit heavily inspired by E4X, but redesigned for modern TypeScript/JavaScript and ",(0,i.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/jsx.html"},"TSX"),"/",(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/introducing-jsx.html"},"JSX"),".",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);