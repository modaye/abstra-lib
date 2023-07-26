import{r as b}from"./index.6f0d5525.js";import{u as k}from"./log.0073b587.js";import{F as x,R as S}from"./broker.4829432d.js";import{d as B,u as I,Q as g,J as m,y as o,b as r,c as u,e as N,q as w,H as K,G as L,N as O,O as T,v as p,p as E}from"./registerWidgets.04dc761e.js";import{D as F,n as C}from"./DashPlayer.79dbd8c0.js";import{a as V}from"./asyncComputed.e0f43af3.js";import{r as j,n as A}from"./runnerData.91239e67.js";import{L as G}from"./CircularLoading.78e37a70.js";import"./passwordlessManager.271a8058.js";import"./icons.d4e872e2.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.c4424b2b.js";import"./Passwordless.0107ba48.js";import"./executeJs.740555ed.js";import"./PlayerNavbar.c204244e.js";import"./WidgetsFrame.e00c0ab1.js";import"./Modal.02341c49.js";async function H(s){const t=await fetch(`/_api/${s}`);if(t.status==404)return null;if(!t.ok)throw new Error(await t.text());const{form:c,dash:n}=await t.json();return{form:c&&j(c),dash:n&&A(n)}}const d=s=>(O("data-v-7a49cef6"),s=s(),T(),s),J={key:0,class:"loading"},Q={key:1,class:"error"},$=d(()=>p("h1",null,"Oops! Something went wrong",-1)),z=d(()=>p("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),M=[$,z],U={key:2,class:"form"},W={key:3,class:"dash-wrapper"},X={key:4,class:"error not-found"},Y=d(()=>p("h1",null,"Page not found",-1)),Z=d(()=>p("p",null,"The page you requested could not be found.",-1)),ee=[Y,Z],te=B({__name:"Player",setup(s){const t=K(),c=L(),n=I({playerKey:k()}),_=({path:e})=>{c.push({name:"player",query:t.query,params:{path:e.split("/")}})},f=async()=>{n.playerKey=k()};g([()=>t.path,()=>t.query],()=>f());const{loading:P,result:a,error:R}=V(()=>{var e;return H((e=t.path.slice(1))!=null?e:"")}),h=m(()=>i.value?S.create({isLocal:!1,isPreview:!1,formPath:i.value.path}):null),i=m(()=>{var e,l;return(l=(e=a.value)==null?void 0:e.form)!=null?l:null}),y=m(()=>{var l,v;if(!((l=a.value)!=null&&l.dash))return null;const e=C.create((v=a.value)==null?void 0:v.dash,!1);return e.onRedirect(({url:q,queryParams:D})=>b(c,q,D)),e});return g(a,()=>{var e;!a.value||(a.value.form?document.title=(e=a.value.form.welcomeTitle)!=null?e:a.value.form.title:a.value.dash&&(document.title=a.value.dash.title))}),(e,l)=>o(P)?(r(),u("div",J,[N(G)])):o(R)?(r(),u("div",Q,M)):o(i)&&o(h)?(r(),u("div",U,[(r(),w(x,{key:n.playerKey,class:"player",form:o(i),params:o(t).query,broker:o(h),"enable-auto-focus":!0,onNavigate:_,onLogout:f},null,8,["form","params","broker"]))])):o(y)?(r(),u("div",W,[(r(),w(F,{key:n.playerKey,class:"player","is-preview":!1,params:o(t).query,"dash-player-state":o(y),onNavigate:_},null,8,["params","dash-player-state"]))])):(r(),u("div",X,ee))}});const ve=E(te,[["__scopeId","data-v-7a49cef6"]]);export{ve as default};
//# sourceMappingURL=Player.9f1a865f.js.map