import{d as y,K as _,b as g,t as h,z as d,H as J}from"./registerWidgets.0897334f.js";import{f as k,g as w,h as C}from"./icons.74b4bbd7.js";import{a as I}from"./asyncComputed.14546baa.js";import{J as f}from"./jobs.0a71198e.js";import{R as x}from"./RuntimeList.7d2e2158.js";import"./activeRecord.6320d31c.js";import"./DropdownMenu.a2eca68d.js";import"./CircularLoading.21f27962.js";import"./lottie.ffe66724.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="267ab906-5e42-4cc5-9f37-e6f2f7b5cefc",n._sentryDebugIdIdentifier="sentry-dbid-267ab906-5e42-4cc5-9f37-e6f2f7b5cefc")}catch{}})();const U=y({__name:"Jobs",setup(n){const i=J(),{loading:r,result:a,refetch:c}=I(()=>f.list()),l=({key:e})=>i.push({path:`/_editor/job/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.duplicate()),c()},b=async()=>{const e=await f.create();l({key:e.identifier})},p=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this job?")&&(await((t=(o=a.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.delete()),c())},m=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Job Actions"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",classes:["centered"],actions:[{icon:k,label:"Delete",onClick:p,dangerous:!0},{icon:w,label:"Edit Job",onClick:l},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(g(),h(x,{loading:d(r),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:d(m),onCreate:b},null,8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Jobs.9343c744.js.map