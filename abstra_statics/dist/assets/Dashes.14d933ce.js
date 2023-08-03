import{d as b,K as y,b as D,t as w,z as l,H as g}from"./registerWidgets.68b4d727.js";import{f as _,g as k,h as C}from"./icons.ef86ff2e.js";import{a as I}from"./asyncComputed.93878fc8.js";import{D as p}from"./dashes.22b9d6ab.js";import{R as x}from"./RuntimeList.b7168b29.js";import"./activeRecord.65858c58.js";import"./runnerData.d765a3b7.js";import"./DropdownMenu.7c50a10a.js";import"./CircularLoading.d7ae4d10.js";import"./lottie.d1957a7e.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="f3d0866c-26e1-445b-85de-22b7b152443e",o._sentryDebugIdIdentifier="sentry-dbid-f3d0866c-26e1-445b-85de-22b7b152443e")}catch{}})();const z=b({__name:"Dashes",setup(o){const s=g(),{loading:r,result:n,refetch:c}=I(()=>p.list()),d=({key:e})=>s.push({path:`/_editor/dash/${encodeURIComponent(e)}`}),u=async({key:e})=>{var a,t;await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.duplicate()),c()},h=async()=>{const e=await p.create();d({key:e.path})},m=async({key:e})=>{var a,t;confirm("Are you sure you want to delete this dash?")&&(await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.delete()),c())},f=y(()=>{var e,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Dash Actions"}],rows:(a=(e=n.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/dash/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:_,label:"Delete",onClick:m,dangerous:!0},{icon:k,label:"Edit Dash",onClick:d},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?a:[]}});return(e,a)=>(D(),w(x,{loading:l(r),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:l(f),onCreate:h},null,8,["loading","table"]))}});export{z as default};
//# sourceMappingURL=Dashes.14d933ce.js.map