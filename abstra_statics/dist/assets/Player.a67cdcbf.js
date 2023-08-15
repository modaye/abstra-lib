import{r as R}from"./index.583d9fee.js";import{u as g}from"./uuid.be78828a.js";import{F as q,R as x}from"./broker.39a2ed6c.js";import{d as S,v as B,a2 as k,K as m,z as a,b as s,c as u,e as K,t as w,J as E,H as N,O,Q as T,x as d,q as F}from"./registerWidgets.5bc8efb7.js";import{D as L,m as C}from"./DashPlayer.e9a8f199.js";import{a as V}from"./asyncComputed.7bb233f8.js";import{r as j,n as z}from"./runnerData.5d645a93.js";import{L as A}from"./CircularLoading.32e238be.js";import"./passwordlessManager.42602b26.js";import"./pubsub.d656fdf8.js";import"./icons.7b79c43b.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.c2ee2198.js";import"./Passwordless.c1c6ad73.js";import"./executeJs.a4c394ac.js";import"./PlayerNavbar.3ea28865.js";import"./WidgetsFrame.1761d33b.js";import"./colors.c0a0e941.js";import"./Modal.8ffa06d3.js";import"./lottie.0691a110.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="2289f5d9-1658-42c2-97c4-5183ee0859c4",r._sentryDebugIdIdentifier="sentry-dbid-2289f5d9-1658-42c2-97c4-5183ee0859c4")}catch{}})();async function H(r){const e=await fetch(`/_api/${r}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n,dash:c}=await e.json();return{form:n&&j(n),dash:c&&z(c)}}const p=r=>(O("data-v-ee57bae4"),r=r(),T(),r),J={key:0,class:"loading"},Q={key:1,class:"error"},$=p(()=>d("h1",null,"Oops! Something went wrong",-1)),G=p(()=>d("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),M=[$,G],U={key:2,class:"form"},W={key:3,class:"dash-wrapper"},X={key:4,class:"error not-found"},Y=p(()=>d("h1",null,"Page not found",-1)),Z=p(()=>d("p",null,"The page you requested could not be found.",-1)),ee=[Y,Z],te=S({__name:"Player",setup(r){const e=E(),n=N(),c=B({playerKey:g()}),f=({path:t})=>{n.push({name:"player",query:e.query,params:{path:t.split("/")}})},_=async()=>{c.playerKey=g()};k([()=>e.path,()=>e.query],()=>_());const{loading:b,result:o,error:D}=V(()=>{var t;return H((t=e.path.slice(1))!=null?t:"")}),y=m(()=>l.value?x.create({formPath:l.value.path}):null),l=m(()=>{var t,i;return(i=(t=o.value)==null?void 0:t.form)!=null?i:null}),h=m(()=>{var i,v;if(!((i=o.value)!=null&&i.dash))return null;const t=C((v=o.value)==null?void 0:v.dash);return t.onRedirect(({url:I,queryParams:P})=>R(n,I,P)),t});return k(o,()=>{var t;!o.value||(o.value.form?document.title=(t=o.value.form.welcomeTitle)!=null?t:o.value.form.title:o.value.dash&&(document.title=o.value.dash.title))}),(t,i)=>a(b)?(s(),u("div",J,[K(A)])):a(D)?(s(),u("div",Q,M)):a(l)&&a(y)?(s(),u("div",U,[(s(),w(q,{key:c.playerKey,class:"player",form:a(l),params:a(e).query,broker:a(y),"enable-auto-focus":!0,onNavigate:f,onLogout:_},null,8,["form","params","broker"]))])):a(h)?(s(),u("div",W,[(s(),w(L,{key:c.playerKey,class:"player","is-preview":!1,params:a(e).query,"dash-player-service":a(h),onNavigate:f},null,8,["params","dash-player-service"]))])):(s(),u("div",X,ee))}});const we=F(te,[["__scopeId","data-v-ee57bae4"]]);export{we as default};
//# sourceMappingURL=Player.a67cdcbf.js.map
