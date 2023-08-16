import{d as _,K as g,b as d,c as w,z as t,t as c,D as p,F as D,J as k,H as b,q as I}from"./registerWidgets.92ed860b.js";import{D as P,m as q}from"./DashPlayer.133be6f9.js";import{L as x}from"./CircularLoading.1435f7ec.js";import{r as B}from"./index.e894f02b.js";import{B as R}from"./BackButton.3d8e5b22.js";import{a as m}from"./asyncComputed.13be15a6.js";import{D as C}from"./dashes.a8d72ad0.js";import{W as F}from"./workspaces.b7c14823.js";import"./runnerData.02fabb16.js";import"./executeJs.fc58e689.js";import"./PlayerNavbar.f6b06a87.js";import"./icons.b8b5d1f6.js";import"./WidgetsFrame.6d5c1d36.js";import"./colors.59b645ba.js";import"./Modal.80d69340.js";import"./passwordlessManager.63c7fadc.js";import"./pubsub.f2d2508d.js";import"./Passwordless.ca04fd6e.js";import"./lottie.7dca37a3.js";import"./activeRecord.e849f28c.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[r]="177fdd61-94ed-4ca4-951f-ebd506da2fac",s._sentryDebugIdIdentifier="sentry-dbid-177fdd61-94ed-4ca4-951f-ebd506da2fac")}catch{}})();const E=_({__name:"DashPreview",setup(s){const r=k(),o=b(),l=({id:e,type:n})=>{n==="dash"?(o.push({name:"dashPreview",params:{dashId:e},query:r.query}),y()):o.push({name:"form-preview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||o.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:h,result:a,refetch:y}=m(()=>C.get(r.params.dashPath)),{result:i}=m(()=>F.get()),u=g(()=>{if(!a.value||!i.value||!a.value.makeRunnerData(i.value))return null;const e=q(a.value.makeRunnerData(i.value));return e.onRedirect(({url:n,queryParams:v})=>B(o,n,v)),e});return(e,n)=>(d(),w(D,null,[t(h)||!t(a)?(d(),c(x,{key:0,class:"loading",justify:"center"})):p("",!0),t(u)?(d(),c(P,{key:1,class:"player",dash:t(u).runnerData,"widgets-with-errors":[],"is-preview":!0,params:t(r).query,"dash-player-service":t(u),onNavigate:l},null,8,["dash","params","dash-player-service"])):p("",!0),t(a)?(d(),c(R,{key:2,onExitFullscreenPreview:f})):p("",!0)],64))}});const Z=I(E,[["__scopeId","data-v-7fc555dd"]]);export{Z as default};
//# sourceMappingURL=DashPreview.a451a508.js.map