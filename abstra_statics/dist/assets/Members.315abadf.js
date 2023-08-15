import{d as b,K as f,b as y,t as g,z as s,J as _}from"./registerWidgets.5bc8efb7.js";import{a as w}from"./asyncComputed.7bb233f8.js";import"./gateway.a6cafc23.js";import{M as i}from"./member.5a970519.js";import"./index.246dd755.js";import{C as I}from"./CrudView.a469ff60.js";import"./passwordlessManager.42602b26.js";import"./pubsub.d656fdf8.js";import"./activeRecord.fdea504c.js";import"./DropdownMenu.bb96d92d.js";import"./Modal.8ffa06d3.js";import"./LoadingIndicator.04b4f2d7.js";import"./lottie.0691a110.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="c569025c-8ca2-400e-862a-4e7e33a80461",e._sentryDebugIdIdentifier="sentry-dbid-c569025c-8ca2-400e-862a-4e7e33a80461")}catch{}})();const K=b({__name:"Members",setup(e){const o=_().params.organizationId,m=[{key:"email",label:"Email"}],l=async t=>{await i.create(o,t.email),p()},{loading:c,result:d,refetch:p}=w(()=>i.list(o)),u=f(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=d.value)==null?void 0:t.map(n=>({key:n.email,cells:[{text:n.email,classes:["title","centered"]},{text:n.role,classes:["centered"]}]})))!=null?r:[]}});return(t,r)=>(y(),g(I,{"entity-name":"members",loading:s(c),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:s(u),"create-button-text":"Add members",fields:m,onCreate:l},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Members.315abadf.js.map
