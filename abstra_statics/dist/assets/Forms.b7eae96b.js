import{d as b,K as h,b as g,t as w,z as m,H as _}from"./registerWidgets.05268d5e.js";import{f as F,g as C,h as k}from"./icons.7c77483f.js";import{a as D}from"./asyncComputed.8f90be18.js";import{F as d}from"./forms.5a0e614e.js";import{R as I}from"./RuntimeList.eb31ec66.js";import"./activeRecord.bacc466b.js";import"./DropdownMenu.7f9500ce.js";import"./CircularLoading.b36562a7.js";import"./lottie.ea647b01.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="4e8a4b86-8f51-4e15-9138-7a0c77b18539",a._sentryDebugIdIdentifier="sentry-dbid-4e8a4b86-8f51-4e15-9138-7a0c77b18539")}catch{}})();const $=b({__name:"Forms",setup(a){const n=_(),{loading:i,result:r,refetch:c}=D(()=>d.list()),l=({key:e})=>n.push({path:`/_editor/form/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=r.value)==null?void 0:o.find(s=>s.path===e))==null?void 0:t.duplicate()),c()},p=async()=>{const e=await d.create();l({key:e.path})},f=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this form?")&&(await((t=(o=r.value)==null?void 0:o.find(s=>s.path===e))==null?void 0:t.delete()),c())},y=h(()=>{var e,o;return{columns:[{name:"Form Name"},{name:"Path"},{name:"Form Actions"}],rows:(o=(e=r.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/form/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:F,label:"Delete",onClick:f,dangerous:!0},{icon:C,label:"Edit Form",onClick:l},{icon:k,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(g(),w(I,{loading:m(i),title:"Dynamic Python forms",description:"Create forms with advanced logic, easy integrations and custom branding.","create-button-text":"Create Form","empty-title":"No forms here yet","video-url":"https://www.youtube.com/embed/tN7SRGmVPwc",table:m(y),onCreate:p},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Forms.b7eae96b.js.map