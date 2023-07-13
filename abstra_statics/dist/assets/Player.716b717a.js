import{r as D}from"./index.aeb68571.js";import{u as k}from"./log.f9199108.js";import{F as b,R as S}from"./broker.c113cf58.js";import{d as B,v as I,R as g,K as m,z as o,b as r,c as u,e as K,t as w,J as L,H as N,O,Q as T,x as p,q as E}from"./registerWidgets.4a0d8d45.js";import{D as F,n as C}from"./DashPlayer.df6fc421.js";import{a as V}from"./asyncComputed.52d81103.js";import{r as j,n as z}from"./runnerData.18839000.js";import{L as A}from"./CircularLoading.0d3d2390.js";import"./passwordlessManager.60e6c76f.js";import"./icons.e3de8035.js";import"./Passwordless.c13aa055.js";import"./WidgetsFrame.171c7126.js";import"./PlayerNavbar.e4922711.js";import"./Modal.2f62582a.js";async function H(s){const a=await fetch(`/_api/${s}`);if(a.status==404)return null;if(!a.ok)throw new Error(await a.text());const{form:c,dash:n}=await a.json();return{form:c&&j(c),dash:n&&z(n)}}const d=s=>(O("data-v-7a49cef6"),s=s(),T(),s),J={key:0,class:"loading"},Q={key:1,class:"error"},$=d(()=>p("h1",null,"Oops! Something went wrong",-1)),G=d(()=>p("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),M=[$,G],U={key:2,class:"form"},W={key:3,class:"dash-wrapper"},X={key:4,class:"error not-found"},Y=d(()=>p("h1",null,"Page not found",-1)),Z=d(()=>p("p",null,"The page you requested could not be found.",-1)),ee=[Y,Z],ae=B({__name:"Player",setup(s){const a=L(),c=N(),n=I({playerKey:k()}),_=({path:e})=>{c.push({name:"player",query:a.query,params:{path:e.split("/")}})},f=async()=>{n.playerKey=k()};g([()=>a.path,()=>a.query],()=>f());const{loading:P,result:t,error:R}=V(()=>{var e;return H((e=a.path.slice(1))!=null?e:"")}),h=m(()=>i.value?S.create({isLocal:!1,isPreview:!1,formPath:i.value.path}):null),i=m(()=>{var e,l;return(l=(e=t.value)==null?void 0:e.form)!=null?l:null}),y=m(()=>{var l,v;if(!((l=t.value)!=null&&l.dash))return null;const e=C.create((v=t.value)==null?void 0:v.dash,!1);return e.onRedirect(({url:q,queryParams:x})=>D(c,q,x)),e});return g(t,()=>{var e;!t.value||(t.value.form?document.title=(e=t.value.form.welcomeTitle)!=null?e:t.value.form.title:t.value.dash&&(document.title=t.value.dash.title))}),(e,l)=>o(P)?(r(),u("div",J,[K(A)])):o(R)?(r(),u("div",Q,M)):o(i)&&o(h)?(r(),u("div",U,[(r(),w(b,{key:n.playerKey,class:"player",form:o(i),params:o(a).query,broker:o(h),"enable-auto-focus":!0,onNavigate:_,onLogout:f},null,8,["form","params","broker"]))])):o(y)?(r(),u("div",W,[(r(),w(F,{key:n.playerKey,class:"player","is-preview":!1,params:o(a).query,"dash-player-state":o(y),onNavigate:_},null,8,["params","dash-player-state"]))])):(r(),u("div",X,ee))}});const he=E(ae,[["__scopeId","data-v-7a49cef6"]]);export{he as default};
//# sourceMappingURL=Player.716b717a.js.map