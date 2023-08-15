import{d as _,K as g,b as i,c as w,z as t,t as c,D as p,F as D,J as k,H as b,q as I}from"./registerWidgets.787b786f.js";import{D as P,m as q}from"./DashPlayer.b825c6ff.js";import{L as x}from"./CircularLoading.738c357f.js";import{r as B}from"./index.a4839d52.js";import{B as R}from"./BackButton.86ee95d9.js";import{a as m}from"./asyncComputed.3103aa62.js";import{D as C}from"./dashes.b0973cc4.js";import{W as F}from"./workspaces.e031793d.js";import"./runnerData.7ed5e5ab.js";import"./executeJs.0a44fba5.js";import"./PlayerNavbar.7e0c6963.js";import"./icons.e9d866c3.js";import"./WidgetsFrame.ffa4e614.js";import"./colors.d63f40df.js";import"./Modal.9eb19c24.js";import"./passwordlessManager.42099b8c.js";import"./pubsub.dd86dbcf.js";import"./Passwordless.a8ede9c5.js";import"./lottie.221bef6b.js";import"./activeRecord.f8b90405.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="a258c919-adfc-4aa8-a654-5276fa667b15",s._sentryDebugIdIdentifier="sentry-dbid-a258c919-adfc-4aa8-a654-5276fa667b15")}catch{}})();const E=_({__name:"DashPreview",setup(s){const a=k(),o=b(),l=({id:e,type:n})=>{n==="dash"?(o.push({name:"dashPreview",params:{dashId:e},query:a.query}),y()):o.push({name:"form-preview",params:{formId:e},query:a.query})},f=()=>{var e;!((e=r.value)!=null&&e.path)||o.push(`/_editor/dash/${encodeURIComponent(r.value.path)}`)},{loading:h,result:r,refetch:y}=m(()=>C.get(a.params.dashPath)),{result:u}=m(()=>F.get()),d=g(()=>{if(!r.value||!u.value||!r.value.makeRunnerData(u.value))return null;const e=q(r.value.makeRunnerData(u.value));return e.onRedirect(({url:n,queryParams:v})=>B(o,n,v)),e});return(e,n)=>(i(),w(D,null,[t(h)||!t(r)?(i(),c(x,{key:0,class:"loading",justify:"center"})):p("",!0),t(d)?(i(),c(P,{key:1,class:"player",dash:t(d).runnerData,"widgets-with-errors":[],"is-preview":!0,params:t(a).query,"dash-player-service":t(d),onNavigate:l},null,8,["dash","params","dash-player-service"])):p("",!0),t(r)?(i(),c(R,{key:2,onExitFullscreenPreview:f})):p("",!0)],64))}});const Z=I(E,[["__scopeId","data-v-7fc555dd"]]);export{Z as default};
//# sourceMappingURL=DashPreview.c2b8b6f8.js.map
