var le=Object.defineProperty;var ie=(s,e,t)=>e in s?le(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var L=(s,e,t)=>(ie(s,typeof e!="symbol"?e+"":e,t),t);import{d as T,v as K,K as q,H as ce,b as d,c as h,z as u,W as F,Z as P,x as n,D as M,N as I,e as C,ad as ue,U as J,O as W,Q as Y,q as j,r as _,a2 as G,ae as de,o as Q,Y as Z,I as S,G as R,A as pe,F as ve,L as he,af as fe,J as me,a as ge,t as _e,ag as ye,ah as be}from"./registerWidgets.92ed860b.js";import{p as we,n as z,o as H,q as N,r as ke}from"./icons.b8b5d1f6.js";import{a as V}from"./asyncComputed.13be15a6.js";import{F as Ce}from"./forms.adb3a641.js";import{D as Se}from"./dashes.a8d72ad0.js";import{H as Ie}from"./hooks.5db3d181.js";import{J as O}from"./jobs.135f0882.js";import{W as $e}from"./workspaces.b7c14823.js";import{u as D}from"./uuid.8f3ee768.js";import{L as xe}from"./login.43fe85b9.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="3bf48528-c80a-4db4-b110-c23307be132b",s._sentryDebugIdIdentifier="sentry-dbid-3bf48528-c80a-4db4-b110-c23307be132b")}catch{}})();const X=s=>(W("data-v-0dfc8705"),s=s(),Y(),s),Ee={class:"runtime-settings"},Le={key:0,class:"field"},Re=X(()=>n("div",{class:"label"},"Path",-1)),Me={class:"field"},De=X(()=>n("div",{class:"label"},"Code",-1)),Te={class:"input-row"},Ue={key:1,class:"root-path loading"},Ae={class:"path-feedback"},Be={key:1,class:"error"},Fe=T({__name:"RuntimeCommonSettings",props:{runtime:null},setup(s){const e=s,t=K({pathError:null}),{result:o}=V(()=>$e.get()),l=()=>{!o.value||!e.runtime.file||o.value.openFile(e.runtime.file)},g=q(()=>{var a;return(a=e.runtime.file)!=null&&a.endsWith(".py")?null:"It should be a .py file"}),p=()=>{!o.value||!y.value||o.value.openFile(".")},i=ce(),{result:y}=V(()=>fetch("/_editor/api/workspace/root-path").then(a=>a.text()));return e.runtime.onUpdate(a=>{if(e.runtime instanceof O||!a||!("path"in a)||!(a!=null&&a.path))return;const c=[{runtime:Ce,basePath:"form"},{runtime:Ie,basePath:"hook"},{runtime:Se,basePath:"dash"}].find(b=>e.runtime instanceof b.runtime);if(!c)throw new Error(`Unknown runtime type ${e.runtime}`);i.push({path:`/_editor/${c.basePath}/${encodeURIComponent(a.path)}`})}),(a,v)=>(d(),h("div",Ee,[s.runtime instanceof u(O)?M("",!0):(d(),h("div",Le,[Re,F(n("input",{"onUpdate:modelValue":v[0]||(v[0]=c=>s.runtime.path=c),class:"path-input",type:"text"},null,512),[[P,s.runtime.path]])])),n("div",Me,[De,n("div",Te,[u(y)?(d(),h("button",{key:0,class:"root-path",onClick:v[1]||(v[1]=c=>p())},I(u(y)),1)):(d(),h("span",Ue," Loading... ")),F(n("input",{"onUpdate:modelValue":v[2]||(v[2]=c=>s.runtime.file=c),type:"text"},null,512),[[P,s.runtime.file]]),n("button",{class:"open-file-icon",onClick:v[3]||(v[3]=c=>l())},[C(ue,{path:u(we)},null,8,["path"]),J(" Open in editor ")])]),n("div",Ae,I(u(g)),1)]),t.pathError?(d(),h("div",Be,I(t.pathError),1)):M("",!0)]))}});const ut=j(Fe,[["__scopeId","data-v-0dfc8705"]]);class ee{constructor(){L(this,"logState",K({log:[]}));L(this,"_listeners",{})}static create(){return new ee}get logs(){return this.logState.log}log(e,t){if(e.type!=="restart"&&e.log.trim()==="")return;const o=t?this.logs.find(l=>l.id===t):null;return o?Object.assign(o,e):this.logs.push({...e,id:t||D()}),this.notifyListeners(e),t}clear(){this.logState.log=[]}listen(e){const t=D();return this._listeners[t]=e,t}unlisten(e){delete this._listeners[e]}notifyListeners(e){Object.values(this._listeners).forEach(t=>t(e))}}class Pe{static async*sendMessage(e,t){var g;const l=(g=(await fetch("/_editor/api/ai/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:e,runtime:t})})).body)==null?void 0:g.getReader();if(!l)throw new Error("No response body");for(;;){const p=await l.read();if(p.done)break;yield new TextDecoder().decode(p.value)}}}const ze=s=>(W("data-v-09991f14"),s=s(),Y(),s),He={class:"smart-console"},Ne={class:"header"},Ve={class:"left"},Oe={class:"right"},Ke={class:"cli"},qe={class:"left"},Je=ze(()=>n("div",{class:"entry ai-output"}," Hello there! I'm both an output console and AI assistant. You can ask me anything. ",-1)),We={key:1,class:"local-entry"},Ye={class:"input"},je=["pointer-events","onKeydown"],Ge={class:"right"},Qe=T({__name:"SmartConsole",props:{inputEnabled:{type:Boolean},formCode:null,runtime:null,logService:null},emits:["eval-request","clear-terminal","restart","enter"],setup(s,{emit:e}){const t=s,o=_(""),l=_(null),g=me(),p=_(!1),i=_(!1),y=()=>{t.logService.clear(),e("restart")},a=()=>{b.value=b.value==="assistant"?"debugger":"assistant"};function v(r){switch(r.type){case"ai-input":return{role:"user",content:r.log};case"ai-output":return{role:"assistant",content:r.log};case"stderr":case"stdout":return{role:"user",content:r.log};case"restart":return{role:"user",content:"-- new session --"};default:throw new Error(`Unknown log type: ${r.type}`)}}G(g,()=>{t.logService.clear(),e("clear-terminal")});const c=_(null),b=_("assistant"),te=async r=>{var f;if(r.preventDefault(),o.value=((f=c.value)==null?void 0:f.innerText)||"",r.shiftKey){document.execCommand("insertLineBreak");return}c.value&&(c.value.innerText=""),b.value==="assistant"?await se():await ne()},se=async()=>{var f;if(e("enter",o.value),t.logService.log({type:"ai-input",log:o.value}),o.value="",!i.value){t.logService.log({type:"stderr",log:"Please login to use the AI assistant."});return}p.value=!0;const r={role:"user",content:(f=t.formCode)!=null?f:""};try{const k=D();let m="";const x=Pe.sendMessage([r,...t.logService.logs.map(E=>v(E)),{role:"user",content:o.value}],t.runtime);for await(const E of x)m+=E,t.logService.log({type:"ai-output",log:m},k)}catch(k){t.logService.log({type:"ai-output",log:"Sorry, I don't know how to answer that."}),console.error(k),ye(k)}finally{p.value=!1}},ne=async()=>{o.value&&(t.logService.log({type:"eval-input",log:`>>> ${o.value}`}),e("eval-request",o.value),o.value="")},oe=()=>{t.logService.clear()};t.logService.listen(async r=>{r.type!=="restart"&&(w.value=!0,await de(),l.value&&(l.value.scrollTop=l.value.scrollHeight))});const w=_(!1),U=_(400),ae=q(()=>({height:`${U.value}px`})),$=_(!1),re=()=>$.value=!0,A=r=>{!$.value||(U.value=document.body.clientHeight-r.clientY)},B=()=>$.value=!1;return Q(()=>{document.addEventListener("mousemove",A),document.addEventListener("mouseup",B),xe.get().then(r=>i.value=!!r)}),Z(()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",B)}),(r,f)=>{const k=ge("Markdown");return d(),h("div",He,[n("div",Ne,[n("div",Ve,[C(S,{path:b.value==="assistant"?u(z):u(H)},null,8,["path"]),J(" Smart Console ")]),n("div",Oe,[n("div",{class:"changes-container"},[n("button",{class:"header-button",onClick:y},"Restart")]),n("div",{class:"toggle-button",onClick:f[0]||(f[0]=m=>w.value=!w.value)},[C(S,{class:R(["icon",{open:w.value}]),path:u(N),fill:"#fff"},null,8,["class","path"])])])]),w.value?(d(),h("div",{key:0,class:"terminal",style:pe(u(ae))},[n("div",{class:"resize-handler",onMousedown:re},null,32),n("div",Ke,[n("div",qe,[n("div",{ref_key:"entriesContainer",ref:l,class:"entries"},[Je,(d(!0),h(ve,null,he(t.logService.logs,(m,x)=>(d(),h("div",{key:x,class:R([m.type,"entry"])},[m.type==="ai-output"?(d(),_e(k,{key:0,source:m.log},null,8,["source"])):(d(),h("div",We,I(m.type==="restart"?"-- restarted --":m.log),1))],2))),128))],512),n("div",Ye,[C(S,{class:R(["icon",{open:w.value}]),path:u(N)},null,8,["class","path"]),n("div",{ref_key:"inputRef",ref:c,class:"input-text",contenteditable:"","pointer-events":p.value?"none":"auto",placeholder:"Ask AI anything",onKeydown:fe(te,["enter"])},null,40,je)])]),n("div",Ge,[n("div",{class:"icons",onClick:oe},[C(S,{class:"icon",path:u(ke)},null,8,["path"])]),n("div",null,[C(S,{class:"icon clickable",path:b.value==="assistant"?u(z):u(H),onClick:f[1]||(f[1]=m=>a())},null,8,["path"])])])])],4)):M("",!0)])}}});const dt=j(Qe,[["__scopeId","data-v-09991f14"]]),Ze={class:"unsaved-changes-handler"},pt=T({__name:"UnsavedChangesHandler",props:{hasChanges:{type:Boolean}},setup(s){const e=s,t="You have unsaved changes. Are you sure you want to leave?",o=i=>(i=i||window.event,i&&(i.returnValue=t),t),l=()=>{window.addEventListener("beforeunload",o)};be((i,y,a)=>{if(!e.hasChanges)return a();confirm(t)?a():a(!1)});const g=()=>window.removeEventListener("beforeunload",o),p=i=>i?l():g();return G(()=>e.hasChanges,p),Q(()=>p(e.hasChanges)),Z(g),(i,y)=>(d(),h("div",Ze))}});export{ee as L,ut as R,dt as S,pt as _};
//# sourceMappingURL=UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.09a9a0b8.js.map