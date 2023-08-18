import{d as y,K as b,b as z,c as O,e as c,x as w,z as d,F as k,H as h,q as x}from"./registerWidgets.cb3a7b8d.js";import{f as C,g as v}from"./icons.39dfa322.js";import{a as I}from"./asyncComputed.31994732.js";import"./gateway.2edca867.js";import{O as l}from"./organization.abd54459.js";import"./index.7fea4022.js";import{C as N}from"./CrudView.87a92735.js";import{N as D}from"./Navbar.03aff786.js";import"./passwordlessManager.afd7d1d0.js";import"./pubsub.f85a17d2.js";import"./activeRecord.adfc6223.js";import"./DropdownMenu.c973057b.js";import"./Modal.43c3d47a.js";import"./LoadingIndicator.d4ffd545.js";import"./lottie.234eb92e.js";import"./logo.084e5d7c.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="ebf99d6e-fed8-48cc-b3a6-97bed78c49e7",n._sentryDebugIdIdentifier="sentry-dbid-ebf99d6e-fed8-48cc-b3a6-97bed78c49e7")}catch{}})();const A={class:"organizations"},B=y({__name:"Organizations",setup(n){const o=[{key:"name",label:"Organization Name"}],i=h(),{loading:m,result:r,refetch:p}=I(()=>l.list()),s=({key:e})=>{i.push({name:"organization",params:{organizationId:e}})},u=async e=>{const t=await l.create(e.name);s({key:t.id})},g=async({key:e})=>{var t,a;confirm("Are you sure you want to delete this organization?")&&(await((a=(t=r.value)==null?void 0:t.find(_=>_.id===e))==null?void 0:a.delete()),p())},f=b(()=>{var e,t;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Organization Actions"}],rows:(t=(e=r.value)==null?void 0:e.map(a=>({key:a.id,cells:[{text:a.name,classes:["title","centered"],link:`/organizations/${encodeURIComponent(a.id)}`},{text:a.id},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:g,dangerous:!0},{icon:v,label:"Edit Organization",onClick:s}]}]})))!=null?t:[]}});return(e,t)=>(z(),O(k,null,[c(D),w("div",A,[c(N,{"entity-name":"organization",loading:d(m),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:d(f),fields:o,onCreate:u},null,8,["loading","table"])])],64))}});const Q=x(B,[["__scopeId","data-v-360ce05c"]]);export{Q as default};
//# sourceMappingURL=Organizations.224909fb.js.map
