import{d as v,H as I,J as S,r as $,K as B,b as e,c as o,F as g,L as y,x as a,N as k,G as w,e as r,I as x,D as b,t as D,w as j,z as _,q as m,O as A,Q as T,a as N}from"./registerWidgets.4a0d8d45.js";import{d as O,s as W,w as F,a as R,b as E,c as K,m as P,e as V}from"./icons.e3de8035.js";import{T as z}from"./Tooltip.6358f448.js";import{_ as G}from"./logo.084e5d7c.js";import{a as H}from"./asyncComputed.52d81103.js";import{W as J}from"./workspaces.741b6616.js";import{L}from"./login.29b4c1f1.js";import"./activeRecord.57c6bf02.js";const M={class:"sidebar"},q={class:"section-name"},Q=["onClick"],U={class:"item-name"},X={key:0,class:"tag soon"},Y={key:1,class:"tag beta"},Z={key:2,class:"tag cloud"},ee=v({__name:"Sidebar",setup(n){var p;const c=I(),d=S(),s=$((p=d.name)!=null?p:"forms"),u=B(()=>[{name:"Runtime",items:[{name:"Forms",icon:O,path:"forms"},{name:"Jobs",icon:W,path:"jobs",cloud:!0},{name:"Hooks",icon:F,path:"hooks"},{name:"Dashes",icon:R,path:"dashes",beta:!0}]},{name:"Resources",items:[{name:"Tables",icon:E,path:"tables",beta:!0}]},{name:"Settings",items:[{name:"Style",icon:K,path:"style"},{name:"Sidebar",icon:P,path:"sidebar"}]}]),f=l=>{l.unavailable||(c.push(l.path),s.value=l.path)};return(l,h)=>(e(),o("div",M,[(e(!0),o(g,null,y(_(u),i=>(e(),o("div",{key:i.name,class:"section"},[a("span",q,k(i.name),1),(e(!0),o(g,null,y(i.items,t=>(e(),o("div",{key:t.name,role:"button",class:w(["item",{active:s.value===t.path,disabled:t.unavailable||i.cloud}]),tabindex:"0",onClick:ge=>f(t)},[r(x,{class:w(["icon",{disabled:t.unavailable,active:s.value===t.path}]),path:t.icon,width:"20",height:"20"},null,8,["class","path"]),a("span",U,k(t.name),1),t.unavailable?(e(),o("span",X,"SOON")):b("",!0),t.beta?(e(),o("span",Y,"BETA")):b("",!0),t.cloud?(e(),o("span",Z,"CLOUD")):b("",!0),t.warning?(e(),D(z,{key:3,class:"warning",text:t.warning,fixed:!0,top:18,left:18},{default:j(()=>[r(x,{path:_(V),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):b("",!0)],10,Q))),128))]))),128))]))}});const oe=m(ee,[["__scopeId","data-v-320e9ff3"]]);const te={},C=n=>(A("data-v-ccfb70ef"),n=n(),T(),n),se={class:"logo"},ae=C(()=>a("img",{src:G,alt:"Abstra cloud logo"},null,-1)),ne=C(()=>a("span",null," Abstra ",-1)),ce=[ae,ne];function le(n,c){return e(),o("div",se,ce)}const re=m(te,[["render",le],["__scopeId","data-v-ccfb70ef"]]),ie={key:0,class:"login-block"},_e={key:1,class:"login-block"},de=["href"],ue={key:1,class:"button"},pe={key:2,class:"login-block"},he=v({__name:"LoginBlock",setup(n){const c=$(!1),{loading:d,result:s,refetch:u}=H(()=>L.get());async function f(){const h=prompt(`Login to our console at https://cloud.abstra.io and get an API Key to deploy your Projects.

Enter your API Key here:`);!h||(await L.create(h),u())}async function p(){!s.value||(await s.value.delete(),u())}async function l(){!s.value||(c.value=!0,confirm("Are you sure you want to deploy this project to Abstra Cloud?")&&(await J.deploy(),window.open(`https://cloud.abstra.io/projects/${s.value.projectId}/builds`,"_blank")),c.value=!1)}return(h,i)=>_(d)?(e(),o("div",ie,"loading...")):_(s)?(e(),o("div",_e,[a("a",{class:"button",href:`https://cloud.abstra.io/projects/${_(s).projectId}`,target:"_blank"},"Go to console ",8,de),c.value?(e(),o("button",ue,"Deploying...")):(e(),o("button",{key:0,class:"button",onClick:l},"Deploy")),a("button",{class:"button",onClick:p},"Logout")])):(e(),o("div",pe,[a("button",{class:"button",onClick:f},"Login to deploy")]))}});const be=m(he,[["__scopeId","data-v-d5de8b44"]]),me={class:"workspace"},fe=v({__name:"Workspace",setup(n){return(c,d)=>{const s=N("router-view");return e(),o(g,null,[a("nav",null,[r(re),r(be)]),a("div",me,[r(oe,{class:"sidebar"}),r(s)])],64)}}});const Ie=m(fe,[["__scopeId","data-v-91804c74"]]);export{Ie as default};
//# sourceMappingURL=Workspace.1a080f2b.js.map