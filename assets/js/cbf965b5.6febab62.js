"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[91403],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7802:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"TRG 1.05 - Architecture Documentation",sidebar_position:1},o=void 0,l={unversionedId:"release/trg-0/trg-1-05",id:"release/trg-0/trg-1-05",title:"TRG 1.05 - Architecture Documentation",description:"Proposed release date: 30th of March 2024",source:"@site/docs/release/trg-0/trg-1-05.md",sourceDirName:"release/trg-0",slug:"/release/trg-0/trg-1-05",permalink:"/docs/release/trg-0/trg-1-05",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/release/trg-0/trg-1-05.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"TRG 1.05 - Architecture Documentation",sidebar_position:1},sidebar:"docs",previous:{title:"TRG 0 - (WIP) Template",permalink:"/docs/release/trg-0/trg-0-template"},next:{title:"TRG 1.06 - Administrator's Guide",permalink:"/docs/release/trg-0/trg-1-06"}},c={},s=[{value:"Why",id:"why",level:2},{value:"Description",id:"description",level:2},{value:"Best Practice",id:"best-practice",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Proposed release date: 30th of March 2024")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Created"),(0,a.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Draft"),(0,a.kt)("td",{parentName:"tr",align:null},"26-Mar-2024"),(0,a.kt)("td",{parentName:"tr",align:null},"Transferred from Release Acceptance Criteria into TRG")))),(0,a.kt)("h2",{id:"why"},"Why"),(0,a.kt)("p",null,"To provide information like context, integration interfaces and planned usage of the component. The architecture documentation should support architects and operation teams for their decisions and operative tasks. We follow the good practice to document the Architecture of FOSS components. ",(0,a.kt)("a",{parentName:"p",href:"https://arc42.org/"},"ARC42")," is our template of choice."),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"In order to pragmatically start or update your Architecture documentation, consult ",(0,a.kt)("a",{parentName:"p",href:"https://arc42.org/"},"ARC42"),'. An "Architecture" folder must be present in the ',(0,a.kt)("inlineCode",{parentName:"p"},"/docs/")," folder of your leading repository. Within the Architecture folder the structure of the ARC42 template shall be applied. Follow the guidance to understand, WHAT and HOW to document."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Architecture Documentation ",(0,a.kt)("strong",{parentName:"li"},"has to")," be stored in the folder: ",(0,a.kt)("inlineCode",{parentName:"li"},"/docs/")),(0,a.kt)("li",{parentName:"ul"},"Architecture Documentation is available with the software at the same time"),(0,a.kt)("li",{parentName:"ul"},"Architecture Documentation is correct and up to date; English is a ",(0,a.kt)("strong",{parentName:"li"},"must")),(0,a.kt)("li",{parentName:"ul"},"The documentation is of appropriate maturity to be handed over to any Operations Company with global business practice intentions")),(0,a.kt)("h2",{id:"best-practice"},"Best Practice"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Provide each chapter of the Arc42 documentation as single .md file named after the chapter"),(0,a.kt)("li",{parentName:"ul"},"Favor diagrams as mermaid block in .md files directly over image files, where possible"),(0,a.kt)("li",{parentName:"ul"},"Have a look to peer repositories within Tractus-X for inspiration"),(0,a.kt)("li",{parentName:"ul"},"Anchor a link to your Architecture Documentation within your ",(0,a.kt)("inlineCode",{parentName:"li"},"README.md")," (see ",(0,a.kt)("a",{parentName:"li",href:"https://eclipse-tractusx.github.io/docs/release/trg-1/trg-1-1"},"TRG 1.01"),")"),(0,a.kt)("li",{parentName:"ul"},"The Architecture Documentation is in sync with the latest released version of the component. It is checked and updated, once an up-revision is foreseen"),(0,a.kt)("li",{parentName:"ul"},"The content is of appropriate maturity, so that any Operations Company with global business practice intentions is invited to use and build on it"),(0,a.kt)("li",{parentName:"ul"},"Provide link to documentation as early as possible and mark changes to the previous version (if applicable); expect optimization loops based on feedback")))}u.isMDXComponent=!0}}]);