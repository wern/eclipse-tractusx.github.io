"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[41609],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=i,g=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(g,o(o({ref:t},l),{},{components:r})):n.createElement(g,o({ref:t},l))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},47069:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={title:"SIG Infra"},o=void 0,s={unversionedId:"sigs/sig_infra",id:"sigs/sig_infra",title:"SIG Infra",description:"Focus: Creating automation for various Eclipse Tractus-X topics like CI or release.",source:"@site/community/sigs/02_sig_infra.md",sourceDirName:"sigs",slug:"/sigs/sig_infra",permalink:"/community/sigs/sig_infra",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/community/community/sigs/02_sig_infra.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"SIG Infra"},sidebar:"community",previous:{title:"What is a SIG?",permalink:"/community/sigs/intro"},next:{title:"SIG Security",permalink:"/community/sigs/sig_security"}},c={},p=[{value:"Intro",id:"intro",level:2},{value:"Dash automation",id:"dash-automation",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Focus:")," Creating automation for various Eclipse Tractus-X topics like CI or release. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Repository:")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sig-infra"},"eclipse-tractusx/sig-infra")),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"SIG infra is striving to improve the developer experience in Eclipse Tractus-X, by working on different automation topics.\nWe are also providing guidance on how to work with ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," and support the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/e2e-testing"},"e2e-testing"),"\napproach, that will be based on a umbrella Chart and Helm tests."),(0,i.kt)("h2",{id:"dash-automation"},"Dash automation"),(0,i.kt)("p",null,"A topic, every Tractus-X repo has to take care of, is legal compliance.\nOne of the aspects is an up-to-date ",(0,i.kt)("inlineCode",{parentName:"p"},"DEPENDENCIES")," file, generated by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse/dash-licenses"},"eclipse dash-licenses"),".\nSIG infra is maintaining a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sig-infra/tree/main/.github/actions/run-dash"},"run-dash"),"\nGitHub action, that helps to ensure the ",(0,i.kt)("inlineCode",{parentName:"p"},"DEPENDENCIES")," file stays up-to-date."))}u.isMDXComponent=!0}}]);