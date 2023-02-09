"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[6106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=a,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={},i="Prerequisites",s={unversionedId:"general/manage-tokens/advanced/oasis-cli-tools/prerequisites",id:"general/manage-tokens/advanced/oasis-cli-tools/prerequisites",title:"Prerequisites",description:"This sections lists the prerequisites for using your tokens.",source:"@site/docs/general/manage-tokens/advanced/oasis-cli-tools/prerequisites.md",sourceDirName:"general/manage-tokens/advanced/oasis-cli-tools",slug:"/general/manage-tokens/advanced/oasis-cli-tools/prerequisites",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/prerequisites",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/general/manage-tokens/advanced/oasis-cli-tools/prerequisites.md",tags:[],version:"current",lastUpdatedAt:1675933402,formattedLastUpdatedAt:"Feb 9, 2023",frontMatter:{},sidebar:"general",previous:{title:"Oasis CLI Tools",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/"},next:{title:"Setup",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/setup"}},l={},d=[{value:"Oasis Node CLI",id:"oasis-node-cli",level:2},{value:"Ledger-based signer",id:"ledger-based-signer",level:2},{value:"File-based signer",id:"file-based-signer",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"This sections lists the prerequisites for using your tokens."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Currently, the only supported and documented way to use your tokens is by utilizing the Oasis Node CLI in combination with:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/oasis-core-ledger/"},"Ledger-based signer"),", or"),(0,a.kt)("li",{parentName:"ul"},"file-based signer."))),(0,a.kt)("h2",{id:"oasis-node-cli"},"Oasis Node CLI"),(0,a.kt)("p",null,"To setup Oasis Node CLI, follow the ",(0,a.kt)("a",{parentName:"p",href:"/node/run-your-node/prerequisites/oasis-node"},"Oasis Node documentation"),"."),(0,a.kt)("h2",{id:"ledger-based-signer"},"Ledger-based signer"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is only needed if you will use the ",(0,a.kt)("a",{parentName:"p",href:"/general/manage-tokens/holding-rose-tokens/ledger-wallet"},"Ledger wallet")," to hold your tokens.")),(0,a.kt)("p",null,"To use the Ledger-based signer in combination with Oasis Node CLI, follow the ",(0,a.kt)("a",{parentName:"p",href:"/oasis-core-ledger/usage/setup"},"Setup")," guide in our ",(0,a.kt)("a",{parentName:"p",href:"/oasis-core-ledger/"},"Oasis Core Ledger")," docs."),(0,a.kt)("h2",{id:"file-based-signer"},"File-based signer"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"We strongly suggest that you do not use any entity/staking account that is generated with the file-based signer on the Mainnet."),(0,a.kt)("p",{parentName:"admonition"},"In case you need to use the file-based signer, make sure you only use it on an ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Air_gap_(networking)"},"offline/air-gapped machine"),". Gaining access to your entity's/staking account's private key can compromise your tokens.")),(0,a.kt)("p",null,"There are no additional things needed since the file-based signer is a part of Oasis Node CLI."))}p.isMDXComponent=!0}}]);