import{d as b,K as P,z as s,b as w,t as _,D as k,J as h,H as C}from"./registerWidgets.f2c3b5e5.js";import{f as I,g as x}from"./icons.b35b2de6.js";import{a as z}from"./asyncComputed.fa58da50.js";import{P as d}from"./project.e9161820.js";import"./gateway.5ce246f2.js";import{O as D}from"./organization.396a9a90.js";import"./index.d362f0ad.js";import{C as N}from"./CrudView.2f7a4d54.js";import"./activeRecord.55d1a6e1.js";import"./pubsub.63528b2e.js";import"./passwordlessManager.d3eddc95.js";import"./DropdownMenu.c39b37be.js";import"./Modal.201e370f.js";import"./LoadingIndicator.6255a904.js";import"./lottie.fe21059c.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="2ad375ca-0e2d-4ae7-9931-99741304cc6d",a._sentryDebugIdIdentifier="sentry-dbid-2ad375ca-0e2d-4ae7-9931-99741304cc6d")}catch{}})();const F=b({__name:"Projects",setup(a){const r=[{key:"name",label:"Project Name"}],i=h().params.organizationId,m=C(),{loading:p,result:n,refetch:u}=z(()=>Promise.all([d.list(i),D.get(i)]).then(([e,t])=>({projects:e,organization:t}))),c=({key:e})=>m.push({name:"project",params:{projectId:e}}),f=async e=>{const t=await d.create({organizationId:i,name:e.name});c({key:t.id})},y=async({key:e})=>{var t,o;confirm("Are you sure you want to delete this project?")&&(await((o=(t=n.value)==null?void 0:t.projects.find(j=>j.id===e))==null?void 0:o.delete()),u())},g=P(()=>{var e,t;return{columns:[{name:"Project Name"},{name:"Path"},{name:"Project Actions"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.name,classes:["title","centered"],link:`/projects/${encodeURIComponent(o.id)}`},{text:o.id},{text:"",classes:["centered"],actions:[{icon:I,label:"Delete",onClick:y,dangerous:!0},{icon:x,label:"Edit Project",onClick:c}]}]})))!=null?t:[]}});return(e,t)=>s(n)?(w(),_(N,{key:0,"entity-name":"project",loading:s(p),title:`${s(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:s(g),fields:r,onCreate:f},null,8,["loading","title","table"])):k("",!0)}});export{F as default};
//# sourceMappingURL=Projects.d4fe495b.js.map
