"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[94596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(87462),o=(n(67294),n(3905));const a={title:"Understanding our multi instance and versioning behaviour",sidebar_position:6},r=void 0,s={unversionedId:"website-guidelines/understanding-multi-instance_versioning",id:"website-guidelines/understanding-multi-instance_versioning",title:"Understanding our multi instance and versioning behaviour",description:"Like mentioned in the important to know! section, In this guideline page we want to talk a bit about the structure, documentation instances, versioning and conditional rendering (non official) solution for the versions dropdown menu.",source:"@site/docs/website-guidelines/understanding-multi-instance_versioning.md",sourceDirName:"website-guidelines",slug:"/website-guidelines/understanding-multi-instance_versioning",permalink:"/docs/website-guidelines/understanding-multi-instance_versioning",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/website-guidelines/understanding-multi-instance_versioning.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Understanding our multi instance and versioning behaviour",sidebar_position:6},sidebar:"docs",previous:{title:"Creating an open API documentation",permalink:"/docs/website-guidelines/create-open-api-doc"},next:{title:"How to update and integrate React components?",permalink:"/docs/website-guidelines/update-and-integrate-react-components"}},d={},l=[{value:"Our multi-instance structure",id:"our-multi-instance-structure",level:2},{value:"Creating new versions",id:"creating-new-versions",level:2},{value:"Versions dropdown menu",id:"versions-dropdown-menu",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Like mentioned in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/kit-process/processes/create_KIT_page#important-to-know"},"important to know!")," section, In this ",(0,o.kt)("inlineCode",{parentName:"p"},"guideline")," page we want to talk a bit about the structure, documentation instances, versioning and conditional rendering (non official) solution for the ",(0,o.kt)("inlineCode",{parentName:"p"},"versions dropdown")," menu."),(0,o.kt)("h2",{id:"our-multi-instance-structure"},"Our multi-instance structure"),(0,o.kt)("p",null,"We have structured our documentation i a way that it's divided in 3 instances/folders:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"./docs")," -> dedicated to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Developer Hub")," content (not versioned)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"./docs-kits")," -> dedicated to the ",(0,o.kt)("inlineCode",{parentName:"li"},"KITs")," content (versioned)")),(0,o.kt)("p",null,"With this structure we are able to have a better control and organisation of the code, and also allow us to have separated versions for each ",(0,o.kt)("inlineCode",{parentName:"p"},"instance")," if needed."),(0,o.kt)("p",null,"Each instance/folder's sidebar is also defined in a separate file, like follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"./docs")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"sidebars.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"./docs-kits")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"sidebarsDocskits.js"))),(0,o.kt)("p",null,"To understand and know more about the multi-instance ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/2.2.0/docs-multi-instance#setup"},"setup")," check the official documentation."),(0,o.kt)("h2",{id:"creating-new-versions"},"Creating new versions"),(0,o.kt)("p",null,"The creation/tagging of a new version will follow a scheduled period of time, through the CLI is very easy to do it as it's indicated in ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/2.2.0/docs-multi-instance#tagging-new-versions"},"here"),", it is only needed to run the following command to tag a new version of the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs-kits")," instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version:docs-kits 1.0.0\n")),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"command")," will freeze (create a copy) all the documentation included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"./docs-kits")," folder at the moment of the creation and storage said copy in the ",(0,o.kt)("inlineCode",{parentName:"p"},"./docs-kits-versioned_docs")," folder. At the same time, it will create a copy of the ",(0,o.kt)("inlineCode",{parentName:"p"},"sidebarsDocsKits.js")," file and it will storage it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"./docs-kits_versioned_sidebars")," folder."),(0,o.kt)("p",null,"That way ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus")," handles the different versions and is the reason why the ",(0,o.kt)("inlineCode",{parentName:"p"},"./docs-kits")," folder is pointing always to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Next")," version."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"IMPORTANT"))," do not tag a new version unless is explicitly requested by the ",(0,o.kt)("inlineCode",{parentName:"p"},"eclipse-tractusx")," repository's committers."),(0,o.kt)("h2",{id:"versions-dropdown-menu"},"Versions dropdown menu"),(0,o.kt)("p",null,"Following the ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/2.2.0/api/themes/configuration#navbar-docs-version-dropdown"},"Navbar docs version dropdown")," documentation, our ",(0,o.kt)("inlineCode",{parentName:"p"},"versions dropdown")," menu is defined here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"themeConfig:\n    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */\n    ({\n      // ...\n      navbar: {\n        title: 'Eclipse Tractus-X',\n        logo: {\n          alt: 'Eclipse Tractus-X logo',\n          src: 'img/logo_tractus-x.svg',\n        },\n        items: [\n          // ...\n          {\n            type: 'docsVersionDropdown',\n            docsPluginId: 'docs-kits',\n            position: 'right'\n          },\n          // ...\n        ]\n      }\n      // ...\n    })\n")),(0,o.kt)("p",null,"This last declaration will include automatically all the created versions from the ",(0,o.kt)("inlineCode",{parentName:"p"},"./docs-kits")," instance, but it will be displayed at all time. This is a behaviour that we wanted to avoid, because it could create a misunderstanding for the user and raised questions like: what documentation does that ",(0,o.kt)("inlineCode",{parentName:"p"},"version dropdown menu")," is pointing at? what if other instance needs to be versioned as well? ",(0,o.kt)("inlineCode",{parentName:"p"},"Docusaurus")," doesn't provided an official solution for this scenario, but the community provided a good one that you can check at the end of this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/4389"},"tread"),", it required to ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/2.2.0/swizzling"},"swizzle")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"DocsVersionDropdownNavbarItem")," to make the conditional rendering of it depending on the navigation location in the page."))}u.isMDXComponent=!0}}]);