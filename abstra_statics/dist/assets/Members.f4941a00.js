import{d as u,K as f,b as y,t as g,z as s,J as _}from"./registerWidgets.7ced74be.js";import{a as w}from"./asyncComputed.ba50ad50.js";import"./gateway.2877a9a8.js";import{M as i}from"./member.4fb7afbc.js";import"./index.3d012118.js";import{C as I}from"./CrudView.599ce275.js";import"./passwordlessManager.ec41c2a5.js";import"./pubsub.ab2e6b06.js";import"./activeRecord.24d96880.js";import"./DropdownMenu.65fae473.js";import"./Modal.08779099.js";import"./LoadingIndicator.cfaa935a.js";import"./lottie.7cc6eb94.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="3d4bd48b-c259-4cbc-a81c-c6fc09b0f892",e._sentryDebugIdIdentifier="sentry-dbid-3d4bd48b-c259-4cbc-a81c-c6fc09b0f892")}catch{}})();const K=u({__name:"Members",setup(e){const a=_().params.organizationId,m=[{key:"email",label:"Email"}],c=async t=>{await i.create(a,t.email),b()},{loading:l,result:d,refetch:b}=w(()=>i.list(a)),p=f(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=d.value)==null?void 0:t.map(n=>({key:n.email,cells:[{text:n.email,classes:["title","centered"]},{text:n.role,classes:["centered"]}]})))!=null?r:[]}});return(t,r)=>(y(),g(I,{"entity-name":"members",loading:s(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:s(p),"create-button-text":"Add members",fields:m,onCreate:c},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Members.f4941a00.js.map
