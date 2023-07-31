import{d as b,K as i,b as f,c as _,e as s,z as c,x as l,F as g,J as v,a as y,q as h}from"./registerWidgets.f021c1a4.js";import{a as p}from"./asyncComputed.99b3d376.js";import{P as I}from"./project.75a8cced.js";import"./gateway.d0ae64bf.js";import{O as j}from"./organization.a52b9df1.js";import{N as z}from"./Navbar.3d36e674.js";import{S as w}from"./Sidebar.46bf1150.js";import{I as P,E as k,J as x,K as B,L as $,F as D,G as E,H as N}from"./icons.b993259e.js";import"./activeRecord.ae1eba97.js";import"./passwordlessManager.60015512.js";import"./logo.084e5d7c.js";import"./Tooltip.b38d7ca3.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="bf5f55e2-c4e8-4abf-b440-5cfb74657c36",a._sentryDebugIdIdentifier="sentry-dbid-bf5f55e2-c4e8-4abf-b440-5cfb74657c36")}catch{}})();const S={class:"project"},C={class:"content-wrapper"},F=b({__name:"Project",setup(a){const r=v().params.projectId,{result:e}=p(()=>I.get(r)),{result:t}=p(()=>e.value?j.get(e.value.organizationId):Promise.resolve(null)),m=i(()=>{var n;return t.value&&e.value?[{label:(n=t.value)==null?void 0:n.name,path:`/organizations/${t.value.id}`},{label:e.value.name,path:`/projects/${e.value.id}`}]:void 0}),u=i(()=>e.value?[{name:"Project",items:[{name:"Builds",path:"builds",icon:P},{name:"API Keys",path:"api-keys",icon:k},{name:"Env Vars",path:"env-vars",icon:x},{name:"Logs",icon:B,path:"logs",beta:!0},{name:"Settings",icon:$,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:D,path:`/organizations/${e.value.organizationId}/projects`},{name:"Members",icon:E,path:`/organizations/${e.value.organizationId}/members`},{name:"Billing",icon:N,path:`/organizations/${e.value.organizationId}/billing`,unavailable:!0}]}]:[]);return(n,K)=>{const d=y("router-view");return f(),_(g,null,[s(z,{class:"nav",breadcrumb:c(m)},null,8,["breadcrumb"]),l("div",S,[s(w,{class:"sidebar",sections:c(u)},null,8,["sections"]),l("div",C,[s(d)])])],64)}}});const U=h(F,[["__scopeId","data-v-cfb4011f"]]);export{U as default};
//# sourceMappingURL=Project.1476470b.js.map
