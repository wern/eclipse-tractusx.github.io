"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[92735],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return a?r.createElement(h,c(c({ref:t},u),{},{components:a})):r.createElement(h,c({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},16020:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={},c="Notice for Docker image",o={unversionedId:"kits/tractusx-edc/edc-dataplane/edc-dataplane-azure-vault/notice",id:"version-3.1.0/kits/tractusx-edc/edc-dataplane/edc-dataplane-azure-vault/notice",title:"Notice for Docker image",description:"An EDC Data Plane using the Azure KeyVault.",source:"@site/docs-kits_versioned_docs/version-3.1.0/kits/tractusx-edc/edc-dataplane/edc-dataplane-azure-vault/notice.md",sourceDirName:"kits/tractusx-edc/edc-dataplane/edc-dataplane-azure-vault",slug:"/kits/tractusx-edc/edc-dataplane/edc-dataplane-azure-vault/notice",permalink:"/docs-kits/3.1.0/kits/tractusx-edc/edc-dataplane/edc-dataplane-azure-vault/notice",draft:!1,tags:[],version:"3.1.0",frontMatter:{},sidebar:"kits",previous:{title:"EDC Data-Plane with Azure Key Vault",permalink:"/docs-kits/3.1.0/kits/tractusx-edc/edc-dataplane/edc-dataplane-azure-vault/"},next:{title:"EDC Data-Plane Base Module",permalink:"/docs-kits/3.1.0/kits/tractusx-edc/edc-dataplane/edc-dataplane-base/"}},l={},s=[{value:"TractusX-EDC Data Plane",id:"tractusx-edc-data-plane",level:2},{value:"Used base image",id:"used-base-image",level:2}],u={toc:s};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"notice-for-docker-image"},"Notice for Docker image"),(0,n.kt)("p",null,"An EDC Data Plane using the Azure KeyVault."),(0,n.kt)("p",null,"DockerHub: ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/tractusx/edc-dataplane-azure-vault"},"https://hub.docker.com/r/tractusx/edc-dataplane-azure-vault")),(0,n.kt)("p",null,"Eclipse Tractus-X product(s) installed within the image:"),(0,n.kt)("h2",{id:"tractusx-edc-data-plane"},"TractusX-EDC Data Plane"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GitHub: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/tractusx-edc"},"https://github.com/eclipse-tractusx/tractusx-edc")),(0,n.kt)("li",{parentName:"ul"},"Project home: ",(0,n.kt)("a",{parentName:"li",href:"https://projects.eclipse.org/projects/automotive.tractusx"},"https://projects.eclipse.org/projects/automotive.tractusx")),(0,n.kt)("li",{parentName:"ul"},"Dockerfile: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/edc-dataplane/edc-dataplane-azure-vault/src/main/docker/Dockerfile"},"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/edc-dataplane/edc-dataplane-azure-vault/src/main/docker/Dockerfile")),(0,n.kt)("li",{parentName:"ul"},"Project license: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/LICENSE"},"Apache License, Version 2.0"))),(0,n.kt)("h2",{id:"used-base-image"},"Used base image"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/adoptium/containers"},"eclipse-temurin:17.0.6_10-jre-alpine")),(0,n.kt)("li",{parentName:"ul"},"Official Eclipse Temurin DockerHub page: ",(0,n.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/eclipse-temurin"},"https://hub.docker.com/_/eclipse-temurin")),(0,n.kt)("li",{parentName:"ul"},"Eclipse Temurin Project: ",(0,n.kt)("a",{parentName:"li",href:"https://projects.eclipse.org/projects/adoptium.temurin"},"https://projects.eclipse.org/projects/adoptium.temurin")),(0,n.kt)("li",{parentName:"ul"},"Additional information about the Eclipse Temurin\nimages: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/docker-library/repo-info/tree/master/repos/eclipse-temurin"},"https://github.com/docker-library/repo-info/tree/master/repos/eclipse-temurin"))),(0,n.kt)("p",null,"As with all Docker images, these likely also contain other software which may be under other licenses (such as Bash, etc\nfrom the base distribution, along with any direct or indirect dependencies of the primary software being contained)."),(0,n.kt)("p",null,"As for any pre-built image usage, it is the image user's responsibility to ensure that any use of this image complies\nwith any relevant licenses for all software contained within."))}p.isMDXComponent=!0}}]);