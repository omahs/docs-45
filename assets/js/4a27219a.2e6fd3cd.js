"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[6006],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(t),y=o,m=u["".concat(l,".").concat(y)]||u[y]||c[y]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const i={},a="Refreshing Node Certificates",d={unversionedId:"node/run-your-node/maintenance/refreshing-certificates",id:"node/run-your-node/maintenance/refreshing-certificates",title:"Refreshing Node Certificates",description:"Refreshing Sentry Client TLS Certificate on the Validator Node",source:"@site/docs/node/run-your-node/maintenance/refreshing-certificates.md",sourceDirName:"node/run-your-node/maintenance",slug:"/node/run-your-node/maintenance/refreshing-certificates",permalink:"/node/run-your-node/maintenance/refreshing-certificates",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/node/run-your-node/maintenance/refreshing-certificates.md",tags:[],version:"current",lastUpdatedAt:1675933402,formattedLastUpdatedAt:"Feb 9, 2023",frontMatter:{},sidebar:"operators",previous:{title:"Adding or Removing Nodes",permalink:"/node/run-your-node/maintenance/adding-or-removing-nodes"},next:{title:"Shutting Down a Node",permalink:"/node/run-your-node/maintenance/shutting-down-a-node"}},l={},s=[{value:"Refreshing Sentry Client TLS Certificate on the Validator Node",id:"refreshing-sentry-client-tls-certificate-on-the-validator-node",level:2},{value:"Steps on the Validator Node",id:"steps-on-the-validator-node",level:3},{value:"Steps on the Sentry Node",id:"steps-on-the-sentry-node",level:3},{value:"Refreshing TLS Certificate on the Sentry Node",id:"refreshing-tls-certificate-on-the-sentry-node",level:2},{value:"Steps on the Sentry Node",id:"steps-on-the-sentry-node-1",level:3},{value:"Steps on the Validator Node",id:"steps-on-the-validator-node-1",level:3}],p={toc:s};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"refreshing-node-certificates"},"Refreshing Node Certificates"),(0,o.kt)("h2",{id:"refreshing-sentry-client-tls-certificate-on-the-validator-node"},"Refreshing Sentry Client TLS Certificate on the Validator Node"),(0,o.kt)("h3",{id:"steps-on-the-validator-node"},"Steps on the Validator Node"),(0,o.kt)("p",null,"Go to your validator node's data directory, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"/srv/oasis"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/node"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/serverdir/node"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd <PATH-TO-DATADIR>\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"We recommend backing up your validator's private and public keys (i.e. all ",(0,o.kt)("inlineCode",{parentName:"p"},"*.pem")," files) in your node's data directory before continuing.")),(0,o.kt)("p",null,"Remove the validator's current sentry client TLS private key and certificate by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rm sentry_client_tls_identity.pem sentry_client_tls_identity_cert.pem\n")),(0,o.kt)("p",null,"Re-generate node's keys by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oasis-node identity init --datadir ./\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This should keep all your other node's keys (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"beacon.pem"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"consensus.pem"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"consensus_pub.pem"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"identity.pem"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"identity_pub.pem"),", ...) intact.")),(0,o.kt)("p",null,"Then run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oasis-node identity show-sentry-client-pubkey --datadir ./\n")),(0,o.kt)("p",null,"to obtain the value of the validator's new sentry client TLS public key in Base64-encoding that can be put in sentry node's configuration under ",(0,o.kt)("inlineCode",{parentName:"p"},"control.authorized_pubkey")," list."),(0,o.kt)("p",null,"Restart your validator node."),(0,o.kt)("h3",{id:"steps-on-the-sentry-node"},"Steps on the Sentry Node"),(0,o.kt)("p",null,"After generating a new sentry client TLS private key and certificate on the validator node, set the new client TLS public key in your sentry node's configuration."),(0,o.kt)("p",null,"Before using the below sentry node configuration snippet, replace the following variables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{{ validator_sentry_client_grpc_public_key }}"),": The validator node's new sentry client TLS public key encoded in Base64-encoding (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"KjVEdeGbtdxffQaSxIkLE+kW0sINI5/5YR/lgUkuEcw="),").")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"... trimmed ...\n\n# Worker configuration.\nworker:\n  sentry:\n    # Enable sentry node.\n    enabled: true\n    # Port used by validator nodes to query sentry node for registry\n    # information.\n    # IMPORTANT: Only validator nodes protected by the sentry node should have\n    # access to this port. This port should not be exposed on the public\n    # network.\n    control:\n      port: 9009\n      authorized_pubkey:\n        - {{ validator_sentry_client_grpc_public_key }}\n\n... trimmed ...\n")),(0,o.kt)("p",null,"Restart your sentry node."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The validator node will re-register itself automatically once it's connected to the network through the sentry again.")),(0,o.kt)("h2",{id:"refreshing-tls-certificate-on-the-sentry-node"},"Refreshing TLS Certificate on the Sentry Node"),(0,o.kt)("h3",{id:"steps-on-the-sentry-node-1"},"Steps on the Sentry Node"),(0,o.kt)("p",null,"Go to your sentry node's data directory, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"/srv/oasis"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/node"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/serverdir/node"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd <PATH-TO-DATADIR>\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"We recommend backing up your sentry's private and public keys (i.e. all ",(0,o.kt)("inlineCode",{parentName:"p"},"*.pem")," files) in your node's data directory before continuing.")),(0,o.kt)("p",null,"Remove the sentry's current TLS private key and certificate by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rm tls_identity.pem tls_identity_cert.pem\n")),(0,o.kt)("p",null,"Re-generate node's keys by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oasis-node identity init --datadir ./\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This should keep all your other node's keys (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"beacon.pem"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"consensus.pem"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"consensus_pub.pem"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"identity.pem"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"identity_pub.pem"),", ...) intact.")),(0,o.kt)("p",null,"Then run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oasis-node identity show-tls-pubkey --datadir ./\n")),(0,o.kt)("p",null,"to obtain the value of the sentry's new TLS public key in Base64-encoding that can be put in validator node's configuration under ",(0,o.kt)("inlineCode",{parentName:"p"},"worker.sentry.address")," list."),(0,o.kt)("p",null,"Restart your sentry node."),(0,o.kt)("h3",{id:"steps-on-the-validator-node-1"},"Steps on the Validator Node"),(0,o.kt)("p",null,"After generating a new TLS private key and certificate on the sentry node, set the new TLS public key in your validator node's configuration."),(0,o.kt)("p",null,"Before using the below validator node configuration snippet, replace the following variables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{{ sentry_node_grpc_public_key }}"),": The sentry node's new TLS public key encoded in Base64-encoding (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"1dA4/NuYPSWXYaKpLhaofrZscIb2FDKtJclCMnVC0Xc="),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{{ sentry_node_private_ip }}"),": The private IP address of the sentry node over which sentry node should be accessible to the validator.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'... trimmed ...\n\nworker:\n  registration:\n    # In order for the node to register itself the entity.json of the entity\n    # used to provision the node must be available on the node.\n    entity: /serverdir/node/entity/entity.json\n  sentry:\n    address:\n      - "{{ sentry_node_grpc_public_key }}@{{ sentry_node_private_ip }}:9009"\n\n... trimmed ...\n')),(0,o.kt)("p",null,"Restart your validator node."))}c.isMDXComponent=!0}}]);