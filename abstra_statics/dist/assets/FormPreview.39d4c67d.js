import{d as P,v as x,r as F,K as R,b as n,c as i,z as e,t as B,e as d,x as I,H as q,J as E,q as D}from"./registerWidgets.553de467.js";import{L}from"./CircularLoading.01ebf7ca.js";import{E as C}from"./Error.ffdeff85.js";import{F as N,R as H}from"./broker.c01819c2.js";import{B as M}from"./BackButton.230539cd.js";import{a as _}from"./asyncComputed.2769eba5.js";import{F as V}from"./forms.957e46fa.js";import{W}from"./workspaces.4c56f4e3.js";import"./lottie.433e3d0f.js";import"./passwordlessManager.b79493a6.js";import"./icons.012820f9.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.e758ad17.js";import"./Passwordless.84c9704e.js";import"./executeJs.0d5b0965.js";import"./PlayerNavbar.1351341e.js";import"./index.1c59a5f6.js";import"./WidgetsFrame.f5cb9e50.js";import"./colors.ec843c1d.js";import"./Modal.3622aa4e.js";import"./log.85118ab9.js";import"./activeRecord.5283a3fc.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="d944db99-eb13-4e8d-9758-dfe77832630c",s._sentryDebugIdIdentifier="sentry-dbid-d944db99-eb13-4e8d-9758-dfe77832630c")}catch{}})();const z={class:"page"},J={key:1,class:"error"},K={key:2,style:{width:"100%",height:"100%",display:"flex"}},S={style:{width:"100%",height:"100%",display:"flex"}},U=P({__name:"FormPreview",setup(s){const t=q(),r=E(),a=x({started:!1}),m=F(null),{loading:h,result:c,error:u,refetch:p}=_(()=>V.get(r.params.formPath)),{result:f}=_(()=>W.get()),y=R(()=>H.create({isLocal:!1,formPath:r.params.formPath,isPreview:!0})),v=async()=>{var o;if(!a.started){(o=m.value)==null||o.run();return}a.started=!1},b=({path:o,type:l})=>{l==="dash"?t.push({name:"dashPreview",params:{dashPath:o},query:r.query}):(t.push({name:"form-preview",params:{formPath:o},query:r.query}),p())},g=()=>{t.push(`/_editor/form/${encodeURIComponent(r.params.formPath)}`)},w=()=>{a.started=!0},k=()=>{a.started=!1};return(o,l)=>(n(),i("div",z,[e(h)||!e(c)||!e(f)?(n(),B(L,{key:0})):e(u)?(n(),i("div",J,[d(C,{error:e(u),onReload:e(p)},null,8,["error","onReload"])])):(n(),i("main",K,[I("div",S,[d(N,{ref_key:"runner",ref:m,form:e(c).makeRunnerData(e(f)),params:e(r).query,"is-preview":!0,"enable-auto-focus":!0,broker:e(y),style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:b,onLogout:v,onExit:k,onStart:w},null,8,["form","params","broker"]),d(M,{onExitFullscreenPreview:g})])]))]))}});const ue=D(U,[["__scopeId","data-v-f7c2ba13"]]);export{ue as default};
//# sourceMappingURL=FormPreview.39d4c67d.js.map