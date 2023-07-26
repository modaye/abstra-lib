import{d as y,K as _,b as g,t as T,z as d,H as w}from"./registerWidgets.fce18b61.js";import{f as C,g as h,h as k}from"./icons.99afd58c.js";import{a as D}from"./asyncComputed.aceaab2d.js";import{T as u}from"./tables.10b93ca5.js";import{R as I}from"./RuntimeList.b83de4ce.js";import"./activeRecord.5ca93a47.js";import"./DropdownMenu.94fbd8d3.js";import"./CircularLoading.01aaac49.js";import"./lottie.84b3db69.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="d595df65-99c9-417b-9892-46f6a6db970d",n._sentryDebugIdIdentifier="sentry-dbid-d595df65-99c9-417b-9892-46f6a6db970d")}catch{}})();const z=y({__name:"Tables",setup(n){const o=w(),{loading:r,result:l,refetch:i}=D(()=>u.list()),c=({key:e})=>o.push({path:`/_editor/table/${encodeURIComponent(e)}`}),b=async({key:e})=>{var t,a;await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.duplicate()),i()},m=async()=>{const e=await u.create();c({key:e.name})},p=async({key:e})=>{var t,a;confirm("Are you sure you want to delete this table?")&&(await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.delete()),i())},f=_(()=>{var e,t;return{columns:[{name:"Table Name"},{name:"Table Actions"}],rows:(t=(e=l.value)==null?void 0:e.map(a=>({key:a.name,cells:[{text:a.name,classes:["title","centered"],link:`/_editor/table/${encodeURIComponent(a.name)}`},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:p,dangerous:!0},{icon:h,label:"Edit Table",onClick:c},{icon:k,label:"Duplicate",onClick:b}]}]})))!=null?t:[]}});return(e,t)=>(g(),T(I,{loading:d(r),title:"Database Tables",description:"Create and manage your database tables here.","create-button-text":"Create Table","empty-title":"No tables here yet",table:d(f),onCreate:m},null,8,["loading","table"]))}});export{z as default};
//# sourceMappingURL=Tables.0ce822e8.js.map