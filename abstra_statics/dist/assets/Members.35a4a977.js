import{d as b,K as f,b as y,t as g,z as s,J as _}from"./registerWidgets.39370cce.js";import{a as w}from"./asyncComputed.588e6ddd.js";import"./gateway.96737752.js";import{M as i}from"./member.8607fac6.js";import{C as I}from"./CrudView.710ce9a3.js";import"./passwordlessManager.6cd57365.js";import"./activeRecord.fab7288a.js";import"./DropdownMenu.f1872b59.js";import"./Modal.664ccd90.js";import"./LoadingIndicator.1972d60c.js";import"./lottie.576b6dda.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="5e0838a5-0346-435c-ab6b-9836e6e1d117",e._sentryDebugIdIdentifier="sentry-dbid-5e0838a5-0346-435c-ab6b-9836e6e1d117")}catch{}})();const A=b({__name:"Members",setup(e){const o=_().params.organizationId,m=[{key:"email",label:"Email"}],l=async t=>{await i.create(o,t.email),p()},{loading:d,result:c,refetch:p}=w(()=>i.list(o)),u=f(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=c.value)==null?void 0:t.map(n=>({key:n.email,cells:[{text:n.email,classes:["title","centered"]},{text:n.role,classes:["centered"]}]})))!=null?r:[]}});return(t,r)=>(y(),g(I,{"entity-name":"members",loading:s(d),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:s(u),"create-button-text":"Add members",fields:m,onCreate:l},null,8,["loading","table"]))}});export{A as default};
//# sourceMappingURL=Members.35a4a977.js.map
