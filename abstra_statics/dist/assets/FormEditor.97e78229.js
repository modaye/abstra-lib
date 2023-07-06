import{d as q,r as S,v as A,b as n,c as d,x as a,F as x,L as T,N as C,V as P,a0 as B,e as l,O as j,Q as G,q as N,K as J,z as e,t as w,w as v,D as O,H as Q,J as X,a as Y,S as L,G as Z}from"./registerWidgets.7452ec0b.js";import{L as ee}from"./CircularLoading.6725993e.js";import{E as te}from"./Error.2096a0e8.js";import{R as ae,F as se}from"./broker.84676ea2.js";import{R as oe,_ as re,S as le}from"./UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.3ff9e8ba.js";import{k as ne,j as ie}from"./icons.97625e56.js";import{T as ce,B as ue,a as M}from"./BackButton.72f9b6e0.js";import{l as I}from"./log.ccaee3bb.js";import{a as V}from"./asyncComputed.23d75013.js";import{F as me}from"./forms.91463966.js";import{W as pe}from"./workspaces.4c177a35.js";import"./passwordlessManager.abb9ad15.js";import"./Passwordless.15d9e658.js";import"./WidgetsFrame.d73ba8f1.js";import"./index.10e7a483.js";import"./Modal.f31beab2.js";import"./dashes.7c8e2bf8.js";import"./utils.95f0e9e8.js";import"./pubsub.a0411919.js";import"./runnerData.d532dcaa.js";import"./hooks.911e43af.js";import"./jobs.cb7d0efd.js";import"./login.29b4c1f1.js";import"./sentry.2692e5c6.js";const de="forms_workspace_id_path_key",$=u=>(j("data-v-7c6d2ec1"),u=u(),G(),u),fe={class:"form-settings"},ve={class:"content"},he={class:"subsection-label"},_e={class:"property-label"},ye=["value","placeholder","onChange"],ge={class:"content"},be={class:"property"},ke=$(()=>a("div",{class:"property-label"},"Start smart form automatically",-1)),we={class:"property"},Se=$(()=>a("div",{class:"property-label"}," Allow the user to restart the smart form after it is over ",-1)),xe=q({__name:"FormSettings",props:{form:null},setup(u){const s=S(u.form),m=[{label:"Welcome Screen",props:[{label:"Title",fallbackKey:"title",valueKey:"welcomeTitle"},{label:"Subtitle",valueKey:"startMessage"},{label:"Start button text",valueKey:"startButtonText"}]},{label:"Ending Screen",props:[{label:"Title",valueKey:"endMessage"},{label:"Restart button text",valueKey:"restartButtonText"}]},{label:"Alert Messages",props:[{label:"Error message",valueKey:"errorMessage"}]}],_=A({pathError:null,sectionsShown:[!0,!1,!1]}),b=f=>{f.detail.includes(de)&&(_.pathError=o)},o="This path is already being used by another form or dash on your workspace";return addEventListener("hasura-error",b),(f,c)=>(n(),d("div",fe,[a("div",ve,[(n(),d(x,null,T(m,r=>a("div",{key:r.label,class:"subsection"},[a("div",he,C(r.label),1),(n(!0),d(x,null,T(r.props,i=>{var p;return n(),d("div",{key:i.label,class:"property column"},[a("div",_e,C(i.label),1),a("input",{class:"property-input",type:"text",value:s.value[i.valueKey],placeholder:(p=i.fallbackKey?s.value[i.fallbackKey]:null)!=null?p:"Enter message",onChange:y=>s.value[i.valueKey]=y.target.value},null,40,ye)])}),128))])),64))]),a("div",ge,[a("div",be,[P(a("input",{"onUpdate:modelValue":c[0]||(c[0]=r=>s.value.autoStart=r),class:"checkbox-input",type:"checkbox"},null,512),[[B,s.value.autoStart]]),ke]),a("div",we,[P(a("input",{"onUpdate:modelValue":c[1]||(c[1]=r=>s.value.allowRestart=r),class:"checkbox-input",type:"checkbox"},null,512),[[B,s.value.allowRestart]]),Se])]),l(oe,{runtime:s.value},null,8,["runtime"])]))}});const Ce=N(xe,[["__scopeId","data-v-7c6d2ec1"]]),Ee={class:"page"},Fe={key:1,class:"error"},Re=q({__name:"FormEditor",setup(u){const h=Q(),s=X(),m=A({fullscreen:!1,rightPanelCollapsed:!1,hasChanges:!1,started:!1});addEventListener("keydown",t=>{(t.ctrlKey||t.metaKey)&&t.key==="s"&&(t.preventDefault(),y())});const _=S(null),{loading:b,result:o,error:f,refetch:c}=V(async()=>{const t=await me.get(s.params.formPath);return k(),t}),{result:r}=V(()=>pe.get()),i=()=>{o.value&&h.push(`/_editor/form/${encodeURIComponent(o.value.path)}/preview`)},p=S(!1);async function y(){var t;p.value=!0;try{await((t=o.value)==null?void 0:t.save())}finally{p.value=!1}}const D=J(()=>ae.create({isLocal:!1,formPath:s.params.formPath,isPreview:!0})),H=()=>{I.clear()},k=async()=>{var t;if(!m.started){(t=_.value)==null||t.run();return}I.log({type:"restart"}),m.started=!1},U=({path:t,type:g})=>{g==="dash"?h.push({name:"dashEditor",params:{dashPath:t},query:s.query}):(h.push({name:"editor",params:{formPath:t},query:s.query}),c())},W=()=>{m.started=!0},z=()=>{m.started=!1};return(t,g)=>{var F;const E=Y("icon");return n(),d(x,null,[a("div",Ee,[e(b)||!e(o)||!e(r)?(n(),w(ee,{key:0})):e(f)?(n(),d("div",Fe,[l(te,{error:e(f),onReload:e(c)},null,8,["error","onReload"])])):(n(),w(ce,{key:2},{left:v(()=>[l(ue,{link:"/_editor/forms"})]),right:v(()=>{var R,K;return[a("button",{class:"preview-button",onClick:i},[l(E,{class:"icon",path:e(ne),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),L(" Preview ")]),a("button",{class:Z(["save-button",{changes:(R=e(o))==null?void 0:R.hasChanges()}]),onClick:g[0]||(g[0]=Ke=>y())},[l(E,{class:"icon",path:e(ie),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),L(" "+C(p.value?"Saving ...":(K=e(o))!=null&&K.hasChanges()?"Save":"Saved"),1)],2)]}),default:v(()=>[l(M,{title:"Preview"},{default:v(()=>[l(se,{ref_key:"runner",ref:_,form:e(o).makeRunnerData(e(r)),params:e(s).query,"is-preview":!0,"enable-auto-focus":!1,broker:e(D),style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:U,onLogout:k,onExit:z,onStart:W},null,8,["form","params","broker"])]),_:1}),l(M,{title:"Settings"},{default:v(()=>[l(Ce,{form:e(o)},null,8,["form"])]),_:1})]),_:1})),e(o)?(n(),w(le,{key:3,runtime:"forms",onRestart:k,onClearTerminal:H})):O("",!0)]),l(re,{"has-changes":(F=e(o))==null?void 0:F.hasChanges()},null,8,["has-changes"])],64)}}});const et=N(Re,[["__scopeId","data-v-24489f23"]]);export{et as default};
//# sourceMappingURL=FormEditor.97e78229.js.map