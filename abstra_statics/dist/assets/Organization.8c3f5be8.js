import{S as m}from"./Sidebar.34b7969a.js";import{N as p}from"./Navbar.9e3b85e1.js";import{G as d,H as l,I as _}from"./icons.778999cd.js";import{d as u,K as b,b as g,c as v,e,z as t,x as s,w as f,F as z,J as h,a as I,O,Q as w,q as x}from"./registerWidgets.88d12ae1.js";import{a as S}from"./asyncComputed.0bf661db.js";import"./gateway.042591ee.js";import{O as y}from"./organization.c3cdd979.js";import"./Tooltip.ca813c38.js";import"./logo.084e5d7c.js";import"./passwordlessManager.a5c71e7e.js";import"./activeRecord.57c6bf02.js";const B=a=>(O("data-v-580769d7"),a=a(),w(),a),C={class:"organization"},N=B(()=>s("div",null,"div",-1)),k=u({__name:"Organization",setup(a){const n=h().params.organizationId,{result:o}=S(()=>y.get(n)),r=b(()=>o.value?[{label:o.value.name,path:`/organizations/${o.value.id}`}]:void 0),i=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:_,path:"billing",unavailable:!0}]}];return(F,M)=>{const c=I("router-view");return g(),v(z,null,[e(p,{breadcrumb:t(r)},null,8,["breadcrumb"]),s("div",C,[e(m,{class:"sidebar",sections:t(i)},{default:f(()=>[N]),_:1},8,["sections"]),e(c)])],64)}}});const A=x(k,[["__scopeId","data-v-580769d7"]]);export{A as default};
//# sourceMappingURL=Organization.8c3f5be8.js.map