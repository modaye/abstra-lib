import{d as h,K as y,b,t as F,z as i,H as w}from"./registerWidgets.4a0d8d45.js";import{f as C,g as _,h as g}from"./icons.e3de8035.js";import{a as k}from"./asyncComputed.52d81103.js";import{F as c}from"./forms.8e1f6bae.js";import{R as x}from"./RuntimeList.3f05270f.js";import"./activeRecord.57c6bf02.js";import"./DropdownMenu.ad391198.js";import"./CircularLoading.0d3d2390.js";const $=h({__name:"Forms",setup(R){const m=w(),{loading:l,result:a,refetch:r}=k(()=>c.list()),s=({key:e})=>m.push({path:`/_editor/form/${encodeURIComponent(e)}`}),d=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(n=>n.path===e))==null?void 0:t.duplicate()),r()},p=async()=>{const e=await c.create();s({key:e.path})},u=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this form?")&&(await((t=(o=a.value)==null?void 0:o.find(n=>n.path===e))==null?void 0:t.delete()),r())},f=y(()=>{var e,o;return{columns:[{name:"Form Name"},{name:"Path"},{name:"Form Actions"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/form/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:u,dangerous:!0},{icon:_,label:"Edit Form",onClick:s},{icon:g,label:"Duplicate",onClick:d}]}]})))!=null?o:[]}});return(e,o)=>(b(),F(x,{loading:i(l),title:"Dynamic Python forms",description:"Create forms with advanced logic, easy integrations and custom branding.","create-button-text":"Create Form","empty-title":"No forms here yet","video-url":"https://www.youtube.com/embed/tN7SRGmVPwc",table:i(f),onCreate:p},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Forms.2b9f9efe.js.map
