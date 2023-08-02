import{r as R}from"./index.51af7d9d.js";import{u as b}from"./log.c23fbc0d.js";import{F as q,R as x}from"./broker.91d8b3eb.js";import{d as S,v as B,R as g,K as f,z as o,b as s,c as u,e as K,t as w,J as E,H as L,O as N,Q as O,x as d,q as T}from"./registerWidgets.e8bf9be7.js";import{D as F,n as C}from"./DashPlayer.0919ecc3.js";import{a as V}from"./asyncComputed.15c1fcc9.js";import{r as j,n as z}from"./runnerData.160b1b07.js";import{L as A}from"./CircularLoading.a096735f.js";import"./passwordlessManager.22684bfc.js";import"./icons.d2d6a2d6.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.3f298a1f.js";import"./Passwordless.2932362a.js";import"./executeJs.50543402.js";import"./PlayerNavbar.79973c72.js";import"./WidgetsFrame.2af7c238.js";import"./colors.73d0e71d.js";import"./Modal.eeedb03e.js";import"./lottie.b4c9148a.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="2abd4edb-e78f-4c24-aa9b-a5fc0b7b93f5",a._sentryDebugIdIdentifier="sentry-dbid-2abd4edb-e78f-4c24-aa9b-a5fc0b7b93f5")}catch{}})();async function H(a){const e=await fetch(`/_api/${a}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n,dash:c}=await e.json();return{form:n&&j(n),dash:c&&z(c)}}const p=a=>(N("data-v-7a49cef6"),a=a(),O(),a),J={key:0,class:"loading"},Q={key:1,class:"error"},$=p(()=>d("h1",null,"Oops! Something went wrong",-1)),G=p(()=>d("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),M=[$,G],U={key:2,class:"form"},W={key:3,class:"dash-wrapper"},X={key:4,class:"error not-found"},Y=p(()=>d("h1",null,"Page not found",-1)),Z=p(()=>d("p",null,"The page you requested could not be found.",-1)),ee=[Y,Z],te=S({__name:"Player",setup(a){const e=E(),n=L(),c=B({playerKey:b()}),m=({path:t})=>{n.push({name:"player",query:e.query,params:{path:t.split("/")}})},_=async()=>{c.playerKey=b()};g([()=>e.path,()=>e.query],()=>_());const{loading:k,result:r,error:D}=V(()=>{var t;return H((t=e.path.slice(1))!=null?t:"")}),y=f(()=>i.value?x.create({isLocal:!1,isPreview:!1,formPath:i.value.path}):null),i=f(()=>{var t,l;return(l=(t=r.value)==null?void 0:t.form)!=null?l:null}),h=f(()=>{var l,v;if(!((l=r.value)!=null&&l.dash))return null;const t=C.create((v=r.value)==null?void 0:v.dash,!1);return t.onRedirect(({url:P,queryParams:I})=>R(n,P,I)),t});return g(r,()=>{var t;!r.value||(r.value.form?document.title=(t=r.value.form.welcomeTitle)!=null?t:r.value.form.title:r.value.dash&&(document.title=r.value.dash.title))}),(t,l)=>o(k)?(s(),u("div",J,[K(A)])):o(D)?(s(),u("div",Q,M)):o(i)&&o(y)?(s(),u("div",U,[(s(),w(q,{key:c.playerKey,class:"player",form:o(i),params:o(e).query,broker:o(y),"enable-auto-focus":!0,onNavigate:m,onLogout:_},null,8,["form","params","broker"]))])):o(h)?(s(),u("div",W,[(s(),w(F,{key:c.playerKey,class:"player","is-preview":!1,params:o(e).query,"dash-player-state":o(h),onNavigate:m},null,8,["params","dash-player-state"]))])):(s(),u("div",X,ee))}});const ge=T(te,[["__scopeId","data-v-7a49cef6"]]);export{ge as default};
//# sourceMappingURL=Player.7fea3840.js.map
