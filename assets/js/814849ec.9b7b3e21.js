"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[5924],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||s;return t?a.createElement(h,r(r({ref:n},d),{},{components:t})):a.createElement(h,r({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,r=new Array(s);r[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var l=2;l<s;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1564:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7294),o=t(6010),s=t(9960),r=t(3438),i=t(3919),c=t(5999);const l="cardContainer_fWXF",d="cardTitle_rnsV",p="cardDescription_PWke";function u(e){let{href:n,children:t}=e;return a.createElement(s.Z,{href:n,className:(0,o.Z)("card padding--lg",l)},t)}function m(e){let{href:n,icon:t,title:s,description:r}=e;return a.createElement(u,{href:n},a.createElement("h2",{className:(0,o.Z)("text--truncate",d),title:s},t," ",s),r&&a.createElement("p",{className:(0,o.Z)("text--truncate",p),title:r},r))}function h(e){let{item:n}=e;const t=(0,r.Wl)(n);return t?a.createElement(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function f(e){let{item:n}=e;const t=(0,i.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,r.xz)(n.docId??void 0);return a.createElement(m,{href:n.href,icon:t,title:n.label,description:null==o?void 0:o.description})}function w(e){let{item:n}=e;switch(n.type){case"link":return a.createElement(f,{item:n});case"category":return a.createElement(h,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}},7525:(e,n,t)=>{t.d(n,{n:()=>s});var a=t(4477);function o(e){for(const n of e){const e=n.href;e&&void 0===globalThis.sidebarItemsMap[e]&&(globalThis.sidebarItemsMap[e]=n),"category"===n.type&&o(n.items)}}function s(e){const n=(0,a.E)();if(!n)throw new Error("Unexpected: cant find docsVersion in current context");if(void 0===globalThis.sidebarItemsMap){globalThis.sidebarItemsMap={};for(const e in n.docsSidebars)o(n.docsSidebars[e])}if(void 0===globalThis.sidebarItemsMap[e])throw console.log("Registered sidebar items:"),console.log(globalThis.sidebarItemsMap),new Error("Unexpected: sidebar item with href "+e+" does not exist.");return globalThis.sidebarItemsMap[e]}},830:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(7462),o=(t(7294),t(3905)),s=t(1564),r=t(7525);const i={},c="Deposit/Withdraw Tokens to/from ParaTime",l={unversionedId:"general/manage-tokens/advanced/oasis-cli-tools/deposit-withdraw-tokens-to-from-paratime",id:"general/manage-tokens/advanced/oasis-cli-tools/deposit-withdraw-tokens-to-from-paratime",title:"Deposit/Withdraw Tokens to/from ParaTime",description:"To perform ParaTime deposits or withdrawals using a command line interface, you will need oasis executable which is part of the Oasis CLI. oasis is supplemental to oasis-node and supports ParaTime-related operations such as deposits, withdrawals, transfers and manipulation of the smart contracts, in contrast to oasis-node which only supports consensus layer features.",source:"@site/docs/general/manage-tokens/advanced/oasis-cli-tools/deposit-withdraw-tokens-to-from-paratime.mdx",sourceDirName:"general/manage-tokens/advanced/oasis-cli-tools",slug:"/general/manage-tokens/advanced/oasis-cli-tools/deposit-withdraw-tokens-to-from-paratime",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/deposit-withdraw-tokens-to-from-paratime",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/general/manage-tokens/advanced/oasis-cli-tools/deposit-withdraw-tokens-to-from-paratime.mdx",tags:[],version:"current",lastUpdatedAt:1675933402,formattedLastUpdatedAt:"Feb 9, 2023",frontMatter:{},sidebar:"general",previous:{title:"Reclaim Delegated/Staked Tokens",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/reclaim-tokens"},next:{title:"Gas Costs",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/gas-costs"}},d={},p=[{value:"Import your wallet",id:"import-your-wallet",level:2},{value:"Configure Allowance",id:"configure-allowance",level:2},{value:"Deposit",id:"deposit",level:2},{value:"Withdraw",id:"withdraw",level:2},{value:"See also",id:"see-also",level:2}],u={toc:p};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"depositwithdraw-tokens-tofrom-paratime"},"Deposit/Withdraw Tokens to/from ParaTime"),(0,o.kt)("p",null,"To perform ParaTime deposits or withdrawals using a command line interface, you will need ",(0,o.kt)("inlineCode",{parentName:"p"},"oasis")," executable which is part of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-sdk/tree/main/cli"},"Oasis CLI"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"oasis")," is supplemental to ",(0,o.kt)("inlineCode",{parentName:"p"},"oasis-node")," and supports ParaTime-related operations such as deposits, withdrawals, transfers and manipulation of the smart contracts, in contrast to ",(0,o.kt)("inlineCode",{parentName:"p"},"oasis-node")," which only supports consensus layer features."),(0,o.kt)("p",null,"We will assume that your already have an Oasis wallet with some ROSE and that you want to Deposit or Withdraw ROSE to or from Emerald ParaTime running on the Mainnet network."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"At time of writing, no precompiled ",(0,o.kt)("inlineCode",{parentName:"p"},"oasis")," binaries are available. You will need to clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-sdk/"},(0,o.kt)("inlineCode",{parentName:"a"},"oasis-sdk")," git repository")," and compile the tool yourself. The process is straight forward - just follow the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-sdk/blob/main/cli/README.md"},"Readme"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This chapter describes the command line interface for depositing and withdrawing ROSE which is tailored toward advanced users such as node operators. If you are interested in the end-user wallets with a graphical user interface, consult the ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/how-to-transfer-rose-into-paratime"},"How to Transfer ROSE into a ParaTime")," chapter.")),(0,o.kt)("h2",{id:"import-your-wallet"},"Import your wallet"),(0,o.kt)("p",null,"To sign any transaction you will need to import an Oasis wallet. Prepare your base64-encoded private key or the BIP39 mnemonic of your Oasis account and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oasis wallet import <SOME_WALLET_NAME>\n")),(0,o.kt)("p",null,"Follow the interactive instructions that will guide you through the import procedure. If this is the first time you are running ",(0,o.kt)("inlineCode",{parentName:"p"},"oasis"),", the imported wallet will become your default wallet and transactions will be signed with the key stored in this wallet, if not otherwise specified with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--wallet")," parameter."),(0,o.kt)("h2",{id:"configure-allowance"},"Configure Allowance"),(0,o.kt)("p",null,"In order to deposit ROSE to a ParaTime, you will first need to grant the ParaTime access to your Oasis account on the consensus layer. The following command allows Emerald to access up to 100 ROSE stored on your Oasis account which you will deposit afterwards:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ oasis accounts allow paratime:emerald 100\nUnlock your wallet.\n? Passphrase:\nYou are about to sign the following transaction:\nMethod: staking.Allow\nBody:\n  Beneficiary:   oasis1qqdpkrh0v9jn80kymcvgk57v38x38qwdxvvtnjfm\n  Amount change: +10.0 ROSE\nNonce:  5\nFee:\n  Amount: 0.0 ROSE\n  Gas limit: 0\n  (gas price: 0.0 ROSE per gas unit)\n\nNetwork:  mainnet\nParatime: none (consensus layer)\n? Sign this transaction? Yes\nBroadcasting transaction...\nTransaction executed successfully.\nTransaction hash: a28a67b7af6bdce84760d5d61b982c0e89aa6874dda0aad01b61ef85feea8601\n")),(0,o.kt)("p",null,"The allowance above ",(0,o.kt)("strong",{parentName:"p"},"adds")," the amount of ROSE Emerald ParaTime will be allowed to access. For example, if your run the command above 3 times, Emerald will obtain the permission to access 300 ROSE. Later, each deposit will subtract ROSE from the allowed amount."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"By default the Oasis CLI will execute transactions on Emerald ParaTime deployed on the Mainnet. You can always use another ParaTime and the network by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--paratime")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--network")," parameters respectively.")),(0,o.kt)("h2",{id:"deposit"},"Deposit"),(0,o.kt)("p",null,"After setting up the allowance policy, we can execute the deposit transaction. The following command will deposit 100 ROSE from your consensus account to your ParaTime account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ oasis accounts deposit 100 --gas-price 0\nUnlock your wallet.\n? Passphrase:\nYou are about to sign the following transaction:\n{\n  "v": 1,\n  "call": {\n    "method": "consensus.Deposit",\n    "body": "oWZhbW91bnSCSA3gtrOnZAAAQA=="\n  },\n  "ai": {\n    "si": [\n      {\n        "address_spec": {\n          "signature": {\n            "ed25519": "OxEJPYSJW55VEDZyzJ6drxzZ6MeSwz/JuTwCAlWJ0ks="\n          }\n        },\n        "nonce": 8\n      }\n    ],\n    "fee": {\n      "amount": {\n        "Amount": "0",\n        "Denomination": ""\n      },\n      "gas": 11284,\n      "consensus_messages": 1\n    }\n  }\n}\n\nNetwork:  mainnet\nParatime: emerald\n? Sign this transaction? Yes\nBroadcasting transaction...\nTransaction executed successfully.\nRound:            564\nTransaction hash: 2bccec1776df6c2028f7ece6ae9b53b8c12875f3f10b39b962d9ac82238bc60b\nWaiting for deposit result...\nDeposit succeeded.\n')),(0,o.kt)("p",null,"Currently, deposit transactions are free of charge, so we can avoid spending ROSE for the gas fee by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"--gas-price 0")," parameter. Also, keep in mind that ",(0,o.kt)("strong",{parentName:"p"},"deposit and withdrawal fees are always paid by your ParaTime account.")," If it doesn't contain any ROSE, you are not able to cover the fees."),(0,o.kt)("p",null,"To deposit ROSE to a different ParaTime account, simply add the bech32-encoded ",(0,o.kt)("inlineCode",{parentName:"p"},"oasis1")," address to the deposit command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ oasis accounts deposit 100 oasis1qpxhsf7xnm007csw2acaa7mta2krzpwex5c90qu6 --gas-price 0\nUnlock your wallet.\n? Passphrase:\nYou are about to sign the following transaction:\n{\n  "v": 1,\n  "call": {\n    "method": "consensus.Deposit",\n    "body": "omJ0b1UATXgnxp7e/2IOV3He+2vqrDEF2TVmYW1vdW50gkkFa8deLWMQAABA"\n  },\n  "ai": {\n    "si": [\n      {\n        "address_spec": {\n          "signature": {\n            "ed25519": "NcPzNW3YU2T+ugNUtUWtoQnRvbOL9dYSaBfbjHLP1pE="\n          }\n        },\n        "nonce": 9\n      }\n    ],\n    "fee": {\n      "amount": {\n        "Amount": "0",\n        "Denomination": ""\n      },\n      "gas": 11310,\n      "consensus_messages": 1\n    }\n  }\n}\n\nNetwork:  mainnet\nParatime: emerald\n? Sign this transaction? Yes\nBroadcasting transaction...\nTransaction executed successfully.\nRound:            710\nTransaction hash: aab2262def5a4d6e28b769b6372e07d271e6a9f0857502f2b8a6a0c777ef2b05\nWaiting for deposit result...\nDeposit succeeded.\n')),(0,o.kt)("p",null,"Also, Ethereum hex-encoded addresses are supported which are common in Emerald ParaTime:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ oasis accounts deposit 100 0x90adE3B7065fa715c7a150313877dF1d33e777D5 --gas-price 0\nUnlock your wallet.\n? Passphrase:\nYou are about to sign the following transaction:\n{\n  "v": 1,\n  "call": {\n    "method": "consensus.Deposit",\n    "body": "omJ0b1UAeBTz2VT0G2RZ655LyPvGdn7OWqlmYW1vdW50gkgN4Lazp2QAAEA="\n  },\n  "ai": {\n    "si": [\n      {\n        "address_spec": {\n          "signature": {\n            "ed25519": "NcPzNW3YU2T+ugNUtUWtoQnRvbOL9dYSaBfbjHLP1pE="\n          }\n        },\n        "nonce": 10\n      }\n    ],\n    "fee": {\n      "amount": {\n        "Amount": "1130900000000000",\n        "Denomination": ""\n      },\n      "gas": 11309,\n      "consensus_messages": 1\n    }\n  }\n}\n\nNetwork:  mainnet\nParatime: emerald\n? Sign this transaction? Yes\nBroadcasting transaction...\nTransaction executed successfully.\nRound:            712\nTransaction hash: bd587656e92515efb326614fda554b3ce1b7ec69768880bf21895424e06bddb9\nWaiting for deposit result...\nDeposit succeeded.\n')),(0,o.kt)("h2",{id:"withdraw"},"Withdraw"),(0,o.kt)("p",null,"To withdraw 100 ROSE from your ParaTime account to the same account on the consensus layer, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ oasis accounts withdraw 100\nUnlock your wallet.\n? Passphrase:\nYou are about to sign the following transaction:\n{\n  "v": 1,\n  "call": {\n    "method": "consensus.Withdraw",\n    "body": "oWZhbW91bnSCSIrHIwSJ6AAAQA=="\n  },\n  "ai": {\n    "si": [\n      {\n        "address_spec": {\n          "signature": {\n            "ed25519": "NcPzNW3YU2T+ugNUtUWtoQnRvbOL9dYSaBfbjHLP1pE="\n          }\n        },\n        "nonce": 12\n      }\n    ],\n    "fee": {\n      "amount": {\n        "Amount": "112850000000000",\n        "Denomination": ""\n      },\n      "gas": 11285,\n      "consensus_messages": 1\n    }\n  }\n}\n\nNetwork:  mainnet\nParatime: emerald\n? Sign this transaction? Yes\nBroadcasting transaction...\nTransaction executed successfully.\nRound:            727\nTransaction hash: c357b0661208a93301a07edc912cec9111ba1a60a08a1d85f221c906b41ad121\nWaiting for withdraw result...\nWithdraw succeeded.\n')),(0,o.kt)("p",null,"Withdraw transactions are not free of charge and the fee will be deducted ",(0,o.kt)("strong",{parentName:"p"},"from your ParaTime balance"),"."),(0,o.kt)("p",null,"You can specify a custom Oasis address which you want to withdraw your ROSE to by appending it to the withdraw command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ oasis accounts withdraw 100 oasis1qpxhsf7xnm007csw2acaa7mta2krzpwex5c90qu6\nUnlock your wallet.\n? Passphrase:\nYou are about to sign the following transaction:\n{\n  "v": 1,\n  "call": {\n    "method": "consensus.Withdraw",\n    "body": "omJ0b1UATXgnxp7e/2IOV3He+2vqrDEF2TVmYW1vdW50gkiKxyMEiegAAEA="\n  },\n  "ai": {\n    "si": [\n      {\n        "address_spec": {\n          "signature": {\n            "ed25519": "NcPzNW3YU2T+ugNUtUWtoQnRvbOL9dYSaBfbjHLP1pE="\n          }\n        },\n        "nonce": 14\n      }\n    ],\n    "fee": {\n      "amount": {\n        "Amount": "113100000000000",\n        "Denomination": ""\n      },\n      "gas": 11310,\n      "consensus_messages": 1\n    }\n  }\n}\n\nNetwork:  mainnet\nParatime: emerald\n? Sign this transaction? Yes\nBroadcasting transaction...\nTransaction executed successfully.\nRound:            762\nTransaction hash: 85b9c65d2df54a4bb698f4ced7c89fe91462ff78a68136280e030ee38780e687\nWaiting for withdraw result...\nWithdraw succeeded.\n')),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)(s.Z,{item:(0,r.n)("/general/manage-tokens/how-to-transfer-rose-into-paratime"),mdxType:"DocCard"}))}m.isMDXComponent=!0}}]);