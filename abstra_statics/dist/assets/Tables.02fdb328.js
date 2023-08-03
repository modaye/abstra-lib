import{d as y,K as _,b as g,t as T,z as d,H as w}from"./registerWidgets.db466a36.js";import{f as C,g as h,h as k}from"./icons.1210223a.js";import{a as D}from"./asyncComputed.9891ab9c.js";import{T as b}from"./tables.109be0c0.js";import{R as I}from"./RuntimeList.4327f9d3.js";import"./activeRecord.74699a56.js";import"./DropdownMenu.637f3ff1.js";import"./CircularLoading.57cd4b94.js";import"./lottie.e796547d.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="e75b635a-2f8b-488f-956d-f53b1f255f96",n._sentryDebugIdIdentifier="sentry-dbid-e75b635a-2f8b-488f-956d-f53b1f255f96")}catch{}})();const z=y({__name:"Tables",setup(n){const o=w(),{loading:r,result:l,refetch:i}=D(()=>b.list()),c=({key:e})=>o.push({path:`/_editor/table/${encodeURIComponent(e)}`}),u=async({key:e})=>{var t,a;await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.duplicate()),i()},m=async()=>{const e=await b.create();c({key:e.name})},f=async({key:e})=>{var t,a;confirm("Are you sure you want to delete this table?")&&(await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.delete()),i())},p=_(()=>{var e,t;return{columns:[{name:"Table Name"},{name:"Table Actions"}],rows:(t=(e=l.value)==null?void 0:e.map(a=>({key:a.name,cells:[{text:a.name,classes:["title","centered"],link:`/_editor/table/${encodeURIComponent(a.name)}`},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:f,dangerous:!0},{icon:h,label:"Edit Table",onClick:c},{icon:k,label:"Duplicate",onClick:u}]}]})))!=null?t:[]}});return(e,t)=>(g(),T(I,{loading:d(r),title:"Database Tables",description:"Create and manage your database tables here.","create-button-text":"Create Table","empty-title":"No tables here yet",table:d(p),onCreate:m},null,8,["loading","table"]))}});export{z as default};
//# sourceMappingURL=Tables.02fdb328.js.map