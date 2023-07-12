import{d as T,v as le,K as O,H as ie,b as y,c as _,z as c,V as F,W as V,x as e,D,N as L,e as I,ab as ue,S as W,O as Y,Q as q,q as j,r as k,R as G,X as ce,o as Q,U as X,I as E,G as M,A as de,F as pe,L as ve,a2 as me,J as he,a as fe,t as ge,ac as ye}from"./registerWidgets.4a0d8d45.js";import{p as _e,q as z,r as H,t as N,v as we}from"./icons.e3de8035.js";import{a as K}from"./asyncComputed.52d81103.js";import{F as ke}from"./forms.8e1f6bae.js";import{D as be}from"./dashes.2c353f10.js";import{H as Ce}from"./hooks.c2425b80.js";import{J}from"./jobs.a513b685.js";import{W as Se}from"./workspaces.741b6616.js";import{l,u as $e}from"./log.f9199108.js";import{L as xe}from"./login.29b4c1f1.js";import{c as Ie}from"./sentry.2692e5c6.js";const Z=s=>(Y("data-v-0dfc8705"),s=s(),q(),s),Pe={class:"runtime-settings"},Ee={key:0,class:"field"},Le=Z(()=>e("div",{class:"label"},"Path",-1)),Re={class:"field"},Me=Z(()=>e("div",{class:"label"},"Code",-1)),De={class:"input-row"},Te={key:1,class:"root-path loading"},Ue={class:"path-feedback"},Ae={key:1,class:"error"},Be=T({__name:"RuntimeCommonSettings",props:{runtime:null},setup(s){const r=s,o=le({pathError:null}),{result:n}=K(()=>Se.get()),h=()=>{!n.value||!r.runtime.file||n.value.openFile(r.runtime.file)},w=O(()=>{var a;return(a=r.runtime.file)!=null&&a.endsWith(".py")?null:"It should be a .py file"}),f=()=>{!n.value||!C.value||n.value.openFile(".")},v=ie(),{result:C}=K(()=>fetch("/_editor/api/workspace/root-path").then(a=>a.text()));return r.runtime.onUpdate(a=>{if(r.runtime instanceof J||!a||!("path"in a)||!(a!=null&&a.path))return;const d=[{runtime:ke,basePath:"form"},{runtime:Ce,basePath:"hook"},{runtime:be,basePath:"dash"}].find(b=>r.runtime instanceof b.runtime);if(!d)throw new Error(`Unknown runtime type ${r.runtime}`);v.push({path:`/_editor/${d.basePath}/${encodeURIComponent(a.path)}`})}),(a,g)=>(y(),_("div",Pe,[s.runtime instanceof c(J)?D("",!0):(y(),_("div",Ee,[Le,F(e("input",{"onUpdate:modelValue":g[0]||(g[0]=d=>s.runtime.path=d),class:"path-input",type:"text"},null,512),[[V,s.runtime.path]])])),e("div",Re,[Me,e("div",De,[c(C)?(y(),_("button",{key:0,class:"root-path",onClick:g[1]||(g[1]=d=>f())},L(c(C)),1)):(y(),_("span",Te," Loading... ")),F(e("input",{"onUpdate:modelValue":g[2]||(g[2]=d=>s.runtime.file=d),type:"text"},null,512),[[V,s.runtime.file]]),e("button",{class:"open-file-icon",onClick:g[3]||(g[3]=d=>h())},[I(ue,{path:c(_e)},null,8,["path"]),W(" Open in editor ")])]),e("div",Ue,L(c(w)),1)]),o.pathError?(y(),_("div",Ae,L(o.pathError),1)):D("",!0)]))}});const ct=j(Be,[["__scopeId","data-v-0dfc8705"]]);class Fe{static async*sendMessage(r,o){var w;const h=(w=(await fetch("/_editor/api/ai/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:r,runtime:o})})).body)==null?void 0:w.getReader();if(!h)throw new Error("No response body");for(;;){const f=await h.read();if(f.done)break;yield new TextDecoder().decode(f.value)}}}const Ve=s=>(Y("data-v-3bda3e11"),s=s(),q(),s),ze={class:"smart-console"},He={class:"header"},Ne={class:"left"},Ke={class:"right"},Je={class:"cli"},Oe={class:"left"},We=Ve(()=>e("div",{class:"entry ai-output"}," Hello there! I'm both an output console and AI assistant. You can ask me anything. ",-1)),Ye={key:1,class:"local-entry"},qe={class:"input"},je=["pointer-events","onKeydown"],Ge={class:"right"},Qe=T({__name:"SmartConsole",props:{inputEnabled:{type:Boolean},dashPlayerState:null,formCode:null,runtime:null},emits:["clear-terminal","restart","enter"],setup(s,{emit:r}){const o=s,n=k(""),h=k(null),w=he(),f=k(!1),v=k(!1),C=()=>{l.clear(),r("restart")},a=()=>{b.value=b.value==="assistant"?"debugger":"assistant"};function g(t){switch(t.type){case"ai-input":return{role:"user",content:t.log};case"ai-output":return{role:"assistant",content:t.log};case"stderr":case"stdout":return{role:"user",content:t.log};case"restart":return{role:"user",content:"-- new session --"};default:throw new Error(`Unknown log type: ${t.type}`)}}G(w,()=>{l.clear(),r("clear-terminal")});const d=k(null),b=k("assistant"),ee=async t=>{var i;if(t.preventDefault(),n.value=((i=d.value)==null?void 0:i.innerText)||"",t.shiftKey){document.execCommand("insertLineBreak");return}d.value&&(d.value.innerText=""),b.value==="assistant"?await te():await se()},te=async()=>{var i;if(r("enter",n.value),l.log({type:"ai-input",log:n.value}),n.value="",!v.value){l.log({type:"stderr",log:"Please login to use the AI assistant."});return}f.value=!0;const t={role:"user",content:(i=o.formCode)!=null?i:""};try{const m=$e();let u="";const $=Fe.sendMessage([t,...l.logs.map(x=>g(x)),{role:"user",content:n.value}],o.runtime);for await(const x of $)u+=x,l.log({type:"ai-output",log:u},m)}catch(m){l.log({type:"ai-output",log:"Sorry, I don't know how to answer that."}),console.error(m),Ie(m)}finally{f.value=!1}},se=async()=>{n.value&&(l.log({type:"eval-input",log:`>>> ${n.value}`}),oe(n.value),n.value="")},oe=t=>{var i,m,u;(u=(i=o.dashPlayerState)==null?void 0:i.broker)==null||u.send({type:"eval",expression:t,state:(m=o.dashPlayerState)==null?void 0:m.apiPageState})};(()=>{var t,i,m,u,$,x;(t=o.dashPlayerState)==null||t.on("eval-return",p=>{p.repr&&l.log({type:"eval-output",log:p.repr})}),(i=o.dashPlayerState)==null||i.on("eval-error",p=>{l.log({type:"eval-output",log:p.repr})}),(m=o.dashPlayerState)==null||m.on("stderr",p=>{l.log({type:"stderr",log:p.log})}),(u=o.dashPlayerState)==null||u.on("stdout",p=>{l.log({type:"stdout",log:p.log})}),($=o.dashPlayerState)==null||$.on("widgets-computed",p=>{var P;(P=p.errors)!=null&&P.general&&l.log({type:"stderr",log:p.errors.general.repr})}),(x=o.dashPlayerState)==null||x.on("program-start-failed",p=>{var P;l.log({type:"stderr",log:(P=p.error)!=null?P:""})})})();const ne=()=>{l.clear()};l.listen(async t=>{t.type!=="restart"&&(S.value=!0,await ce(),h.value&&(h.value.scrollTop=h.value.scrollHeight))});const S=k(!1),U=k(400),ae=O(()=>({height:`${U.value}px`})),R=k(!1),re=()=>R.value=!0,A=t=>{!R.value||(U.value=document.body.clientHeight-t.clientY)},B=()=>R.value=!1;return Q(()=>{document.addEventListener("mousemove",A),document.addEventListener("mouseup",B),xe.get().then(t=>v.value=!!t)}),X(()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",B)}),(t,i)=>{const m=fe("Markdown");return y(),_("div",ze,[e("div",He,[e("div",Ne,[I(E,{path:b.value==="assistant"?c(z):c(H)},null,8,["path"]),W(" Smart Console ")]),e("div",Ke,[e("div",{class:"changes-container"},[e("button",{class:"header-button",onClick:C},"Restart")]),e("div",{class:"toggle-button",onClick:i[0]||(i[0]=u=>S.value=!S.value)},[I(E,{class:M(["icon",{open:S.value}]),path:c(N),fill:"#fff"},null,8,["class","path"])])])]),S.value?(y(),_("div",{key:0,class:"terminal",style:de(c(ae))},[e("div",{class:"resize-handler",onMousedown:re},null,32),e("div",Je,[e("div",Oe,[e("div",{ref_key:"entriesContainer",ref:h,class:"entries"},[We,(y(!0),_(pe,null,ve(c(l).logs,(u,$)=>(y(),_("div",{key:$,class:M([u.type,"entry"])},[u.type==="ai-output"?(y(),ge(m,{key:0,source:u.log},null,8,["source"])):(y(),_("div",Ye,L(u.type==="restart"?"-- restarted --":u.log),1))],2))),128))],512),e("div",qe,[I(E,{class:M(["icon",{open:S.value}]),path:c(N)},null,8,["class","path"]),e("div",{ref_key:"inputRef",ref:d,class:"input-text",contenteditable:"","pointer-events":f.value?"none":"auto",placeholder:"Ask AI anything",onKeydown:me(ee,["enter"])},null,40,je)])]),e("div",Ge,[e("div",{class:"icons",onClick:ne},[I(E,{class:"icon",path:c(we)},null,8,["path"])]),e("div",null,[I(E,{class:"icon clickable",path:b.value==="assistant"?c(z):c(H),onClick:i[1]||(i[1]=u=>a())},null,8,["path"])])])])],4)):D("",!0)])}}});const dt=j(Qe,[["__scopeId","data-v-3bda3e11"]]),pt=T({__name:"UnsavedChangesHandler",props:{hasChanges:{type:Boolean}},setup(s){const r=s,o="You have unsaved changes. Are you sure you want to leave?",n=v=>(v=v||window.event,v&&(v.returnValue=o),o),h=()=>{window.addEventListener("beforeunload",n)};ye((v,C,a)=>{if(!r.hasChanges)return a();confirm(o)?a():a(!1)});const w=()=>window.removeEventListener("beforeunload",n),f=v=>v?h():w();return G(()=>r.hasChanges,f),Q(()=>f(r.hasChanges)),X(w),()=>{}}});export{ct as R,dt as S,pt as _};
//# sourceMappingURL=UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.bfaf3258.js.map
