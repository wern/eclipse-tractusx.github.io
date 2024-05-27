"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[21439],{51640:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>g,toc:()=>y});var a=i(87462),n=(i(67294),i(3905)),s=i(26389),o=i(94891),r=i(75190),d=i(47507),c=i(24310),l=i(63303),m=(i(75035),i(85162));const p={id:"get-contract-definition-by-id",title:"Gets a ContractDefinition with the given ID",description:"Gets a ContractDefinition with the given ID",sidebar_label:"Gets a ContractDefinition with the given ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["DGK Contract Definition"],operationId:"getContractDefinitionById",parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"The contract definition",content:{"application/json":{schema:{type:"object",properties:{createdAt:{type:"string",format:"date-time"},createdBy:{type:"string"},modifiedAt:{type:"string",format:"date-time"},modifiedBy:{type:"string"},isDeleted:{type:"boolean"},id:{type:"string"},name:{type:"string"},assetsSelector:{type:"array",items:{type:"object",additionalProperties:{type:"object"}}},accessPolicyId:{type:"string"},usagePolicyId:{type:"string"},governanceStatus:{type:"string",enum:["draft","governed"]},syncStatus:{type:"string",enum:["syncing","in sync","out of sync","not published"]}}}}}},404:{description:"Contract definition with given id is not found",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}}},description:"Gets a ContractDefinition with the given ID",method:"get",path:"/contractdefinitions/{id}",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Gets a ContractDefinition with the given ID",description:{type:"text/plain"},url:{path:["contractdefinitions",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},u=void 0,g={unversionedId:"kits/Data Governance Kit/resources/MDX Files/get-contract-definition-by-id",id:"version-24.03/kits/Data Governance Kit/resources/MDX Files/get-contract-definition-by-id",title:"Gets a ContractDefinition with the given ID",description:"Gets a ContractDefinition with the given ID",source:"@site/docs-kits_versioned_docs/version-24.03/kits/Data Governance Kit/resources/MDX Files/get-contract-definition-by-id.api.mdx",sourceDirName:"kits/Data Governance Kit/resources/MDX Files",slug:"/kits/Data Governance Kit/resources/MDX Files/get-contract-definition-by-id",permalink:"/docs-kits/kits/Data Governance Kit/resources/MDX Files/get-contract-definition-by-id",draft:!1,editUrl:null,tags:[],version:"24.03",frontMatter:{id:"get-contract-definition-by-id",title:"Gets a ContractDefinition with the given ID",description:"Gets a ContractDefinition with the given ID",sidebar_label:"Gets a ContractDefinition with the given ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["DGK Contract Definition"],operationId:"getContractDefinitionById",parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"The contract definition",content:{"application/json":{schema:{type:"object",properties:{createdAt:{type:"string",format:"date-time"},createdBy:{type:"string"},modifiedAt:{type:"string",format:"date-time"},modifiedBy:{type:"string"},isDeleted:{type:"boolean"},id:{type:"string"},name:{type:"string"},assetsSelector:{type:"array",items:{type:"object",additionalProperties:{type:"object"}}},accessPolicyId:{type:"string"},usagePolicyId:{type:"string"},governanceStatus:{type:"string",enum:["draft","governed"]},syncStatus:{type:"string",enum:["syncing","in sync","out of sync","not published"]}}}}}},404:{description:"Contract definition with given id is not found",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}}},description:"Gets a ContractDefinition with the given ID",method:"get",path:"/contractdefinitions/{id}",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Gets a ContractDefinition with the given ID",description:{type:"text/plain"},url:{path:["contractdefinitions",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},sidebar:"kits",previous:{title:"Gets a connector by connector base URL",permalink:"/docs-kits/kits/Data Governance Kit/resources/MDX Files/get-connector-info"},next:{title:"Gets contract definitions from a list of IDs",permalink:"/docs-kits/kits/Data Governance Kit/resources/MDX Files/get-contract-definitions-by-ids"}},v={},y=[{value:"Gets a ContractDefinition with the given ID",id:"gets-a-contractdefinition-with-the-given-id",level:2}],h={toc:y};function f(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"gets-a-contractdefinition-with-the-given-id"},"Gets a ContractDefinition with the given ID"),(0,n.kt)("p",null,"Gets a ContractDefinition with the given ID"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The contract definition")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"createdBy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"modifiedAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"modifiedBy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"isDeleted",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"assetsSelector",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"accessPolicyId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"usagePolicyId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"governanceStatus",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`draft`, `governed`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"syncStatus",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`syncing`, `in sync`, `out of sync`, `not published`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(d.Z,{responseExample:'{\n  "createdAt": "2024-02-27",\n  "createdBy": "string",\n  "modifiedAt": "2024-02-27",\n  "modifiedBy": "string",\n  "isDeleted": true,\n  "id": "string",\n  "name": "string",\n  "assetsSelector": [\n    {}\n  ],\n  "accessPolicyId": "string",\n  "usagePolicyId": "string",\n  "governanceStatus": "draft",\n  "syncStatus": "syncing"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Contract definition with given id is not found")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"result",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(d.Z,{responseExample:'{\n  "message": "string",\n  "level": "string",\n  "result": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);