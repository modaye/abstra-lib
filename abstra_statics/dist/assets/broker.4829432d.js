var ae=Object.defineProperty;var le=(s,e,n)=>e in s?ae(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var l=(s,e,n)=>(le(s,typeof e!="symbol"?e+"":e,n),n);import{d as x,b as f,c as y,v as E,y as H,L as N,B as P,p as C,a as ue,q as w,A as ce,r as U,w as re,R as he,S as T,a4 as de,J as F,Q as fe,u as Y,a5 as Z,a6 as me,a7 as ve,o as pe,W as ge,E as ee,e as R,F as te,K as ne,a8 as ye,a9 as we}from"./registerWidgets.04dc761e.js";import{p as j}from"./passwordlessManager.271a8058.js";import{k as be,n as ke}from"./icons.d4e872e2.js";import{_ as _e}from"./ActionButton.vue_vue_type_script_setup_true_lang.c4424b2b.js";import{P as Ee}from"./Passwordless.0107ba48.js";import{e as Pe,R as Ie}from"./executeJs.740555ed.js";import{l as $}from"./log.0073b587.js";import{W as Le}from"./WidgetsFrame.e00c0ab1.js";import{L as Se}from"./CircularLoading.78e37a70.js";const xe={key:0,class:"hint"},Ce={class:"icon",viewBox:"0 0 24 24",style:{width:"20px",height:"20px"}},De=["d"],Ae={class:"hint-content"},We=x({__name:"WidgetHint",props:{hint:null},setup(s){return(e,n)=>s.hint?(f(),y("div",xe,[(f(),y("svg",Ce,[E("path",{d:H(be)},null,8,De)])),E("div",Ae,N(s.hint),1)])):P("",!0)}});const Be=C(We,[["__scopeId","data-v-419a518f"]]),Fe={class:"outline-button"},Re=x({__name:"OutlineButton",props:{iconPath:null,noShadow:{type:Boolean},status:null},setup(s){return(e,n)=>{const t=ue("icon");return f(),y("button",Fe,[s.iconPath?(f(),w(t,{key:0,path:s.iconPath,fill:"#fff",class:"icon"},null,8,["path"])):P("",!0),ce(e.$slots,"default",{},void 0,!0)])}}});const je=C(Re,[["__scopeId","data-v-d16448de"]]),$e=x({__name:"FormAutoFill",props:{broker:null,form:null},setup(s){const e=s,n=window.__runs||(window.__runs={previous:[],current:[]});e.broker.on("start",()=>{n.previous=n.current,n.current=[]});const t=U(null);function r(){for(const d in n.current){const c=n.previous[d],a=n.current[d];if(!c||c.type!==a.type||c.type=="form"&&!T.exports.isEqual(c.widgets,a.widgets)||c.type=="form-response"&&!T.exports.isEqual(c.payload,a.payload))return null}const i=n.previous[n.current.length];if((i==null?void 0:i.type)!=="form-response")return null;t.value=i}function h(){const i=t.value;i&&e.broker.send(i)}return e.broker.on("form",i=>{n.current.push(i),r()}),e.broker.on("form-response",i=>{n.current.push(i),t.value=null}),(i,d)=>t.value?(f(),w(je,{key:0,"icon-path":H(ke),class:"form-auto-fill-btn",onClick:h},{default:re(()=>[he(" Repeat last answer ")]),_:1},8,["icon-path"])):P("",!0)}});const Oe=C($e,[["__scopeId","data-v-9590d96b"]]);class k{constructor(e,n){l(this,"element",null);this.name=e,this.isDefault=n}static fromDto(e){return typeof e=="string"?new k(e,!1):new k(e.name,e.is_default)}setElement(e){e instanceof HTMLElement&&(this.element=e)}get isFocused(){return this.element===document.activeElement}focusOnButton(){var e;(e=this.element)==null||e.focus()}addKeydownListener(e){var n;(n=this.element)==null||n.addEventListener("keydown",e)}}class V{constructor(e){this.form=e}static from(e){return new V(e)}get startAction(){var e;return[k.fromDto((e=this.form.startButtonText)!=null?e:"Start")]}get restartAction(){var n;const e=(n=this.form.restartButtonText)!=null?n:"Restart";return this.form.allowRestart?[k.fromDto(e)]:[]}fromPageActionsDto(e){return e.filter(n=>!!n).map(n=>k.fromDto(n))}}async function Ne(s){window.should_ask_before_leave=!1,window.location.href=s.url}const Ue={redirect:Ne,"execute-js":Pe};class M{constructor(e,n){l(this,"loading",!1);l(this,"endedByPage",!1);l(this,"reactivePollInterval",null);l(this,"programEnded",!1);l(this,"widgetError",()=>{this.newPageDefinition({widgets:[{type:"error"}],actions:[],fullWidth:!1,hasError:!1,steps:null})});l(this,"widgetEnd",()=>{this.endedByPage||this.newPageDefinition({widgets:[{type:"end"}],actions:this.pageActionFactory.restartAction,fullWidth:!1,hasError:!1,steps:null})});l(this,"sendUser",e=>{this.broker.send({type:"auth:saved-jwt",jwt:e.jwt}),this.broker.send({type:"metadata",payload:{authenticated_user:e.claims.email}})});l(this,"sendBrowserTryDisconnect",()=>{this.broker.send({type:"browser:try-disconnect"})});l(this,"newPageDefinitionListener",()=>{});l(this,"updatePageDefinitionListener",()=>{});l(this,"onReactivePollListener",()=>{});l(this,"onErrorListener",()=>{});l(this,"onExitListener",()=>{});l(this,"onStartAuthListener");l(this,"onEndAuthListener");l(this,"onBadAuthListener");this.broker=e,this.pageActionFactory=n}static create(e,n){const t=new M(e,n);return t.broker.onClose(()=>{if(t.programEnded)return;const r="Connection with service closed before program ended";$.log({log:r,type:"stderr"}),t.widgetError(),t.error(r)}),t.broker.on("form",({widgets:r,actions:h,buttonText:i,endProgram:d,reactivePollingInterval:c,steps:a})=>{t.loading=!1,t.newPageDefinition({widgets:r,actions:t.pageActionFactory.fromPageActionsDto(i?[i]:h!=null?h:[]),fullWidth:r.some(p=>"fullWidth"in p&&p.fullWidth),hasError:!1,steps:a}),c&&(t.reactivePollInterval=setInterval(t.onReactivePollListener,c*1e3)),d&&(t.endedByPage=!0,t.broker.send({type:"form-response",payload:{},secrets:[]}))}),t.broker.on("action",async({action:r})=>{var d;let h=null,i;try{const{type:c}=r;h=(d=await Ue[c](r))!=null?d:null}catch(c){i=c.message}t.broker.send({type:"action-response",value:h,errorMessage:i})}),t.broker.on("auth:require-info",()=>{t.newPageDefinition({widgets:[],actions:[],fullWidth:!1,hasError:!1,steps:null}),t.onStartAuthListener&&t.onStartAuthListener()}),t.broker.on("auth:valid-jwt",()=>{t.onEndAuthListener&&t.onEndAuthListener()}),t.broker.on("auth:invalid-jwt",()=>{console.warn("invalid jwt"),t.onBadAuthListener&&t.onBadAuthListener()}),t.broker.on("stdout",r=>{$.log(r)}),t.broker.on("stderr",r=>{$.log(r)}),t.broker.on("program:connection-error",r=>{t.widgetError(),t.error(r)}),t.broker.on("program:end",r=>{t.programEnded=!0,r.exitCode||r.exception?(t.widgetError(),t.error(r)):(t.widgetEnd(),t.exit(r))}),t.broker.on("program:disconnect",r=>{t.exit(r)}),t.broker.on("not-enough-credits",()=>{t.error({error:"not-enough-credits"}),t.programEnded=!0}),t.broker.on("session-id",async r=>{t.broker.setSessionId(r.sessionId)}),t.broker.on("heartbeat",()=>{t.broker.resetHeartbeatCounter()}),t.broker.on("user-response-event",({widgets:r,validation:h})=>{t.updatePageDefinition({widgets:r,validation:{message:h.message,status:h.status},fullWidth:r.some(i=>"fullWidth"in i&&i.fullWidth)})}),t}next(e,n,t,r){if((de(Object.values(e))||!t)&&(n==null?void 0:n.name)!=="Back"){this.updatePageDefinition({hasError:!0});return}this.reactivePollInterval&&clearInterval(this.reactivePollInterval);const i={};Object.keys(e).forEach(d=>{i[d]=e[d].value}),this.loading=!0,this.broker.send({type:"form-response",payload:i,action:n==null?void 0:n.name,secrets:r}),this.newPageDefinition({widgets:[],fullWidth:!1,hasError:!1,actions:[],steps:null})}sendUserEvent(e,n){const t={};Object.keys(e).forEach(r=>{t[r]=e[r].value}),this.broker.send({type:"user-event",payload:t,secrets:n})}init(e){this.broker.resetState(),this.newPageDefinition({widgets:[],actions:[],fullWidth:!1,hasError:!1,steps:null}),this.broker.connect(e!=null?e:{})}newPageDefinition(e){this.newPageDefinitionListener(e)}updatePageDefinition(e){this.loading||this.updatePageDefinitionListener(e)}listenToNewPageDefinition(e){this.newPageDefinitionListener=e}listenToPageDefinitionUpdate(e){this.updatePageDefinitionListener=e}onReactivePoll(e){this.onReactivePollListener=e}error(e){this.reactivePollInterval&&clearInterval(this.reactivePollInterval),this.onErrorListener(e)}onError(e){this.onErrorListener=e}exit(e){this.reactivePollInterval&&clearInterval(this.reactivePollInterval),this.onExitListener(e)}onExit(e){this.onExitListener=e}onStartAuth(e){this.onStartAuthListener=e}onEndAuth(e){this.onEndAuthListener=e}onBadAuth(e){this.onBadAuthListener=e}}const Te={key:0,class:"form-wrapper"},He=["id"],Ve={key:0,class:"span-error"},Me={key:1,class:"loading-wrapper"},qe={class:"span-error"},Je={class:"buttons"},ze=x({__name:"FormRunner",props:{form:{type:Object,required:!0},params:Object,isPreview:Boolean,enableAutoFocus:{type:Boolean,required:!0},broker:{type:Object,required:!0}},emits:["log","error","exit","navigate","logout","start"],setup(s,{expose:e,emit:n}){const t=s,r=U(null),h=F(()=>V.from(t.form)),i=o=>n("navigate",o),d=()=>{a.value={widgets:[{type:"start"}],actions:h.value.startAction,fullWidth:!1,hasError:!1,steps:null}};fe(()=>t.form,()=>{var o;((o=a.value.widgets[0])==null?void 0:o.type)=="start"&&d()});const c=Y({user:null,authenticating:!1}),a=U({widgets:[],fullWidth:!1,hasError:!1,actions:[],steps:null}),p=Y({responses:{},formState:"idle"}),D=F(()=>a.value.widgets.reduce((o,u)=>("key"in u&&(o[u.key]=p.responses[u.key]),o),{})),A=F(()=>a.value.widgets.filter(o=>"secret"in o).reduce((o,u)=>"key"in u&&"secret"in u?[...o,{key:u.key,secret:u.secret}]:o,[]));q();function q(){c.user=j.getUser()}const oe=()=>{j.removeUser(),q(),n("logout")},m=M.create(t.broker,h.value);m.onError(o=>{var u;if(n("error",o),p.formState="error",o.error==="not-enough-credits"){(u=r.value)==null||u.open(),d();return}}),m.onExit(o=>{n("exit",o),p.formState="over"}),m.onStartAuth(()=>{c.user?m.sendUser(c.user):c.authenticating=!0}),m.onEndAuth(()=>{c.authenticating=!1}),m.onBadAuth(()=>{j.removeUser(),c.user=null,c.authenticating=!0}),m.onReactivePoll(()=>{m.sendUserEvent(D.value,A.value)});const ie=o=>{c.user=o,m.sendUser(o)};m.listenToNewPageDefinition(o=>{var u,g;a.value=o,Z.init(t.enableAutoFocus,()=>I()),p.responses=me((g=(u=a.value)==null?void 0:u.widgets)!=null?g:[])}),m.listenToPageDefinitionUpdate(o=>{var u,g;a.value={...a.value,...o},p.responses=ve((g=(u=a.value)==null?void 0:u.widgets)!=null?g:[],p.responses)});const J=o=>{var u;if(!(p.formState!=="running"||t.isPreview||!((u=window.should_ask_before_leave)==null||u)))return m.sendBrowserTryDisconnect(),o.preventDefault(),o.returnValue="Are you sure?",""};pe(async()=>{window.addEventListener("beforeunload",J),d(),Z.init(t.enableAutoFocus,o=>I(o)),t.form.autoStart&&W()}),ge(()=>{t.broker.close(),window.removeEventListener("beforeunload",J)});const I=o=>{var u,g;if(p.formState!=="running")return W();m.next(D.value,o,(g=(u=a.value.validation)==null?void 0:u.status)!=null?g:!0,A.value)},W=async()=>{m.init(t.params),p.formState="running",n("start")},L=o=>we(o.type)?p.responses[o.key]:null;function z(o,u,g){if(m.sendUserEvent(D.value,g),u===a.value.widgets.length-1&&["multiple-choice-input","cards-input"].includes(a.value.widgets[u].type)&&a.value.actions.filter(S=>!!S).length===0&&o.value!==null&&(!T.exports.isArray(o.value)||o.value.length)){I();return}}return e({run:W}),(o,u)=>(f(),w(Le,{class:ee([{preview:s.isPreview},"runner"]),"main-color":s.form.mainColor,theme:s.form.theme,"font-family":s.form.fontFamily,runtime:"form"},{default:re(()=>{var g,S;return[s.isPreview?(f(),w(Oe,{key:0,class:"auto-fill-btn",broker:s.broker,form:s.form,style:{"z-index":1}},null,8,["broker","form"])):P("",!0),R(Ie,{ref_key:"runtimeCommonsRef",ref:r,runtime:s.form,"full-width":a.value.fullWidth,"steps-info":a.value.steps,"is-preview":s.isPreview,"user-email":(g=c.user)==null?void 0:g.claims.email,type:"forms",onLogout:oe,onNavigate:i},null,8,["runtime","full-width","steps-info","is-preview","user-email"]),E("main",null,[c.authenticating?(f(),w(Ee,{key:1,class:"form-auth",onDone:ie})):(f(),y("div",{key:0,class:ee(["form",{"full-width":a.value.fullWidth}])},[a.value.widgets.length>0?(f(),y("div",Te,[(f(!0),y(te,null,ne(a.value.widgets,(v,_)=>{var K,G,Q,X;return f(),y("div",{id:v.type+_,key:(K=v.key)!=null?K:v.type+_,class:"widget"},[(f(),w(ye(v.type),{data:v,response:L(v),form:s.form,page:a.value,"has-error":((G=L(v))==null?void 0:G.isInvalid())&&a.value.hasError,runtime:"form","session-id":s.broker.getSessionId(),"main-color":s.form.mainColor,"font-family":s.form.fontFamily,onChange:B=>z(B,_,H(A)),onSetInitialValue:B=>z(B,_)},null,40,["data","response","form","page","has-error","session-id","main-color","font-family","onChange","onSetInitialValue"])),R(Be,{hint:"hint"in v?v.hint:null},null,8,["hint"]),((Q=L(v))==null?void 0:Q.isInvalid())&&a.value.hasError?(f(),y("span",Ve,N((X=L(v))==null?void 0:X.errorMessages().join(`
`)),1)):P("",!0)],8,He)}),128))])):(f(),y("div",Me,[R(Se)])),E("span",qe,N((S=a.value.validation)==null?void 0:S.message),1),E("div",Je,[(f(!0),y(te,null,ne(a.value.actions,v=>(f(),w(_e,{key:v.name,action:v,"main-color":s.form.mainColor,"font-family":s.form.fontFamily,onNext:_=>I(v)},null,8,["action","main-color","font-family","onNext"]))),128))])],2))])]}),_:1},8,["class","main-color","theme","font-family"]))}});const it=C(ze,[["__scopeId","data-v-d71b4eca"]]);function Ke(s){return s.type==="form"&&s.payload?{...s,type:"form-response"}:s.type==="user-event"&&s.widgets?{...s,type:"user-response-event"}:s}const Ge=[WebSocket.CLOSING,WebSocket.CLOSED];function se(s,e){const n=s[e.type];if(!n){console.warn("no callback for",e.type);return}n.forEach(t=>t(e))}const b=class{constructor(e){l(this,"formPath",null);l(this,"sessionId",null);l(this,"isLocal");l(this,"isPreview");l(this,"ws",null);l(this,"callbacks",{"form-response":[],"user-response-event":[],start:[],"auth:info":[],"auth:saved-jwt":[],"auth:restart":[],"auth:validate-token":[],"auth:resend-token":[],heartbeat:[],metadata:[],"executed-by":[],"action-response":[],"user-event":[],"program:end":[],"program:disconnect":[],"program:connection-error":[],stderr:[],stdout:[],form:[],action:[],"not-enough-credits":[],"auth:require-info":[],"auth:expecting-token":[],"auth:token-expired":[],"auth:invalid-token":[],"auth:invalid-jwt":[],"auth:valid-token":[],"auth:valid-jwt":[],"browser:disconnect":[],"session-id":[],"browser:try-disconnect":[]});l(this,"onCloseCallbacks",[]);l(this,"heartbeatCounter",0);l(this,"heartbeatInterval");l(this,"params",{});var n,t;"formPath"in e&&(this.formPath=(n=e.formPath)!=null?n:null),"sessionId"in e&&(this.sessionId=(t=e.sessionId)!=null?t:null),this.isLocal=e.isLocal,this.isPreview=e.isPreview}static create(e){return b._instance&&b._instance.close(),b._instance=new b(e),b._instance}get url(){const e=this.isLocal||this.sessionId?"sessionId":"formPath";return`${location.protocol==="https:"?"wss:":"ws:"}//${location.host}/_socket?${e}=${this[e]}&isPreview=${this.isPreview}`}setSessionId(e){var n;(n=this.sessionId)!=null||(this.sessionId=e)}getSessionId(){return this.sessionId}resetState(){this.close(),this.isLocal||(this.sessionId=null)}resetHeartbeatCounter(){this.heartbeatCounter=0}on(e,n){this.callbacks[e].push(n)}clearWSEvents(){!this.ws||(clearInterval(this.heartbeatInterval),this.ws.onclose=()=>{},this.ws.onerror=()=>{},this.ws.onmessage=()=>{})}async connect(e,n=1){if(!(n>3))return this.params=e!=null?e:this.params,new Promise(t=>{this.clearWSEvents(),this.ws=new WebSocket(this.url),this.ws.onopen=()=>{t(),this.resetHeartbeatCounter(),this.send({type:"start",params:this.params})};let r=!1;const h=()=>{r||(r=!0,this.sessionId&&setTimeout(()=>this.connect(),1500))};this.ws.onclose=i=>{if(i.code===1006||!i.wasClean)return h();clearInterval(this.heartbeatInterval),this.onCloseCallbacks.forEach(d=>d())},this.ws.onerror=()=>h(),this.ws.onmessage=i=>{const d=JSON.parse(i.data);se(this.callbacks,Ke(d))},this.heartbeatInterval=setInterval(()=>{if(!(!this.ws||this.ws.readyState!==this.ws.OPEN)){if(this.heartbeatCounter++,this.heartbeatCounter>3)return this.ws.onclose=()=>{},clearInterval(this.heartbeatInterval),h();this.send({type:"heartbeat"})}},2e3)}).catch(()=>{this.connect(this.params,n+1)})}onClose(e){this.onCloseCallbacks.push(e)}close(){if(!this.ws){console.warn("no websocket to close");return}this.clearWSEvents(),this.ws.close()}async send(e){if(!this.ws){console.warn("no websocket to send");return}Ge.includes(this.ws.readyState)&&await this.connect(),this.ws.send(JSON.stringify(e)),se(this.callbacks,e)}};let O=b;l(O,"_instance");export{it as F,O as R};
//# sourceMappingURL=broker.4829432d.js.map
