import{P as d}from"./PlayerNavbar.85edbf52.js";import{d as u}from"./runnerData.eafa97d7.js";import{l as p,a as l,b}from"./colors.5e58f28b.js";import{d as k,K as s,b as i,c as f,x as y,z as o,t as g,D as w,A as _,q as h}from"./registerWidgets.cbdb5b20.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="23aa2611-3627-40b6-9e2a-c58fa1cce33c",r._sentryDebugIdIdentifier="sentry-dbid-23aa2611-3627-40b6-9e2a-c58fa1cce33c")}catch{}})();function v(r){return r.startsWith("#")||r.match(/^(rgb|hsl)/)}function C(r){return r.startsWith("http://")||r.startsWith("https://")}function I(r){return C(r)?"external-image":v(r)?"color":"hosted-image"}function P(r,e="/_assets/background"){switch(I(r)){case"external-image":return{backgroundImage:`url(${r})`,backgroundSize:"cover",backgroundPosition:"center"};case"color":return{backgroundColor:r};case"hosted-image":return{backgroundImage:`url(${e})`,backgroundSize:"cover",backgroundPosition:"center"}}}const x={class:"sidebar-preview"},S=k({__name:"SidebarPreview",props:{workspace:null},setup(r){const e=r,a=s(()=>e.workspace.logoUrl?`/_editor/api/assets/${e.workspace.logoUrl}`:""),m=s(()=>(document.documentElement.style.setProperty("--ac-global-font-family",e.workspace.fontFamily),{"--color-main":e.workspace.mainColor,"--color-main-light":p(e.workspace.mainColor,.15),"--color-main-hover":l(e.workspace.mainColor),"--color-main-active":l(e.workspace.mainColor),"--color-secondary":"transparent","--color-secondary-lighter":"transparent","--color-secondary-darker":"transparent","--button-font-color-main":b(e.workspace.mainColor),"--font-family":e.workspace.fontFamily,...P(e.workspace.theme,`/_editor/api/assets/${e.workspace.theme}`)})),c=s(()=>{var t,n;return e.workspace?{id:"mockId",path:"mockPath",title:"mockTitle",theme:e.workspace.theme,brandName:(t=e.workspace.brandName)!=null?t:null,logoUrl:(n=e.workspace.logoUrl)!=null?n:null,mainColor:e.workspace.mainColor,fontFamily:e.workspace.fontFamily,layout:u({props:{},slot:{},version:"0.2"}),workspaceName:"Untitled Workspace",sidebar:e.workspace.sidebar,runtimeType:"dash"}:null});return(t,n)=>(i(),f("div",x,[y("div",{class:"sidebar-frame",style:_(o(m))},[o(c)?(i(),g(d,{key:0,runtime:o(c),"brand-name":r.workspace.brandName,"logo-url":o(a),"user-email":"user@email.com","force-responsivity":"desktop"},null,8,["runtime","brand-name","logo-url"])):w("",!0)],4)]))}});const F=h(S,[["__scopeId","data-v-e30b1a3b"]]);export{F as S,I as b};
//# sourceMappingURL=SidebarPreview.370d59c5.js.map
