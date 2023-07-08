import{d as S,b as o,c as s,e as n,q as C,r as R,S as k,N as y,x as t,F as x,L as P,v as U,a as D,t as E,z as r,V as b,W as w,a0 as I,D as H,O as q,Q as O,w as f,J}from"./registerWidgets.bb4c7eff.js";import{T as N,B as A,a as V}from"./BackButton.1811d14c.js";import{L as B}from"./CircularLoading.8dab92fc.js";import{R as G,_ as M,S as L}from"./UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.63f69ce1.js";import{a as Q}from"./asyncComputed.0adffaf6.js";import{H as F}from"./hooks.911e43af.js";import{D as j,E as z,f as W}from"./icons.97625e56.js";import{l as $}from"./log.6e68571d.js";import{S as K}from"./SaveButton.4505bcbe.js";import"./forms.91463966.js";import"./utils.95f0e9e8.js";import"./pubsub.a0411919.js";import"./dashes.922bdf25.js";import"./runnerData.891fce22.js";import"./jobs.cb7d0efd.js";import"./workspaces.4c177a35.js";import"./login.29b4c1f1.js";import"./sentry.2692e5c6.js";const X={class:"hook-settings"},Y=S({__name:"HookSettings",props:{hook:null},setup(i){return(h,_)=>(o(),s("div",X,[n(G,{runtime:i.hook},null,8,["runtime"])]))}});const Z=C(Y,[["__scopeId","data-v-6e8accf0"]]),ee={class:"options-wrapper"},oe=["onClick"],te=S({__name:"ADropdown",props:{options:null,value:null},emits:["select"],setup(i,{emit:h}){const _=R(null),e=m=>{var d;h("select",m),(d=_.value)==null||d.blur()};return(m,d)=>(o(),s("div",{ref_key:"dropdown",ref:_,class:"dropdown",tabindex:"1"},[k(y(i.value)+" ",1),t("div",ee,[(o(!0),s(x,null,P(i.options,v=>(o(),s("div",{key:v.value,class:"option",onClick:c=>e(v.value)},y(v.label),9,oe))),128))])],512))}});const se=C(te,[["__scopeId","data-v-cac46a2e"]]),T=i=>(q("data-v-55f3fd4a"),i=i(),O(),i),ae={class:"hook-runner"},ne={class:"title"},le={class:"section"},ie=T(()=>t("div",{class:"section-header"},"Request configuration",-1)),re=T(()=>t("div",{class:"subsection-label"},"Method",-1)),de={class:"subsection-label"},ce=["onUpdate:modelValue"],ue=["onUpdate:modelValue"],pe={key:0,class:"subsection-label"},_e={class:"property"},he=T(()=>t("div",{class:"property-label"},"Body is JSON",-1)),me={class:"section"},ve=T(()=>t("div",{class:"section-header"},"Response",-1)),ye={key:0,class:"section"},fe={class:"no-execution-message"},ke={key:1,class:"section"},ge=S({__name:"HookRunner",props:{hook:null},setup(i){const h=i,_=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],e=U({queryParams:[{name:"",value:""}],method:"GET",body:"",loading:!1,isBodyJson:!0}),m=async()=>{const c={"Content-Type":e.isBodyJson?"application/json":"text/plain"},l=await h.hook.test({method:e.method,query:e.queryParams.reduce((u,{name:a,value:p})=>(a&&p&&(u[a]=p),u),{}),body:e.body,headers:{...c}});e.response=l,l.stderr&&$.log({type:"stderr",log:l.stderr}),l.stdout&&$.log({type:"stdout",log:l.stdout})},d=()=>{e.queryParams.push({name:"",value:""})},v=c=>{e.queryParams=e.queryParams.filter((l,u)=>u!==c)};return(c,l)=>{const u=D("icon");return o(),s("div",ae,[t("div",ne,[k(" Test your hook here "),e.loading?(o(),E(B,{key:0})):(o(),s("button",{key:1,class:"execution-button",onClick:m},[n(u,{path:r(j),width:"14",height:"14",fill:"#ffffff"},null,8,["path"]),k(" Run ")]))]),t("div",le,[ie,re,n(se,{value:e.method,options:_,onSelect:l[0]||(l[0]=a=>e.method=a)},null,8,["value"]),t("div",de,[k(" Query Params "),n(u,{class:"action-icon",path:r(z),width:"16",height:"16","fill-hover":"#777777",onClick:d},null,8,["path"])]),(o(!0),s(x,null,P(e.queryParams,(a,p)=>(o(),s("div",{key:p,class:"params-input"},[b(t("input",{"onUpdate:modelValue":g=>a.name=g,type:"text",placeholder:"name"},null,8,ce),[[w,a.name]]),b(t("input",{"onUpdate:modelValue":g=>a.value=g,type:"text",placeholder:"value"},null,8,ue),[[w,a.value]]),n(u,{class:"delete-icon",path:r(W),"fill-hover":"#777777",onClick:g=>v(p)},null,8,["path","onClick"])]))),128)),e.method!=="GET"?(o(),s("div",pe,[k(" Request Body "),t("div",_e,[b(t("input",{"onUpdate:modelValue":l[1]||(l[1]=a=>e.isBodyJson=a),class:"checkbox-input",type:"checkbox"},null,512),[[I,e.isBodyJson]]),he])])):H("",!0),e.method!=="GET"?b((o(),s("textarea",{key:1,"onUpdate:modelValue":l[2]||(l[2]=a=>e.body=a)},null,512)),[[w,e.body]]):H("",!0)]),t("div",me,[ve,e.loading?(o(),s("div",ye,[t("div",fe,[n(B)])])):e.response?(o(),s("div",ke,[t("pre",null,"Status: "+y(e.response.status),1),(o(!0),s(x,null,P(e.response.headers,(a,p)=>(o(),s("pre",{key:p},y(p)+": "+y(a),1))),128)),t("pre",null,y(e.response.body),1)])):H("",!0)])])}}});const be=C(ge,[["__scopeId","data-v-55f3fd4a"]]),xe={class:"page"},Se={key:0,class:"loading"},Ce=S({__name:"HookEditor",setup(i){const h=J(),{loading:_,result:e}=Q(async()=>await F.get(h.params.hookPath)),m=async d=>{e.value&&(e.value.path=d,await e.value.save())};return(d,v)=>{var c;return o(),s(x,null,[t("div",xe,[r(_)||!r(e)?(o(),s("div",Se,[n(B)])):(o(),E(N,{key:1,class:"editor"},{left:f(()=>[n(A,{link:"/_editor/hooks"})]),right:f(()=>[n(K,{model:r(e)},null,8,["model"])]),default:f(()=>[n(V,{title:"Debug"},{default:f(()=>[n(be,{hook:r(e)},null,8,["hook"])]),_:1}),n(V,{title:"Settings"},{default:f(()=>[n(Z,{hook:r(e),onUpdatePath:m},null,8,["hook"])]),_:1})]),_:1})),n(L,{runtime:"hooks"})]),n(M,{"has-changes":(c=r(e))==null?void 0:c.hasChanges()},null,8,["has-changes"])],64)}}});const Me=C(Ce,[["__scopeId","data-v-373e2428"]]);export{Me as default};
//# sourceMappingURL=HookEditor.168f2219.js.map
