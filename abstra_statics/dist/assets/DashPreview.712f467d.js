import{d as v,K as D,b as u,c as g,z as t,t as p,D as l,F as w,J as b,H as k,q as I}from"./registerWidgets.e8bf9be7.js";import{D as P,n as q}from"./DashPlayer.0919ecc3.js";import{L as x}from"./CircularLoading.a096735f.js";import{r as B}from"./index.51af7d9d.js";import{B as R}from"./BackButton.0c78961a.js";import{a as m}from"./asyncComputed.15c1fcc9.js";import{D as C}from"./dashes.52a67dc9.js";import{W as F}from"./workspaces.df4ff49f.js";import"./passwordlessManager.22684bfc.js";import"./runnerData.160b1b07.js";import"./executeJs.50543402.js";import"./PlayerNavbar.79973c72.js";import"./icons.d2d6a2d6.js";import"./WidgetsFrame.2af7c238.js";import"./colors.73d0e71d.js";import"./Modal.eeedb03e.js";import"./log.c23fbc0d.js";import"./Passwordless.2932362a.js";import"./lottie.b4c9148a.js";import"./activeRecord.66fd8f56.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="0b36d079-0c10-435f-b2ea-d52a6a148a70",s._sentryDebugIdIdentifier="sentry-dbid-0b36d079-0c10-435f-b2ea-d52a6a148a70")}catch{}})();const E=v({__name:"DashPreview",setup(s){const a=b(),o=k(),c=({id:e,type:n})=>{n==="dash"?(o.push({name:"dashPreview",params:{dashId:e},query:a.query}),h()):o.push({name:"form-preview",params:{formId:e},query:a.query})},f=()=>{var e;!((e=r.value)!=null&&e.path)||o.push(`/_editor/dash/${encodeURIComponent(r.value.path)}`)},{loading:y,result:r,refetch:h}=m(()=>C.get(a.params.dashPath)),{result:d}=m(()=>F.get()),i=D(()=>{if(!r.value||!d.value||!r.value.makeRunnerData(d.value))return null;const e=q.create(r.value.makeRunnerData(d.value),!1);return e.onRedirect(({url:n,queryParams:_})=>B(o,n,_)),e});return(e,n)=>(u(),g(w,null,[t(y)||!t(r)?(u(),p(x,{key:0,class:"loading",justify:"center"})):l("",!0),t(i)?(u(),p(P,{key:1,class:"player",dash:t(i).runnerData,"is-preview":!0,params:t(a).query,"dash-player-state":t(i),onNavigate:c},null,8,["dash","params","dash-player-state"])):l("",!0),t(r)?(u(),p(R,{key:2,onExitFullscreenPreview:f})):l("",!0)],64))}});const Z=I(E,[["__scopeId","data-v-dde58483"]]);export{Z as default};
//# sourceMappingURL=DashPreview.712f467d.js.map