import{d as w,b as o,c as a,e as n,q as C,r as $,S as k,N as f,x as t,F as x,L as H,v as E,a as R,t as V,z as r,V as g,Y as T,a1 as U,D as B,O as q,Q as O,w as y,J}from"./registerWidgets.0a925ff6.js";import{T as N,a as D}from"./Tab.a5c9c887.js";import{L as P}from"./CircularLoading.63d322f4.js";import{R as A,_ as G,S as M}from"./UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.70cd3f9b.js";import{a as L}from"./asyncComputed.57718c9c.js";import{H as Q}from"./hooks.03ddb6e5.js";import{B as F}from"./BackButton.4f762320.js";import{C as j,D as z,f as Y}from"./icons.d9ce72d6.js";import{l as I}from"./log.b73caccb.js";import{S as K}from"./SaveButton.0c666679.js";import{D as W}from"./DocsButton.a01586d7.js";import"./lottie.a6ae83a3.js";import"./forms.3d8bf74c.js";import"./activeRecord.ffa40c01.js";import"./dashes.8f3c64dd.js";import"./runnerData.cb7dff48.js";import"./jobs.f74ed002.js";import"./workspaces.f32c860a.js";import"./login.8a7aefc5.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[i]="e590ebb8-bc4a-4dbd-8fc3-2f6eaa74edb3",s._sentryDebugIdIdentifier="sentry-dbid-e590ebb8-bc4a-4dbd-8fc3-2f6eaa74edb3")}catch{}})();const X={class:"hook-settings"},Z=w({__name:"HookSettings",props:{hook:null},setup(s){return(i,c)=>(o(),a("div",X,[n(A,{runtime:s.hook},null,8,["runtime"])]))}});const ee=C(Z,[["__scopeId","data-v-6e8accf0"]]),oe={class:"options-wrapper"},te=["onClick"],se=w({__name:"ADropdown",props:{options:null,value:null},emits:["select"],setup(s,{emit:i}){const c=$(null),e=m=>{var u;i("select",m),(u=c.value)==null||u.blur()};return(m,u)=>(o(),a("div",{ref_key:"dropdown",ref:c,class:"dropdown",tabindex:"1"},[k(f(s.value)+" ",1),t("div",oe,[(o(!0),a(x,null,H(s.options,v=>(o(),a("div",{key:v.value,class:"option",onClick:p=>e(v.value)},f(v.label),9,te))),128))])],512))}});const ae=C(se,[["__scopeId","data-v-cac46a2e"]]),S=s=>(q("data-v-55f3fd4a"),s=s(),O(),s),ne={class:"hook-runner"},le={class:"title"},de={class:"section"},ie=S(()=>t("div",{class:"section-header"},"Request configuration",-1)),re=S(()=>t("div",{class:"subsection-label"},"Method",-1)),ce={class:"subsection-label"},ue=["onUpdate:modelValue"],pe=["onUpdate:modelValue"],_e={key:0,class:"subsection-label"},he={class:"property"},me=S(()=>t("div",{class:"property-label"},"Body is JSON",-1)),ve={class:"section"},fe=S(()=>t("div",{class:"section-header"},"Response",-1)),ye={key:0,class:"section"},ke={class:"no-execution-message"},be={key:1,class:"section"},ge=w({__name:"HookRunner",props:{hook:null},setup(s){const i=s,c=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],e=E({queryParams:[{name:"",value:""}],method:"GET",body:"",loading:!1,isBodyJson:!0}),m=async()=>{const p={"Content-Type":e.isBodyJson?"application/json":"text/plain"},d=await i.hook.test({method:e.method,query:e.queryParams.reduce((_,{name:l,value:h})=>(l&&h&&(_[l]=h),_),{}),body:e.body,headers:{...p}});e.response=d,d.stderr&&I.log({type:"stderr",log:d.stderr}),d.stdout&&I.log({type:"stdout",log:d.stdout})},u=()=>{e.queryParams.push({name:"",value:""})},v=p=>{e.queryParams=e.queryParams.filter((d,_)=>_!==p)};return(p,d)=>{const _=R("icon");return o(),a("div",ne,[t("div",le,[k(" Test your hook here "),e.loading?(o(),V(P,{key:0})):(o(),a("button",{key:1,class:"execution-button",onClick:m},[n(_,{path:r(j),width:"14",height:"14",fill:"#ffffff"},null,8,["path"]),k(" Run ")]))]),t("div",de,[ie,re,n(ae,{value:e.method,options:c,onSelect:d[0]||(d[0]=l=>e.method=l)},null,8,["value"]),t("div",ce,[k(" Query Params "),n(_,{class:"action-icon",path:r(z),width:"16",height:"16","fill-hover":"#777777",onClick:u},null,8,["path"])]),(o(!0),a(x,null,H(e.queryParams,(l,h)=>(o(),a("div",{key:h,class:"params-input"},[g(t("input",{"onUpdate:modelValue":b=>l.name=b,type:"text",placeholder:"name"},null,8,ue),[[T,l.name]]),g(t("input",{"onUpdate:modelValue":b=>l.value=b,type:"text",placeholder:"value"},null,8,pe),[[T,l.value]]),n(_,{class:"delete-icon",path:r(Y),"fill-hover":"#777777",onClick:b=>v(h)},null,8,["path","onClick"])]))),128)),e.method!=="GET"?(o(),a("div",_e,[k(" Request Body "),t("div",he,[g(t("input",{"onUpdate:modelValue":d[1]||(d[1]=l=>e.isBodyJson=l),class:"checkbox-input",type:"checkbox"},null,512),[[U,e.isBodyJson]]),me])])):B("",!0),e.method!=="GET"?g((o(),a("textarea",{key:1,"onUpdate:modelValue":d[2]||(d[2]=l=>e.body=l)},null,512)),[[T,e.body]]):B("",!0)]),t("div",ve,[fe,e.loading?(o(),a("div",ye,[t("div",ke,[n(P)])])):e.response?(o(),a("div",be,[t("pre",null,"Status: "+f(e.response.status),1),(o(!0),a(x,null,H(e.response.headers,(l,h)=>(o(),a("pre",{key:h},f(h)+": "+f(l),1))),128)),t("pre",null,f(e.response.body),1)])):B("",!0)])])}}});const xe=C(ge,[["__scopeId","data-v-55f3fd4a"]]),we={class:"page"},Ce={key:0,class:"loading"},Se=w({__name:"HookEditor",setup(s){const i=J(),{loading:c,result:e}=L(async()=>await Q.get(i.params.hookPath)),m=async u=>{e.value&&(e.value.path=u,await e.value.save())};return(u,v)=>{var p;return o(),a(x,null,[t("div",we,[r(c)||!r(e)?(o(),a("div",Ce,[n(P)])):(o(),V(N,{key:1,class:"editor"},{left:y(()=>[n(F,{link:"/_editor/hooks"})]),right:y(()=>[n(W,{path:"hooks"}),n(K,{model:r(e)},null,8,["model"])]),default:y(()=>[n(D,{title:"Debug"},{default:y(()=>[n(xe,{hook:r(e)},null,8,["hook"])]),_:1}),n(D,{title:"Settings"},{default:y(()=>[n(ee,{hook:r(e),onUpdatePath:m},null,8,["hook"])]),_:1})]),_:1})),n(M,{runtime:"hooks"})]),n(G,{"has-changes":(p=r(e))==null?void 0:p.hasChanges()},null,8,["has-changes"])],64)}}});const Qe=C(Se,[["__scopeId","data-v-c357ba21"]]);export{Qe as default};
//# sourceMappingURL=HookEditor.8cf18647.js.map
