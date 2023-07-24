import{d as L,r as S,u as M,b as i,c as m,v as r,F as w,K as E,L as F,U as K,a3 as B,e as o,N as H,O as U,p as q,J as W,y as t,q as k,w as d,B as A,G,H as J}from"./registerWidgets.04dc761e.js";import{L as O}from"./CircularLoading.78e37a70.js";import{E as j}from"./Error.75c6a6cf.js";import{R as z,F as Q}from"./broker.4829432d.js";import{R as X,_ as Y,S as Z}from"./UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.9b504e6b.js";import{T as ee,B as te,a as R}from"./BackButton.846cedef.js";import{l as P}from"./log.0073b587.js";import{a as T}from"./asyncComputed.e0f43af3.js";import{F as ae}from"./forms.cc593bbd.js";import{W as re}from"./workspaces.741b6616.js";import{S as oe}from"./SaveButton.81b0cbf4.js";import{D as se}from"./DocsButton.5c9fcb4f.js";import{P as le}from"./PreviewButton.ec857376.js";import"./passwordlessManager.271a8058.js";import"./icons.d4e872e2.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.c4424b2b.js";import"./Passwordless.0107ba48.js";import"./executeJs.740555ed.js";import"./PlayerNavbar.c204244e.js";import"./index.6f0d5525.js";import"./WidgetsFrame.e00c0ab1.js";import"./Modal.02341c49.js";import"./dashes.4aa38f44.js";import"./activeRecord.57c6bf02.js";import"./runnerData.91239e67.js";import"./hooks.d59fb935.js";import"./jobs.098bcb10.js";import"./login.29b4c1f1.js";import"./sentry.2692e5c6.js";const ne="forms_workspace_id_path_key",D=u=>(H("data-v-6ccbe7b5"),u=u(),U(),u),ie={class:"form-settings"},ce={class:"content"},ue={class:"subsection-label"},me={class:"property-label"},pe=["value","placeholder","onChange"],de={class:"content"},fe={class:"property"},_e=D(()=>r("div",{class:"property-label"},"Start smart form automatically",-1)),ve={class:"property"},he=D(()=>r("div",{class:"property-label"}," Allow the user to restart the smart form after it is over ",-1)),ye=L({__name:"FormSettings",props:{form:null},setup(u){const a=S(u.form),f=[{label:"General",props:[{label:"Form name",valueKey:"title"}]},{label:"Welcome Screen",props:[{label:"Title",fallbackKey:"title",valueKey:"welcomeTitle"},{label:"Subtitle",valueKey:"startMessage"},{label:"Start button text",valueKey:"startButtonText"}]},{label:"Ending Screen",props:[{label:"Title",valueKey:"endMessage"},{label:"Restart button text",valueKey:"restartButtonText"}]},{label:"Alert Messages",props:[{label:"Error message",valueKey:"errorMessage"}]}],_=M({pathError:null,sectionsShown:[!0,!1,!1]}),y=p=>{p.detail.includes(ne)&&(_.pathError=s)},s="This path is already being used by another form or dash on your workspace";return addEventListener("hasura-error",y),(p,c)=>(i(),m("div",ie,[r("div",ce,[(i(),m(w,null,E(f,l=>r("div",{key:l.label,class:"subsection"},[r("div",ue,F(l.label),1),(i(!0),m(w,null,E(l.props,n=>{var v;return i(),m("div",{key:n.label,class:"property column"},[r("div",me,F(n.label),1),r("input",{class:"property-input",type:"text",value:a.value[n.valueKey],placeholder:(v=n.fallbackKey?a.value[n.fallbackKey]:null)!=null?v:"Enter message",onChange:b=>a.value[n.valueKey]=b.target.value},null,40,pe)])}),128))])),64))]),r("div",de,[r("div",fe,[K(r("input",{"onUpdate:modelValue":c[0]||(c[0]=l=>a.value.autoStart=l),class:"checkbox-input",type:"checkbox"},null,512),[[B,a.value.autoStart]]),_e]),r("div",ve,[K(r("input",{"onUpdate:modelValue":c[1]||(c[1]=l=>a.value.allowRestart=l),class:"checkbox-input",type:"checkbox"},null,512),[[B,a.value.allowRestart]]),he])]),o(X,{runtime:a.value},null,8,["runtime"])]))}});const be=q(ye,[["__scopeId","data-v-6ccbe7b5"]]),ge={class:"page"},ke={key:1,class:"error"},Se=L({__name:"FormEditor",setup(u){const h=G(),a=J(),f=M({fullscreen:!1,rightPanelCollapsed:!1,hasChanges:!1,started:!1});addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key==="s"&&(e.preventDefault(),v())});const _=S(null),{loading:y,result:s,error:p,refetch:c}=T(async()=>{const e=await ae.get(a.params.formPath);return g(),e}),{result:l}=T(()=>re.get()),n=S(!1);async function v(){var e;n.value=!0;try{await((e=s.value)==null?void 0:e.save())}finally{n.value=!1}}const b=W(()=>z.create({isLocal:!1,formPath:a.params.formPath,isPreview:!0})),I=()=>{P.clear()},g=async()=>{var e;return P.log({type:"restart"}),(e=_.value)==null?void 0:e.run()},N=({path:e,type:x})=>{x==="dash"?h.push({name:"dashEditor",params:{dashPath:e},query:a.query}):(h.push({name:"editor",params:{formPath:e},query:a.query}),c())},V=()=>{f.started=!0},$=()=>{f.started=!1};return(e,x)=>{var C;return i(),m(w,null,[r("div",ge,[t(y)||!t(s)||!t(l)?(i(),k(O,{key:0})):t(p)?(i(),m("div",ke,[o(j,{error:t(p),onReload:t(c)},null,8,["error","onReload"])])):(i(),k(ee,{key:2},{left:d(()=>[o(te,{link:"/_editor/forms"})]),right:d(()=>[o(se),o(le,{model:t(s)},null,8,["model"]),o(oe,{model:t(s)},null,8,["model"])]),default:d(()=>[o(R,{title:"Preview"},{default:d(()=>[o(Q,{ref_key:"runner",ref:_,form:t(s).makeRunnerData(t(l)),params:t(a).query,"is-preview":!0,"enable-auto-focus":!1,broker:t(b),style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:N,onLogout:g,onExit:$,onStart:V},null,8,["form","params","broker"])]),_:1}),o(R,{title:"Settings"},{default:d(()=>[o(be,{form:t(s)},null,8,["form"])]),_:1})]),_:1})),t(s)?(i(),k(Z,{key:3,runtime:"forms",onRestart:g,onClearTerminal:I})):A("",!0)]),o(Y,{"has-changes":(C=t(s))==null?void 0:C.hasChanges()},null,8,["has-changes"])],64)}}});const Ye=q(Se,[["__scopeId","data-v-b68827d7"]]);export{Ye as default};
//# sourceMappingURL=FormEditor.4d33bafa.js.map
