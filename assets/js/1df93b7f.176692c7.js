"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3237],{3548:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(9496),r=n(1626),i=n(5264),l=n(4461),s=n(418),o="heroBanner_qdFl",c="buttons_AeoN",d=n(9624),m=n(6023),u="features_xdhU",h="featureSvg__8YW",p=[{title:"Connect",href:"docs/connect/",description:a.createElement(a.Fragment,null,"Out of the box, local files and web resources are supported, plus several database protocols. Use the built-in ",a.createElement("var",null,"username/password")," and ",a.createElement("var",null,"bearer token"),"\xa0 authentication schemes, or provide your own.")},{title:"Parse",href:"docs/parse/",description:a.createElement(a.Fragment,null,"Effortlessly read and write any common formats, including CSV, HTML, JSON, TOML, YAML, XML and MIME multi-part messages.")},{title:"Query",href:"docs/query/",description:a.createElement(a.Fragment,null,"With database drivers for H2/JDBC, MySQL/MariaDB, PostgreSQL/CockroachDB, SQLite and SQL Server, persistence should not be a problem. Injection-safe queries, transactiton deadlock handling and CRUD row operations for less pain and more gain.")},{title:"Serve",href:"docs/serve/",description:a.createElement(a.Fragment,null,"Build advanced REST and streaming Web APIs with automatic content negotiation, ETag/precondition handling (coming soon).")}],f=[{title:"@divine/headers",href:"docs/api/modules/divine_headers",description:a.createElement(a.Fragment,null,"Parse and generate common HTTP headers, such as authorization and content headers. This module also works in the browser!")},{title:"@divine/uri",href:"docs/api/modules/divine_uri",description:a.createElement(a.Fragment,null,"Read, write, modify, query or watch anything that can be referenced by an URL or URI, including local files, Web Services and SQL databases.")},{title:"@divine/web-service",href:"docs/api/modules/divine_web_service",description:a.createElement(a.Fragment,null,"A framework for building REST and RPC Web Services, with support for event streams.")},{title:"@divine/x4e",href:"docs/api/modules/divine_x4e",description:a.createElement(a.Fragment,null,"A powerful, E4X-like approach to HTML and XML documents, using JSX/TSX or tagged template literals.")}];function E(e){var t=e.title,n=e.image,i=e.href,s=e.description;return a.createElement("div",{className:(0,r.Z)("col col--3","position--relative")},!!i&&a.createElement(l.Z,{href:i,className:"div-link"}),!!n&&a.createElement("div",{className:"text--center"},a.createElement("img",{className:h,alt:t,src:(0,m.Z)(n)})),a.createElement("div",{className:"text--center padding-horiz--md"},a.createElement("h3",null,t),a.createElement("p",null,s)))}function v(){return a.createElement("section",{className:u},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},p.map((function(e,t){return a.createElement(E,(0,d.Z)({key:t},e))}))),a.createElement("hr",null),a.createElement("div",{className:"row"},f.map((function(e,t){return a.createElement(E,(0,d.Z)({key:t},e))})))))}function g(){var e=(0,s.Z)().siteConfig;return a.createElement("header",{className:(0,r.Z)("hero hero--primary",o)},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},e.title),a.createElement("p",{className:"hero__subtitle"},e.tagline),a.createElement("div",{className:c},a.createElement(l.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Learn More"))))}function b(){var e=(0,s.Z)().siteConfig;return a.createElement(i.Z,{title:e.title,description:e.tagline},a.createElement(g,null),a.createElement("main",null,a.createElement(v,null)))}}}]);