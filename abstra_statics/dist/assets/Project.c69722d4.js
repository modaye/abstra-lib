import{d as b,K as i,b as f,c as _,e as s,z as c,x as l,F as g,J as v,a as y,q as h}from"./registerWidgets.39370cce.js";import{a as d}from"./asyncComputed.588e6ddd.js";import{P as I}from"./project.5550b77f.js";import"./gateway.96737752.js";import{O as j}from"./organization.ae92eefa.js";import{N as z}from"./Navbar.6ee659b8.js";import{S as w}from"./Sidebar.f4527888.js";import{I as P,E as k,J as x,K as B,L as $,F as D,G as E,H as N}from"./icons.c1d7cae2.js";import"./activeRecord.fab7288a.js";import"./passwordlessManager.6cd57365.js";import"./logo.084e5d7c.js";import"./Tooltip.cfb91c63.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="de3d28bf-aa9a-4fa7-bfca-3aaeba005406",a._sentryDebugIdIdentifier="sentry-dbid-de3d28bf-aa9a-4fa7-bfca-3aaeba005406")}catch{}})();const S={class:"project"},C={class:"content-wrapper"},F=b({__name:"Project",setup(a){const r=v().params.projectId,{result:e}=d(()=>I.get(r)),{result:t}=d(()=>e.value?j.get(e.value.organizationId):Promise.resolve(null)),p=i(()=>{var n;return t.value&&e.value?[{label:(n=t.value)==null?void 0:n.name,path:`/organizations/${t.value.id}`},{label:e.value.name,path:`/projects/${e.value.id}`}]:void 0}),m=i(()=>e.value?[{name:"Project",items:[{name:"Builds",path:"builds",icon:P},{name:"API Keys",path:"api-keys",icon:k},{name:"Env Vars",path:"env-vars",icon:x},{name:"Logs",icon:B,path:"logs",beta:!0},{name:"Settings",icon:$,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:D,path:`/organizations/${e.value.organizationId}/projects`},{name:"Members",icon:E,path:`/organizations/${e.value.organizationId}/members`},{name:"Billing",icon:N,path:`/organizations/${e.value.organizationId}/billing`,unavailable:!0}]}]:[]);return(n,K)=>{const u=y("router-view");return f(),_(g,null,[s(z,{class:"nav",breadcrumb:c(p)},null,8,["breadcrumb"]),l("div",S,[s(w,{class:"sidebar",sections:c(m)},null,8,["sections"]),l("div",C,[s(u)])])],64)}}});const U=h(F,[["__scopeId","data-v-cfb4011f"]]);export{U as default};
//# sourceMappingURL=Project.c69722d4.js.map
