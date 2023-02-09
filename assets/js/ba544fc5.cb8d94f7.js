"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[2872],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>v});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),v=a,m=u["".concat(l,".").concat(v)]||u[v]||d[v]||r;return t?o.createElement(m,s(s({ref:n},p),{},{components:t})):o.createElement(m,s({ref:n},p))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},356:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(7462),a=(t(7294),t(3905));const r={},s="Governance",i={unversionedId:"node/run-your-node/validator-node/governance",id:"node/run-your-node/validator-node/governance",title:"Governance",description:"This example assumes you have read and followed the instructions in the Prerequisites and Setup sections of the Use Your Tokens docs.",source:"@site/docs/node/run-your-node/validator-node/governance.md",sourceDirName:"node/run-your-node/validator-node",slug:"/node/run-your-node/validator-node/governance",permalink:"/node/run-your-node/validator-node/governance",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/node/run-your-node/validator-node/governance.md",tags:[],version:"current",lastUpdatedAt:1675933402,formattedLastUpdatedAt:"Feb 9, 2023",frontMatter:{},sidebar:"operators",previous:{title:"Validator Node",permalink:"/node/run-your-node/validator-node/"},next:{title:"Amend Commission Schedule",permalink:"/node/run-your-node/validator-node/amend-commission-schedule"}},l={},c=[{value:"Listing Active Proposals",id:"listing-active-proposals",level:2},{value:"View Votes for a Proposal",id:"view-votes-for-a-proposal",level:2},{value:"Voting for a Proposal",id:"voting-for-a-proposal",level:2},{value:"Submit the Transaction",id:"submit-the-transaction",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"governance"},"Governance"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This example assumes you have read and followed the instructions in the ",(0,a.kt)("a",{parentName:"p",href:"../../../general/manage-tokens/advanced/oasis-cli-tools/prerequisites"},"Prerequisites")," and ",(0,a.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/setup"},"Setup")," sections of the ",(0,a.kt)("em",{parentName:"p"},"Use Your Tokens")," docs.")),(0,a.kt)("h2",{id:"listing-active-proposals"},"Listing Active Proposals"),(0,a.kt)("p",null,"In order to list all active governance proposals, you can use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node governance list_proposals -a $ADDR\n")),(0,a.kt)("p",null,"In case there are currently any active proposals this should return a list of them similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'[{\n    "id":1,\n    "submitter":"oasis1qrs2dl6nz6fcxxr3tq37laxlz6hxk6kuscnr6rxj",\n    "state":"active",\n    "deposit":"10000000000000",\n    "content":{\n        "upgrade":{\n            "v":1,\n            "handler":"1304_testnet_upgrade",\n            "target":{\n                "runtime_host_protocol":{"major":2},\n                "runtime_committee_protocol":{"major":2},\n                "consensus_protocol":{"major":4}\n            },\n            "epoch":5662\n        }\n    },\n    "created_at":5633,\n    "closes_at":5645\n}]\n')),(0,a.kt)("h2",{id:"view-votes-for-a-proposal"},"View Votes for a Proposal"),(0,a.kt)("p",null,"To view votes for a given proposal, you can use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node governance proposal_votes -a $ADDR --proposal.id <PROPOSAL-ID>\n")),(0,a.kt)("p",null,"replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"<PROPOSAL-ID>")," with the id of the proposal you want see."),(0,a.kt)("p",null,"It should return a list of cast votes for the chosen proposal similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[\n  {\n    "voter": "oasis1qq2vzcvxn0js5unsch5me2xz4kr43vcasv0d5eq4",\n    "vote": "yes"\n  },\n  {\n    "voter": "oasis1qqv25adrld8jjquzxzg769689lgf9jxvwgjs8tha",\n    "vote": "yes"\n  },\n  {\n    "voter": "oasis1qz2tg4hsatlxfaf8yut9gxgv8990ujaz4sldgmzx",\n    "vote": "yes"\n  },\n  {\n    "voter": "oasis1qz424yg28jqmgfq3xvly6ky64jqnmlylfc27d7cp",\n    "vote": "no"\n  },\n  {\n    "voter": "oasis1qr37y56g92chzvsew54kj7gu47cxyly7jytt5rm0",\n    "vote": "yes"\n  }\n]\n')),(0,a.kt)("h2",{id:"voting-for-a-proposal"},"Voting for a Proposal"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"At this time only entities which have active validator nodes scheduled in the validator set are eligible to vote for governance proposals.")),(0,a.kt)("p",null,"If you want to vote for an active proposal, you can use the following command to generate a suitable transaction:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'oasis-node governance gen_cast_vote \\\n  "${TX_FLAGS[@]}" \\\n  --vote.proposal.id 1 \\\n  --vote yes \\\n  --transaction.file tx_cast_vote.json \\\n  --transaction.nonce 1 \\\n  --transaction.fee.gas 2000 \\\n  --transaction.fee.amount 2000\n')),(0,a.kt)("p",null,"This will output a preview of the generated transaction:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"You are about to sign the following transaction:\n  Method: governance.CastVote\n  Body:\n    Proposal ID: 1\n    Vote:        yes\n  Nonce:  1\n  Fee:\n    Amount: 0.000002 ROSE\n    Gas limit: 2000\n    (gas price: 0.000000001 ROSE per gas unit)\nOther info:\n  Genesis document's hash: 9ce956ef5999024e148f0c21f1e8a05ab4fc98a44c4696b289770705aeb1dd77\n")),(0,a.kt)("p",null,"and ask you for confirmation."),(0,a.kt)("h2",{id:"submit-the-transaction"},"Submit the Transaction"),(0,a.kt)("p",null,"To submit the generated transaction, we need to copy ",(0,a.kt)("inlineCode",{parentName:"p"},"tx_cast_vote.json")," to the online Oasis node (i.e. the ",(0,a.kt)("inlineCode",{parentName:"p"},"server"),") and submit it from there:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node consensus submit_tx \\\n  -a $ADDR \\\n  --transaction.file tx_cast_vote.json\n")))}d.isMDXComponent=!0}}]);