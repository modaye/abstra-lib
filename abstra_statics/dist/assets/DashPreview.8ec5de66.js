import{d as v,K as D,b as d,c as g,z as t,t as p,D as l,F as w,J as b,H as k,q as I}from"./registerWidgets.cbdb5b20.js";import{D as P,n as q}from"./DashPlayer.bf1e81a8.js";import{L as x}from"./CircularLoading.afc6a364.js";import{r as B}from"./index.7f770457.js";import{B as R}from"./BackButton.dbc7fbc7.js";import{a as m}from"./asyncComputed.0300d9e5.js";import{D as C}from"./dashes.3d8c9d38.js";import{W as F}from"./workspaces.155e53a8.js";import"./passwordlessManager.e35aa24f.js";import"./runnerData.eafa97d7.js";import"./executeJs.01238954.js";import"./PlayerNavbar.85edbf52.js";import"./icons.0be4624f.js";import"./WidgetsFrame.f7623078.js";import"./colors.5e58f28b.js";import"./Modal.990e902a.js";import"./log.ee5dbee7.js";import"./Passwordless.68a5dd9f.js";import"./lottie.3c633a53.js";import"./activeRecord.aaef4d59.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="76d06559-da61-4d7d-943e-b2e48738db5f",s._sentryDebugIdIdentifier="sentry-dbid-76d06559-da61-4d7d-943e-b2e48738db5f")}catch{}})();const E=v({__name:"DashPreview",setup(s){const a=b(),o=k(),c=({id:e,type:n})=>{n==="dash"?(o.push({name:"dashPreview",params:{dashId:e},query:a.query}),h()):o.push({name:"form-preview",params:{formId:e},query:a.query})},f=()=>{var e;!((e=r.value)!=null&&e.path)||o.push(`/_editor/dash/${encodeURIComponent(r.value.path)}`)},{loading:y,result:r,refetch:h}=m(()=>C.get(a.params.dashPath)),{result:u}=m(()=>F.get()),i=D(()=>{if(!r.value||!u.value||!r.value.makeRunnerData(u.value))return null;const e=q.create(r.value.makeRunnerData(u.value),!1);return e.onRedirect(({url:n,queryParams:_})=>B(o,n,_)),e});return(e,n)=>(d(),g(w,null,[t(y)||!t(r)?(d(),p(x,{key:0,class:"loading",justify:"center"})):l("",!0),t(i)?(d(),p(P,{key:1,class:"player",dash:t(i).runnerData,"is-preview":!0,params:t(a).query,"dash-player-state":t(i),onNavigate:c},null,8,["dash","params","dash-player-state"])):l("",!0),t(r)?(d(),p(R,{key:2,onExitFullscreenPreview:f})):l("",!0)],64))}});const Z=I(E,[["__scopeId","data-v-dde58483"]]);export{Z as default};
//# sourceMappingURL=DashPreview.8ec5de66.js.map
