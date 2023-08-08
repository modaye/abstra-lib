import{d as y,K as z,b,c as O,e as c,x as w,z as d,F as k,H as h,q as x}from"./registerWidgets.0a925ff6.js";import{f as C,g as v}from"./icons.d9ce72d6.js";import{a as I}from"./asyncComputed.57718c9c.js";import"./gateway.2d990259.js";import{O as l}from"./organization.ff9d300f.js";import"./index.bc596894.js";import{C as N}from"./CrudView.36f4723a.js";import{N as D}from"./Navbar.e76d5d6b.js";import"./passwordlessManager.ab5003b1.js";import"./activeRecord.ffa40c01.js";import"./DropdownMenu.55337a35.js";import"./Modal.373fa9f4.js";import"./LoadingIndicator.1acdfc35.js";import"./lottie.a6ae83a3.js";import"./logo.084e5d7c.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="1a8712fa-9538-4272-a28a-e3ba561d91a4",n._sentryDebugIdIdentifier="sentry-dbid-1a8712fa-9538-4272-a28a-e3ba561d91a4")}catch{}})();const A={class:"organizations"},B=y({__name:"Organizations",setup(n){const o=[{key:"name",label:"Organization Name"}],i=h(),{loading:m,result:r,refetch:p}=I(()=>l.list()),s=({key:e})=>{i.push({name:"organization",params:{organizationId:e}})},u=async e=>{const a=await l.create(e.name);s({key:a.id})},g=async({key:e})=>{var a,t;confirm("Are you sure you want to delete this organization?")&&(await((t=(a=r.value)==null?void 0:a.find(_=>_.id===e))==null?void 0:t.delete()),p())},f=z(()=>{var e,a;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Organization Actions"}],rows:(a=(e=r.value)==null?void 0:e.map(t=>({key:t.id,cells:[{text:t.name,classes:["title","centered"],link:`/organizations/${encodeURIComponent(t.id)}`},{text:t.id},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:g,dangerous:!0},{icon:v,label:"Edit Organization",onClick:s}]}]})))!=null?a:[]}});return(e,a)=>(b(),O(k,null,[c(D),w("div",A,[c(N,{"entity-name":"organization",loading:d(m),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:d(f),fields:o,onCreate:u},null,8,["loading","table"])])],64))}});const L=x(B,[["__scopeId","data-v-360ce05c"]]);export{L as default};
//# sourceMappingURL=Organizations.4be1a184.js.map