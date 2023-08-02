import{d as y,K as _,b as g,t as T,z as d,H as w}from"./registerWidgets.39370cce.js";import{f as C,g as h,h as k}from"./icons.c1d7cae2.js";import{a as D}from"./asyncComputed.588e6ddd.js";import{T as u}from"./tables.383fadc8.js";import{R as I}from"./RuntimeList.c060a1d2.js";import"./activeRecord.fab7288a.js";import"./DropdownMenu.f1872b59.js";import"./CircularLoading.858c95df.js";import"./lottie.576b6dda.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="35a4d002-dc24-42e2-9ac3-3d7c19168484",n._sentryDebugIdIdentifier="sentry-dbid-35a4d002-dc24-42e2-9ac3-3d7c19168484")}catch{}})();const z=y({__name:"Tables",setup(n){const o=w(),{loading:r,result:l,refetch:c}=D(()=>u.list()),i=({key:e})=>o.push({path:`/_editor/table/${encodeURIComponent(e)}`}),m=async({key:e})=>{var t,a;await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.duplicate()),c()},b=async()=>{const e=await u.create();i({key:e.name})},p=async({key:e})=>{var t,a;confirm("Are you sure you want to delete this table?")&&(await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.delete()),c())},f=_(()=>{var e,t;return{columns:[{name:"Table Name"},{name:"Table Actions"}],rows:(t=(e=l.value)==null?void 0:e.map(a=>({key:a.name,cells:[{text:a.name,classes:["title","centered"],link:`/_editor/table/${encodeURIComponent(a.name)}`},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:p,dangerous:!0},{icon:h,label:"Edit Table",onClick:i},{icon:k,label:"Duplicate",onClick:m}]}]})))!=null?t:[]}});return(e,t)=>(g(),T(I,{loading:d(r),title:"Database Tables",description:"Create and manage your database tables here.","create-button-text":"Create Table","empty-title":"No tables here yet",table:d(f),onCreate:b},null,8,["loading","table"]))}});export{z as default};
//# sourceMappingURL=Tables.ae1e6d03.js.map
