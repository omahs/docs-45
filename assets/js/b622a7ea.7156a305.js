"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[9627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,h=d["".concat(l,".").concat(c)]||d[c]||p[c]||a;return n?i.createElement(h,o(o({ref:t},m),{},{components:n})):i.createElement(h,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const a={},o="Modules",s={unversionedId:"paratime/modules",id:"paratime/modules",title:"Modules",description:"As we saw in the [minimal runtime example], creating an Oasis runtime is very",source:"@site/docs/paratime/modules.md",sourceDirName:"paratime",slug:"/paratime/modules",permalink:"/paratime/modules",draft:!1,editUrl:"https://github.com/oasisprotocol/oasis-sdk/edit/main/docs/runtime/modules.md",tags:[],version:"current",lastUpdatedAt:1675933402,formattedLastUpdatedAt:"Feb 9, 2023",frontMatter:{},sidebar:"paratime",previous:{title:"Minimal Runtime",permalink:"/paratime/minimal-runtime"},next:{title:"Reproducibility",permalink:"/paratime/reproducibility"}},l={},u=[{value:"Runtime Trait",id:"runtime-trait",level:2},{value:"Version",id:"version",level:3},{value:"List of Modules",id:"list-of-modules",level:3},{value:"Genesis State",id:"genesis-state",level:3},{value:"Module Lifecycle Traits",id:"module-lifecycle-traits",level:2},{value:"Context",id:"context",level:2},{value:"Putting It All Together",id:"putting-it-all-together",level:2}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"modules"},"Modules"),(0,r.kt)("p",null,"As we saw in the ",(0,r.kt)("a",{parentName:"p",href:"/paratime/minimal-runtime"},"minimal runtime example"),", creating an Oasis runtime is very\neasy to do thanks to the boilerplate provided by the Oasis SDK. The example\nhinted that almost all of the implementation of the state transition function\nis actually hidden inside the ",(0,r.kt)("em",{parentName:"p"},"modules")," that are composed together to form a\nruntime."),(0,r.kt)("p",null,"This section explores how modules are built."),(0,r.kt)("h2",{id:"runtime-trait"},"Runtime Trait"),(0,r.kt)("p",null,"Let's briefly revisit the ",(0,r.kt)("inlineCode",{parentName:"p"},"Runtime")," trait which is what brings everything\ntogether. As we saw when ",(0,r.kt)("a",{parentName:"p",href:"/paratime/minimal-runtime#runtime-definition"},"defining the minimal runtime"),", the trait requires\nimplementing some basic things:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl sdk::Runtime for Runtime {\n    // Use the crate version from Cargo.toml as the runtime version.\n    const VERSION: Version = sdk::version_from_cargo!();\n\n    // Define the modules that the runtime will be composed of.\n    type Modules = (modules::core::Module, modules::accounts::Module);\n\n    // Define the genesis (initial) state for all of the specified modules. This\n    // state is used when the runtime is first initialized.\n    //\n    // The return value is a tuple of states in the same order as the modules\n    // are defined above.\n    fn genesis_state() -> <Self::Modules as sdk::module::MigrationHandler>::Genesis {\n        (\n            // Core module.\n            modules::core::Genesis {\n                // ... snip ...\n            },\n            // Accounts module.\n            modules::accounts::Genesis {\n                // ... snip ...\n            },\n        )\n    }\n}\n")),(0,r.kt)("h3",{id:"version"},"Version"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"VERSION")," constant is pretty self-explanatory as it makes it possible to\nversion runtimes and check compatibility with other nodes. The versioning scheme\nfollows ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning")," with the following semantics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"major")," version is used when determining state transition function\ncompatibility. If any introduced change could lead to a discrepancy when\nrunning alongside a previous version, the major version ",(0,r.kt)("em",{parentName:"p"},"must")," be bumped."),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("a",{parentName:"p",href:"/core/consensus/services/scheduler"},"Oasis Core scheduler service")," will make sure to only schedule nodes which\nare running a compatible version in order to make upgrades easier.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"minor")," and ",(0,r.kt)("strong",{parentName:"p"},"patch")," versions are ignored when determining\ncompatibility and can be used for non-breaking features or fixes."))),(0,r.kt)("h3",{id:"list-of-modules"},"List of Modules"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Modules")," associated type contains all of the module types that compose the\nruntime. Due to the way modules are defined, you can specify multiple modules\nby using a tuple."),(0,r.kt)("h3",{id:"genesis-state"},"Genesis State"),(0,r.kt)("p",null,"The genesis state is the initial state of the runtime. It is used when the\nruntime is first deployed to populate the initial persistent state of all of the\nmodules."),(0,r.kt)("p",null,"Each module can define its own genesis state format together with the methods\nfor transforming that genesis state into internal persistent state."),(0,r.kt)("h2",{id:"module-lifecycle-traits"},"Module Lifecycle Traits"),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("h2",{id:"putting-it-all-together"},"Putting It All Together"))}p.isMDXComponent=!0}}]);