import{d as P,K as y,z as r,b as g,t as k,D as C,J as b,H as h}from"./registerWidgets.4a0d8d45.js";import{f as w,g as _}from"./icons.e3de8035.js";import{a as x}from"./asyncComputed.52d81103.js";import{P as i}from"./project.b8c7abcc.js";import"./gateway.f0c4d148.js";import{O as z}from"./organization.8b4e2a71.js";import{C as I}from"./CrudView.b0f7f422.js";import"./activeRecord.57c6bf02.js";import"./passwordlessManager.60e6c76f.js";import"./DropdownMenu.ad391198.js";import"./CircularLoading.0d3d2390.js";import"./Modal.2f62582a.js";const T=P({__name:"Projects",setup(N){const c=[{key:"name",label:"Project Name"}],n=b().params.organizationId,m=h(),{loading:l,result:a,refetch:d}=x(()=>Promise.all([i.list(n),z.get(n)]).then(([e,t])=>({projects:e,organization:t}))),s=({key:e})=>m.push({name:"project",params:{projectId:e}}),p=async e=>{const t=await i.create({organizationId:n,name:e.name});s({key:t.id})},u=async({key:e})=>{var t,o;confirm("Are you sure you want to delete this project?")&&(await((o=(t=a.value)==null?void 0:t.projects.find(j=>j.id===e))==null?void 0:o.delete()),d())},f=y(()=>{var e,t;return{columns:[{name:"Project Name"},{name:"Path"},{name:"Project Actions"}],rows:(t=(e=a.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.name,classes:["title","centered"],link:`/projects/${encodeURIComponent(o.id)}`},{text:o.id},{text:"",classes:["centered"],actions:[{icon:w,label:"Delete",onClick:u,dangerous:!0},{icon:_,label:"Edit Project",onClick:s}]}]})))!=null?t:[]}});return(e,t)=>r(a)?(g(),k(I,{key:0,"entity-name":"project","ask-name-on-create":!0,loading:r(l),title:`${r(a).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:r(f),fields:c,onCreate:p},null,8,["loading","title","table"])):C("",!0)}});export{T as default};
//# sourceMappingURL=Projects.f0000dd4.js.map
