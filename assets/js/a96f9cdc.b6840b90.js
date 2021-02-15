(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{215:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(5),a=n(10),i=(n(2),n(343)),p={id:"introspection",title:"Introspection"},o={unversionedId:"plugins/introspection",id:"plugins/introspection",isDocsHomePage:!1,title:"Introspection",description:"{@import ../generated-config/introspection.md}",source:"@site/docs/plugins/introspection.md",slug:"/plugins/introspection",permalink:"/docs/plugins/introspection",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/introspection.md",version:"current",sidebar:"sidebar",previous:{title:"Urql Introspection for Schema Awareness",permalink:"/docs/plugins/urql-introspection"},next:{title:"Schema AST",permalink:"/docs/plugins/schema-ast"}},c=[],b={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("p",{parentName:"p"},"This plugin generates a GraphQL introspection file based on your GraphQL schema."),Object(i.b)("h2",{parentName:"p"},"Installation"),Object(i.b)("img",{alt:"introspection plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/introspection?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(i.b)("div",Object(r.a)({parentName:"p"},{className:"admonition admonition-shell"}),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(i.b)("path",Object(r.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(i.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/introspection\n")))),Object(i.b)("h2",{parentName:"p"},"API Reference"),Object(i.b)("h3",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"h3"},"minify")),Object(i.b)("p",{parentName:"p"},"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",{parentName:"p"},"Set to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," in order to minify the JSON output."),Object(i.b)("h4",{parentName:"p"},"Usage Examples"),Object(i.b)("pre",{parentName:"p"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\nintrospection.json:\n  plugins:\n    - introspection\n  config:\n    minify: true\n")),Object(i.b)("h3",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"h3"},"descriptions")),Object(i.b)("p",{parentName:"p"},"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"true")),Object(i.b)("p",{parentName:"p"},"Whether to include descriptions in the introspection result."),Object(i.b)("h3",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"h3"},"specifiedByUrl")),Object(i.b)("p",{parentName:"p"},"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",{parentName:"p"},"Whether to include ",Object(i.b)("inlineCode",{parentName:"p"},"specifiedByUrl")," in the introspection result."),Object(i.b)("h3",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"h3"},"directiveIsRepeatable")),Object(i.b)("p",{parentName:"p"},"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"true")),Object(i.b)("p",{parentName:"p"},"Whether to include ",Object(i.b)("inlineCode",{parentName:"p"},"isRepeatable")," flag on directives."),Object(i.b)("h3",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"h3"},"schemaDescription")),Object(i.b)("p",{parentName:"p"},"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",{parentName:"p"},"Whether to include ",Object(i.b)("inlineCode",{parentName:"p"},"description")," field on schema."),Object(i.b)("h3",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"h3"},"federation")),Object(i.b)("p",{parentName:"p"},"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"))))}l.isMDXComponent=!0},343:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(2),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=l(n),d=r,u=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return n?a.a.createElement(u,o(o({ref:t},b),{},{components:n})):a.a.createElement(u,o({ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var b=2;b<i;b++)p[b]=n[b];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);