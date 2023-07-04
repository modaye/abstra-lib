import{d,K as u,b,t as f,z as r,J as _}from"./registerWidgets.802bba2f.js";import{a as g}from"./asyncComputed.1364aaa9.js";import"./utils.acbba3b4.js";import{M as s}from"./member.d32af91c.js";import{C as y}from"./CrudView.9eafd43a.js";import"./passwordlessManager.d5134797.js";import"./pubsub.a0411919.js";import"./DropdownMenu.32db0ef2.js";import"./CircularLoading.5c7f2ad7.js";import"./Modal.e13f7972.js";const A=d({__name:"Members",setup(x){const o=_().params.organizationId,m=[{key:"email",label:"Email"}],i=async e=>{await s.create(o,e.email),c()},{loading:n,result:l,refetch:c}=g(()=>s.list(o)),p=u(()=>{var e,t;return{columns:[{name:"Email"},{name:"Role"}],rows:(t=(e=l.value)==null?void 0:e.map(a=>({key:a.email,cells:[{text:a.email,classes:["title","centered"]},{text:a.role,classes:["centered"]}]})))!=null?t:[]}});return(e,t)=>(b(),f(y,{"entity-name":"members",loading:r(n),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:r(p),"create-button-text":"Add members",fields:m,onCreate:i},null,8,["loading","table"]))}});export{A as default};
//# sourceMappingURL=Members.f48c15f4.js.map