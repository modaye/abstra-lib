import{d as k,G as f,b as y,t as H,y as r,K as _}from"./registerWidgets.fff064a1.js";import{e as b,f as g,g as C}from"./icons.907f45d7.js";import{a as w}from"./CircularLoading.59d7fd3d.js";import{H as c}from"./hooks.039c0cd9.js";import{R as x}from"./RuntimeList.106b52b7.js";import"./utils.3371dfe5.js";const N=k({__name:"Hooks",setup(v){const n=_(),{loading:l,result:a,refetch:i}=w(()=>c.list()),p=({key:e})=>n.push({path:`/_editor/hook/${e}`}),u=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(s=>s.path===e))==null?void 0:t.duplicate()),i()},d=async()=>{const e=await c.create();n.push({path:`/_editor/hook/${e.path}`})},m=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this hook?")&&(await((t=(o=a.value)==null?void 0:o.find(s=>s.path===e))==null?void 0:t.delete()),i())},h=f(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Hook Actions"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/hook/${t.path}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:b,label:"Delete",onClick:m,dangerous:!0},{icon:g,label:"Edit Hook",onClick:p},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(y(),H(x,{loading:r(l),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:r(h),onCreate:d},null,8,["loading","table"]))}});export{N as default};
//# sourceMappingURL=Hooks.2e477da3.js.map
