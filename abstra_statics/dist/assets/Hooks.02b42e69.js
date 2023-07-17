import{d as h,K as f,b as y,t as H,z as c,H as _}from"./registerWidgets.88d12ae1.js";import{f as C,g as b,h as g}from"./icons.778999cd.js";import{a as w}from"./asyncComputed.0bf661db.js";import{H as r}from"./hooks.d59fb935.js";import{R as x}from"./RuntimeList.90807eba.js";import"./activeRecord.57c6bf02.js";import"./DropdownMenu.d2cd7589.js";import"./CircularLoading.0c459b72.js";const U=h({__name:"Hooks",setup(R){const l=_(),{loading:p,result:a,refetch:s}=w(()=>r.list()),i=({key:e})=>l.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(n=>n.path===e))==null?void 0:t.duplicate()),s()},m=async()=>{const e=await r.create();i({key:e.path})},d=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this hook?")&&(await((t=(o=a.value)==null?void 0:o.find(n=>n.path===e))==null?void 0:t.delete()),s())},k=f(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Hook Actions"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:d,dangerous:!0},{icon:b,label:"Edit Hook",onClick:i},{icon:g,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(y(),H(x,{loading:c(p),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:c(k),onCreate:m},null,8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Hooks.02b42e69.js.map
