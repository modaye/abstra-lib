import{d as j,K as P,z as s,b as w,t as _,D as k,J as h,H as C}from"./registerWidgets.68572380.js";import{f as I,g as x}from"./icons.3acf9dc1.js";import{a as z}from"./asyncComputed.896b7bde.js";import{P as d}from"./project.655b0999.js";import"./gateway.7cd64c5e.js";import{O as D}from"./organization.9b0cf47a.js";import"./index.5601bb74.js";import{C as N}from"./CrudView.22ff1852.js";import"./activeRecord.15082700.js";import"./passwordlessManager.8fb0aebd.js";import"./DropdownMenu.06bbb53d.js";import"./Modal.dacb9a40.js";import"./LoadingIndicator.5fb5b875.js";import"./lottie.e503152f.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="fffa6f61-30fc-421c-be59-8e170d144a6e",r._sentryDebugIdIdentifier="sentry-dbid-fffa6f61-30fc-421c-be59-8e170d144a6e")}catch{}})();const q=j({__name:"Projects",setup(r){const a=[{key:"name",label:"Project Name"}],i=h().params.organizationId,m=C(),{loading:u,result:n,refetch:f}=z(()=>Promise.all([d.list(i),D.get(i)]).then(([e,t])=>({projects:e,organization:t}))),c=({key:e})=>m.push({name:"project",params:{projectId:e}}),p=async e=>{const t=await d.create({organizationId:i,name:e.name});c({key:t.id})},y=async({key:e})=>{var t,o;confirm("Are you sure you want to delete this project?")&&(await((o=(t=n.value)==null?void 0:t.projects.find(g=>g.id===e))==null?void 0:o.delete()),f())},b=P(()=>{var e,t;return{columns:[{name:"Project Name"},{name:"Path"},{name:"Project Actions"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.name,classes:["title","centered"],link:`/projects/${encodeURIComponent(o.id)}`},{text:o.id},{text:"",classes:["centered"],actions:[{icon:I,label:"Delete",onClick:y,dangerous:!0},{icon:x,label:"Edit Project",onClick:c}]}]})))!=null?t:[]}});return(e,t)=>s(n)?(w(),_(N,{key:0,"entity-name":"project",loading:s(u),title:`${s(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:s(b),fields:a,onCreate:p},null,8,["loading","title","table"])):k("",!0)}});export{q as default};
//# sourceMappingURL=Projects.04e404e9.js.map