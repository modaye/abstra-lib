import{d as _,K as z,b as f,c as y,e as i,x as O,z as r,F as b,H as x,q as C}from"./registerWidgets.69eb7b40.js";import{f as k,g as h}from"./icons.ea1ef9e9.js";import{a as v}from"./asyncComputed.5c8fd07f.js";import"./utils.7963b0ba.js";import{O as s}from"./organization.e07951ff.js";import{C as w}from"./CrudView.bd7bc0f9.js";import{N}from"./Navbar.7e9e7647.js";import"./passwordlessManager.3c745f80.js";import"./pubsub.a0411919.js";import"./DropdownMenu.1fde8cc7.js";import"./CircularLoading.3c5929bd.js";import"./Modal.bf2e2708.js";import"./logo.084e5d7c.js";const B={class:"organizations"},I=_({__name:"Organizations",setup(V){const c=x(),{loading:l,result:o,refetch:m}=v(()=>s.list()),n=({key:e})=>{c.push({name:"organization",params:{organizationId:e}})},d=async e=>{const t=await s.create(e.name);n({key:t.id})},p=async({key:e})=>{var t,a;confirm("Are you sure you want to delete this organization?")&&(await((a=(t=o.value)==null?void 0:t.find(g=>g.id===e))==null?void 0:a.delete()),m())},u=z(()=>{var e,t;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Organization Actions"}],rows:(t=(e=o.value)==null?void 0:e.map(a=>({key:a.id,cells:[{text:a.name,classes:["title","centered"],link:`/organizations/${encodeURIComponent(a.id)}`},{text:a.id},{text:"",classes:["centered"],actions:[{icon:k,label:"Delete",onClick:p,dangerous:!0},{icon:h,label:"Edit Organization",onClick:n}]}]})))!=null?t:[]}});return(e,t)=>(f(),y(b,null,[i(N),O("div",B,[i(w,{"entity-name":"organization",loading:r(l),"ask-name-on-create":!0,title:"Organizations",description:"Organizations are a way to group your company's projects.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:r(u),onCreate:d},null,8,["loading","table"])])],64))}});const $=C(I,[["__scopeId","data-v-30ce68b9"]]);export{$ as default};
//# sourceMappingURL=Organizations.a369b1c3.js.map