import{d as j,K as P,z as s,b as w,t as _,D as k,J as C,H as I}from"./registerWidgets.ca6243ef.js";import{f as h,g as x}from"./icons.11151937.js";import{a as z}from"./asyncComputed.3cb2e10b.js";import{P as d}from"./project.f2b2a33c.js";import"./gateway.fa3322de.js";import{O as D}from"./organization.007992e9.js";import"./index.a86d8064.js";import{C as N}from"./CrudView.bd13f7e1.js";import"./activeRecord.11b7d185.js";import"./pubsub.581c075e.js";import"./passwordlessManager.0ab78ba0.js";import"./DropdownMenu.162e22a4.js";import"./Modal.2f8d0c91.js";import"./LoadingIndicator.a271d3bb.js";import"./lottie.9d24e472.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="a7ca3f33-a881-4b92-84fb-fdb059f18e03",a._sentryDebugIdIdentifier="sentry-dbid-a7ca3f33-a881-4b92-84fb-fdb059f18e03")}catch{}})();const F=j({__name:"Projects",setup(a){const r=[{key:"name",label:"Project Name"}],i=C().params.organizationId,m=I(),{loading:p,result:n,refetch:u}=z(()=>Promise.all([d.list(i),D.get(i)]).then(([e,t])=>({projects:e,organization:t}))),c=({key:e})=>m.push({name:"project",params:{projectId:e}}),f=async e=>{const t=await d.create({organizationId:i,name:e.name});c({key:t.id})},b=async({key:e})=>{var t,o;confirm("Are you sure you want to delete this project?")&&(await((o=(t=n.value)==null?void 0:t.projects.find(g=>g.id===e))==null?void 0:o.delete()),u())},y=P(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Project Actions"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8),classes:["centered"]},{text:o.name,classes:["title"],link:`/projects/${encodeURIComponent(o.id)}`},{text:"",classes:["centered"],actions:[{icon:h,label:"Delete",onClick:b,dangerous:!0},{icon:x,label:"Edit Project",onClick:c}]}]})))!=null?t:[]}});return(e,t)=>s(n)?(w(),_(N,{key:0,"entity-name":"project",loading:s(p),title:`${s(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:s(y),fields:r,onCreate:f},null,8,["loading","title","table"])):k("",!0)}});export{F as default};
//# sourceMappingURL=Projects.ad9a8254.js.map
