import{d,K as u,b,t as f,z as r,J as _}from"./registerWidgets.4a0d8d45.js";import{a as g}from"./asyncComputed.52d81103.js";import"./gateway.f0c4d148.js";import{M as s}from"./member.95b1dd50.js";import{C as y}from"./CrudView.b0f7f422.js";import"./passwordlessManager.60e6c76f.js";import"./activeRecord.57c6bf02.js";import"./DropdownMenu.ad391198.js";import"./CircularLoading.0d3d2390.js";import"./Modal.2f62582a.js";const A=d({__name:"Members",setup(x){const o=_().params.organizationId,m=[{key:"email",label:"Email"}],i=async e=>{await s.create(o,e.email),c()},{loading:n,result:l,refetch:c}=g(()=>s.list(o)),p=u(()=>{var e,t;return{columns:[{name:"Email"},{name:"Role"}],rows:(t=(e=l.value)==null?void 0:e.map(a=>({key:a.email,cells:[{text:a.email,classes:["title","centered"]},{text:a.role,classes:["centered"]}]})))!=null?t:[]}});return(e,t)=>(b(),f(y,{"entity-name":"members",loading:r(n),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:r(p),"create-button-text":"Add members",fields:m,onCreate:i},null,8,["loading","table"]))}});export{A as default};
//# sourceMappingURL=Members.ed1d9f45.js.map
