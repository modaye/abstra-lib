import{r as R}from"./index.92739db1.js";import{u as g}from"./log.7f787638.js";import{F as q,R as x}from"./broker.1a1dbb64.js";import{d as S,v as B,R as w,K as f,z as o,b as s,c,e as K,t as b,J as E,H as L,O as N,Q as O,x as d,q as T}from"./registerWidgets.ef15081f.js";import{D as F,n as C}from"./DashPlayer.f12351d2.js";import{a as V}from"./asyncComputed.86367e33.js";import{r as j,n as z}from"./runnerData.81abf845.js";import{L as A}from"./CircularLoading.65cb8c64.js";import"./passwordlessManager.b4322d52.js";import"./icons.0b88355c.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.838467a7.js";import"./Passwordless.fb1a0be0.js";import"./executeJs.74ae40e2.js";import"./PlayerNavbar.0298dba8.js";import"./WidgetsFrame.5fcf0cc8.js";import"./colors.7a73be09.js";import"./Modal.afc2a5e3.js";import"./lottie.b93b14fe.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="7016807e-c3a6-4bff-aa25-f1e83038ba3f",a._sentryDebugIdIdentifier="sentry-dbid-7016807e-c3a6-4bff-aa25-f1e83038ba3f")}catch{}})();async function H(a){const e=await fetch(`/_api/${a}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n,dash:l}=await e.json();return{form:n&&j(n),dash:l&&z(l)}}const p=a=>(N("data-v-7a49cef6"),a=a(),O(),a),J={key:0,class:"loading"},Q={key:1,class:"error"},$=p(()=>d("h1",null,"Oops! Something went wrong",-1)),G=p(()=>d("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),M=[$,G],U={key:2,class:"form"},W={key:3,class:"dash-wrapper"},X={key:4,class:"error not-found"},Y=p(()=>d("h1",null,"Page not found",-1)),Z=p(()=>d("p",null,"The page you requested could not be found.",-1)),ee=[Y,Z],te=S({__name:"Player",setup(a){const e=E(),n=L(),l=B({playerKey:g()}),m=({path:t})=>{n.push({name:"player",query:e.query,params:{path:t.split("/")}})},_=async()=>{l.playerKey=g()};w([()=>e.path,()=>e.query],()=>_());const{loading:k,result:r,error:D}=V(()=>{var t;return H((t=e.path.slice(1))!=null?t:"")}),y=f(()=>i.value?x.create({isLocal:!1,isPreview:!1,formPath:i.value.path}):null),i=f(()=>{var t,u;return(u=(t=r.value)==null?void 0:t.form)!=null?u:null}),h=f(()=>{var u,v;if(!((u=r.value)!=null&&u.dash))return null;const t=C.create((v=r.value)==null?void 0:v.dash,!1);return t.onRedirect(({url:P,queryParams:I})=>R(n,P,I)),t});return w(r,()=>{var t;!r.value||(r.value.form?document.title=(t=r.value.form.welcomeTitle)!=null?t:r.value.form.title:r.value.dash&&(document.title=r.value.dash.title))}),(t,u)=>o(k)?(s(),c("div",J,[K(A)])):o(D)?(s(),c("div",Q,M)):o(i)&&o(y)?(s(),c("div",U,[(s(),b(q,{key:l.playerKey,class:"player",form:o(i),params:o(e).query,broker:o(y),"enable-auto-focus":!0,onNavigate:m,onLogout:_},null,8,["form","params","broker"]))])):o(h)?(s(),c("div",W,[(s(),b(F,{key:l.playerKey,class:"player","is-preview":!1,params:o(e).query,"dash-player-state":o(h),onNavigate:m},null,8,["params","dash-player-state"]))])):(s(),c("div",X,ee))}});const we=T(te,[["__scopeId","data-v-7a49cef6"]]);export{we as default};
//# sourceMappingURL=Player.39601a2f.js.map