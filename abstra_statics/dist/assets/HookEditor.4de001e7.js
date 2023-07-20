import{d as C,b as o,c as s,e as n,p as S,r as V,R as k,L as y,v as t,F as x,K as B,u as E,a as I,q as U,y as r,U as b,X as w,a0 as q,B as H,N as D,O,w as f,H as N}from"./registerWidgets.990552e9.js";import{T as A,B as G,a as R}from"./BackButton.e64118bc.js";import{L as P}from"./CircularLoading.b7a09562.js";import{R as J,_ as M,S as L}from"./UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.4d6cdcad.js";import{a as Q}from"./asyncComputed.5a7faf96.js";import{H as F}from"./hooks.d59fb935.js";import{C as j,D as K,f as X}from"./icons.d4e872e2.js";import{l as $}from"./log.90d86245.js";import{S as z}from"./SaveButton.3e822731.js";import"./forms.cc593bbd.js";import"./activeRecord.57c6bf02.js";import"./dashes.f693ff64.js";import"./runnerData.fd21db9b.js";import"./jobs.098bcb10.js";import"./workspaces.741b6616.js";import"./login.29b4c1f1.js";import"./sentry.2692e5c6.js";const W={class:"hook-settings"},Y=C({__name:"HookSettings",props:{hook:null},setup(i){return(h,_)=>(o(),s("div",W,[n(J,{runtime:i.hook},null,8,["runtime"])]))}});const Z=S(Y,[["__scopeId","data-v-6e8accf0"]]),ee={class:"options-wrapper"},oe=["onClick"],te=C({__name:"ADropdown",props:{options:null,value:null},emits:["select"],setup(i,{emit:h}){const _=V(null),e=m=>{var d;h("select",m),(d=_.value)==null||d.blur()};return(m,d)=>(o(),s("div",{ref_key:"dropdown",ref:_,class:"dropdown",tabindex:"1"},[k(y(i.value)+" ",1),t("div",ee,[(o(!0),s(x,null,B(i.options,v=>(o(),s("div",{key:v.value,class:"option",onClick:c=>e(v.value)},y(v.label),9,oe))),128))])],512))}});const se=S(te,[["__scopeId","data-v-cac46a2e"]]),T=i=>(D("data-v-55f3fd4a"),i=i(),O(),i),ae={class:"hook-runner"},ne={class:"title"},le={class:"section"},ie=T(()=>t("div",{class:"section-header"},"Request configuration",-1)),re=T(()=>t("div",{class:"subsection-label"},"Method",-1)),de={class:"subsection-label"},ce=["onUpdate:modelValue"],ue=["onUpdate:modelValue"],pe={key:0,class:"subsection-label"},_e={class:"property"},he=T(()=>t("div",{class:"property-label"},"Body is JSON",-1)),me={class:"section"},ve=T(()=>t("div",{class:"section-header"},"Response",-1)),ye={key:0,class:"section"},fe={class:"no-execution-message"},ke={key:1,class:"section"},ge=C({__name:"HookRunner",props:{hook:null},setup(i){const h=i,_=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],e=E({queryParams:[{name:"",value:""}],method:"GET",body:"",loading:!1,isBodyJson:!0}),m=async()=>{const c={"Content-Type":e.isBodyJson?"application/json":"text/plain"},l=await h.hook.test({method:e.method,query:e.queryParams.reduce((u,{name:a,value:p})=>(a&&p&&(u[a]=p),u),{}),body:e.body,headers:{...c}});e.response=l,l.stderr&&$.log({type:"stderr",log:l.stderr}),l.stdout&&$.log({type:"stdout",log:l.stdout})},d=()=>{e.queryParams.push({name:"",value:""})},v=c=>{e.queryParams=e.queryParams.filter((l,u)=>u!==c)};return(c,l)=>{const u=I("icon");return o(),s("div",ae,[t("div",ne,[k(" Test your hook here "),e.loading?(o(),U(P,{key:0})):(o(),s("button",{key:1,class:"execution-button",onClick:m},[n(u,{path:r(j),width:"14",height:"14",fill:"#ffffff"},null,8,["path"]),k(" Run ")]))]),t("div",le,[ie,re,n(se,{value:e.method,options:_,onSelect:l[0]||(l[0]=a=>e.method=a)},null,8,["value"]),t("div",de,[k(" Query Params "),n(u,{class:"action-icon",path:r(K),width:"16",height:"16","fill-hover":"#777777",onClick:d},null,8,["path"])]),(o(!0),s(x,null,B(e.queryParams,(a,p)=>(o(),s("div",{key:p,class:"params-input"},[b(t("input",{"onUpdate:modelValue":g=>a.name=g,type:"text",placeholder:"name"},null,8,ce),[[w,a.name]]),b(t("input",{"onUpdate:modelValue":g=>a.value=g,type:"text",placeholder:"value"},null,8,ue),[[w,a.value]]),n(u,{class:"delete-icon",path:r(X),"fill-hover":"#777777",onClick:g=>v(p)},null,8,["path","onClick"])]))),128)),e.method!=="GET"?(o(),s("div",pe,[k(" Request Body "),t("div",_e,[b(t("input",{"onUpdate:modelValue":l[1]||(l[1]=a=>e.isBodyJson=a),class:"checkbox-input",type:"checkbox"},null,512),[[q,e.isBodyJson]]),he])])):H("",!0),e.method!=="GET"?b((o(),s("textarea",{key:1,"onUpdate:modelValue":l[2]||(l[2]=a=>e.body=a)},null,512)),[[w,e.body]]):H("",!0)]),t("div",me,[ve,e.loading?(o(),s("div",ye,[t("div",fe,[n(P)])])):e.response?(o(),s("div",ke,[t("pre",null,"Status: "+y(e.response.status),1),(o(!0),s(x,null,B(e.response.headers,(a,p)=>(o(),s("pre",{key:p},y(p)+": "+y(a),1))),128)),t("pre",null,y(e.response.body),1)])):H("",!0)])])}}});const be=S(ge,[["__scopeId","data-v-55f3fd4a"]]),xe={class:"page"},Ce={key:0,class:"loading"},Se=C({__name:"HookEditor",setup(i){const h=N(),{loading:_,result:e}=Q(async()=>await F.get(h.params.hookPath)),m=async d=>{e.value&&(e.value.path=d,await e.value.save())};return(d,v)=>{var c;return o(),s(x,null,[t("div",xe,[r(_)||!r(e)?(o(),s("div",Ce,[n(P)])):(o(),U(A,{key:1,class:"editor"},{left:f(()=>[n(G,{link:"/_editor/hooks"})]),right:f(()=>[n(z,{model:r(e)},null,8,["model"])]),default:f(()=>[n(R,{title:"Debug"},{default:f(()=>[n(be,{hook:r(e)},null,8,["hook"])]),_:1}),n(R,{title:"Settings"},{default:f(()=>[n(Z,{hook:r(e),onUpdatePath:m},null,8,["hook"])]),_:1})]),_:1})),n(L,{runtime:"hooks"})]),n(M,{"has-changes":(c=r(e))==null?void 0:c.hasChanges()},null,8,["has-changes"])],64)}}});const Je=S(Se,[["__scopeId","data-v-373e2428"]]);export{Je as default};
//# sourceMappingURL=HookEditor.4de001e7.js.map