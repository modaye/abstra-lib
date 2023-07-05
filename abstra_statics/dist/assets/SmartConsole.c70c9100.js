import{d as Y,v as j,K as G,H as ce,b as a,c as l,z as d,V as z,W as H,x as e,D,N as I,e as x,ab as ue,S as Q,O as X,Q as Z,q as ee,r as g,R as de,X as N,o as pe,U as he,I as M,G as T,A as me,F as V,L as B,a2 as ve,J as fe,a as ye,t as _e}from"./registerWidgets.802bba2f.js";import{p as ge,o as K,q as J,r as O,t as ke}from"./icons.97625e56.js";import{a as W}from"./asyncComputed.1364aaa9.js";import{F as we}from"./forms.91463966.js";import{D as Se}from"./dashes.ca1ade9b.js";import{H as be}from"./hooks.911e43af.js";import{J as q}from"./jobs.cb7d0efd.js";import{W as Ce}from"./workspaces.4c177a35.js";import{l as f,u as xe}from"./log.8028a717.js";import{c as Ie}from"./sentry.2692e5c6.js";const te=o=>(X("data-v-7d69f0ed"),o=o(),Z(),o),$e={class:"runtime-settings"},Re={key:0,class:"field"},Ee=te(()=>e("div",{class:"label"},"Path",-1)),Pe={class:"field"},Me=te(()=>e("div",{class:"label"},"Code",-1)),De={class:"input-row"},Te={key:1,class:"root-path loading"},Le={class:"path-feedback"},Ue={key:1,class:"error"},Ae=Y({__name:"RuntimeCommonSettings",props:{runtime:null},setup(o){const n=o,i=j({pathError:null}),{result:c}=W(()=>Ce.get()),p=()=>{!c.value||!n.runtime.file||c.value.openFile(n.runtime.file)},S=G(()=>{var k;return(k=n.runtime.file)!=null&&k.endsWith(".py")?null:"It should be a .py file"}),y=()=>{!c.value||!R.value||c.value.openFile(".")},$=ce(),{result:R}=W(()=>fetch("/_editor/api/workspace/root-path").then(k=>k.text()));return n.runtime.onUpdate(()=>{if(!(n.runtime instanceof q))if(console.log("runtime updated",n.runtime.path),n.runtime instanceof we)$.push({path:`/_editor/form/${encodeURIComponent(n.runtime.path)}`});else if(n.runtime instanceof be)$.push({path:`/_editor/hook/${encodeURIComponent(n.runtime.path)}`});else if(n.runtime instanceof Se)$.push({path:`/_editor/dash/${encodeURIComponent(n.runtime.path)}`});else throw new Error(`Unknown runtime type ${n.runtime}`)}),(k,h)=>(a(),l("div",$e,[o.runtime instanceof d(q)?D("",!0):(a(),l("div",Re,[Ee,z(e("input",{"onUpdate:modelValue":h[0]||(h[0]=u=>o.runtime.path=u),class:"path-input",type:"text"},null,512),[[H,o.runtime.path]])])),e("div",Pe,[Me,e("div",De,[d(R)?(a(),l("button",{key:0,class:"root-path",onClick:h[1]||(h[1]=u=>y())},I(d(R)),1)):(a(),l("span",Te," Loading... ")),z(e("input",{"onUpdate:modelValue":h[2]||(h[2]=u=>o.runtime.file=u),type:"text"},null,512),[[H,o.runtime.file]]),e("button",{class:"open-file-icon",onClick:h[3]||(h[3]=u=>p())},[x(ue,{path:d(ge)},null,8,["path"]),Q(" Open in editor ")])]),e("div",Le,I(d(S)),1)]),i.pathError?(a(),l("div",Ue,I(i.pathError),1)):D("",!0)]))}});const dt=ee(Ae,[["__scopeId","data-v-7d69f0ed"]]);class Fe{static async*sendMessage(n,i){var S;const p=(S=(await fetch("/_editor/api/ai/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:n,runtime:i})})).body)==null?void 0:S.getReader();if(!p)throw new Error("No response body");for(;;){const y=await p.read();if(y.done)break;yield new TextDecoder().decode(y.value)}}}const ze=o=>(X("data-v-fa23fbe9"),o=o(),Z(),o),He={class:"smart-console"},Ne={class:"header"},Ve={class:"left"},Be={class:"right"},Ke={class:"cli"},Je={class:"left"},Oe=ze(()=>e("div",{class:"entry ai-output"}," Hello there! I'm both an output console and AI assistant. You can ask me anything. ",-1)),We={key:1,class:"local-entry"},qe={class:"entry ai-output"},Ye={key:0},je={class:"local-entry"},Ge={class:"input"},Qe=["pointer-events","onKeydown"],Xe={class:"right"},Ze=Y({__name:"SmartConsole",props:{inputEnabled:{type:Boolean},dashPlayerState:null,formCode:null,runtime:null},emits:["clear-terminal","restart","enter"],setup(o,{emit:n}){const i=o,c=g(""),p=g(null),S=fe(),y=g(!1),$=()=>{f.clear(),n("restart")},R=()=>{u.value=u.value==="assistant"?"debugger":"assistant"};function k(t){switch(t.type){case"ai-input":return{role:"user",content:t.log};case"ai-output":return{role:"assistant",content:t.log};case"stderr":case"stdout":return{role:"user",content:t.log};case"restart":return{role:"user",content:"-- new session --"}}}de(S,()=>{f.clear(),n("clear-terminal")});const h=g(null),u=g("assistant"),se=async t=>{var r;if(t.preventDefault(),c.value=((r=h.value)==null?void 0:r.innerText)||"",t.shiftKey){document.execCommand("insertLineBreak");return}h.value&&(h.value.innerText=""),u.value==="assistant"?await ne():await oe()},ne=async()=>{var r;n("enter",c.value),f.log({type:"ai-input",log:c.value}),c.value="",y.value=!0;const t={role:"user",content:(r=i.formCode)!=null?r:""};try{const v=xe();let s="";const _=Fe.sendMessage([t,...f.logs.map(C=>k(C)),{role:"user",content:c.value}],i.runtime);for await(const C of _)s+=C,f.log({type:"ai-output",log:s},v)}catch(v){f.log({type:"ai-output",log:"Sorry, I don't know how to answer that."}),console.error(v),Ie(v)}finally{y.value=!1}},oe=async()=>{c.value&&(w({type:"eval-request",content:`>>> ${c.value}`}),ae(c.value),c.value="")},E=j([]),w=async t=>{E.push(t),await N(),p.value&&(p.value.scrollTop=p.value.scrollHeight)},ae=t=>{var r,v,s;(s=(r=i.dashPlayerState)==null?void 0:r.broker)==null||s.send({type:"eval",expression:t,state:(v=i.dashPlayerState)==null?void 0:v.apiPageState})};(()=>{var t,r,v,s,_,C;(t=i.dashPlayerState)==null||t.on("eval-return",m=>{m.repr&&w({type:"log",content:m.repr})}),(r=i.dashPlayerState)==null||r.on("eval-error",m=>{w({type:"error",content:m.repr})}),(v=i.dashPlayerState)==null||v.on("stderr",m=>{w({type:"error",content:m.log})}),(s=i.dashPlayerState)==null||s.on("stdout",m=>{w({type:"log",content:m.log})}),(_=i.dashPlayerState)==null||_.on("widgets-computed",m=>{var P;(P=m.errors)!=null&&P.general&&w({type:"error",content:m.errors.general.repr})}),(C=i.dashPlayerState)==null||C.on("program-start-failed",m=>{var P;w({type:"error",content:(P=m.error)!=null?P:""})})})();const re=()=>{u.value==="assistant"&&f.clear(),E.splice(0,E.length)};f.listen(async t=>{t.type!=="restart"&&(b.value=!0,await N(),p.value&&(p.value.scrollTop=p.value.scrollHeight))});const b=g(!1),U=g(400),le=G(()=>({height:`${U.value}px`})),L=g(!1),ie=()=>L.value=!0,A=t=>{!L.value||(U.value=document.body.clientHeight-t.clientY)},F=()=>L.value=!1;return pe(()=>{document.addEventListener("mousemove",A),document.addEventListener("mouseup",F)}),he(()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",F)}),(t,r)=>{const v=ye("Markdown");return a(),l("div",He,[e("div",Ne,[e("div",Ve,[x(M,{path:u.value==="assistant"?d(K):d(J)},null,8,["path"]),Q(" Smart Console ")]),e("div",Be,[o.runtime==="dashes"?(a(),l("button",{key:0,class:"header-button",onClick:r[0]||(r[0]=s=>R())},I(u.value==="assistant"?"Switch to Debugger":"Switch to AI Assistant"),1)):D("",!0),e("div",{class:"changes-container"},[e("button",{class:"header-button",onClick:$},"Restart")]),e("div",{class:"toggle-button",onClick:r[1]||(r[1]=s=>b.value=!b.value)},[x(M,{class:T(["icon",{open:b.value}]),path:d(O),fill:"#fff"},null,8,["class","path"])])])]),b.value?(a(),l("div",{key:0,class:"terminal",style:me(d(le))},[e("div",{class:"resize-handler",onMousedown:ie},null,32),e("div",Ke,[e("div",Je,[u.value==="assistant"?(a(),l("div",{key:0,ref_key:"entriesContainer",ref:p,class:"entries"},[Oe,(a(!0),l(V,null,B(d(f).logs,(s,_)=>(a(),l("div",{key:_,class:T([s.type,"entry"])},[s.type==="ai-output"?(a(),_e(v,{key:0,source:s.log},null,8,["source"])):(a(),l("div",We,I(s.type==="restart"?"-- restarted --":s.log),1))],2))),128))],512)):(a(),l("div",{key:1,ref_key:"entriesContainer",ref:p,class:"entries"},[e("div",qe,[E.length===0?(a(),l("div",Ye," You can inspect your code here. ")):D("",!0),(a(!0),l(V,null,B(E,(s,_)=>(a(),l("div",{key:_,class:T([s.type,"entry"])},[e("div",je,I(s.type==="restart"?"-- restarted --":s.content),1)],2))),128))])],512)),e("div",Ge,[x(M,{class:T(["icon",{open:b.value}]),path:d(O)},null,8,["class","path"]),e("div",{ref_key:"inputRef",ref:h,class:"input-text",contenteditable:"","pointer-events":y.value?"none":"auto",placeholder:"Ask AI anything",onKeydown:ve(se,["enter"])},null,40,Qe)])]),e("div",Xe,[e("div",{class:"icons",onClick:re},[x(M,{class:"icon",path:d(ke)},null,8,["path"])]),e("div",null,[x(M,{class:"icon",path:u.value==="assistant"?d(K):d(J)},null,8,["path"])])])])],4)):D("",!0)])}}});const pt=ee(Ze,[["__scopeId","data-v-fa23fbe9"]]);export{dt as R,pt as S};
//# sourceMappingURL=SmartConsole.c70c9100.js.map