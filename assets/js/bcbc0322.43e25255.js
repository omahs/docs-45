"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[1088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1564:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7294),r=n(6010),o=n(9960),i=n(3438),l=n(3919),s=n(5999);const d="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return a.createElement(o.Z,{href:t,className:(0,r.Z)("card padding--lg",d)},n)}function c(e){let{href:t,icon:n,title:o,description:i}=e;return a.createElement(m,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",u),title:o},n," ",o),i&&a.createElement("p",{className:(0,r.Z)("text--truncate",p),title:i},i))}function h(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?a.createElement(c,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return a.createElement(c,{href:t.href,icon:n,title:t.label,description:null==r?void 0:r.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(b,{item:t});case"category":return a.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),o=n(6010),i=n(2389),l=n(7392),s=n(7094),d=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:c,groupId:h,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,l.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[w,T]=(0,r.useState)(g),P=[],{blockElementScrollPositionUntilNextRender:x}=(0,d.o5)();if(null!=h){const e=v[h];null!=e&&e!==w&&k.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=P.indexOf(t),a=k[n].value;a!==w&&(x(t),T(a),null!=h&&N(h,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;n=P[t]??P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;n=P[t]??P[P.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},b)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>P.push(e),onKeyDown:C,onClick:E},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},7525:(e,t,n)=>{n.d(t,{n:()=>o});var a=n(4477);function r(e){for(const t of e){const e=t.href;e&&void 0===globalThis.sidebarItemsMap[e]&&(globalThis.sidebarItemsMap[e]=t),"category"===t.type&&r(t.items)}}function o(e){const t=(0,a.E)();if(!t)throw new Error("Unexpected: cant find docsVersion in current context");if(void 0===globalThis.sidebarItemsMap){globalThis.sidebarItemsMap={};for(const e in t.docsSidebars)r(t.docsSidebars[e])}if(void 0===globalThis.sidebarItemsMap[e])throw console.log("Registered sidebar items:"),console.log(globalThis.sidebarItemsMap),new Error("Unexpected: sidebar item with href "+e+" does not exist.");return globalThis.sidebarItemsMap[e]}},5646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(1564),i=n(7525),l=n(5488),s=n(5162);const d={},u="ParaTime Client Node",p={unversionedId:"node/run-your-node/paratime-client-node",id:"node/run-your-node/paratime-client-node",title:"ParaTime Client Node",description:"These instructions are for setting up a ParaTime client node which only observes ParaTime activity and can submit transactions. If you want to run a ParaTime node instead, see the instructions for running a ParaTime node. Similarly, if you want to run a validator or a non-validator node instead, see the instructions for running a validator node or instructions for running a non-validator node.",source:"@site/docs/node/run-your-node/paratime-client-node.mdx",sourceDirName:"node/run-your-node",slug:"/node/run-your-node/paratime-client-node",permalink:"/node/run-your-node/paratime-client-node",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/node/run-your-node/paratime-client-node.mdx",tags:[],version:"current",lastUpdatedAt:1675933402,formattedLastUpdatedAt:"Feb 9, 2023",frontMatter:{},sidebar:"operators",previous:{title:"ParaTime Node",permalink:"/node/run-your-node/paratime-node"},next:{title:"Key Manager Node",permalink:"/node/run-your-node/keymanager-node/"}},m={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"The ParaTime Bundle",id:"the-paratime-bundle",level:3},{value:"Install ParaTime Bundle",id:"install-paratime-bundle",level:3},{value:"Install Bubblewrap Sandbox (at least version 0.3.3)",id:"install-bubblewrap-sandbox-at-least-version-033",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Starting the Oasis Node",id:"starting-the-oasis-node",level:2},{value:"Checking Node Status",id:"checking-node-status",level:2},{value:"See also",id:"see-also",level:2}],h={toc:c};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"paratime-client-node"},"ParaTime Client Node"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"These instructions are for setting up a ",(0,r.kt)("em",{parentName:"p"},"ParaTime client")," node which only observes ParaTime activity and can submit transactions. If you want to run a ",(0,r.kt)("em",{parentName:"p"},"ParaTime")," node instead, see the ",(0,r.kt)("a",{parentName:"p",href:"/node/run-your-node/paratime-node"},"instructions for running a ParaTime node"),". Similarly, if you want to run a ",(0,r.kt)("em",{parentName:"p"},"validator")," or a ",(0,r.kt)("em",{parentName:"p"},"non-validator")," node instead, see the ",(0,r.kt)("a",{parentName:"p",href:"/node/run-your-node/validator-node/"},"instructions for running a validator node")," or ",(0,r.kt)("a",{parentName:"p",href:"/node/run-your-node/non-validator-node"},"instructions for running a non-validator node"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are looking for some concrete ParaTimes that you can run, see ",(0,r.kt)("a",{parentName:"p",href:"/get-involved/run-node/paratime-node"},"the list of ParaTimes and their parameters"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Oasis Core refers to ParaTimes as runtimes internally, so all configuration options will have runtime in their name.")),(0,r.kt)("p",null,"This guide will cover setting up your ParaTime client node for the Oasis Network. This guide assumes some basic knowledge on the use of command line tools."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before following this guide, make sure you've followed the ",(0,r.kt)("a",{parentName:"p",href:"prerequisites"},"Prerequisites")," and ",(0,r.kt)("a",{parentName:"p",href:"/node/run-your-node/non-validator-node"},"Run a Non-validator Node")," sections and have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Oasis Node binary installed and configured on your system."),(0,r.kt)("li",{parentName:"ul"},"The chosen top-level ",(0,r.kt)("inlineCode",{parentName:"li"},"/node/")," working directory prepared. In addition to ",(0,r.kt)("inlineCode",{parentName:"li"},"etc")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," directories, also prepare the following directories:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bin"),": This will store binaries needed by Oasis Node for running the ParaTimes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"runtimes"),": This will store the ParaTime bundles.")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Feel free to name your working directory as you wish, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/srv/oasis/"),"."),(0,r.kt)("p",{parentName:"admonition"},"Just make sure to use the correct working directory path in the instructions below.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Genesis file copied to ",(0,r.kt)("inlineCode",{parentName:"li"},"/node/etc/genesis.json"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Reading the rest of the ",(0,r.kt)("a",{parentName:"p",href:"/node/run-your-node/paratime-node"},"ParaTime node setup instructions")," may also be useful.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To speed up bootstraping your new node, we recommend ",(0,r.kt)("a",{parentName:"p",href:"/node/run-your-node/advanced/copy-state-from-one-node-to-the-other"},"copying node's state from your existing node")," or ",(0,r.kt)("a",{parentName:"p",href:"/node/run-your-node/advanced/sync-node-using-state-sync"},"syncing it using state sync"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Running a ParaTime client node doesn't require registering an entity or its nodes."),(0,r.kt)("p",{parentName:"admonition"},"It also doesn't require having any stake.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Running a client node for a ParaTime that runs in a Trusted Execution Environment (TEE) doesn't require having the same  TEE available on the ParaTime client node."),(0,r.kt)("p",{parentName:"admonition"},"For example, running a ParaTime client node for an SGX-enabled ParaTime like Cipher doesn't require having SGX on the ParaTime client node.")),(0,r.kt)("h3",{id:"the-paratime-bundle"},"The ParaTime Bundle"),(0,r.kt)("p",null,"In order to run a ParaTime node you need to obtain the ParaTime bundle that\nneeds to come from a trusted source. The bundle (usually with an ",(0,r.kt)("inlineCode",{parentName:"p"},".orc"),"\nextension that stands for Oasis Runtime Container) contains all the needed\nParaTime binaries together with the identifier and version metadata to ease\ndeployment."),(0,r.kt)("p",null,"When the ParaTime is running in a Trusted Execution Environment (TEE) the bundle\nwill also contain all the required artifacts (e.g. SGXS version of the binary\nand any enclave signatures)."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Like the genesis document, make sure you obtain these from a trusted source.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("h4",{parentName:"admonition",id:"compiling-the-paratime-binary-from-source-code"},(0,r.kt)("strong",{parentName:"h4"},"Compiling the ParaTime Binary from Source Code")),(0,r.kt)("p",{parentName:"admonition"},"In case you decide to build the ParaTime binary from source yourself, make sure\nthat you follow our ",(0,r.kt)("a",{parentName:"p",href:"../../paratime/reproducibility"},"guidelines for deterministic compilation"),"\nto ensure that you receive the exact same binary.")),(0,r.kt)("h3",{id:"install-paratime-bundle"},"Install ParaTime Bundle"),(0,r.kt)("p",null,"For each ParaTime, you need to obtain its bundle and install it to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"runtimes")," subdirectory of your node's working directory."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For example, for the ",(0,r.kt)("a",{parentName:"p",href:"/node/mainnet/#cipher-paratime"},"Cipher ParaTime"),",\nyou would have to obtain the ",(0,r.kt)("inlineCode",{parentName:"p"},"cipher-paratime.orc")," bundle and install it to\n",(0,r.kt)("inlineCode",{parentName:"p"},"/node/runtimes/cipher-paratime.orc"),".")),(0,r.kt)("h3",{id:"install-bubblewrap-sandbox-at-least-version-033"},"Install Bubblewrap Sandbox (at least version 0.3.3)"),(0,r.kt)("p",null,"ParaTime client nodes execute ParaTime binaries inside a sandboxed environment provided by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/bubblewrap"},"Bubblewrap"),". In order to install it, please follow these instructions, depending on your distribution:"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Ubuntu 18.10+",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install bubblewrap\n"))),(0,r.kt)(s.Z,{value:"Fedora",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install bubblewrap\n"))),(0,r.kt)(s.Z,{value:"other",label:"Other Distributions",mdxType:"TabItem"},"On other systems, you can download the latest [source release provided by the Bubblewrap project](https://github.com/containers/bubblewrap/releases) and build it yourself.",(0,r.kt)("p",null,"Make sure you have the necessary development tools installed on your system and the ",(0,r.kt)("inlineCode",{parentName:"p"},"libcap")," development headers. On Ubuntu, you can install them with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install build-essential libcap-dev\n")),(0,r.kt)("p",null,"After obtaining the Bubblewrap source tarball, e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/bubblewrap/releases/download/v0.4.1/bubblewrap-0.4.1.tar.xz"},"bubblewrap-0.4.1.tar.xz"),", run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tar -xf bubblewrap-0.4.1.tar.xz\ncd bubblewrap-0.4.1\n./configure --prefix=/usr\nmake\nsudo make install\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Note that Oasis Node expects Bubblewrap to be installed under ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/bin/bwrap")," by default.")))),(0,r.kt)("p",null,"Ensure you have a new enough version by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bwrap --version\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Ubuntu 18.04 LTS (and earlier) provide overly-old ",(0,r.kt)("inlineCode",{parentName:"p"},"bubblewrap"),". Follow ",(0,r.kt)("em",{parentName:"p"},"Other Distributions")," section on those systems.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"In order to configure the ParaTime client node, create the ",(0,r.kt)("inlineCode",{parentName:"p"},"/node/etc/config.yml")," file with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'datadir: /node/data\n\nlog:\n  level:\n    default: info\n    tendermint: info\n    tendermint/context: error\n  format: JSON\n\ngenesis:\n  file: /node/etc/genesis.json\n\nconsensus:\n  tendermint:\n    p2p:\n      # List of seed nodes to connect to.\n      # NOTE: You can add additional seed nodes to this list if you want.\n      seed:\n        - "{{ seed_node_address }}"\n\nruntime:\n  mode: client\n  paths:\n    # Paths to ParaTime bundles for all of the supported ParaTimes.\n    - "{{ runtime_orc_path }}"\n')),(0,r.kt)("p",null,"Before using this configuration you should collect the following information to replace  the  variables present in the configuration file:."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{{ seed_node_address }}"),": The seed node address in the form ",(0,r.kt)("inlineCode",{parentName:"li"},"ID@IP:port"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can find the current Oasis Seed Node address in the ",(0,r.kt)("a",{parentName:"li",href:"/node/mainnet/"},"Network Parameters"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{{ runtime_orc_path }}"),": Path to the ",(0,r.kt)("a",{parentName:"li",href:"/node/run-your-node/paratime-client-node#the-paratime-bundle"},"ParaTime bundle")," of the form ",(0,r.kt)("inlineCode",{parentName:"li"},"/node/runtimes/foo-paratime.orc"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can find the current Oasis-supported ParaTimes in the ",(0,r.kt)("a",{parentName:"li",href:"/node/mainnet/#paratimes"},"Network Paramers"),".")))),(0,r.kt)("h2",{id:"starting-the-oasis-node"},"Starting the Oasis Node"),(0,r.kt)("p",null,"You can start the node by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node --config /node/etc/config.yml\n")),(0,r.kt)("h2",{id:"checking-node-status"},"Checking Node Status"),(0,r.kt)("p",null,"To ensure that your node is properly connected with the network, you can run the following command after the node has started:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node control status -a unix:/node/data/internal.sock\n")),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)(o.Z,{item:(0,i.n)("/node/web3"),mdxType:"DocCard"}))}b.isMDXComponent=!0}}]);