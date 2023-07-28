import{d as v,K as D,b as u,c as g,z as t,t as p,D as c,F as b,J as w,H as k,q as I}from"./registerWidgets.2bf05ebf.js";import{D as P,n as q}from"./DashPlayer.d462bcd4.js";import{L as x}from"./CircularLoading.241c7a75.js";import{r as B}from"./index.f4fb1870.js";import{B as R}from"./BackButton.d7c557b8.js";import{a as l}from"./asyncComputed.62d26af7.js";import{D as C}from"./dashes.ae5de64c.js";import{W as F}from"./workspaces.9470181f.js";import"./passwordlessManager.08604e70.js";import"./runnerData.9c56a670.js";import"./executeJs.1794ca1e.js";import"./PlayerNavbar.f854b9fe.js";import"./icons.2362754f.js";import"./WidgetsFrame.fb0a9801.js";import"./colors.fe4743a3.js";import"./Modal.5e63635f.js";import"./log.290e7122.js";import"./Passwordless.be7b0055.js";import"./lottie.314baab9.js";import"./activeRecord.ffd94d66.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="a7b8cee0-f5e5-4be0-ad77-cbca14f8ed84",s._sentryDebugIdIdentifier="sentry-dbid-a7b8cee0-f5e5-4be0-ad77-cbca14f8ed84")}catch{}})();const E=v({__name:"DashPreview",setup(s){const a=w(),o=k(),m=({id:e,type:n})=>{n==="dash"?(o.push({name:"dashPreview",params:{dashId:e},query:a.query}),h()):o.push({name:"form-preview",params:{formId:e},query:a.query})},f=()=>{var e;!((e=r.value)!=null&&e.path)||o.push(`/_editor/dash/${encodeURIComponent(r.value.path)}`)},{loading:y,result:r,refetch:h}=l(()=>C.get(a.params.dashPath)),{result:d}=l(()=>F.get()),i=D(()=>{if(!r.value||!d.value||!r.value.makeRunnerData(d.value))return null;const e=q.create(r.value.makeRunnerData(d.value),!1);return e.onRedirect(({url:n,queryParams:_})=>B(o,n,_)),e});return(e,n)=>(u(),g(b,null,[t(y)||!t(r)?(u(),p(x,{key:0,class:"loading",justify:"center"})):c("",!0),t(i)?(u(),p(P,{key:1,class:"player",dash:t(i).runnerData,"is-preview":!0,params:t(a).query,"dash-player-state":t(i),onNavigate:m},null,8,["dash","params","dash-player-state"])):c("",!0),t(r)?(u(),p(R,{key:2,onExitFullscreenPreview:f})):c("",!0)],64))}});const Z=I(E,[["__scopeId","data-v-dde58483"]]);export{Z as default};
//# sourceMappingURL=DashPreview.7db3788c.js.map