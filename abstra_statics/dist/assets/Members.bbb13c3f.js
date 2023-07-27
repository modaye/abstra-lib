import{d as u,K as f,b as y,t as g,z as s,J as _}from"./registerWidgets.ad696c68.js";import{a as w}from"./asyncComputed.40a67fe8.js";import"./gateway.d1b7c117.js";import{M as d}from"./member.fbdd8002.js";import{C as I}from"./CrudView.b3370745.js";import"./passwordlessManager.86ad8b48.js";import"./activeRecord.da3a3625.js";import"./DropdownMenu.0fa3a500.js";import"./Modal.d606972f.js";import"./LoadingIndicator.2a6b2cd0.js";import"./lottie.d1a83079.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="0ac98d6b-37d4-490b-addd-d4b0fac4da0d",e._sentryDebugIdIdentifier="sentry-dbid-0ac98d6b-37d4-490b-addd-d4b0fac4da0d")}catch{}})();const A=u({__name:"Members",setup(e){const o=_().params.organizationId,i=[{key:"email",label:"Email"}],m=async t=>{await d.create(o,t.email),b()},{loading:l,result:c,refetch:b}=w(()=>d.list(o)),p=f(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=c.value)==null?void 0:t.map(n=>({key:n.email,cells:[{text:n.email,classes:["title","centered"]},{text:n.role,classes:["centered"]}]})))!=null?r:[]}});return(t,r)=>(y(),g(I,{"entity-name":"members",loading:s(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:s(p),"create-button-text":"Add members",fields:i,onCreate:m},null,8,["loading","table"]))}});export{A as default};
//# sourceMappingURL=Members.bbb13c3f.js.map