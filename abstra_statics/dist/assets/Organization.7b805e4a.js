import{S as d}from"./Sidebar.af49f8a8.js";import{N as m}from"./Navbar.025bc9eb.js";import{F as l,G as p,H as u}from"./icons.3ddac2d4.js";import{d as _,K as f,b,c as g,e as t,z as r,x as v,F as y,J as z,a as w,q as I}from"./registerWidgets.29ceb1a3.js";import{a as h}from"./asyncComputed.9ed582d0.js";import"./gateway.59946eef.js";import{O}from"./organization.c0ae10eb.js";import"./Tooltip.0ade5ea3.js";import"./logo.084e5d7c.js";import"./passwordlessManager.68f14bfc.js";import"./activeRecord.ab1afca6.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="b5415238-5c98-4fd2-98ca-44effa90cc1e",e._sentryDebugIdIdentifier="sentry-dbid-b5415238-5c98-4fd2-98ca-44effa90cc1e")}catch{}})();const x={class:"organization"},k=_({__name:"Organization",setup(e){const n=z().params.organizationId,{result:o}=h(()=>O.get(n)),s=f(()=>o.value?[{label:o.value.name,path:`/organizations/${o.value.id}`}]:void 0),i=[{name:"Organization",items:[{name:"Projects",icon:l,path:"projects"},{name:"Members",icon:p,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(B,D)=>{const c=w("router-view");return b(),g(y,null,[t(m,{breadcrumb:r(s)},null,8,["breadcrumb"]),v("div",x,[t(d,{class:"sidebar",sections:r(i)},null,8,["sections"]),t(c)])],64)}}});const J=I(k,[["__scopeId","data-v-7eef90b7"]]);export{J as default};
//# sourceMappingURL=Organization.7b805e4a.js.map
