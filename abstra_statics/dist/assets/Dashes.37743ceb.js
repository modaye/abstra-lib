import{d as f,J as y,b as D,q as b,y as c,G as w}from"./registerWidgets.04dc761e.js";import{f as C,g as _,h as k}from"./icons.d4e872e2.js";import{a as g}from"./asyncComputed.e0f43af3.js";import{D as r}from"./dashes.4aa38f44.js";import{R as x}from"./RuntimeList.0a3aa9db.js";import"./activeRecord.57c6bf02.js";import"./runnerData.91239e67.js";import"./DropdownMenu.d347b089.js";import"./CircularLoading.78e37a70.js";const $=f({__name:"Dashes",setup(R){const l=w(),{loading:p,result:o,refetch:n}=g(()=>r.list()),i=({key:e})=>l.push({path:`/_editor/dash/${encodeURIComponent(e)}`}),d=async({key:e})=>{var a,t;await((t=(a=o.value)==null?void 0:a.find(s=>s.path===e))==null?void 0:t.duplicate()),n()},h=async()=>{const e=await r.create();i({key:e.path})},u=async({key:e})=>{var a,t;confirm("Are you sure you want to delete this dash?")&&(await((t=(a=o.value)==null?void 0:a.find(s=>s.path===e))==null?void 0:t.delete()),n())},m=y(()=>{var e,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Dash Actions"}],rows:(a=(e=o.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/dash/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:u,dangerous:!0},{icon:_,label:"Edit Dash",onClick:i},{icon:k,label:"Duplicate",onClick:d}]}]})))!=null?a:[]}});return(e,a)=>(D(),b(x,{loading:c(p),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:c(m),onCreate:h},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Dashes.37743ceb.js.map
