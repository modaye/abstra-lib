import{d as g,H as S,J as B,r as x,K as A,b as o,c as t,F as y,L as v,x as c,N as k,G as w,e as r,I,D as h,t as j,w as T,z as _,q as f,O as L,Q as D,a as N}from"./registerWidgets.92ed860b.js";import{d as O,w as W,a as E,b as F,c as R,m as K,e as P}from"./icons.b8b5d1f6.js";import{T as V}from"./Tooltip.7eb589fd.js";import{_ as z}from"./logo.084e5d7c.js";import{a as G}from"./asyncComputed.13be15a6.js";import{W as H}from"./workspaces.b7c14823.js";import{L as $}from"./login.43fe85b9.js";import{D as M}from"./DocsButton.3f76c59a.js";import"./activeRecord.e849f28c.js";import"./pubsub.f2d2508d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="db3d36ee-e309-4514-9c15-2e0b20cde083",e._sentryDebugIdIdentifier="sentry-dbid-db3d36ee-e309-4514-9c15-2e0b20cde083")}catch{}})();const q={class:"sidebar"},J={class:"section-name"},Q=["onClick"],U={class:"item-name"},X={key:0,class:"tag soon"},Y={key:1,class:"tag beta"},Z={key:2,class:"tag cloud"},ee=g({__name:"Sidebar",setup(e){var p;const n=S(),i=B(),a=x((p=i.name)!=null?p:"forms"),u=A(()=>[{name:"Runtime",items:[{name:"Forms",icon:O,path:"forms"},{name:"Hooks",icon:W,path:"hooks"},{name:"Dashes",icon:E,path:"dashes",beta:!0}]},{name:"Resources",items:[{name:"Tables",icon:F,path:"tables",beta:!0}]},{name:"Settings",items:[{name:"Style",icon:R,path:"style"},{name:"Sidebar",icon:K,path:"sidebar"}]}]),m=l=>{l.unavailable||(n.push(l.path),a.value=l.path)};return(l,b)=>(o(),t("div",q,[(o(!0),t(y,null,v(_(u),d=>(o(),t("div",{key:d.name,class:"section"},[c("span",J,k(d.name),1),(o(!0),t(y,null,v(d.items,s=>(o(),t("div",{key:s.name,role:"button",class:w(["item",{active:a.value===s.path,disabled:s.unavailable||d.cloud}]),tabindex:"0",onClick:ve=>m(s)},[r(I,{class:w(["icon",{disabled:s.unavailable,active:a.value===s.path}]),path:s.icon,width:"20",height:"20"},null,8,["class","path"]),c("span",U,k(s.name),1),s.unavailable?(o(),t("span",X,"SOON")):h("",!0),s.beta?(o(),t("span",Y,"BETA")):h("",!0),s.cloud?(o(),t("span",Z,"CLOUD")):h("",!0),s.warning?(o(),j(V,{key:3,class:"warning",text:s.warning,fixed:!0,top:18,left:18},{default:T(()=>[r(I,{path:_(P),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):h("",!0)],10,Q))),128))]))),128))]))}});const oe=f(ee,[["__scopeId","data-v-50de59cf"]]);const te={},C=e=>(L("data-v-ccfb70ef"),e=e(),D(),e),se={class:"logo"},ae=C(()=>c("img",{src:z,alt:"Abstra cloud logo"},null,-1)),ne=C(()=>c("span",null," Abstra ",-1)),ce=[ae,ne];function re(e,n){return o(),t("div",se,ce)}const le=f(te,[["render",re],["__scopeId","data-v-ccfb70ef"]]),ie={key:0,class:"login-block"},de={key:1,class:"login-block"},_e=["href"],ue={key:1,class:"button"},pe={key:2,class:"login-block"},be=g({__name:"LoginBlock",setup(e){const n=x(!1),{loading:i,result:a,refetch:u}=G(()=>$.get());async function m(){const b=prompt(`Login to our console at https://cloud.abstra.io and get an API Key to deploy your Projects.

Enter your API Key here:`);!b||(await $.create(b),u())}async function p(){!a.value||(await a.value.delete(),u())}async function l(){!a.value||(n.value=!0,confirm("Are you sure you want to deploy this project to Abstra Cloud?")&&(await H.deploy(),window.open(`https://cloud.abstra.io/projects/${a.value.projectId}/builds`,"_blank")),n.value=!1)}return(b,d)=>_(i)?(o(),t("div",ie,"loading...")):_(a)?(o(),t("div",de,[c("a",{class:"button",href:`https://cloud.abstra.io/projects/${_(a).projectId}`,target:"_blank"},"Go to console ",8,_e),n.value?(o(),t("button",ue,"Deploying...")):(o(),t("button",{key:0,class:"button",onClick:l},"Deploy")),c("button",{class:"button",onClick:p},"Logout")])):(o(),t("div",pe,[c("button",{class:"button",onClick:m},"Login to deploy")]))}});const he=f(be,[["__scopeId","data-v-d5de8b44"]]),fe=e=>(L("data-v-77e07499"),e=e(),D(),e),me=fe(()=>c("div",{class:"grow"},null,-1)),ye={class:"workspace"},ge=g({__name:"Workspace",setup(e){return(n,i)=>{const a=N("router-view");return o(),t(y,null,[c("nav",null,[r(le),me,r(M),r(he)]),c("div",ye,[r(oe,{class:"sidebar"}),r(a)])],64)}}});const Ae=f(ge,[["__scopeId","data-v-77e07499"]]);export{Ae as default};
//# sourceMappingURL=Workspace.3d0b6f33.js.map