import{d as u,K as i,b,c as g,e as s,z as c,x as _,F as v,J as f,a as y,q as I}from"./registerWidgets.bbbd3e16.js";import{a as l}from"./asyncComputed.ad67be0e.js";import{P as h}from"./project.5bf8728e.js";import"./gateway.d8ce80c3.js";import{O as j}from"./organization.c2f79436.js";import{N as z}from"./Navbar.31374668.js";import{S as P}from"./Sidebar.8cf12d2b.js";import{I as w,E as k,J as x,K as B,L as $,F as D,G as E,H as N}from"./icons.3f47812d.js";import"./activeRecord.9842b68f.js";import"./passwordlessManager.2d127f26.js";import"./logo.084e5d7c.js";import"./Tooltip.8e5ed40c.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="dcd88b0b-6371-4006-aacc-1b79c336957c",a._sentryDebugIdIdentifier="sentry-dbid-dcd88b0b-6371-4006-aacc-1b79c336957c")}catch{}})();const S={class:"project"},C=u({__name:"Project",setup(a){const r=f().params.projectId,{result:e}=l(()=>h.get(r)),{result:t}=l(()=>e.value?j.get(e.value.organizationId):Promise.resolve(null)),m=i(()=>{var n;return t.value&&e.value?[{label:(n=t.value)==null?void 0:n.name,path:`/organizations/${t.value.id}`},{label:e.value.name,path:`/projects/${e.value.id}`}]:void 0}),d=i(()=>e.value?[{name:"Project",items:[{name:"Builds",path:"builds",icon:w},{name:"API Keys",path:"api-keys",icon:k},{name:"Env Vars",path:"env-vars",icon:x},{name:"Logs",icon:B,path:"logs",beta:!0},{name:"Settings",icon:$,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:D,path:`/organizations/${e.value.organizationId}/projects`},{name:"Members",icon:E,path:`/organizations/${e.value.organizationId}/members`},{name:"Billing",icon:N,path:`/organizations/${e.value.organizationId}/billing`,unavailable:!0}]}]:[]);return(n,F)=>{const p=y("router-view");return b(),g(v,null,[s(z,{class:"nav",breadcrumb:c(m)},null,8,["breadcrumb"]),_("div",S,[s(P,{class:"sidebar",sections:c(d)},null,8,["sections"]),s(p)])],64)}}});const T=I(C,[["__scopeId","data-v-e9ea0761"]]);export{T as default};
//# sourceMappingURL=Project.06fac6b1.js.map