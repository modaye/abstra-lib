import{d as y,K as _,b as g,t as T,z as d,H as w}from"./registerWidgets.cbdb5b20.js";import{f as C,g as h,h as k}from"./icons.0be4624f.js";import{a as D}from"./asyncComputed.0300d9e5.js";import{T as u}from"./tables.e147d16a.js";import{R as I}from"./RuntimeList.e1172034.js";import"./activeRecord.aaef4d59.js";import"./DropdownMenu.fc9bfa79.js";import"./CircularLoading.afc6a364.js";import"./lottie.3c633a53.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="368d75c9-a925-4748-a06d-8a9a5aec7a63",n._sentryDebugIdIdentifier="sentry-dbid-368d75c9-a925-4748-a06d-8a9a5aec7a63")}catch{}})();const z=y({__name:"Tables",setup(n){const o=w(),{loading:r,result:l,refetch:i}=D(()=>u.list()),c=({key:e})=>o.push({path:`/_editor/table/${encodeURIComponent(e)}`}),m=async({key:e})=>{var t,a;await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.duplicate()),i()},b=async()=>{const e=await u.create();c({key:e.name})},p=async({key:e})=>{var t,a;confirm("Are you sure you want to delete this table?")&&(await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.delete()),i())},f=_(()=>{var e,t;return{columns:[{name:"Table Name"},{name:"Table Actions"}],rows:(t=(e=l.value)==null?void 0:e.map(a=>({key:a.name,cells:[{text:a.name,classes:["title","centered"],link:`/_editor/table/${encodeURIComponent(a.name)}`},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:p,dangerous:!0},{icon:h,label:"Edit Table",onClick:c},{icon:k,label:"Duplicate",onClick:m}]}]})))!=null?t:[]}});return(e,t)=>(g(),T(I,{loading:d(r),title:"Database Tables",description:"Create and manage your database tables here.","create-button-text":"Create Table","empty-title":"No tables here yet",table:d(f),onCreate:b},null,8,["loading","table"]))}});export{z as default};
//# sourceMappingURL=Tables.47747506.js.map
