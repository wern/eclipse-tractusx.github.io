"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[72963],{4894:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>_,contentTitle:()=>T,default:()=>A,frontMatter:()=>d,metadata:()=>l,toc:()=>I});var a=i(87462),s=(i(67294),i(3905)),o=i(26389),n=i(94891),r=(i(75190),i(47507)),E=i(24310),c=i(63303),p=(i(75035),i(85162));const d={id:"receive-edc-notification",title:"Accepts notifications sent via EDC.",description:"Accepts notifications via EDC. Notifications are filtered by their type and processed accordingly.",sidebar_label:"Accepts notifications sent via EDC.",hide_title:!0,hide_table_of_contents:!0,api:{description:"Accepts notifications via EDC. Notifications are filtered by their type and processed accordingly.",operationId:"receiveEdcNotification",requestBody:{content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{content:{type:"object",additionalProperties:!1,properties:{hops:{type:"integer",format:"int32"},bpn:{type:"string"},result:{type:"string"}}},header:{type:"object",additionalProperties:!1,description:"EDC notification header information",properties:{notificationId:{type:"string"},notificationType:{type:"string"},originalNotificationId:{type:"string"},recipientBpn:{type:"string"},replyAssetId:{type:"string"},replyAssetSubPath:{type:"string"},senderBpn:{type:"string"},senderEdc:{type:"string"}},required:["notificationId","notificationType","recipientBpn","senderBpn"]}},required:["content","header"]}}},required:!0},responses:{200:{description:"Notification received successfully."},400:{content:{"application/json":{examples:{error:{value:{error:"Bad request",messages:["BadRequestException"],statusCode:"400 BAD_REQUEST"}}},schema:{type:"object",additionalProperties:!1,description:"Error response.",properties:{error:{type:"string",description:"Error."},messages:{type:"array",description:"List of error messages.",items:{type:"string"},maxItems:2147483647},statusCode:{type:"string",description:"Error code.",enum:["100 CONTINUE","101 SWITCHING_PROTOCOLS","102 PROCESSING","103 EARLY_HINTS","103 CHECKPOINT","200 OK","201 CREATED","202 ACCEPTED","203 NON_AUTHORITATIVE_INFORMATION","204 NO_CONTENT","205 RESET_CONTENT","206 PARTIAL_CONTENT","207 MULTI_STATUS","208 ALREADY_REPORTED","226 IM_USED","300 MULTIPLE_CHOICES","301 MOVED_PERMANENTLY","302 FOUND","302 MOVED_TEMPORARILY","303 SEE_OTHER","304 NOT_MODIFIED","305 USE_PROXY","307 TEMPORARY_REDIRECT","308 PERMANENT_REDIRECT","400 BAD_REQUEST","401 UNAUTHORIZED","402 PAYMENT_REQUIRED","403 FORBIDDEN","404 NOT_FOUND","405 METHOD_NOT_ALLOWED","406 NOT_ACCEPTABLE","407 PROXY_AUTHENTICATION_REQUIRED","408 REQUEST_TIMEOUT","409 CONFLICT","410 GONE","411 LENGTH_REQUIRED","412 PRECONDITION_FAILED","413 PAYLOAD_TOO_LARGE","413 REQUEST_ENTITY_TOO_LARGE","414 URI_TOO_LONG","414 REQUEST_URI_TOO_LONG","415 UNSUPPORTED_MEDIA_TYPE","416 REQUESTED_RANGE_NOT_SATISFIABLE","417 EXPECTATION_FAILED","418 I_AM_A_TEAPOT","419 INSUFFICIENT_SPACE_ON_RESOURCE","420 METHOD_FAILURE","421 DESTINATION_LOCKED","422 UNPROCESSABLE_ENTITY","423 LOCKED","424 FAILED_DEPENDENCY","425 TOO_EARLY","426 UPGRADE_REQUIRED","428 PRECONDITION_REQUIRED","429 TOO_MANY_REQUESTS","431 REQUEST_HEADER_FIELDS_TOO_LARGE","451 UNAVAILABLE_FOR_LEGAL_REASONS","500 INTERNAL_SERVER_ERROR","501 NOT_IMPLEMENTED","502 BAD_GATEWAY","503 SERVICE_UNAVAILABLE","504 GATEWAY_TIMEOUT","505 HTTP_VERSION_NOT_SUPPORTED","506 VARIANT_ALSO_NEGOTIATES","507 INSUFFICIENT_STORAGE","508 LOOP_DETECTED","509 BANDWIDTH_LIMIT_EXCEEDED","510 NOT_EXTENDED","511 NETWORK_AUTHENTICATION_REQUIRED"]}}}}},description:"Notification malformed."}},tags:["Environmental and Social Standards"],method:"post",path:"/ess/notification/receive",servers:[{url:"http://localhost:8080"}],security:[{oAuth2:[]}],securitySchemes:{oAuth2:{flows:{clientCredentials:{scopes:{},tokenUrl:"https://localhost"}},type:"oauth2"}},jsonRequestBodyExample:{content:{hops:0,bpn:"string",result:"string"},header:{notificationId:"string",notificationType:"string",originalNotificationId:"string",recipientBpn:"string",replyAssetId:"string",replyAssetSubPath:"string",senderBpn:"string",senderEdc:"string"}},info:{description:"The API of the Item Relationship Service (IRS) for retrieving item graphs along the value chain of CATENA-X partners.",title:"IRS API",version:"2.1.0"},postman:{name:"Accepts notifications sent via EDC.",description:{content:"Accepts notifications via EDC. Notifications are filtered by their type and processed accordingly.",type:"text/plain"},url:{path:["ess","notification","receive"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Data Chain Kit/Software Development View/Job Api/irs-api",custom_edit_url:null},T=void 0,l={unversionedId:"kits/Data Chain Kit/Software Development View/Job Api/receive-edc-notification",id:"version-24.03/kits/Data Chain Kit/Software Development View/Job Api/receive-edc-notification",title:"Accepts notifications sent via EDC.",description:"Accepts notifications via EDC. Notifications are filtered by their type and processed accordingly.",source:"@site/docs-kits_versioned_docs/version-24.03/kits/Data Chain Kit/Software Development View/Job Api/receive-edc-notification.api.mdx",sourceDirName:"kits/Data Chain Kit/Software Development View/Job Api",slug:"/kits/Data Chain Kit/Software Development View/Job Api/receive-edc-notification",permalink:"/docs-kits/kits/Data Chain Kit/Software Development View/Job Api/receive-edc-notification",draft:!1,editUrl:null,tags:[],version:"24.03",frontMatter:{id:"receive-edc-notification",title:"Accepts notifications sent via EDC.",description:"Accepts notifications via EDC. Notifications are filtered by their type and processed accordingly.",sidebar_label:"Accepts notifications sent via EDC.",hide_title:!0,hide_table_of_contents:!0,api:{description:"Accepts notifications via EDC. Notifications are filtered by their type and processed accordingly.",operationId:"receiveEdcNotification",requestBody:{content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{content:{type:"object",additionalProperties:!1,properties:{hops:{type:"integer",format:"int32"},bpn:{type:"string"},result:{type:"string"}}},header:{type:"object",additionalProperties:!1,description:"EDC notification header information",properties:{notificationId:{type:"string"},notificationType:{type:"string"},originalNotificationId:{type:"string"},recipientBpn:{type:"string"},replyAssetId:{type:"string"},replyAssetSubPath:{type:"string"},senderBpn:{type:"string"},senderEdc:{type:"string"}},required:["notificationId","notificationType","recipientBpn","senderBpn"]}},required:["content","header"]}}},required:!0},responses:{200:{description:"Notification received successfully."},400:{content:{"application/json":{examples:{error:{value:{error:"Bad request",messages:["BadRequestException"],statusCode:"400 BAD_REQUEST"}}},schema:{type:"object",additionalProperties:!1,description:"Error response.",properties:{error:{type:"string",description:"Error."},messages:{type:"array",description:"List of error messages.",items:{type:"string"},maxItems:2147483647},statusCode:{type:"string",description:"Error code.",enum:["100 CONTINUE","101 SWITCHING_PROTOCOLS","102 PROCESSING","103 EARLY_HINTS","103 CHECKPOINT","200 OK","201 CREATED","202 ACCEPTED","203 NON_AUTHORITATIVE_INFORMATION","204 NO_CONTENT","205 RESET_CONTENT","206 PARTIAL_CONTENT","207 MULTI_STATUS","208 ALREADY_REPORTED","226 IM_USED","300 MULTIPLE_CHOICES","301 MOVED_PERMANENTLY","302 FOUND","302 MOVED_TEMPORARILY","303 SEE_OTHER","304 NOT_MODIFIED","305 USE_PROXY","307 TEMPORARY_REDIRECT","308 PERMANENT_REDIRECT","400 BAD_REQUEST","401 UNAUTHORIZED","402 PAYMENT_REQUIRED","403 FORBIDDEN","404 NOT_FOUND","405 METHOD_NOT_ALLOWED","406 NOT_ACCEPTABLE","407 PROXY_AUTHENTICATION_REQUIRED","408 REQUEST_TIMEOUT","409 CONFLICT","410 GONE","411 LENGTH_REQUIRED","412 PRECONDITION_FAILED","413 PAYLOAD_TOO_LARGE","413 REQUEST_ENTITY_TOO_LARGE","414 URI_TOO_LONG","414 REQUEST_URI_TOO_LONG","415 UNSUPPORTED_MEDIA_TYPE","416 REQUESTED_RANGE_NOT_SATISFIABLE","417 EXPECTATION_FAILED","418 I_AM_A_TEAPOT","419 INSUFFICIENT_SPACE_ON_RESOURCE","420 METHOD_FAILURE","421 DESTINATION_LOCKED","422 UNPROCESSABLE_ENTITY","423 LOCKED","424 FAILED_DEPENDENCY","425 TOO_EARLY","426 UPGRADE_REQUIRED","428 PRECONDITION_REQUIRED","429 TOO_MANY_REQUESTS","431 REQUEST_HEADER_FIELDS_TOO_LARGE","451 UNAVAILABLE_FOR_LEGAL_REASONS","500 INTERNAL_SERVER_ERROR","501 NOT_IMPLEMENTED","502 BAD_GATEWAY","503 SERVICE_UNAVAILABLE","504 GATEWAY_TIMEOUT","505 HTTP_VERSION_NOT_SUPPORTED","506 VARIANT_ALSO_NEGOTIATES","507 INSUFFICIENT_STORAGE","508 LOOP_DETECTED","509 BANDWIDTH_LIMIT_EXCEEDED","510 NOT_EXTENDED","511 NETWORK_AUTHENTICATION_REQUIRED"]}}}}},description:"Notification malformed."}},tags:["Environmental and Social Standards"],method:"post",path:"/ess/notification/receive",servers:[{url:"http://localhost:8080"}],security:[{oAuth2:[]}],securitySchemes:{oAuth2:{flows:{clientCredentials:{scopes:{},tokenUrl:"https://localhost"}},type:"oauth2"}},jsonRequestBodyExample:{content:{hops:0,bpn:"string",result:"string"},header:{notificationId:"string",notificationType:"string",originalNotificationId:"string",recipientBpn:"string",replyAssetId:"string",replyAssetSubPath:"string",senderBpn:"string",senderEdc:"string"}},info:{description:"The API of the Item Relationship Service (IRS) for retrieving item graphs along the value chain of CATENA-X partners.",title:"IRS API",version:"2.1.0"},postman:{name:"Accepts notifications sent via EDC.",description:{content:"Accepts notifications via EDC. Notifications are filtered by their type and processed accordingly.",type:"text/plain"},url:{path:["ess","notification","receive"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Data Chain Kit/Software Development View/Job Api/irs-api",custom_edit_url:null},sidebar:"kits",previous:{title:"Returns paginated jobs with state and execution times.",permalink:"/docs-kits/kits/Data Chain Kit/Software Development View/Job Api/get-jobs-by-job-states"},next:{title:"Register a policy that should be accepted in EDC negotiation.",permalink:"/docs-kits/kits/Data Chain Kit/Software Development View/Job Api/register-allowed-policy"}},_={},I=[{value:"Accepts notifications sent via EDC.",id:"accepts-notifications-sent-via-edc",level:2}],N={toc:I};function A(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},N,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"accepts-notifications-sent-via-edc"},"Accepts notifications sent via EDC."),(0,s.kt)("p",null,"Accepts notifications via EDC. Notifications are filtered by their type and processed accordingly."),(0,s.kt)(n.Z,{mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(E.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(E.Z,{collapsible:!1,name:"hops",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(E.Z,{collapsible:!1,name:"bpn",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(E.Z,{collapsible:!1,name:"result",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(E.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"header"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"EDC notification header information")),(0,s.kt)(E.Z,{collapsible:!1,name:"notificationId",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(E.Z,{collapsible:!1,name:"notificationType",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(E.Z,{collapsible:!1,name:"originalNotificationId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(E.Z,{collapsible:!1,name:"recipientBpn",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(E.Z,{collapsible:!1,name:"replyAssetId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(E.Z,{collapsible:!1,name:"replyAssetSubPath",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(E.Z,{collapsible:!1,name:"senderBpn",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(E.Z,{collapsible:!1,name:"senderEdc",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Notification received successfully.")),(0,s.kt)("div",null)),(0,s.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Notification malformed.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(E.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:"Error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(E.Z,{collapsible:!1,name:"messages",required:!1,deprecated:void 0,schemaDescription:"List of error messages.",schemaName:"string[]",qualifierMessage:"**Possible values:** `<= 2147483647`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(E.Z,{collapsible:!1,name:"statusCode",required:!1,deprecated:void 0,schemaDescription:"Error code.",schemaName:"string",qualifierMessage:"**Possible values:** [`100 CONTINUE`, `101 SWITCHING_PROTOCOLS`, `102 PROCESSING`, `103 EARLY_HINTS`, `103 CHECKPOINT`, `200 OK`, `201 CREATED`, `202 ACCEPTED`, `203 NON_AUTHORITATIVE_INFORMATION`, `204 NO_CONTENT`, `205 RESET_CONTENT`, `206 PARTIAL_CONTENT`, `207 MULTI_STATUS`, `208 ALREADY_REPORTED`, `226 IM_USED`, `300 MULTIPLE_CHOICES`, `301 MOVED_PERMANENTLY`, `302 FOUND`, `302 MOVED_TEMPORARILY`, `303 SEE_OTHER`, `304 NOT_MODIFIED`, `305 USE_PROXY`, `307 TEMPORARY_REDIRECT`, `308 PERMANENT_REDIRECT`, `400 BAD_REQUEST`, `401 UNAUTHORIZED`, `402 PAYMENT_REQUIRED`, `403 FORBIDDEN`, `404 NOT_FOUND`, `405 METHOD_NOT_ALLOWED`, `406 NOT_ACCEPTABLE`, `407 PROXY_AUTHENTICATION_REQUIRED`, `408 REQUEST_TIMEOUT`, `409 CONFLICT`, `410 GONE`, `411 LENGTH_REQUIRED`, `412 PRECONDITION_FAILED`, `413 PAYLOAD_TOO_LARGE`, `413 REQUEST_ENTITY_TOO_LARGE`, `414 URI_TOO_LONG`, `414 REQUEST_URI_TOO_LONG`, `415 UNSUPPORTED_MEDIA_TYPE`, `416 REQUESTED_RANGE_NOT_SATISFIABLE`, `417 EXPECTATION_FAILED`, `418 I_AM_A_TEAPOT`, `419 INSUFFICIENT_SPACE_ON_RESOURCE`, `420 METHOD_FAILURE`, `421 DESTINATION_LOCKED`, `422 UNPROCESSABLE_ENTITY`, `423 LOCKED`, `424 FAILED_DEPENDENCY`, `425 TOO_EARLY`, `426 UPGRADE_REQUIRED`, `428 PRECONDITION_REQUIRED`, `429 TOO_MANY_REQUESTS`, `431 REQUEST_HEADER_FIELDS_TOO_LARGE`, `451 UNAVAILABLE_FOR_LEGAL_REASONS`, `500 INTERNAL_SERVER_ERROR`, `501 NOT_IMPLEMENTED`, `502 BAD_GATEWAY`, `503 SERVICE_UNAVAILABLE`, `504 GATEWAY_TIMEOUT`, `505 HTTP_VERSION_NOT_SUPPORTED`, `506 VARIANT_ALSO_NEGOTIATES`, `507 INSUFFICIENT_STORAGE`, `508 LOOP_DETECTED`, `509 BANDWIDTH_LIMIT_EXCEEDED`, `510 NOT_EXTENDED`, `511 NETWORK_AUTHENTICATION_REQUIRED`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "error": "string",\n  "messages": [\n    "string"\n  ],\n  "statusCode": "100 CONTINUE"\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(p.Z,{label:"Error",value:"Error",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "error": "Bad request",\n  "messages": [\n    "BadRequestException"\n  ],\n  "statusCode": "400 BAD_REQUEST"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}A.isMDXComponent=!0}}]);