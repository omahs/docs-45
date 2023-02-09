"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[9113],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(k,s(s({ref:n},u),{},{components:t})):a.createElement(k,s({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3091:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const r={},s="Reclaim Delegated/Staked Tokens",i={unversionedId:"general/manage-tokens/advanced/oasis-cli-tools/reclaim-tokens",id:"general/manage-tokens/advanced/oasis-cli-tools/reclaim-tokens",title:"Reclaim Delegated/Staked Tokens",description:"This example assumes you have read and followed the instructions in the Prerequisites and Setup sections.",source:"@site/docs/general/manage-tokens/advanced/oasis-cli-tools/reclaim-tokens.md",sourceDirName:"general/manage-tokens/advanced/oasis-cli-tools",slug:"/general/manage-tokens/advanced/oasis-cli-tools/reclaim-tokens",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/reclaim-tokens",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/general/manage-tokens/advanced/oasis-cli-tools/reclaim-tokens.md",tags:[],version:"current",lastUpdatedAt:1675933402,formattedLastUpdatedAt:"Feb 9, 2023",frontMatter:{},sidebar:"general",previous:{title:"Delegate/Stake Tokens",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/delegate-tokens"},next:{title:"Deposit/Withdraw Tokens to/from ParaTime",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/deposit-withdraw-tokens-to-from-paratime"}},c={},l=[{value:"Query Our Account&#39;s Info",id:"query-our-accounts-info",level:2},{value:"Generate a Reclaim Escrow Transaction",id:"generate-a-reclaim-escrow-transaction",level:2},{value:"Submit the Transaction",id:"submit-the-transaction",level:2},{value:"Query Our Account&#39;s Info Again",id:"query-our-accounts-info-again",level:2},{value:"Computation of Reclaimed Tokens",id:"computation-of-reclaimed-tokens",level:3},{value:"Debonding Period",id:"debonding-period",level:3}],u={toc:l};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reclaim-delegatedstaked-tokens"},"Reclaim Delegated/Staked Tokens"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This example assumes you have read and followed the instructions in the ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/prerequisites"},"Prerequisites")," and ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/setup"},"Setup")," sections.")),(0,o.kt)("p",null,"When we want to reclaim escrowed tokens, we can't do that directly. Instead, we need to specify the number of shares we want to reclaim from an escrow account."),(0,o.kt)("p",null,"Let's assume:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"we want to reclaim 357 billion shares from our escrow account,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"oasis1qr6swa6gsp2ukfjcdmka8wrkrwz294t7ev39nrw"),"is our staking account address.")),(0,o.kt)("h2",{id:"query-our-accounts-info"},"Query Our Account's Info"),(0,o.kt)("p",null,"To query our staking account's information, use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node stake account info \\\n  -a $ADDR \\\n  --stake.account.address oasis1qr6swa6gsp2ukfjcdmka8wrkrwz294t7ev39nrw6\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For a detailed explanation on querying account information, see the ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/get-account-info"},"Get Info")," section.")),(0,o.kt)("p",null,"Before the transaction, this outputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"General Account:\n  Balance: ROSE 223.492486765\n  Nonce:   9\nEscrow Account:\n  Active:\n    Balance:      ROSE 11450.38481664\n    Total Shares: 10185014125910\n  Debonding:\n    Balance:      ROSE 0.0\n    Total Shares: 0\n  ...\n")),(0,o.kt)("p",null,"We can observe that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"General account's balance is ~223 tokens."),(0,o.kt)("li",{parentName:"ul"},"Account's nonce is 9."),(0,o.kt)("li",{parentName:"ul"},"~11450 tokens are actively bounded to the escrow account."),(0,o.kt)("li",{parentName:"ul"},"The amount of tokens that are currently debonding is 0.")),(0,o.kt)("h2",{id:"generate-a-reclaim-escrow-transaction"},"Generate a Reclaim Escrow Transaction"),(0,o.kt)("p",null,"Let's generate a reclaim escrow transaction of 357 billion shares from our own escrow account and store it to ",(0,o.kt)("inlineCode",{parentName:"p"},"tx_reclaim.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'oasis-node stake account gen_reclaim_escrow \\\n  "${TX_FLAGS[@]}" \\\n  --stake.shares 357000000000 \\\n  --stake.escrow.account oasis1qr6swa6gsp2ukfjcdmka8wrkrwz294t7ev39nrw6 \\\n  --transaction.file tx_reclaim.json \\\n  --transaction.nonce 9 \\\n  --transaction.fee.gas 1000 \\\n  --transaction.fee.amount 2000\n')),(0,o.kt)("p",null,"This will output a preview of the generated transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"You are about to sign the following transaction:\n  Nonce:  9\n  Fee:\n    Amount: ROSE 0.000002\n    Gas limit: 1000\n    (gas price: ROSE 0.000000002 per gas unit)\n  Method: staking.ReclaimEscrow\n  Body:\n    Account: oasis1qr6swa6gsp2ukfjcdmka8wrkrwz294t7ev39nrw6\n    Shares:  357000000000\nOther info:\n  Genesis document's hash: 976c302f696e417bd861b599e79261244f4391f3887a488212ee122ca7bbf0a8\n")),(0,o.kt)("p",null,"and ask you for confirmation."),(0,o.kt)("h2",{id:"submit-the-transaction"},"Submit the Transaction"),(0,o.kt)("p",null,"To submit the generated transaction, we need to copy ",(0,o.kt)("inlineCode",{parentName:"p"},"tx_reclaim.json")," to the online Oasis node (i.e. the ",(0,o.kt)("inlineCode",{parentName:"p"},"server"),") and submit it from there:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node consensus submit_tx \\\n  -a $ADDR \\\n  --transaction.file tx_reclaim.json\n")),(0,o.kt)("h2",{id:"query-our-accounts-info-again"},"Query Our Account's Info Again"),(0,o.kt)("p",null,"Let's check ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/reclaim-tokens#query-our-accounts-info"},"our account's info")," again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"General Account:\n  Balance: ROSE 223.492486765\n  Nonce:   10\nEscrow Account:\n  Active:\n    Balance:      ROSE 11049.031678686\n    Total Shares: 9828014125910\n  Debonding:\n    Balance:      ROSE 401.353137954\n    Total Shares: 401353137954\n  ...\n")),(0,o.kt)("p",null,"We can observe that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Our general account's balance decreased by 0.000002 token. This corresponds to the fee"),(0,o.kt)("p",{parentName:"li"},"that we specified we will pay for this transaction.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Our account's nonce increased to 10.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Our escrow account's active number of shares decreased by 357 billion shares"),(0,o.kt)("p",{parentName:"li"},"to 9,828,014,125,910.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Our escrow account's active balance decreased by 401.353137954 tokens and"),(0,o.kt)("p",{parentName:"li"},"is now 11049.031678686 tokens.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Our escrow account's debonding balance increased to 401.353137954 tokens"),(0,o.kt)("p",{parentName:"li"},"and its number of shares to the same amount."))),(0,o.kt)("h3",{id:"computation-of-reclaimed-tokens"},"Computation of Reclaimed Tokens"),(0,o.kt)("p",null,"When a delegator wants to reclaim a certain number of escrowed tokens, the ",(0,o.kt)("strong",{parentName:"p"},"token price")," (in shares) must be calculated based on the escrow account's current active balance and the number of issued shares:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tokens_per_share = account_delegated_tokens / account_issued_shares\n")),(0,o.kt)("p",null,"In our case, the current token price (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"tokens_per_share"),") is 11450.384816640 / 10,185,014,125,910 which is 1.124238481664054 * 10^-9 token per share."),(0,o.kt)("p",null,"For 357 billion shares, the amount of tokens that will be reclaimed is thus 357 ",(0,o.kt)("em",{parentName:"p"}," 10^9 ")," 1.124238481664054 * 10^-9 which is 401.35313795406726 tokens (rounded to 401.353137954 tokens)."),(0,o.kt)("p",null,"Hence, the escrow account's active balance decreased by 401.353137954 tokens and the debonding balance increased by the same amount."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"While the number of debonding shares currently equals the number of base units that are currently subject to debonding and hence, the amount of tokens we can expect to reclaim after debonding period is over is a little over 401 tokens, there is no guarantee that this stays the same until the end of the debonding period. Any slashing (e.g. for double signing) could change shares' price.")),(0,o.kt)("h3",{id:"debonding-period"},"Debonding Period"),(0,o.kt)("p",null,"The debonding period is specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"staking.params.debonding_interval")," consensus parameter and is represented as a number of epochs that need to pass."),(0,o.kt)("p",null,"To obtain its value from the genesis file, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cat $GENESIS_FILE | \\\n  python3 -c \'import sys, json; \\\n  print(json.load(sys.stdin)["staking"]["params"]["debonding_interval"])\'\n')),(0,o.kt)("p",null,"For our example network, this returns:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"10\n")),(0,o.kt)("p",null,"After the debonding period has passed, the network will automatically move an escrow account's debonding balance into the general account."))}d.isMDXComponent=!0}}]);