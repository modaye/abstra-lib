import{r as R}from"./index.9f0d5f28.js";import{u as g}from"./log.088604d7.js";import{F as q,R as x}from"./broker.f865809f.js";import{d as S,v as B,R as w,K as f,z as o,b as s,c,e as K,t as b,J as E,H as L,O as N,Q as O,x as d,q as T}from"./registerWidgets.68b4d727.js";import{D as F,n as C}from"./DashPlayer.b3abf25c.js";import{a as V}from"./asyncComputed.93878fc8.js";import{r as j,n as z}from"./runnerData.d765a3b7.js";import{L as A}from"./CircularLoading.d7ae4d10.js";import"./passwordlessManager.a7d5c3a4.js";import"./icons.ef86ff2e.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.5681d83c.js";import"./Passwordless.bf03ab53.js";import"./executeJs.c67b4605.js";import"./PlayerNavbar.db54667c.js";import"./WidgetsFrame.990b2044.js";import"./colors.8344a969.js";import"./Modal.d08e28ea.js";import"./lottie.d1957a7e.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="2aa40381-9fd8-40a5-82fc-4be7d4b68f25",a._sentryDebugIdIdentifier="sentry-dbid-2aa40381-9fd8-40a5-82fc-4be7d4b68f25")}catch{}})();async function H(a){const e=await fetch(`/_api/${a}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n,dash:l}=await e.json();return{form:n&&j(n),dash:l&&z(l)}}const p=a=>(N("data-v-7a49cef6"),a=a(),O(),a),J={key:0,class:"loading"},Q={key:1,class:"error"},$=p(()=>d("h1",null,"Oops! Something went wrong",-1)),G=p(()=>d("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),M=[$,G],U={key:2,class:"form"},W={key:3,class:"dash-wrapper"},X={key:4,class:"error not-found"},Y=p(()=>d("h1",null,"Page not found",-1)),Z=p(()=>d("p",null,"The page you requested could not be found.",-1)),ee=[Y,Z],te=S({__name:"Player",setup(a){const e=E(),n=L(),l=B({playerKey:g()}),m=({path:t})=>{n.push({name:"player",query:e.query,params:{path:t.split("/")}})},_=async()=>{l.playerKey=g()};w([()=>e.path,()=>e.query],()=>_());const{loading:k,result:r,error:D}=V(()=>{var t;return H((t=e.path.slice(1))!=null?t:"")}),y=f(()=>i.value?x.create({isLocal:!1,isPreview:!1,formPath:i.value.path}):null),i=f(()=>{var t,u;return(u=(t=r.value)==null?void 0:t.form)!=null?u:null}),h=f(()=>{var u,v;if(!((u=r.value)!=null&&u.dash))return null;const t=C.create((v=r.value)==null?void 0:v.dash,!1);return t.onRedirect(({url:P,queryParams:I})=>R(n,P,I)),t});return w(r,()=>{var t;!r.value||(r.value.form?document.title=(t=r.value.form.welcomeTitle)!=null?t:r.value.form.title:r.value.dash&&(document.title=r.value.dash.title))}),(t,u)=>o(k)?(s(),c("div",J,[K(A)])):o(D)?(s(),c("div",Q,M)):o(i)&&o(y)?(s(),c("div",U,[(s(),b(q,{key:l.playerKey,class:"player",form:o(i),params:o(e).query,broker:o(y),"enable-auto-focus":!0,onNavigate:m,onLogout:_},null,8,["form","params","broker"]))])):o(h)?(s(),c("div",W,[(s(),b(F,{key:l.playerKey,class:"player","is-preview":!1,params:o(e).query,"dash-player-state":o(h),onNavigate:m},null,8,["params","dash-player-state"]))])):(s(),c("div",X,ee))}});const we=T(te,[["__scopeId","data-v-7a49cef6"]]);export{we as default};
//# sourceMappingURL=Player.9c3d2e3a.js.map
