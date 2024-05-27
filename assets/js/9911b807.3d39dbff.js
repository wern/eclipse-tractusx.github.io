"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[97622],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||a;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(87462),o=(n(67294),n(3905));const a={sidebar_position:2,description:"General Information on EDC Policies",title:"Working with Policies",id:"connector_kit_adoption_view_policies"},r=void 0,s={unversionedId:"kits/Connector Kit/Adoption View/connector_kit_adoption_view_policies",id:"kits/Connector Kit/Adoption View/connector_kit_adoption_view_policies",title:"Working with Policies",description:"General Information on EDC Policies",source:"@site/docs-kits/kits/Connector Kit/Adoption View/working-with-policies.md",sourceDirName:"kits/Connector Kit/Adoption View",slug:"/kits/Connector Kit/Adoption View/connector_kit_adoption_view_policies",permalink:"/docs-kits/next/kits/Connector Kit/Adoption View/connector_kit_adoption_view_policies",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"General Information on EDC Policies",title:"Working with Policies",id:"connector_kit_adoption_view_policies"},sidebar:"kits",previous:{title:"Adoption View",permalink:"/docs-kits/next/kits/Connector Kit/Adoption View/connector_kit_adoption_view"},next:{title:"Policies in Catena-X",permalink:"/docs-kits/next/kits/Connector Kit/Adoption View/connector_kit_adoption_view_policies_cx"}},c={},l=[{value:"Working with Policies",id:"working-with-policies",level:2},{value:"Consumer-side: <code>odrl:Offer</code> in a <code>ContractRequestMessage</code>",id:"consumer-side-odrloffer-in-a-contractrequestmessage",level:3},{value:"Provider-side: Checking a Consumer&#39;s Verifiable Presentation",id:"provider-side-checking-a-consumers-verifiable-presentation",level:3},{value:"Notice",id:"notice",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"working-with-policies"},"Working with Policies"),(0,o.kt)("p",null,"This section includes some general remarks on the concept of ",(0,o.kt)("inlineCode",{parentName:"p"},"Policies")," and how they are treated in the EDC. The entire\npage is independent of the conventions in the Catena-X Dataspace. For that, please check ",(0,o.kt)("a",{parentName:"p",href:"/docs-kits/next/kits/Connector%20Kit/Adoption%20View/connector_kit_adoption_view_policies_cx"},"Policies in Catena-X"),"."),(0,o.kt)("p",null,"Policies are a formalization of the terms under which a Provider extends an offer to the Dataspace. The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.internationaldataspaces.org/ids-knowledgebase/v/dataspace-protocol"},"Dataspace\nProtocol Specification"),"\nhas selected the ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/odrl-model/"},"Open Digital Rights Language (ODRL)")," as a formalism and vocabulary to describe such offers.\nThis site (and its ",(0,o.kt)("a",{parentName:"p",href:"/docs-kits/next/kits/Connector%20Kit/Adoption%20View/connector_kit_adoption_view_policies_cx"},"specialization for Catena-X"),") exclusively cover the topic of Policies in the\nsense of the Dataspace Protocol. The EDC also uses ODRL-Policies to restrict visibility on Catalog-Entries - calling\nthem ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/docs/usage/management-api-walkthrough/02_policies.md#access--usage-policies"},"Access Policies"),". Selecting the right Access Policies is a matter of the individual Data Provider and not\nregulated by the Dataspace. Doing it properly however is essential to comply with fundamental anti-trust and information\nsecurity requirements."),(0,o.kt)("p",null,'Like all payloads that get passed between connectors, ODRL is an RDF-based description language that is on the wire\nserialized as JSON-LD. JSON-LD is namespace-aware JSON with a couple of twists that one should be aware of when working\nwith it (like "Structures may be semantically equivalent even though, schematically, they are clearly not"). ODRL\nenables a Provider to be very specific when it comes to the usage of data: What may a consumer do with it? What\nobligations does a consumer incur when accepting the offer?'),(0,o.kt)("p",null,"The first time the Consumer encounters a Policy is when evaluating a Provider's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.internationaldataspaces.org/ids-knowledgebase/v/dataspace-protocol/catalog/catalog.protocol"},"Catalog"),". It contains Offers\nof ",(0,o.kt)("inlineCode",{parentName:"p"},"@type")," ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:Set")," which is a ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/odrl-model/#policy-set"},"subclass")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:Policy"),".\nAll terms can be used interchangeably, Offer is most common. Their content is contained in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:permission"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:prohibition")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:obligation")," properties. They hold ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:Rules")," that have to be\nsatisfied by the Consumer. There's two ways that can happen."),(0,o.kt)("h3",{id:"consumer-side-odrloffer-in-a-contractrequestmessage"},"Consumer-side: ",(0,o.kt)("inlineCode",{parentName:"h3"},"odrl:Offer")," in a ",(0,o.kt)("inlineCode",{parentName:"h3"},"ContractRequestMessage")),(0,o.kt)("p",null,"Firstly, when transmitting a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.internationaldataspaces.org/ids-knowledgebase/v/dataspace-protocol/contract-negotiation/contract.negotiation.protocol#id-2.1-contract-request-message"},(0,o.kt)("inlineCode",{parentName:"a"},"ContractRequestMessage")),"\n(for example triggered via the EDC's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/docs/usage/management-api-walkthrough/05_contractnegotiations.md"},"contract-negotiations API"),"), the\nConsumer must signify consent to the Offer by including it in the Request and adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:target")," property on the\nlevel of an ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:Offer"),". It is a very, very bad idea to simply copy the next-best Offer from the Catalog and replay it\nto the Provider. Instead, Consumers must perform internal checks which (if any) Offer proposes terms that they want to\nagree to. It is possible (though not usual) to encode obligations in the in an ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:Offer")," that a Consumer must\nsatisfy. Returning a ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractRequestMessage")," to the Provider, echoing the pricing information, would represent a\nlegally binding agreement in accordance to the conditions proposed by the Provider's Offer. Thus, selecting an offer\nextended by a Provider company should thus be handled with appropriate care."),(0,o.kt)("p",null,"The Provider will usually accept the ContractRequest only if the extended Offer is semantically equivalent to his own\nas distributed via the Catalog."),(0,o.kt)("h3",{id:"provider-side-checking-a-consumers-verifiable-presentation"},"Provider-side: Checking a Consumer's Verifiable Presentation"),(0,o.kt)("p",null,"In addition to checking the Offer's structure (as above), Providers' Connectors have the chance to query the Consumer's\nVerifiable Presentation (VP). A VP is a set of Verifiable Credentials (VCs) that a Consumer may have been issued by a\ntrusted third party. In this VC, a Provider may find additional information if a Consumer is eligible to pass a certain\n",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:Constraint"),". Transfer of VPs is handled automatically between the Participants' Identity Wallets by means of the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/identity-trust/blob/main/specifications/verifiable.presentation.protocol.md"},"IATP VPP"),"."),(0,o.kt)("p",null,'If, for example, the Consumer tries to negotiate for an Offer that is extended only to interested\nparties from civil society (like an NGO), simply pretending to be an NGO shouldn\'t be enough. It has to be verified and\ncan be verified with help of the VP. For that, a "NonGovernmentalOrganizationCredential" could be issued during the\nonboarding process according to the role a Participant assumes in the Dataspace. For more on the interrelation between\nCredentials and Constraints, refer to standards CX-0018 and CX-0149.'),(0,o.kt)("p",null,"A offer containing a ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:Use")," permission with a ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:Constraint")," could (in a hypothetical scenario) look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": {\n    "odrl": "http://www.w3.org/ns/odrl/2/"\n  },\n  "@id": "Y29udHJhY3QtYmlsYXRlcmFsLXBhcGVyLWV4YW1wbGUtNA==:anNvbi0xLXBhcGVy:Y2JhMGFmM2QtZTIwYi00ZjExLThlZmQtM2FhMzcyZmI1Nzhh",\n  "@type": "odrl:Set",\n  "odrl:permission": {\n    "odrl:action": {\n      "odrl:type": {\n        "@id": "http://www.w3.org/ns/odrl/2/use"\n      }\n    },\n    "odrl:constraint": {\n      "odrl:and": [\n        {\n          "odrl:leftOperand": "https://w3id.org/some-dataspace/role",\n          "odrl:operator": {\n            "@id": "odrl:eq"\n          },\n          "odrl:rightOperand": "NGO"\n        }\n      ]\n    }\n  },\n  "odrl:prohibition": [],\n  "odrl:obligation": []\n}\n')),(0,o.kt)("p",null,"The Constraint would in that case be checked against the ",(0,o.kt)("inlineCode",{parentName:"p"},'"type"')," property, attesting the information that the presented\nVC does in fact attest that the holder is a Non-Governmental Organization. A Provider Connector would have to have\nappropriate logic implemented to extract relevant information from the VP to satisfy the ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:Constraint"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": [\n    "https://www.w3.org/2018/credentials/v1",\n    "https://w3id.org/mydataspace/credentials/v1.0.0"\n  ],\n  "id": "1f36af58-0fc0-4b24-9b1c-e37d59668089",\n  "type": [\n    "VerifiableCredential",\n    "NonGovernmentalOrganizationCredential"\n  ],\n  "issuer": "did:web:com.example.issuer",\n  "issuanceDate": "2021-06-16T18:56:59Z",\n  "expirationDate": "2022-06-16T18:56:59Z",\n  "credentialSubject": {\n    "id": "did:web:com.example.participant",\n    "holderIdentifier": "BPNL000000001"\n  }\n}\n')),(0,o.kt)("h2",{id:"notice"},"Notice"),(0,o.kt)("p",null,"This work is licensed under the ",(0,o.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,o.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 Contributors of the Eclipse Foundation"),(0,o.kt)("li",{parentName:"ul"},"Source\nURL: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"},"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"))))}d.isMDXComponent=!0}}]);