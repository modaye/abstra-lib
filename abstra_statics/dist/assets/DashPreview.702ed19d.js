import{d as v,K as b,b as u,c as D,z as t,t as p,D as c,F as g,J as w,H as k,q as I}from"./registerWidgets.39370cce.js";import{D as P,n as q}from"./DashPlayer.280ba4ee.js";import{L as x}from"./CircularLoading.858c95df.js";import{r as B}from"./index.21ff4977.js";import{B as R}from"./BackButton.7d669242.js";import{a as l}from"./asyncComputed.588e6ddd.js";import{D as C}from"./dashes.8cfbe077.js";import{W as F}from"./workspaces.de9440d4.js";import"./passwordlessManager.6cd57365.js";import"./runnerData.561187a0.js";import"./executeJs.3ef70733.js";import"./PlayerNavbar.53686f75.js";import"./icons.c1d7cae2.js";import"./WidgetsFrame.65cd6786.js";import"./colors.9f487a75.js";import"./Modal.664ccd90.js";import"./log.1b415b40.js";import"./Passwordless.3318ed89.js";import"./lottie.576b6dda.js";import"./activeRecord.fab7288a.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="35bf1862-8fb2-4d75-b820-cdbc05da34c2",s._sentryDebugIdIdentifier="sentry-dbid-35bf1862-8fb2-4d75-b820-cdbc05da34c2")}catch{}})();const E=v({__name:"DashPreview",setup(s){const a=w(),o=k(),m=({id:e,type:n})=>{n==="dash"?(o.push({name:"dashPreview",params:{dashId:e},query:a.query}),h()):o.push({name:"form-preview",params:{formId:e},query:a.query})},f=()=>{var e;!((e=r.value)!=null&&e.path)||o.push(`/_editor/dash/${encodeURIComponent(r.value.path)}`)},{loading:y,result:r,refetch:h}=l(()=>C.get(a.params.dashPath)),{result:d}=l(()=>F.get()),i=b(()=>{if(!r.value||!d.value||!r.value.makeRunnerData(d.value))return null;const e=q.create(r.value.makeRunnerData(d.value),!1);return e.onRedirect(({url:n,queryParams:_})=>B(o,n,_)),e});return(e,n)=>(u(),D(g,null,[t(y)||!t(r)?(u(),p(x,{key:0,class:"loading",justify:"center"})):c("",!0),t(i)?(u(),p(P,{key:1,class:"player",dash:t(i).runnerData,"is-preview":!0,params:t(a).query,"dash-player-state":t(i),onNavigate:m},null,8,["dash","params","dash-player-state"])):c("",!0),t(r)?(u(),p(R,{key:2,onExitFullscreenPreview:f})):c("",!0)],64))}});const Z=I(E,[["__scopeId","data-v-dde58483"]]);export{Z as default};
//# sourceMappingURL=DashPreview.702ed19d.js.map
