import{d as U,u as le,J as O,G as ie,b as y,c as _,y as c,U as z,X as A,v as e,B as T,L,e as E,ad as ue,R as W,N as Y,O as q,p as j,r as k,Q as G,ae as ce,o as Q,W as X,I as P,E as M,z as de,F as pe,K as me,af as ve,H as he,a as fe,q as ge,ag as ye}from"./registerWidgets.04dc761e.js";import{p as _e,o as H,q as N,r as V,t as we}from"./icons.d4e872e2.js";import{a as K}from"./asyncComputed.e0f43af3.js";import{F as ke}from"./forms.cc593bbd.js";import{D as be}from"./dashes.4aa38f44.js";import{H as Ce}from"./hooks.d59fb935.js";import{J}from"./jobs.098bcb10.js";import{W as Se}from"./workspaces.741b6616.js";import{l,u as $e}from"./log.0073b587.js";import{L as xe}from"./login.29b4c1f1.js";import{c as Ee}from"./sentry.2692e5c6.js";const Z=s=>(Y("data-v-0dfc8705"),s=s(),q(),s),Ie={class:"runtime-settings"},Pe={key:0,class:"field"},Le=Z(()=>e("div",{class:"label"},"Path",-1)),Re={class:"field"},Me=Z(()=>e("div",{class:"label"},"Code",-1)),Te={class:"input-row"},Ue={key:1,class:"root-path loading"},De={class:"path-feedback"},Be={key:1,class:"error"},Fe=U({__name:"RuntimeCommonSettings",props:{runtime:null},setup(s){const r=s,o=le({pathError:null}),{result:n}=K(()=>Se.get()),h=()=>{!n.value||!r.runtime.file||n.value.openFile(r.runtime.file)},w=O(()=>{var a;return(a=r.runtime.file)!=null&&a.endsWith(".py")?null:"It should be a .py file"}),f=()=>{!n.value||!C.value||n.value.openFile(".")},m=ie(),{result:C}=K(()=>fetch("/_editor/api/workspace/root-path").then(a=>a.text()));return r.runtime.onUpdate(a=>{if(r.runtime instanceof J||!a||!("path"in a)||!(a!=null&&a.path))return;const d=[{runtime:ke,basePath:"form"},{runtime:Ce,basePath:"hook"},{runtime:be,basePath:"dash"}].find(b=>r.runtime instanceof b.runtime);if(!d)throw new Error(`Unknown runtime type ${r.runtime}`);m.push({path:`/_editor/${d.basePath}/${encodeURIComponent(a.path)}`})}),(a,g)=>(y(),_("div",Ie,[s.runtime instanceof c(J)?T("",!0):(y(),_("div",Pe,[Le,z(e("input",{"onUpdate:modelValue":g[0]||(g[0]=d=>s.runtime.path=d),class:"path-input",type:"text"},null,512),[[A,s.runtime.path]])])),e("div",Re,[Me,e("div",Te,[c(C)?(y(),_("button",{key:0,class:"root-path",onClick:g[1]||(g[1]=d=>f())},L(c(C)),1)):(y(),_("span",Ue," Loading... ")),z(e("input",{"onUpdate:modelValue":g[2]||(g[2]=d=>s.runtime.file=d),type:"text"},null,512),[[A,s.runtime.file]]),e("button",{class:"open-file-icon",onClick:g[3]||(g[3]=d=>h())},[E(ue,{path:c(_e)},null,8,["path"]),W(" Open in editor ")])]),e("div",De,L(c(w)),1)]),o.pathError?(y(),_("div",Be,L(o.pathError),1)):T("",!0)]))}});const ct=j(Fe,[["__scopeId","data-v-0dfc8705"]]);class ze{static async*sendMessage(r,o){var w;const h=(w=(await fetch("/_editor/api/ai/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:r,runtime:o})})).body)==null?void 0:w.getReader();if(!h)throw new Error("No response body");for(;;){const f=await h.read();if(f.done)break;yield new TextDecoder().decode(f.value)}}}const Ae=s=>(Y("data-v-3bda3e11"),s=s(),q(),s),He={class:"smart-console"},Ne={class:"header"},Ve={class:"left"},Ke={class:"right"},Je={class:"cli"},Oe={class:"left"},We=Ae(()=>e("div",{class:"entry ai-output"}," Hello there! I'm both an output console and AI assistant. You can ask me anything. ",-1)),Ye={key:1,class:"local-entry"},qe={class:"input"},je=["pointer-events","onKeydown"],Ge={class:"right"},Qe=U({__name:"SmartConsole",props:{inputEnabled:{type:Boolean},dashPlayerState:null,formCode:null,runtime:null},emits:["clear-terminal","restart","enter"],setup(s,{emit:r}){const o=s,n=k(""),h=k(null),w=he(),f=k(!1),m=k(!1),C=()=>{l.clear(),r("restart")},a=()=>{b.value=b.value==="assistant"?"debugger":"assistant"};function g(t){switch(t.type){case"ai-input":return{role:"user",content:t.log};case"ai-output":return{role:"assistant",content:t.log};case"stderr":case"stdout":return{role:"user",content:t.log};case"restart":return{role:"user",content:"-- new session --"};default:throw new Error(`Unknown log type: ${t.type}`)}}G(w,()=>{l.clear(),r("clear-terminal")});const d=k(null),b=k("assistant"),ee=async t=>{var i;if(t.preventDefault(),n.value=((i=d.value)==null?void 0:i.innerText)||"",t.shiftKey){document.execCommand("insertLineBreak");return}d.value&&(d.value.innerText=""),b.value==="assistant"?await te():await se()},te=async()=>{var i;if(r("enter",n.value),l.log({type:"ai-input",log:n.value}),n.value="",!m.value){l.log({type:"stderr",log:"Please login to use the AI assistant."});return}f.value=!0;const t={role:"user",content:(i=o.formCode)!=null?i:""};try{const v=$e();let u="";const $=ze.sendMessage([t,...l.logs.map(x=>g(x)),{role:"user",content:n.value}],o.runtime);for await(const x of $)u+=x,l.log({type:"ai-output",log:u},v)}catch(v){l.log({type:"ai-output",log:"Sorry, I don't know how to answer that."}),console.error(v),Ee(v)}finally{f.value=!1}},se=async()=>{n.value&&(l.log({type:"eval-input",log:`>>> ${n.value}`}),oe(n.value),n.value="")},oe=t=>{var i,v,u;(u=(i=o.dashPlayerState)==null?void 0:i.broker)==null||u.send({type:"eval",expression:t,state:(v=o.dashPlayerState)==null?void 0:v.apiPageState})};(()=>{var t,i,v,u,$,x;(t=o.dashPlayerState)==null||t.on("eval-return",p=>{p.repr&&l.log({type:"eval-output",log:p.repr})}),(i=o.dashPlayerState)==null||i.on("eval-error",p=>{l.log({type:"eval-output",log:p.repr})}),(v=o.dashPlayerState)==null||v.on("stderr",p=>{l.log({type:"stderr",log:p.log})}),(u=o.dashPlayerState)==null||u.on("stdout",p=>{l.log({type:"stdout",log:p.log})}),($=o.dashPlayerState)==null||$.on("widgets-computed",p=>{var I;(I=p.errors)!=null&&I.general&&l.log({type:"stderr",log:p.errors.general.repr})}),(x=o.dashPlayerState)==null||x.on("program-start-failed",p=>{var I;l.log({type:"stderr",log:(I=p.error)!=null?I:""})})})();const ne=()=>{l.clear()};l.listen(async t=>{t.type!=="restart"&&(S.value=!0,await ce(),h.value&&(h.value.scrollTop=h.value.scrollHeight))});const S=k(!1),D=k(400),ae=O(()=>({height:`${D.value}px`})),R=k(!1),re=()=>R.value=!0,B=t=>{!R.value||(D.value=document.body.clientHeight-t.clientY)},F=()=>R.value=!1;return Q(()=>{document.addEventListener("mousemove",B),document.addEventListener("mouseup",F),xe.get().then(t=>m.value=!!t)}),X(()=>{document.removeEventListener("mousemove",B),document.removeEventListener("mouseup",F)}),(t,i)=>{const v=fe("Markdown");return y(),_("div",He,[e("div",Ne,[e("div",Ve,[E(P,{path:b.value==="assistant"?c(H):c(N)},null,8,["path"]),W(" Smart Console ")]),e("div",Ke,[e("div",{class:"changes-container"},[e("button",{class:"header-button",onClick:C},"Restart")]),e("div",{class:"toggle-button",onClick:i[0]||(i[0]=u=>S.value=!S.value)},[E(P,{class:M(["icon",{open:S.value}]),path:c(V),fill:"#fff"},null,8,["class","path"])])])]),S.value?(y(),_("div",{key:0,class:"terminal",style:de(c(ae))},[e("div",{class:"resize-handler",onMousedown:re},null,32),e("div",Je,[e("div",Oe,[e("div",{ref_key:"entriesContainer",ref:h,class:"entries"},[We,(y(!0),_(pe,null,me(c(l).logs,(u,$)=>(y(),_("div",{key:$,class:M([u.type,"entry"])},[u.type==="ai-output"?(y(),ge(v,{key:0,source:u.log},null,8,["source"])):(y(),_("div",Ye,L(u.type==="restart"?"-- restarted --":u.log),1))],2))),128))],512),e("div",qe,[E(P,{class:M(["icon",{open:S.value}]),path:c(V)},null,8,["class","path"]),e("div",{ref_key:"inputRef",ref:d,class:"input-text",contenteditable:"","pointer-events":f.value?"none":"auto",placeholder:"Ask AI anything",onKeydown:ve(ee,["enter"])},null,40,je)])]),e("div",Ge,[e("div",{class:"icons",onClick:ne},[E(P,{class:"icon",path:c(we)},null,8,["path"])]),e("div",null,[E(P,{class:"icon clickable",path:b.value==="assistant"?c(H):c(N),onClick:i[1]||(i[1]=u=>a())},null,8,["path"])])])])],4)):T("",!0)])}}});const dt=j(Qe,[["__scopeId","data-v-3bda3e11"]]),pt=U({__name:"UnsavedChangesHandler",props:{hasChanges:{type:Boolean}},setup(s){const r=s,o="You have unsaved changes. Are you sure you want to leave?",n=m=>(m=m||window.event,m&&(m.returnValue=o),o),h=()=>{window.addEventListener("beforeunload",n)};ye((m,C,a)=>{if(!r.hasChanges)return a();confirm(o)?a():a(!1)});const w=()=>window.removeEventListener("beforeunload",n),f=m=>m?h():w();return G(()=>r.hasChanges,f),Q(()=>f(r.hasChanges)),X(w),()=>{}}});export{ct as R,dt as S,pt as _};
//# sourceMappingURL=UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.9b504e6b.js.map
