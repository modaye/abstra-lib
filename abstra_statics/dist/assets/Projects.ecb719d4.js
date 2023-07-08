import{d as P,K as y,z as r,b as g,t as k,D as C,J as b,H as h}from"./registerWidgets.bb4c7eff.js";import{f as w,g as _}from"./icons.97625e56.js";import{a as x}from"./asyncComputed.0adffaf6.js";import{P as i}from"./project.8394fcae.js";import"./utils.f02a47e6.js";import{O as z}from"./organization.99ca3e7f.js";import{C as I}from"./CrudView.74273abd.js";import"./passwordlessManager.a806df6a.js";import"./pubsub.a0411919.js";import"./DropdownMenu.45ad2be4.js";import"./CircularLoading.8dab92fc.js";import"./Modal.bf534f7d.js";const T=P({__name:"Projects",setup(N){const c=[{key:"name",label:"Project Name"}],n=b().params.organizationId,m=h(),{loading:l,result:a,refetch:d}=x(()=>Promise.all([i.list(n),z.get(n)]).then(([e,t])=>({projects:e,organization:t}))),s=({key:e})=>m.push({name:"project",params:{projectId:e}}),p=async e=>{const t=await i.create({organizationId:n,name:e.name});s({key:t.id})},u=async({key:e})=>{var t,o;confirm("Are you sure you want to delete this project?")&&(await((o=(t=a.value)==null?void 0:t.projects.find(j=>j.id===e))==null?void 0:o.delete()),d())},f=y(()=>{var e,t;return{columns:[{name:"Project Name"},{name:"Path"},{name:"Project Actions"}],rows:(t=(e=a.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.name,classes:["title","centered"],link:`/projects/${encodeURIComponent(o.id)}`},{text:o.id},{text:"",classes:["centered"],actions:[{icon:w,label:"Delete",onClick:u,dangerous:!0},{icon:_,label:"Edit Project",onClick:s}]}]})))!=null?t:[]}});return(e,t)=>r(a)?(g(),k(I,{key:0,"entity-name":"project","ask-name-on-create":!0,loading:r(l),title:`${r(a).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:r(f),fields:c,onCreate:p},null,8,["loading","title","table"])):C("",!0)}});export{T as default};
//# sourceMappingURL=Projects.ecb719d4.js.map
