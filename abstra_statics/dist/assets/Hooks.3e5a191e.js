import{d as y,K as h,b,t as g,z as d,H as _}from"./registerWidgets.cbdb5b20.js";import{f as H,g as w,h as C}from"./icons.0be4624f.js";import{a as I}from"./asyncComputed.0300d9e5.js";import{H as u}from"./hooks.0190d35b.js";import{R as x}from"./RuntimeList.e1172034.js";import"./activeRecord.aaef4d59.js";import"./DropdownMenu.fc9bfa79.js";import"./CircularLoading.afc6a364.js";import"./lottie.3c633a53.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="02aef5cd-ef9b-4af4-88ff-22845191039e",a._sentryDebugIdIdentifier="sentry-dbid-02aef5cd-ef9b-4af4-88ff-22845191039e")}catch{}})();const U=y({__name:"Hooks",setup(a){const n=_(),{loading:r,result:s,refetch:c}=I(()=>u.list()),l=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),p=async({key:e})=>{var o,t;await((t=(o=s.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.duplicate()),c()},f=async()=>{const e=await u.create();l({key:e.path})},m=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this hook?")&&(await((t=(o=s.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.delete()),c())},k=h(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Hook Actions"}],rows:(o=(e=s.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:H,label:"Delete",onClick:m,dangerous:!0},{icon:w,label:"Edit Hook",onClick:l},{icon:C,label:"Duplicate",onClick:p}]}]})))!=null?o:[]}});return(e,o)=>(b(),g(x,{loading:d(r),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:d(k),onCreate:f},null,8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Hooks.3e5a191e.js.map