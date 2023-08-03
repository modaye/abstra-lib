import{d as b,K as h,b as g,t as w,z as l,H as _}from"./registerWidgets.db466a36.js";import{f as F,g as C,h as k}from"./icons.1210223a.js";import{a as D}from"./asyncComputed.9891ab9c.js";import{F as m}from"./forms.2955e1ee.js";import{R as I}from"./RuntimeList.4327f9d3.js";import"./activeRecord.74699a56.js";import"./DropdownMenu.637f3ff1.js";import"./CircularLoading.57cd4b94.js";import"./lottie.e796547d.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="606a27ad-ca03-4dd4-912c-1a5161a40481",a._sentryDebugIdIdentifier="sentry-dbid-606a27ad-ca03-4dd4-912c-1a5161a40481")}catch{}})();const $=b({__name:"Forms",setup(a){const n=_(),{loading:i,result:r,refetch:c}=D(()=>m.list()),d=({key:e})=>n.push({path:`/_editor/form/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=r.value)==null?void 0:o.find(s=>s.path===e))==null?void 0:t.duplicate()),c()},p=async()=>{const e=await m.create();d({key:e.path})},f=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this form?")&&(await((t=(o=r.value)==null?void 0:o.find(s=>s.path===e))==null?void 0:t.delete()),c())},y=h(()=>{var e,o;return{columns:[{name:"Form Name"},{name:"Path"},{name:"Form Actions"}],rows:(o=(e=r.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/form/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:F,label:"Delete",onClick:f,dangerous:!0},{icon:C,label:"Edit Form",onClick:d},{icon:k,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(g(),w(I,{loading:l(i),title:"Dynamic Python forms",description:"Create forms with advanced logic, easy integrations and custom branding.","create-button-text":"Create Form","empty-title":"No forms here yet","video-url":"https://www.youtube.com/embed/tN7SRGmVPwc",table:l(y),onCreate:p},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Forms.50485440.js.map