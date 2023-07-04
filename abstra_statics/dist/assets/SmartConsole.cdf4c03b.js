import{d as R,u as A,G as U,K as ce,b as n,c as a,y as i,V as F,W as O,v as e,B as g,H as T,e as L,a5 as ue,R as H,N as X,O as Z,q as S,x as de,o as V,A as P,F as ee,J as te,a6 as pe,a as se,E as M,t as z,a7 as _e,a8 as he,w as ve,r as y,Q as me,X as Y,U as fe,I as E,z as ye,$ as ge,L as ke}from"./registerWidgets.fff064a1.js";import{p as $e,l as j,n as be,o as we}from"./icons.5214a3f5.js";import{a as G}from"./CircularLoading.59d7fd3d.js";import{F as Ce}from"./forms.7bc6baea.js";import{D as Se}from"./dashes.f5f65b41.js";import{H as xe}from"./hooks.039c0cd9.js";import{J as Q}from"./jobs.af366134.js";import{W as Ie}from"./workspaces.32af92db.js";import{l as I}from"./log.7bdc5c83.js";const ne=s=>(X("data-v-7d69f0ed"),s=s(),Z(),s),Te={class:"runtime-settings"},Le={key:0,class:"field"},Re=ne(()=>e("div",{class:"label"},"Path",-1)),Be={class:"field"},Ee=ne(()=>e("div",{class:"label"},"Code",-1)),Pe={class:"input-row"},Me={key:1,class:"root-path loading"},Ue={class:"path-feedback"},Ae={key:1,class:"error"},De=R({__name:"RuntimeCommonSettings",props:{runtime:null},setup(s){const t=s,o=A({pathError:null}),{result:r}=G(()=>Ie.get()),u=()=>{!r.value||!t.runtime.file||r.value.openFile(t.runtime.file)},l=U(()=>{var d;return(d=t.runtime.file)!=null&&d.endsWith(".py")?null:"It should be a .py file"}),k=()=>{!r.value||!_.value||r.value.openFile(".")},h=ce(),{result:_}=G(()=>fetch("/_editor/api/workspace/root-path").then(d=>d.text()));return t.runtime.onUpdate(()=>{if(!(t.runtime instanceof Q))if(console.log("runtime updated",t.runtime.path),t.runtime instanceof Ce)h.push({path:`/_editor/form/${encodeURIComponent(t.runtime.path)}`});else if(t.runtime instanceof xe)h.push({path:`/_editor/hook/${encodeURIComponent(t.runtime.path)}`});else if(t.runtime instanceof Se)h.push({path:`/_editor/dash/${encodeURIComponent(t.runtime.path)}`});else throw new Error(`Unknown runtime type ${t.runtime}`)}),(d,v)=>(n(),a("div",Te,[s.runtime instanceof i(Q)?g("",!0):(n(),a("div",Le,[Re,F(e("input",{"onUpdate:modelValue":v[0]||(v[0]=$=>s.runtime.path=$),class:"path-input",type:"text"},null,512),[[O,s.runtime.path]])])),e("div",Be,[Ee,e("div",Pe,[i(_)?(n(),a("button",{key:0,class:"root-path",onClick:v[1]||(v[1]=$=>k())},T(i(_)),1)):(n(),a("span",Me," Loading... ")),F(e("input",{"onUpdate:modelValue":v[2]||(v[2]=$=>s.runtime.file=$),type:"text"},null,512),[[O,s.runtime.file]]),e("button",{class:"open-file-icon",onClick:v[3]||(v[3]=$=>u())},[L(ue,{path:i($e)},null,8,["path"]),H(" Open in editor ")])]),e("div",Ue,T(i(l)),1)]),o.pathError?(n(),a("div",Ae,T(o.pathError),1)):g("",!0)]))}});const St=S(De,[["__scopeId","data-v-7d69f0ed"]]),Fe={class:"tab-menu"},He={class:"tabs"},Ve={key:0,class:"group"},ze={class:"group"},Ke=["onClick"],Ne={key:1,class:"group"},We={class:"content"},Je=R({__name:"TabMenuUnderline",setup(s){const t=A([]),o=de(),r=l=>{const k=h=>h==l;t.forEach((h,_)=>{h.isActive=k(_)})},u=U(()=>t.findIndex(l=>l.isActive));return pe("addTab",l=>{t.push(l)}),V(()=>{r(0)}),(l,k)=>{const h=se("icon");return n(),a("div",Fe,[e("div",He,[i(o).left?(n(),a("div",Ve,[P(l.$slots,"left",{},void 0,!0)])):g("",!0),e("div",ze,[(n(!0),a(ee,null,te(t,(_,d)=>(n(),a("button",{key:_.title,class:M(["form-tab",i(u)==d&&"active"]),onClick:v=>r(d)},[_.icon?(n(),z(h,{key:0,path:_.icon,fill:"#8692A5",width:"10",height:"10"},null,8,["path"])):g("",!0),H(" "+T(_.title),1)],10,Ke))),128))]),i(o).right?(n(),a("div",Ne,[P(l.$slots,"right",{},void 0,!0)])):g("",!0)]),e("div",We,[P(l.$slots,"default",{},void 0,!0)])])}}});const xt=S(Je,[["__scopeId","data-v-60b2affa"]]),qe={class:"tab"},Oe=R({__name:"Tab",props:{title:null,icon:null},setup(s){const t=s,o=A({isActive:!1,title:t.title,icon:t.icon}),r=_e("addTab");return V(()=>{r(o)}),(u,l)=>F((n(),a("div",qe,[P(u.$slots,"default",{},void 0,!0)],512)),[[he,o.isActive]])}});const It=S(Oe,[["__scopeId","data-v-9c2e92c2"]]),Ye={},je={width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ge=e("path",{d:"M2.8725 4.25L5.5575 1.5575L4.5 0.5L0 5L4.5 9.5L5.5575 8.4425L2.8725 5.75H12V4.25H2.8725Z",fill:"#6D7C93"},null,-1),Qe=[Ge];function Xe(s,t){return n(),a("svg",je,Qe)}const Ze=S(Ye,[["render",Xe]]),et=R({__name:"BackButton",props:{link:null},setup(s){return(t,o)=>{const r=se("router-link");return n(),z(r,{class:"link-button",to:s.link},{default:ve(()=>[L(Ze),H(" Back ")]),_:1},8,["to"])}}});const Tt=S(et,[["__scopeId","data-v-56a12edc"]]),tt=s=>(X("data-v-548b6292"),s=s(),Z(),s),st={class:"smart-console"},nt={class:"header"},ot=tt(()=>e("div",{class:"left"},"Console",-1)),at={class:"right"},rt={class:"cli"},it={class:"left"},lt={class:"entry ai-output"},ct={key:0},ut={class:"local-entry"},dt={key:0,class:"input"},pt=["pointer-events","onKeydown"],_t={class:"right"},ht=R({__name:"SmartConsole",props:{inputEnabled:{type:Boolean},dashPlayerState:null,formCode:null,runtime:null},emits:["clear-terminal","restart","enter"],setup(s,{emit:t}){const o=s,r=y(""),u=y(null),l=ke(),k=U(()=>o.runtime==="dashes"?B:I.logs),h=y(!1),_=()=>{I.clear(),t("restart")};me(l,()=>{I.clear(),t("clear-terminal")});const d=y(null),v=y("assistant"),$=async c=>{var m;if(c.preventDefault(),r.value=((m=d.value)==null?void 0:m.innerText)||"",c.shiftKey){document.execCommand("insertLineBreak");return}d.value&&(d.value.innerText=""),await oe()},oe=async()=>{r.value&&(b({type:"eval-request",log:`>>> ${r.value}`}),ae(r.value),r.value="")},B=A([]),b=async c=>{B.push(c),await Y(),u.value&&(u.value.scrollTop=u.value.scrollHeight)},ae=c=>{var m,f,w;(w=(m=o.dashPlayerState)==null?void 0:m.broker)==null||w.send({type:"eval",expression:c,state:(f=o.dashPlayerState)==null?void 0:f.apiPageState})};(()=>{var c,m,f,w,J,q;(c=o.dashPlayerState)==null||c.on("eval-return",p=>{p.repr&&b({type:"log",log:p.repr})}),(m=o.dashPlayerState)==null||m.on("eval-error",p=>{b({type:"error",log:p.repr})}),(f=o.dashPlayerState)==null||f.on("stderr",p=>{b({type:"stderr",log:p.log})}),(w=o.dashPlayerState)==null||w.on("stdout",p=>{b({type:"stdout",log:p.log})}),(J=o.dashPlayerState)==null||J.on("widgets-computed",p=>{var x;(x=p.errors)!=null&&x.general&&b({type:"error",log:p.errors.general.repr})}),(q=o.dashPlayerState)==null||q.on("program-start-failed",p=>{var x;b({type:"error",log:(x=p.error)!=null?x:""})})})();const re=()=>{v.value==="assistant"?I.clear():B.splice(0,B.length)};I.listen(async c=>{c.type!=="restart"&&(C.value=!0,await Y(),u.value&&(u.value.scrollTop=u.value.scrollHeight))});const C=y(!1),K=y(400),ie=U(()=>({height:`${K.value}px`})),D=y(!1),le=()=>D.value=!0,N=c=>{!D.value||(K.value=document.body.clientHeight-c.clientY)},W=()=>D.value=!1;return V(()=>{document.addEventListener("mousemove",N),document.addEventListener("mouseup",W)}),fe(()=>{document.removeEventListener("mousemove",N),document.removeEventListener("mouseup",W)}),(c,m)=>(n(),a("div",st,[e("div",nt,[ot,e("div",at,[e("div",{class:"changes-container"},[e("button",{class:"header-button",onClick:_},"Restart")]),e("div",{class:"toggle-button",onClick:m[0]||(m[0]=f=>C.value=!C.value)},[L(E,{class:M(["icon",{open:C.value}]),path:i(j),fill:"#fff"},null,8,["class","path"])])])]),C.value?(n(),a("div",{key:0,class:"terminal",style:ye(i(ie))},[e("div",{class:"resize-handler",onMousedown:le},null,32),e("div",rt,[e("div",it,[e("div",{ref_key:"entriesContainer",ref:u,class:"entries"},[e("div",lt,[i(k).length==0?(n(),a("span",ct," You can inspect your code here. ")):(n(!0),a(ee,{key:1},te(i(k),(f,w)=>(n(),a("div",{key:w,class:M([f.type,"entry"])},[e("div",ut,T(f.type==="restart"?"-- restarted --":f.log),1)],2))),128))])],512),s.runtime==="dashes"?(n(),a("div",dt,[L(E,{class:M(["icon",{open:C.value}]),path:i(j)},null,8,["class","path"]),e("div",{ref_key:"inputRef",ref:d,class:"input-text",contenteditable:"","pointer-events":h.value?"none":"auto",placeholder:"Ask AI anything",onKeydown:ge($,["enter"])},null,40,pt)])):g("",!0)]),e("div",_t,[e("div",{class:"icons",onClick:re},[L(E,{class:"icon",path:i(be)},null,8,["path"])]),e("div",null,[s.runtime==="dashes"?(n(),z(E,{key:0,class:"icon",path:i(we)},null,8,["path"])):g("",!0)])])])],4)):g("",!0)]))}});const Lt=S(ht,[["__scopeId","data-v-548b6292"]]);export{Tt as B,St as R,Lt as S,xt as T,It as a};
//# sourceMappingURL=SmartConsole.cdf4c03b.js.map