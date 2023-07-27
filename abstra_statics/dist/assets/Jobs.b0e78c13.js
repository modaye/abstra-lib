import{d as y,K as _,b as g,t as h,z as d,H as J}from"./registerWidgets.ad696c68.js";import{f as k,g as w,h as C}from"./icons.1c1f9d53.js";import{a as I}from"./asyncComputed.40a67fe8.js";import{J as u}from"./jobs.519b05d4.js";import{R as x}from"./RuntimeList.668ecbe0.js";import"./activeRecord.da3a3625.js";import"./DropdownMenu.0fa3a500.js";import"./CircularLoading.1b0ceab6.js";import"./lottie.d1a83079.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="4ec349ad-0425-4158-a00c-90b228ff20c1",n._sentryDebugIdIdentifier="sentry-dbid-4ec349ad-0425-4158-a00c-90b228ff20c1")}catch{}})();const U=y({__name:"Jobs",setup(n){const i=J(),{loading:r,result:a,refetch:c}=I(()=>u.list()),l=({key:e})=>i.push({path:`/_editor/job/${encodeURIComponent(e)}`}),f=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.duplicate()),c()},p=async()=>{const e=await u.create();l({key:e.identifier})},b=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this job?")&&(await((t=(o=a.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.delete()),c())},m=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Job Actions"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",classes:["centered"],actions:[{icon:k,label:"Delete",onClick:b,dangerous:!0},{icon:w,label:"Edit Job",onClick:l},{icon:C,label:"Duplicate",onClick:f}]}]})))!=null?o:[]}});return(e,o)=>(g(),h(x,{loading:d(r),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:d(m),onCreate:p},null,8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Jobs.b0e78c13.js.map