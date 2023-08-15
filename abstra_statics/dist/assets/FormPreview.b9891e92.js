import{d as x,v as P,r as F,K as R,b as n,c as i,z as e,t as B,e as d,x as I,H as q,J as E,q as D}from"./registerWidgets.787b786f.js";import{L as C}from"./CircularLoading.738c357f.js";import{E as L}from"./Error.1a51898a.js";import{F as N,R as H}from"./broker.d0c95620.js";import{B as M}from"./BackButton.86ee95d9.js";import{a as _}from"./asyncComputed.3103aa62.js";import{F as V}from"./forms.aa87a35c.js";import{W}from"./workspaces.e031793d.js";import"./lottie.221bef6b.js";import"./passwordlessManager.42099b8c.js";import"./pubsub.dd86dbcf.js";import"./icons.e9d866c3.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.9fa1407c.js";import"./Passwordless.a8ede9c5.js";import"./executeJs.0a44fba5.js";import"./PlayerNavbar.7e0c6963.js";import"./index.a4839d52.js";import"./WidgetsFrame.ffa4e614.js";import"./colors.d63f40df.js";import"./Modal.9eb19c24.js";import"./activeRecord.f8b90405.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="64fff06a-8454-41f7-b7cc-4ea920f7293c",a._sentryDebugIdIdentifier="sentry-dbid-64fff06a-8454-41f7-b7cc-4ea920f7293c")}catch{}})();const z={class:"page"},J={key:1,class:"error"},K={key:2,style:{width:"100%",height:"100%",display:"flex"}},S={style:{width:"100%",height:"100%",display:"flex"}},U=x({__name:"FormPreview",setup(a){const t=q(),r=E(),s=P({started:!1}),m=F(null),{loading:h,result:c,error:f,refetch:u}=_(()=>V.get(r.params.formPath)),{result:p}=_(()=>W.get()),y=R(()=>H.create({formPath:r.params.formPath})),v=async()=>{var o;if(!s.started){(o=m.value)==null||o.run();return}s.started=!1},g=({path:o,type:l})=>{l==="dash"?t.push({name:"dashPreview",params:{dashPath:o},query:r.query}):(t.push({name:"form-preview",params:{formPath:o},query:r.query}),u())},w=()=>{t.push(`/_editor/form/${encodeURIComponent(r.params.formPath)}`)},b=()=>{s.started=!0},k=()=>{s.started=!1};return(o,l)=>(n(),i("div",z,[e(h)||!e(c)||!e(p)?(n(),B(C,{key:0})):e(f)?(n(),i("div",J,[d(L,{error:e(f),onReload:e(u)},null,8,["error","onReload"])])):(n(),i("main",K,[I("div",S,[d(N,{ref_key:"runner",ref:m,form:e(c).makeRunnerData(e(p)),params:e(r).query,"is-preview":!0,"enable-auto-focus":!0,broker:e(y),style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:g,onLogout:v,onExit:k,onStart:b},null,8,["form","params","broker"]),d(M,{onExitFullscreenPreview:w})])]))]))}});const fe=D(U,[["__scopeId","data-v-2cdbdd7a"]]);export{fe as default};
//# sourceMappingURL=FormPreview.b9891e92.js.map
