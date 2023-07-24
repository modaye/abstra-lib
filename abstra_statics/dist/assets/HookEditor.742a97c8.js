import{d as C,b as o,c as s,e as a,p as S,r as V,R as k,L as y,v as t,F as x,K as H,u as D,a as E,q as U,y as r,U as b,X as w,a3 as I,B,N as q,O,w as f,H as N}from"./registerWidgets.04dc761e.js";import{T as A,B as G,a as R}from"./BackButton.846cedef.js";import{L as P}from"./CircularLoading.78e37a70.js";import{R as J,_ as M,S as L}from"./UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.9b504e6b.js";import{a as Q}from"./asyncComputed.e0f43af3.js";import{H as F}from"./hooks.d59fb935.js";import{C as j,D as K,f as X}from"./icons.d4e872e2.js";import{l as $}from"./log.0073b587.js";import{S as z}from"./SaveButton.81b0cbf4.js";import{D as W}from"./DocsButton.5c9fcb4f.js";import"./forms.cc593bbd.js";import"./activeRecord.57c6bf02.js";import"./dashes.4aa38f44.js";import"./runnerData.91239e67.js";import"./jobs.098bcb10.js";import"./workspaces.741b6616.js";import"./login.29b4c1f1.js";import"./sentry.2692e5c6.js";const Y={class:"hook-settings"},Z=C({__name:"HookSettings",props:{hook:null},setup(i){return(h,_)=>(o(),s("div",Y,[a(J,{runtime:i.hook},null,8,["runtime"])]))}});const ee=S(Z,[["__scopeId","data-v-6e8accf0"]]),oe={class:"options-wrapper"},te=["onClick"],se=C({__name:"ADropdown",props:{options:null,value:null},emits:["select"],setup(i,{emit:h}){const _=V(null),e=m=>{var c;h("select",m),(c=_.value)==null||c.blur()};return(m,c)=>(o(),s("div",{ref_key:"dropdown",ref:_,class:"dropdown",tabindex:"1"},[k(y(i.value)+" ",1),t("div",oe,[(o(!0),s(x,null,H(i.options,v=>(o(),s("div",{key:v.value,class:"option",onClick:d=>e(v.value)},y(v.label),9,te))),128))])],512))}});const ae=S(se,[["__scopeId","data-v-cac46a2e"]]),T=i=>(q("data-v-55f3fd4a"),i=i(),O(),i),ne={class:"hook-runner"},le={class:"title"},ie={class:"section"},re=T(()=>t("div",{class:"section-header"},"Request configuration",-1)),ce=T(()=>t("div",{class:"subsection-label"},"Method",-1)),de={class:"subsection-label"},ue=["onUpdate:modelValue"],pe=["onUpdate:modelValue"],_e={key:0,class:"subsection-label"},he={class:"property"},me=T(()=>t("div",{class:"property-label"},"Body is JSON",-1)),ve={class:"section"},ye=T(()=>t("div",{class:"section-header"},"Response",-1)),fe={key:0,class:"section"},ke={class:"no-execution-message"},ge={key:1,class:"section"},be=C({__name:"HookRunner",props:{hook:null},setup(i){const h=i,_=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],e=D({queryParams:[{name:"",value:""}],method:"GET",body:"",loading:!1,isBodyJson:!0}),m=async()=>{const d={"Content-Type":e.isBodyJson?"application/json":"text/plain"},l=await h.hook.test({method:e.method,query:e.queryParams.reduce((u,{name:n,value:p})=>(n&&p&&(u[n]=p),u),{}),body:e.body,headers:{...d}});e.response=l,l.stderr&&$.log({type:"stderr",log:l.stderr}),l.stdout&&$.log({type:"stdout",log:l.stdout})},c=()=>{e.queryParams.push({name:"",value:""})},v=d=>{e.queryParams=e.queryParams.filter((l,u)=>u!==d)};return(d,l)=>{const u=E("icon");return o(),s("div",ne,[t("div",le,[k(" Test your hook here "),e.loading?(o(),U(P,{key:0})):(o(),s("button",{key:1,class:"execution-button",onClick:m},[a(u,{path:r(j),width:"14",height:"14",fill:"#ffffff"},null,8,["path"]),k(" Run ")]))]),t("div",ie,[re,ce,a(ae,{value:e.method,options:_,onSelect:l[0]||(l[0]=n=>e.method=n)},null,8,["value"]),t("div",de,[k(" Query Params "),a(u,{class:"action-icon",path:r(K),width:"16",height:"16","fill-hover":"#777777",onClick:c},null,8,["path"])]),(o(!0),s(x,null,H(e.queryParams,(n,p)=>(o(),s("div",{key:p,class:"params-input"},[b(t("input",{"onUpdate:modelValue":g=>n.name=g,type:"text",placeholder:"name"},null,8,ue),[[w,n.name]]),b(t("input",{"onUpdate:modelValue":g=>n.value=g,type:"text",placeholder:"value"},null,8,pe),[[w,n.value]]),a(u,{class:"delete-icon",path:r(X),"fill-hover":"#777777",onClick:g=>v(p)},null,8,["path","onClick"])]))),128)),e.method!=="GET"?(o(),s("div",_e,[k(" Request Body "),t("div",he,[b(t("input",{"onUpdate:modelValue":l[1]||(l[1]=n=>e.isBodyJson=n),class:"checkbox-input",type:"checkbox"},null,512),[[I,e.isBodyJson]]),me])])):B("",!0),e.method!=="GET"?b((o(),s("textarea",{key:1,"onUpdate:modelValue":l[2]||(l[2]=n=>e.body=n)},null,512)),[[w,e.body]]):B("",!0)]),t("div",ve,[ye,e.loading?(o(),s("div",fe,[t("div",ke,[a(P)])])):e.response?(o(),s("div",ge,[t("pre",null,"Status: "+y(e.response.status),1),(o(!0),s(x,null,H(e.response.headers,(n,p)=>(o(),s("pre",{key:p},y(p)+": "+y(n),1))),128)),t("pre",null,y(e.response.body),1)])):B("",!0)])])}}});const xe=S(be,[["__scopeId","data-v-55f3fd4a"]]),Ce={class:"page"},Se={key:0,class:"loading"},Te=C({__name:"HookEditor",setup(i){const h=N(),{loading:_,result:e}=Q(async()=>await F.get(h.params.hookPath)),m=async c=>{e.value&&(e.value.path=c,await e.value.save())};return(c,v)=>{var d;return o(),s(x,null,[t("div",Ce,[r(_)||!r(e)?(o(),s("div",Se,[a(P)])):(o(),U(A,{key:1,class:"editor"},{left:f(()=>[a(G,{link:"/_editor/hooks"})]),right:f(()=>[a(W,{path:"hooks"}),a(z,{model:r(e)},null,8,["model"])]),default:f(()=>[a(R,{title:"Debug"},{default:f(()=>[a(xe,{hook:r(e)},null,8,["hook"])]),_:1}),a(R,{title:"Settings"},{default:f(()=>[a(ee,{hook:r(e),onUpdatePath:m},null,8,["hook"])]),_:1})]),_:1})),a(L,{runtime:"hooks"})]),a(M,{"has-changes":(d=r(e))==null?void 0:d.hasChanges()},null,8,["has-changes"])],64)}}});const Le=S(Te,[["__scopeId","data-v-c357ba21"]]);export{Le as default};
//# sourceMappingURL=HookEditor.742a97c8.js.map
