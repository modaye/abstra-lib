import{r as R}from"./index.eab4f300.js";import{u as g}from"./log.c389d378.js";import{F as q,R as x}from"./broker.74421085.js";import{d as S,v as B,R as w,K as f,z as o,b as s,c as u,e as K,t as k,J as E,H as L,O as N,Q as O,x as d,q as T}from"./registerWidgets.05268d5e.js";import{D as F,n as C}from"./DashPlayer.48ce6b09.js";import{a as V}from"./asyncComputed.8f90be18.js";import{r as j,n as z}from"./runnerData.dd957d35.js";import{L as A}from"./CircularLoading.b36562a7.js";import"./passwordlessManager.61e5b6aa.js";import"./icons.7c77483f.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.0b189a46.js";import"./Passwordless.272e470d.js";import"./executeJs.61bf027f.js";import"./PlayerNavbar.d7b76127.js";import"./WidgetsFrame.747ab74f.js";import"./colors.c1c56c5b.js";import"./Modal.ab17c1cc.js";import"./lottie.ea647b01.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="cd29ae8a-81f0-4f55-9806-b9781c735a30",a._sentryDebugIdIdentifier="sentry-dbid-cd29ae8a-81f0-4f55-9806-b9781c735a30")}catch{}})();async function H(a){const e=await fetch(`/_api/${a}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n,dash:c}=await e.json();return{form:n&&j(n),dash:c&&z(c)}}const p=a=>(N("data-v-7a49cef6"),a=a(),O(),a),J={key:0,class:"loading"},Q={key:1,class:"error"},$=p(()=>d("h1",null,"Oops! Something went wrong",-1)),G=p(()=>d("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),M=[$,G],U={key:2,class:"form"},W={key:3,class:"dash-wrapper"},X={key:4,class:"error not-found"},Y=p(()=>d("h1",null,"Page not found",-1)),Z=p(()=>d("p",null,"The page you requested could not be found.",-1)),ee=[Y,Z],te=S({__name:"Player",setup(a){const e=E(),n=L(),c=B({playerKey:g()}),m=({path:t})=>{n.push({name:"player",query:e.query,params:{path:t.split("/")}})},_=async()=>{c.playerKey=g()};w([()=>e.path,()=>e.query],()=>_());const{loading:b,result:r,error:D}=V(()=>{var t;return H((t=e.path.slice(1))!=null?t:"")}),y=f(()=>i.value?x.create({isLocal:!1,isPreview:!1,formPath:i.value.path}):null),i=f(()=>{var t,l;return(l=(t=r.value)==null?void 0:t.form)!=null?l:null}),h=f(()=>{var l,v;if(!((l=r.value)!=null&&l.dash))return null;const t=C.create((v=r.value)==null?void 0:v.dash,!1);return t.onRedirect(({url:P,queryParams:I})=>R(n,P,I)),t});return w(r,()=>{var t;!r.value||(r.value.form?document.title=(t=r.value.form.welcomeTitle)!=null?t:r.value.form.title:r.value.dash&&(document.title=r.value.dash.title))}),(t,l)=>o(b)?(s(),u("div",J,[K(A)])):o(D)?(s(),u("div",Q,M)):o(i)&&o(y)?(s(),u("div",U,[(s(),k(q,{key:c.playerKey,class:"player",form:o(i),params:o(e).query,broker:o(y),"enable-auto-focus":!0,onNavigate:m,onLogout:_},null,8,["form","params","broker"]))])):o(h)?(s(),u("div",W,[(s(),k(F,{key:c.playerKey,class:"player","is-preview":!1,params:o(e).query,"dash-player-state":o(h),onNavigate:m},null,8,["params","dash-player-state"]))])):(s(),u("div",X,ee))}});const we=T(te,[["__scopeId","data-v-7a49cef6"]]);export{we as default};
//# sourceMappingURL=Player.486eb509.js.map
