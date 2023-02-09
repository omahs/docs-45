"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[6784],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=r,f=h["".concat(l,".").concat(u)]||h[u]||c[u]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1564:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7294),r=n(6010),o=n(9960),i=n(3438),s=n(3919),l=n(5999);const p="cardContainer_fWXF",d="cardTitle_rnsV",c="cardDescription_PWke";function h(e){let{href:t,children:n}=e;return a.createElement(o.Z,{href:t,className:(0,r.Z)("card padding--lg",p)},n)}function u(e){let{href:t,icon:n,title:o,description:i}=e;return a.createElement(h,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",d),title:o},n," ",o),i&&a.createElement("p",{className:(0,r.Z)("text--truncate",c),title:i},i))}function f(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?a.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return a.createElement(u,{href:t.href,icon:n,title:t.label,description:null==r?void 0:r.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(m,{item:t});case"category":return a.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},7525:(e,t,n)=>{n.d(t,{n:()=>o});var a=n(4477);function r(e){for(const t of e){const e=t.href;e&&void 0===globalThis.sidebarItemsMap[e]&&(globalThis.sidebarItemsMap[e]=t),"category"===t.type&&r(t.items)}}function o(e){const t=(0,a.E)();if(!t)throw new Error("Unexpected: cant find docsVersion in current context");if(void 0===globalThis.sidebarItemsMap){globalThis.sidebarItemsMap={};for(const e in t.docsSidebars)r(t.docsSidebars[e])}if(void 0===globalThis.sidebarItemsMap[e])throw console.log("Registered sidebar items:"),console.log(globalThis.sidebarItemsMap),new Error("Unexpected: sidebar item with href "+e+" does not exist.");return globalThis.sidebarItemsMap[e]}},6795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(1564),i=n(7525);const s={},l="Quickstart",p={unversionedId:"dapp/sapphire/quickstart",id:"dapp/sapphire/quickstart",title:"Quickstart",description:"In this tutorial, you'll port an Eth project in under 10 minutes, and then go on",source:"@site/docs/dapp/sapphire/quickstart.mdx",sourceDirName:"dapp/sapphire",slug:"/dapp/sapphire/quickstart",permalink:"/dapp/sapphire/quickstart",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/dapp/sapphire/quickstart.mdx",tags:[],version:"current",lastUpdatedAt:1675933402,formattedLastUpdatedAt:"Feb 9, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Sapphire ParaTime",permalink:"/dapp/sapphire/"},next:{title:"Guide",permalink:"/dapp/sapphire/guide"}},d={},c=[{value:"Port an Eth project",id:"port-an-eth-project",level:2},{value:"Setup",id:"setup",level:3},{value:"Deploy to Emerald (non-confidential EVM)",id:"deploy-to-emerald-non-confidential-evm",level:3},{value:"Get some Emerald Testnet tokens",id:"get-some-emerald-testnet-tokens",level:4},{value:"Add the Emerald Testnet to Truffle",id:"add-the-emerald-testnet-to-truffle",level:4},{value:"Do the Truffle Thing",id:"do-the-truffle-thing",level:4},{value:"Deploy to Sapphire (confidential EVM)",id:"deploy-to-sapphire-confidential-evm",level:3},{value:"Get some Sapphire Testnet tokens",id:"get-some-sapphire-testnet-tokens",level:4},{value:"Add the Sapphire Testnet to Truffle",id:"add-the-sapphire-testnet-to-truffle",level:4},{value:"Port to Sapphire",id:"port-to-sapphire",level:4},{value:"Create a Sapphire-Native dApp",id:"create-a-sapphire-native-dapp",level:2},{value:"Init a new Hardhat project",id:"init-a-new-hardhat-project",level:3},{value:"Add the Sapphire Testnet to Hardhat",id:"add-the-sapphire-testnet-to-hardhat",level:3},{value:"Get the Contract",id:"get-the-contract",level:3},{value:"Vigil.sol, the interesting parts",id:"vigilsol-the-interesting-parts",level:4},{value:"Run the Contract",id:"run-the-contract",level:3},{value:"All done!",id:"all-done",level:2},{value:"See also",id:"see-also",level:2}],h={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quickstart"},"Quickstart"),(0,r.kt)("p",{style:{width:"100%"}},(0,r.kt)("iframe",{style:{margin:"auto",display:"block"},width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/ePp1fFSmKgI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("p",null,"In this tutorial, you'll port an Eth project in under 10 minutes, and then go on\nto deploy a unique dApp that requires confidentiality to work.\nBy the end of the tutorial, you should feel comfortable setting up your Eth\ndevelopment environment to target Sapphire, and know how and when to use\nconfidentiality."),(0,r.kt)("p",null,"The expected completion time of this tutorial is 30 minutes."),(0,r.kt)("h2",{id:"port-an-eth-project"},"Port an Eth project"),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Start by installing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/trufflesuite/truffle#install"},"Truffle"),"."),(0,r.kt)("p",null,"Then, run these commands in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'mkdir MetaCoin && cd MetaCoin\ntruffle unbox MetaCoin\ngit init\ngit add :/ && git commit -m "Initial commit"\npnpm init && pnpm add -D @truffle/hdwallet-provider\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This tutorial uses ",(0,r.kt)("a",{parentName:"p",href:"https://pnpm.io/installation"},"pnpm"),", an efficient Node\npackage manager. You can just as easily use ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," by replacing\n",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," with either of those.")),(0,r.kt)("h3",{id:"deploy-to-emerald-non-confidential-evm"},"Deploy to Emerald (non-confidential EVM)"),(0,r.kt)("h4",{id:"get-some-emerald-testnet-tokens"},"Get some Emerald Testnet tokens"),(0,r.kt)("p",null,"In order to deploy to the Emerald Testnet, we'll need some tokens.\nGet those by heading to ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.testnet.oasis.dev/"},"Oasis Testnet faucet"),' and selecting "Emerald" as\nthe first dropdown.\nSet the second box to the address of a burner wallet.\nIt\'ll take a few moments to receive your tokens after submitting the form.'),(0,r.kt)("h4",{id:"add-the-emerald-testnet-to-truffle"},"Add the Emerald Testnet to Truffle"),(0,r.kt)("p",null,"Apply this patch to ",(0,r.kt)("inlineCode",{parentName:"p"},"truffle-config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'diff --git a/truffle-config.js b/truffle-config.js\nindex 68d534c..15c671d 100644\n--- a/truffle-config.js\n+++ b/truffle-config.js\n@@ -22,7 +22,7 @@\n // const mnemonic = process.env["MNEMONIC"];\n // const infuraProjectId = process.env["INFURA_PROJECT_ID"];\n\n-// const HDWalletProvider = require(\'@truffle/hdwallet-provider\');\n+const HDWalletProvider = require(\'@truffle/hdwallet-provider\');\n\n module.exports = {\n   /**\n@@ -53,6 +53,14 @@ module.exports = {\n     //   network_id: 5,       // Goerli\'s id\n     //   chain_id: 5\n     // }\n+    // This is Testnet! If you want Mainnet, add a new network config item.\n+    emerald: {\n+      provider: () =>\n+        new HDWalletProvider([process.env.PRIVATE_KEY], "https://testnet.emerald.oasis.dev"),\n+      network_id: 0xa515,\n+    },\n   },\n\n   // Set default mocha options here, use special reporters etc.\n')),(0,r.kt)("h4",{id:"do-the-truffle-thing"},"Do the Truffle Thing"),(0,r.kt)("p",null,"You'll want a script to run some methods on the contract.\nPop open your favorite editor and paste in this code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const keccak256 = require("web3").utils.keccak256;\n\nconst MetaCoin = artifacts.require("MetaCoin");\n\nasync function exerciseContract() {\n  const mc = await MetaCoin.deployed();\n\n  const tx = await mc.sendCoin(mc.address, 42);\n  console.log(`\\nSent some coins in ${tx.tx}.`);\n  const t = tx.logs[0].args;\n  console.log(`A Transfer(${t[0]}, ${t[0]}, ${t[2].toNumber()}) was emitted.`);\n\n  const storageSlot = await new Promise((resolve, reject) => {\n    const getStoragePayload = {\n      method: "eth_getStorageAt",\n      params: [\n        mc.address,\n        keccak256(\n          "0x" + "00".repeat(12) + mc.address.slice(2) + "00".repeat(32)\n        ),\n        "latest",\n      ],\n      jsonrpc: "2.0",\n      id: "test",\n    };\n    mc.contract.currentProvider.send(getStoragePayload, (err, res) => {\n      if (err) reject(err);\n      else resolve(res.result);\n    });\n  });\n  console.log(`The balance storage slot contains ${storageSlot}.`);\n\n  const balance = await mc.getBalance(mc.address);\n  console.log(`The contract now has balance: ${balance.toNumber()}.`);\n}\n\nmodule.exports = async function (callback) {\n  try {\n    await exerciseContract();\n  } catch (e) {\n    console.error(e);\n  }\n  callback();\n};\n')),(0,r.kt)("p",null,"Save it to ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts/exercise.contract.js"),".\nWe'll use it in just a bit."),(0,r.kt)("p",null,"Next, you can run the following and see the contract being deployed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'PRIVATE_KEY="0x..." truffle migrate --network emerald\n')),(0,r.kt)("p",null,"Everything should be succeeding so far."),(0,r.kt)("p",null,"Finally, run this line and observe some output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'> PRIVATE_KEY="0x..." truffle exec --network emerald scripts/exercise.contract.js`\n\nSent some coins in 0xf415ab586ef1c6c61b84b3bd803ae322f375d1d3164aa8ac13c9ae83c698a002\nA Transfer(0x56e5F834F88F9f7631E9d6a43254e173478cE06a, 0x56e5F834F88F9f7631E9d6a43254e173478cE06a, 42) was emitted.\nThe balance storage slot contains 0x2a.\nThe contract now has balance: 42\n')),(0,r.kt)("p",null,"Great!\nThat'll be the baseline for our confidential deployment."),(0,r.kt)("h3",{id:"deploy-to-sapphire-confidential-evm"},"Deploy to Sapphire (confidential EVM)"),(0,r.kt)("h4",{id:"get-some-sapphire-testnet-tokens"},"Get some Sapphire Testnet tokens"),(0,r.kt)("p",null,"Now for the fun part.\nAs for Emerald, we need to configure the Sapphire network and get some tokens.\nHit up the one and only ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.testnet.oasis.dev/"},"Oasis Testnet faucet"),' and this time select "Sapphire".\nSubmit the form and on your way.'),(0,r.kt)("h4",{id:"add-the-sapphire-testnet-to-truffle"},"Add the Sapphire Testnet to Truffle"),(0,r.kt)("p",null,"And another diff for your applying pleasure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'diff --git a/truffle-config.js b/truffle-config.js\nindex 7af2f42..0cd9d36 100644\n--- a/truffle-config.js\n+++ b/truffle-config.js\n@@ -58,6 +58,11 @@ module.exports = {\n         new HDWalletProvider([process.env.PRIVATE_KEY], "https://testnet.emerald.oasis.dev"),\n       network_id: 0xa515,\n     },\n+    // This is Testnet! If you want Mainnet, add a new network config item.\n+    sapphire: {\n+      provider: () =>\n+        new HDWalletProvider([process.env.PRIVATE_KEY], "https://testnet.sapphire.oasis.dev"),\n+      network_id: 0x5aff,\n+    },\n   },\n\n   // Set default mocha options here, use special reporters etc.\n')),(0,r.kt)("h4",{id:"port-to-sapphire"},"Port to Sapphire"),(0,r.kt)("p",null,"Here's where things start to get interesting.\nWe're going to add confidentiality to this starter project in exactly two lines\nof code."),(0,r.kt)("p",null,"You'll need to grab the Sapphire compatibility library\n(",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@oasisprotocol/sapphire-paratime"},(0,r.kt)("inlineCode",{parentName:"a"},"@oasisprotocol/sapphire-paratime")),"), so make that happen by issuing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -D @oasisprotocol/sapphire-paratime # npm also works\n")),(0,r.kt)("p",null,"So far so good.\nNext, import it by adding this line to the top of ",(0,r.kt)("inlineCode",{parentName:"p"},"truffle-config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const sapphire = require('@oasisprotocol/sapphire-paratime');\n")),(0,r.kt)("p",null,"That's the first line of code.\nHere's the second:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'diff --git a/truffle-config.js b/truffle-config.js\nindex 0cd9d36..7db7cf8 100644\n--- a/truffle-config.js\n+++ b/truffle-config.js\n@@ -60,7 +60,7 @@ module.exports = {\n     },\n     sapphire: {\n       provider: () =>\n-        new HDWalletProvider([process.env.PRIVATE_KEY], "https://testnet.sapphire.oasis.dev"),\n+        sapphire.wrap(new HDWalletProvider([process.env.PRIVATE_KEY], "https://testnet.sapphire.oasis.dev")),\n       network_id: 0x5aff,\n     },\n   },\n')),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"wrap")," function takes any kind of provider or signer you've got and turn\nit into one that works with Sapphire and confidentiality.\nFor the most part, wrapping your signer/provider is the most you'll need to do\nto get your dApp running on Sapphire, but that's not a complete story since an\nunmodified contract may leak state through normal operation."),(0,r.kt)("p",null,"And now for the moment we've all been waiting for:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'> PRIVATE_KEY="0x..." truffle migrate --network sapphire\n> PRIVATE_KEY="0x..." truffle exec --network sapphire scripts/exercise.contract.js\n\nSent some coins in 0x6dc6774addf4c5c68a9b2c6b5e5634263e734d321f84012ab1b4cbe237fbe7c2.\nA Transfer(0x56e5F834F88F9f7631E9d6a43254e173478cE06a, 0x56e5F834F88F9f7631E9d6a43254e173478cE06a, 42) was emitted.\nThe balance storage slot contains 0x0.\nThe contract now has balance: 42.\n')),(0,r.kt)("p",null,"So basically nothing changed, which is pretty much what we're going for.\nBut take a look at that second to last line where it says what's in the storage\nslot. Before, it said ",(0,r.kt)("inlineCode",{parentName:"p"},"0x2a"),", but now it says ",(0,r.kt)("inlineCode",{parentName:"p"},"0x0"),"."),(0,r.kt)("p",null,"Clearly the slot does contain data or else the contract balance couldn't have\nbeen returned.\nWhat's happened here is that the Web3 gateway does not have the key used to\ndecrypt the storage slot, so a default value is returned."),(0,r.kt)("p",null,"Indeed, the gateway does not even have the key needed to decrypt the ",(0,r.kt)("em",{parentName:"p"},"key")," in\nthe MKVS; it can tell ",(0,r.kt)("em",{parentName:"p"},"that")," a storage slot was written, but not which one\n(although it can make a very good guess by reading the contract code)."),(0,r.kt)("p",null,"All in all, you can see that confidentiality is in effect, but it's not\nsomething end-users need to think too much about."),(0,r.kt)("h2",{id:"create-a-sapphire-native-dapp"},"Create a Sapphire-Native dApp"),(0,r.kt)("p",null,"Porting an existing Eth app is cool, and can already provide benefits like\nprotecting against MEV.\nHowever, starting from scratch with confidentiality in mind can unlock some\nreally novel dApps and provide a ",(0,r.kt)("a",{parentName:"p",href:"/dapp/sapphire/guide#writing-secure-dapps"},"higher level of security"),"."),(0,r.kt)("p",null,"One simple-but-useful dApp that takes advantage of confidentiality is a\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dead_man's_switch"},"dead person's switch")," that reveals a secret (let's say the encryption key to a\ndata trove) if the operator fails to re-up before too long.\nLet's make it happen!"),(0,r.kt)("h3",{id:"init-a-new-hardhat-project"},"Init a new Hardhat project"),(0,r.kt)("p",null,"We're going to use Hardhat this time because it's very convenient to use."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make & enter a new directory")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"npx hardhat")," then create a TypeScript project.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@oasisprotocol/sapphire-hardhat"},(0,r.kt)("inlineCode",{parentName:"a"},"@oasisprotocol/sapphire-hardhat"))," as dependency:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -D @oasisprotocol/sapphire-hardhat\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"@nomicfoundation/hardhat-toolbox"),", TypeScript and other peer\ndependencies required by HardHat."))),(0,r.kt)("h3",{id:"add-the-sapphire-testnet-to-hardhat"},"Add the Sapphire Testnet to Hardhat"),(0,r.kt)("p",null,"Open up your ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.ts")," and drop in these lines.\nThey should remind you a lot about what happened with Truffle."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'diff --git a/hardhat.config.ts b/hardhat.config.ts\nindex 414e974..49c95f9 100644\n--- a/hardhat.config.ts\n+++ b/hardhat.config.ts\n@@ -1,8 +1,19 @@\n import { HardhatUserConfig } from "hardhat/config";\n+import \'@oasisprotocol/sapphire-hardhat\';\n import "@nomicfoundation/hardhat-toolbox";\n\n const config: HardhatUserConfig = {\n   solidity: "0.8.17",\n+  networks: {\n+    sapphire: {\n+      // This is Testnet! If you want Mainnet, add a new network config item.\n+      url: "https://testnet.sapphire.oasis.dev",\n+      accounts: process.env.PRIVATE_KEY\n+        ? [process.env.PRIVATE_KEY]\n+        : [],\n+      chainId: 0x5aff,\n+    },\n+  },\n };\n\n export default config;\n')),(0,r.kt)("p",null,"By importing ",(0,r.kt)("inlineCode",{parentName:"p"},"@oasisprotocol/sapphire-hardhat")," at the top of the config file,\nany network config entry corresponding to the Sapphire's chain ID will\nautomatically be wrapped with Sapphire specifics for encrypting and signing the\ntransactions."),(0,r.kt)("h3",{id:"get-the-contract"},"Get the Contract"),(0,r.kt)("p",null,"This is a Sapphire tutorial and you're already a Solidity expert, so let's not\nbore you with explaining the gritty details of the contract.\nStart by pasting ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/sapphire-paratime/blob/main/examples/hardhat/contracts/Vigil.sol"},"Vigil.sol")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts/Vigil.sol"),"."),(0,r.kt)("p",null,"While you're there, also place ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/sapphire-paratime/blob/main/examples/hardhat/scripts/run-vigil.ts"},"run-vigil.ts")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts/run-vigil.ts"),".\nWe'll need that later."),(0,r.kt)("h4",{id:"vigilsol-the-interesting-parts"},"Vigil.sol, the interesting parts"),(0,r.kt)("p",null,"The key state variables are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"    SecretMetadata[] public _metas;\n    bytes[] private _secrets;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_metas")," is marked with ",(0,r.kt)("inlineCode",{parentName:"li"},"public")," visibility, so despite the state itself being\nencrypted and not readable directly, Solidity will generate a getter that will\ndo the decryption for you."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_secrets")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"private")," and therefore truly secret; only the contract can\naccess the data contained in this mapping.")),(0,r.kt)("p",null,"And the methods we'll care most about are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createSecret"),", which adds an entry to both ",(0,r.kt)("inlineCode",{parentName:"li"},"_metas")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"_secrets"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"revealSecret"),", which acts as an access-controlled getter for the data\ncontained with ",(0,r.kt)("inlineCode",{parentName:"li"},"_secrets"),". Due to trusted execution and confidentiality, the\nonly way that the secret will get revealed is if execution proceeds all the\nway to the end of the function and does not revert.")),(0,r.kt)("p",null,"The rest of the methods are useful if you actually intended to use the contract,\nbut they demonstrate that developing for Sapphire is essentially the same as for\nEthereum.\nYou can even write tests against the Hardhat network and use Hardhat plugins."),(0,r.kt)("h3",{id:"run-the-contract"},"Run the Contract"),(0,r.kt)("p",null,"And to wrap things up, we'll put ",(0,r.kt)("inlineCode",{parentName:"p"},"Vigil")," through its paces.\nFirst, let's see what's actually going on."),(0,r.kt)("p",null,"After deploying the contract, we can create a secret, check that it's not\nreadable, wait a bit, and then check that it has become readable.\nPretty cool if you ask me!"),(0,r.kt)("p",null,"Anyway, make it happen by running"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'PRIVATE_KEY="0x..." pnpm hardhat run scripts/run-vigil.ts --network sapphire\n')),(0,r.kt)("p",null,"And if you see something like the following, you'll know you're well on the road\nto deploying confidential dApps on Sapphire."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Vigil deployed to: 0x74dC4879B152FDD1DDe834E9ba187b3e14f462f1\nStoring a secret in 0x13125d868f5fb3cbc501466df26055ea063a90014b5ccc8dfd5164dc1dd67543\nChecking the secret\nfailed to fetch secret: reverted: not expired\nWaiting...\nChecking the secret again\nThe secret ingredient is brussels sprouts\n")),(0,r.kt)("h2",{id:"all-done"},"All done!"),(0,r.kt)("p",null,"Congratulations, you made it through the Sapphire tutorial! If you have any\nquestions, please check out the ",(0,r.kt)("a",{parentName:"p",href:"/dapp/sapphire/guide"},"guide")," and join the discussion on the\n",(0,r.kt)("a",{parentName:"p",href:"/get-involved/#social-media-channels"},"#sapphire-paratime Discord channel"),"."),(0,r.kt)("p",null,"Best of luck on your future forays into confidentiality!"),(0,r.kt)("admonition",{title:"Example",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Visit the Sapphire ParaTime repository to download the final ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/sapphire-paratime/tree/main/examples/truffle"},"Truffle")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/sapphire-paratime/tree/main/examples/hardhat"},"Hardhat")," examples of this\nquickstart.")),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)(o.Z,{item:(0,i.n)("/dapp/sapphire/browser"),mdxType:"DocCard"}),(0,r.kt)(o.Z,{item:(0,i.n)("/node/run-your-node/paratime-client-node"),mdxType:"DocCard"}),(0,r.kt)(o.Z,{item:(0,i.n)("/node/web3"),mdxType:"DocCard"}))}u.isMDXComponent=!0}}]);