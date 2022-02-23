"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2794],{9613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7007:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7813),a=n(7044),i=(n(9496),n(9613)),s=["components"],o={sidebar_position:1},l="SQL Queries",u={unversionedId:"query/sql-queries",id:"query/sql-queries",title:"SQL Queries",description:"Executing an SQL query is really simple",source:"@site/docs/query/sql-queries.md",sourceDirName:"query",slug:"/query/sql-queries",permalink:"/WSF/docs/query/sql-queries",editUrl:"https://github.com/Divine-Software/WSF/tree/master/website/docs/query/sql-queries.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Database SQL Queries",permalink:"/WSF/docs/query/"},next:{title:"Transactions",permalink:"/WSF/docs/query/transactions"}},c=[{value:"Utility Functions",id:"utility-functions",children:[],level:2},{value:"CRUD Operations",id:"crud-operations",children:[],level:2},{value:"Handling Results",id:"handling-results",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sql-queries"},"SQL Queries"),(0,i.kt)("p",null,"Executing an SQL query is really simple: just use ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.DatabaseURI#query"},"query")," as a tagged template string:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { URI } from '@divine/uri';\nimport '@divine/uri-tds-protocol'; // Activate optional SQL Server driver\n\n// docker run -e \"ACCEPT_EULA=Y\" -e \"SA_PASSWORD=Pass1234\" -p 1433:1433 -d mcr.microsoft.com/mssql/server\nconst db = new URI('sqlserver://sa:Pass1234@localhost/');\n\nconsole.log(await db.query`select name, create_date from sys.databases where create_date < ${new Date()}`);\n")),(0,i.kt)("p",null,"Under the hood, this seemingly simple query statement launches a connection pool, acquires a connection from that pool,\nprepares the query and binds the parameter in an injection-safe way, executes the query, unpacks the response into an\narray of row objects, and finally returns the connection to the pool and begins monitoring it, keeping it alive and\nready to handle the next query."),(0,i.kt)("p",null,"But you don't really need worry about any of that stuff. Just ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.DatabaseURI#query"},"query")," and wait for the response. You can call ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.DatabaseURI#close"},"close")," to\nshut down the pool when you're done, but individual connections will close automatically when they have been inactive\nfor a while so you don't really have to do that either."),(0,i.kt)("p",null,"Custom configuration is possible via the ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_uri.DBParamsSelector"},"DBParamsSelector"),"\xa0",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.URI#addselector"},"selector"),"."),(0,i.kt)("h2",{id:"utility-functions"},"Utility Functions"),(0,i.kt)("p",null,"The WSF includes utilities in the ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/namespaces/divine_uri.q"},"q")," namespace to make it easier to write SQL queries, including functions to quote\nidentifiers, build ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE")," queries and join subqueries into a single query."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const entities = [ ... ];\nawait db.query`insert into my_table ${q.values(entities)}`;\n")),(0,i.kt)("h2",{id:"crud-operations"},"CRUD Operations"),(0,i.kt)("p",null,"Sometime (often, even?), all you want to do is to access one or more rows in a single table in a straight-forward way.\nFor such situations, the WSF uses its standard URI methods to ",(0,i.kt)("em",{parentName:"p"},"Create")," (",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UPSERT"),"), ",(0,i.kt)("em",{parentName:"p"},"Read")," (",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),"), ",(0,i.kt)("em",{parentName:"p"},"Update"),"\n(",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE"),") and ",(0,i.kt)("em",{parentName:"p"},"Delete")," (",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE"),") table rows without the developer even having to write a query for it."),(0,i.kt)("p",null,"This is described more in detail in the ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/connect/databases"},"database connection")," section, and even more so in the ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.DatabaseURI#crud-row-operations-with-db-references"},"DB references")," API\ndocumentation."),(0,i.kt)("h2",{id:"handling-results"},"Handling Results"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.DatabaseURI#query"},"query")," method always returns an array of objects, where the objects are rows in the result set, and the properties\nof the objects are the columns of the result set. If two or more columns share the same name, the last one wins."),(0,i.kt)("p",null,'The "raw" ',(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.DBResult"},"result sets")," are always available via the ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_uri#fields"},"FIELDS")," array, as specified by the ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_uri.DBMetadata"},"DBMetadata")," and\n",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/interfaces/divine_uri.WithFields"},"WithFields")," interface, from where you can access the original tabular data and meta-information about the result set,\nsuch as ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.DBResult#columns"},"column information"),", the number of ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.DBResult#rowcount"},"rows affected")," by the query and the\nlast ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.DBResult#rowkey"},"generated primary key"),", for ",(0,i.kt)("inlineCode",{parentName:"p"},"IDENTITY")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"AUTOINCREMENT")," columns."),(0,i.kt)("p",null,"Most of the time, the ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_uri#fields"},"FIELDS")," array will only contain a single ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.DBResult"},"DBResult"),", but one of the variants of ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/classes/divine_uri.DatabaseURI#query"},"query")," allows\nfor multiple queries to be executed in the same session, and in that case, the object returned will be from the ",(0,i.kt)("em",{parentName:"p"},"last"),"\nresult set (all which can be accessed via ",(0,i.kt)("a",{parentName:"p",href:"/WSF/docs/api/modules/divine_uri#fields"},"FIELDS"),")."))}d.isMDXComponent=!0}}]);