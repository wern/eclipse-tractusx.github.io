"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[96909],{71380:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>y,toc:()=>T});var s=a(87462),i=(a(67294),a(3905)),n=a(26389),r=a(94891),o=a(75190),l=a(47507),d=a(24310),p=a(63303),m=(a(75035),a(85162));const u={id:"count-address-types",title:"countAddressTypes",description:"countAddressTypes",sidebar_label:"countAddressTypes",hide_title:!0,hide_table_of_contents:!0,api:{tags:["stats-controller"],operationId:"countAddressTypes",parameters:[{name:"stage",in:"path",required:!0,schema:{type:"string",enum:["Input","Output"]}}],responses:{200:{description:"OK",content:{"application/json":{schema:{required:["additionalTotal","legalAndSiteTotal","legalTotal","siteTotal"],type:"object",properties:{legalAndSiteTotal:{type:"integer",format:"int32"},legalTotal:{type:"integer",format:"int32"},siteTotal:{type:"integer",format:"int32"},additionalTotal:{type:"integer",format:"int32"}}}}}}},description:"countAddressTypes",method:"get",path:"/v6/stats/{stage}/address-types",servers:[{url:"http://localhost:8081",description:"Generated server url"}],info:{title:"Business Partner Data Management Gate",description:"A gate for a member to share business partner data with CatenaX",version:"6.0.0"},postman:{name:"count Address Types",description:{type:"text/plain"},url:{path:["v6","stats",":stage","address-types"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"stage"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/business-partner-data-management-gate",custom_edit_url:null},c=void 0,y={unversionedId:"kits/Business Partner Kit/Software Development View/Gate Api/count-address-types",id:"kits/Business Partner Kit/Software Development View/Gate Api/count-address-types",title:"countAddressTypes",description:"countAddressTypes",source:"@site/docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/count-address-types.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Gate Api",slug:"/kits/Business Partner Kit/Software Development View/Gate Api/count-address-types",permalink:"/docs-kits/next/kits/Business Partner Kit/Software Development View/Gate Api/count-address-types",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"count-address-types",title:"countAddressTypes",description:"countAddressTypes",sidebar_label:"countAddressTypes",hide_title:!0,hide_table_of_contents:!0,api:{tags:["stats-controller"],operationId:"countAddressTypes",parameters:[{name:"stage",in:"path",required:!0,schema:{type:"string",enum:["Input","Output"]}}],responses:{200:{description:"OK",content:{"application/json":{schema:{required:["additionalTotal","legalAndSiteTotal","legalTotal","siteTotal"],type:"object",properties:{legalAndSiteTotal:{type:"integer",format:"int32"},legalTotal:{type:"integer",format:"int32"},siteTotal:{type:"integer",format:"int32"},additionalTotal:{type:"integer",format:"int32"}}}}}}},description:"countAddressTypes",method:"get",path:"/v6/stats/{stage}/address-types",servers:[{url:"http://localhost:8081",description:"Generated server url"}],info:{title:"Business Partner Data Management Gate",description:"A gate for a member to share business partner data with CatenaX",version:"6.0.0"},postman:{name:"count Address Types",description:{type:"text/plain"},url:{path:["v6","stats",":stage","address-types"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"stage"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/business-partner-data-management-gate",custom_edit_url:null},sidebar:"kits",previous:{title:"stats-controller",permalink:"/docs-kits/next/category/kits/Business Partner Kit/Software Development View/Gate Api/stats-controller"},next:{title:"countPartnersPerStage",permalink:"/docs-kits/next/kits/Business Partner Kit/Software Development View/Gate Api/count-partners-per-stage"}},g={},T=[{value:"countAddressTypes",id:"countaddresstypes",level:2}],h={toc:T};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"countaddresstypes"},"countAddressTypes"),(0,i.kt)("p",null,"countAddressTypes"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"stage",in:"path",required:!0,schema:{type:"string",enum:["Input","Output"]}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"legalAndSiteTotal",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"legalTotal",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"siteTotal",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"additionalTotal",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "legalAndSiteTotal": 0,\n  "legalTotal": 0,\n  "siteTotal": 0,\n  "additionalTotal": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);