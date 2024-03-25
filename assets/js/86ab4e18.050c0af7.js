"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[60987],{86187:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>v,frontMatter:()=>m,metadata:()=>h,toc:()=>k});var i=a(87462),l=(a(67294),a(3905)),s=a(26389),r=a(94891),o=(a(75190),a(47507)),c=a(24310),p=a(63303),n=(a(75035),a(85162));const m={id:"check-health",title:"checkHealth",description:"Performs a liveness probe to determine whether the runtime is working properly.",sidebar_label:"checkHealth",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Application Observability"],description:"Performs a liveness probe to determine whether the runtime is working properly.",operationId:"checkHealth",responses:{200:{description:"The runtime is working properly.",content:{"application/json":{schema:{type:"object",properties:{componentResults:{type:"array",example:null,items:{type:"object",properties:{component:{type:"string",example:null},failure:{type:"object",properties:{failureDetail:{type:"string",example:null},messages:{type:"array",example:null,items:{type:"string",example:null}}},example:null},isHealthy:{type:"boolean",example:null}},example:null}},isSystemHealthy:{type:"boolean",example:null}},example:null}}}}},method:"get",path:"/check/health",servers:[{url:"/"}],info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"check Health",description:{content:"Performs a liveness probe to determine whether the runtime is working properly.",type:"text/plain"},url:{path:["check","health"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},d=void 0,h={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/check-health",id:"version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/check-health",title:"checkHealth",description:"Performs a liveness probe to determine whether the runtime is working properly.",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/check-health.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/check-health",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/check-health",draft:!1,editUrl:null,tags:[],version:"23.12",frontMatter:{id:"check-health",title:"checkHealth",description:"Performs a liveness probe to determine whether the runtime is working properly.",sidebar_label:"checkHealth",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Application Observability"],description:"Performs a liveness probe to determine whether the runtime is working properly.",operationId:"checkHealth",responses:{200:{description:"The runtime is working properly.",content:{"application/json":{schema:{type:"object",properties:{componentResults:{type:"array",example:null,items:{type:"object",properties:{component:{type:"string",example:null},failure:{type:"object",properties:{failureDetail:{type:"string",example:null},messages:{type:"array",example:null,items:{type:"string",example:null}}},example:null},isHealthy:{type:"boolean",example:null}},example:null}},isSystemHealthy:{type:"boolean",example:null}},example:null}}}}},method:"get",path:"/check/health",servers:[{url:"/"}],info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"check Health",description:{content:"Performs a liveness probe to determine whether the runtime is working properly.",type:"text/plain"},url:{path:["check","health"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},sidebar:"kits",previous:{title:"cancelNegotiation",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/cancel-negotiation"},next:{title:"complete",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/complete"}},u={},k=[{value:"checkHealth",id:"checkhealth",level:2}],y={toc:k};function v(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,i.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"checkhealth"},"checkHealth"),(0,l.kt)("p",null,"Performs a liveness probe to determine whether the runtime is working properly."),(0,l.kt)("div",null,(0,l.kt)(s.Z,{mdxType:"ApiTabs"},(0,l.kt)(n.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"The runtime is working properly.")),(0,l.kt)("div",null,(0,l.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(n.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(n.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"componentResults"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"component",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"failure"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"failureDetail",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"messages",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(c.Z,{collapsible:!1,name:"isHealthy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(c.Z,{collapsible:!1,name:"isSystemHealthy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(n.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);