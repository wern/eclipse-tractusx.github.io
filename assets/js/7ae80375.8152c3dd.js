"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[55642],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},10504:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},o="Management API Overview",s={unversionedId:"kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/management-api-overview",id:"version-23.09/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/management-api-overview",title:"Management API Overview",description:"Introduction",source:"@site/docs-kits_versioned_docs/version-23.09/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/1-management-api-overview.md",sourceDirName:"kits/tractusx-edc/docs/samples/management-api-v2-walkthrough",slug:"/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/management-api-overview",permalink:"/docs-kits/23.09/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/management-api-overview",draft:!1,tags:[],version:"23.09",sidebarPosition:1,frontMatter:{},sidebar:"kits",previous:{title:"Domain Model",permalink:"/docs-kits/23.09/kits/tractusx-edc/docs/kit/adoption-view/Domain Model"},next:{title:"Creating an Asset",permalink:"/docs-kits/23.09/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/assets"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"1. Modified Endpoints",id:"1-modified-endpoints",level:2},{value:"2. Brief JSON-LD Introduction",id:"2-brief-json-ld-introduction",level:2},{value:"Keywords",id:"keywords",level:3},{value:"Namespaces",id:"namespaces",level:3},{value:"3. Walkthrough",id:"3-walkthrough",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"management-api-overview"},"Management API Overview"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"With the introduction of the new ",(0,r.kt)("a",{parentName:"p",href:"https://docs.internationaldataspaces.org/dataspace-protocol/overview/readme"},"Dataspace Protocol"),", now using JSON-LD, all Management API endpoints had to be adapted as well to reflect that.\nJSON-LD (JSON for Linked Data) is an extension of JSON that introduces a set of principles and mechanisms to enable interoperability."),(0,r.kt)("p",null,"This document will showcase how this change impacts the management API usage."),(0,r.kt)("h2",{id:"1-modified-endpoints"},"1. Modified Endpoints"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MANAGEMENT_URL")," specifies the URL of the management API and the prefixes ",(0,r.kt)("inlineCode",{parentName:"p"},"v2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"v3")," allows access to the most recent functionalities of the management API."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Resource"),(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Asset"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<MANAGEMENT_URL>/v3/assets"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Policy Definition"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<MANAGEMENT_URL>/v2/policydefinitions"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contract Definition"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<MANAGEMENT_URL>/v2/contractdefinitions"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Catalog"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<MANAGEMENT_URL>/v2/catalog"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contract Negotiation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<MANAGEMENT_URL>/v2/contractnegotiations"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contract Agreement"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<MANAGEMENT_URL>/v2/contractagreements"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transfer Process"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<MANAGEMENT_URL>/v2/transferprocesses"))))),(0,r.kt)("h2",{id:"2-brief-json-ld-introduction"},"2. Brief JSON-LD Introduction"),(0,r.kt)("p",null,"JSON-LD includes several important keywords that play a crucial role in defining the structure, semantics, and relationships within a JSON-LD document. Since some keys which are required in requests for the new management API aren't self-explanatory when you first see them, here are some of the most commonly used and important keywords in JSON-LD.\nThese keys are generally part of the JSON-LD spec and serve as identification on a larger scope. Please also refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/json-ld11/"},"JSON-LD spec"),"."),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@context"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the context for interpreting the meaning of terms and properties within a JSON-LD document. It associates terms with namespaces, vocabularies, or URLs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@vocab"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets a default namespace or vocabulary for expanding terms within a JSON-LD document. It allows for a more concise representation of properties by omitting the namespace prefix for commonly used terms.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@id"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents the unique identifier (URI or IRI) for a node or resource within a JSON-LD document. It allows for linking and referencing resources.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@type"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the type(s) of a node or resource. It is used to specify the class or classes that the resource belongs to, typically using terms from a vocabulary or ontology.")))),(0,r.kt)("h3",{id:"namespaces"},"Namespaces"),(0,r.kt)("p",null,"A namespace is defined by associating a prefix with a URI or IRI in the @context of a JSON-LD document. The prefix is typically a short string, while the URI or IRI represents a namespace or vocabulary where the terms or properties are defined."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dct"),(0,r.kt)("td",{parentName:"tr",align:null},'Defines the prefix "dct" and associates it with the URI "',(0,r.kt)("a",{parentName:"td",href:"https://purl.org/dc/terms/"},"https://purl.org/dc/terms/"),'". The prefix "dct" can now be used in the JSON-LD document to represent terms from the Dublin Core Metadata Terms vocabulary.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc"),(0,r.kt)("td",{parentName:"tr",align:null},'Defines the prefix "edc" and associates it with the URI "',(0,r.kt)("a",{parentName:"td",href:"https://w3id.org/edc/v0.0.1/ns/"},"https://w3id.org/edc/v0.0.1/ns/"),'". The prefix "edc" can now be used to represent terms from the EDC (Eclipse Dataspace Connect) vocabulary.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dcat"),(0,r.kt)("td",{parentName:"tr",align:null},'Defines the prefix "dcat" and associates it with the URI "',(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/ns/dcat/"},"https://www.w3.org/ns/dcat/"),'". The prefix "dcat" can now be used to represent terms from the DCAT (Data Catalog Vocabulary) vocabulary.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odrl"),(0,r.kt)("td",{parentName:"tr",align:null},'Defines the prefix "odrl" and associates it with the URI "',(0,r.kt)("a",{parentName:"td",href:"http://www.w3.org/ns/odrl/2/"},"http://www.w3.org/ns/odrl/2/"),'". The prefix "odrl" can now be used to represent terms from the ODRL (Open Digital Rights Language) vocabulary.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dspace"),(0,r.kt)("td",{parentName:"tr",align:null},'Defines the prefix "dspace" and associates it with the URI "',(0,r.kt)("a",{parentName:"td",href:"https://w3id.org/dspace/v0.8/"},"https://w3id.org/dspace/v0.8/"),'". The prefix "dspace" can now be used to represent terms from the DSpace vocabulary.')))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please note: The namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"edc")," currently is only a placeholder and does not lead to any JSON-LD context definition or vocabulary.\nThis will change at a later date.")),(0,r.kt)("h2",{id:"3-walkthrough"},"3. Walkthrough"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs-kits/23.09/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/assets"},"Create an Asset")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs-kits/23.09/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/policy-definitions"},"Create a Policy Definition")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs-kits/23.09/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/contract-definitions"},"Create Contract Definition")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs-kits/23.09/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/catalog"},"Fetch provider's Catalog")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs-kits/23.09/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/contract-negotiation"},"Initiate Contract Negotiation")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs-kits/23.09/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/transfer-process"},"Initiate Transfer Process"))))}c.isMDXComponent=!0}}]);