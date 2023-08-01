import{q as i,a as s,b as _,c as p,e as c,f as m,g as d,_ as t,h as u,T as h,i as l,P as g,C as v,M as E,I as f,s as I,j as r,k as b,l as w,m as y,n as D}from"./registerWidgets.8e2e133d.js";import{p as A}from"./passwordlessManager.cb9f88a0.js";import{u as P}from"./index.a245f875.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="61889223-88df-429e-85c9-bc1fcacd5916",e._sentryDebugIdIdentifier="sentry-dbid-61889223-88df-429e-85c9-bc1fcacd5916")}catch{}})();const T={},V={style:{height:"100vh","box-sizing":"border-box",width:"100%"}};function R(e,o){const n=s("router-view");return _(),p("div",V,[c(n)])}const L=i(T,[["render",R]]),a=m({history:d("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./WidgetPreview.6845e6d5.js"),["assets/WidgetPreview.6845e6d5.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.20bd37d2.js","assets/registerWidgets.8e2e133d.js","assets/registerWidgets.448db7e9.css","assets/WidgetsFrame.c12866fb.js","assets/colors.351121a9.js","assets/WidgetsFrame.701a818b.css","assets/WidgetPreview.83bab6c7.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./Login.dfa89028.js"),["assets/Login.dfa89028.js","assets/Passwordless.399a4808.js","assets/CircularLoading.b144822c.js","assets/lottie.7a1c6d39.js","assets/registerWidgets.8e2e133d.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.f81b57b4.css","assets/icons.35c960d1.js","assets/passwordlessManager.cb9f88a0.js","assets/Passwordless.2b58e538.css","assets/Navbar.df60a519.js","assets/logo.084e5d7c.js","assets/asyncComputed.a6090ca2.js","assets/Navbar.a5a179d1.css","assets/member.7e42d6a2.js","assets/gateway.57276d9e.js","assets/activeRecord.eba5e90d.js","assets/Login.8e4eb3db.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>t(()=>import("./Organizations.fa12ac8b.js"),["assets/Organizations.fa12ac8b.js","assets/registerWidgets.8e2e133d.js","assets/registerWidgets.448db7e9.css","assets/icons.35c960d1.js","assets/asyncComputed.a6090ca2.js","assets/gateway.57276d9e.js","assets/passwordlessManager.cb9f88a0.js","assets/organization.7a481b36.js","assets/activeRecord.eba5e90d.js","assets/CrudView.927f6207.js","assets/DropdownMenu.fda067f6.js","assets/DropdownMenu.4f69c722.css","assets/Modal.2a0bcd16.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.e71709b4.js","assets/lottie.7a1c6d39.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css","assets/Navbar.df60a519.js","assets/logo.084e5d7c.js","assets/Navbar.a5a179d1.css","assets/Organizations.07de1b82.css"])},{path:"/organizations/:organizationId",name:"organization",component:()=>t(()=>import("./Organization.e6a35773.js"),["assets/Organization.e6a35773.js","assets/Sidebar.30d791c2.js","assets/registerWidgets.8e2e133d.js","assets/registerWidgets.448db7e9.css","assets/icons.35c960d1.js","assets/Tooltip.4245b6a5.js","assets/Tooltip.63c4352e.css","assets/Sidebar.054bea37.css","assets/Navbar.df60a519.js","assets/logo.084e5d7c.js","assets/passwordlessManager.cb9f88a0.js","assets/asyncComputed.a6090ca2.js","assets/Navbar.a5a179d1.css","assets/gateway.57276d9e.js","assets/organization.7a481b36.js","assets/activeRecord.eba5e90d.js","assets/Organization.b3fd9094.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>t(()=>import("./Projects.de3049ce.js"),["assets/Projects.de3049ce.js","assets/registerWidgets.8e2e133d.js","assets/registerWidgets.448db7e9.css","assets/icons.35c960d1.js","assets/asyncComputed.a6090ca2.js","assets/project.6c682a76.js","assets/gateway.57276d9e.js","assets/passwordlessManager.cb9f88a0.js","assets/activeRecord.eba5e90d.js","assets/organization.7a481b36.js","assets/CrudView.927f6207.js","assets/DropdownMenu.fda067f6.js","assets/DropdownMenu.4f69c722.css","assets/Modal.2a0bcd16.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.e71709b4.js","assets/lottie.7a1c6d39.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css"])},{path:"settings",name:"organization-settings",component:()=>t(()=>import("./OrganizationSettings.e90c5753.js"),["assets/OrganizationSettings.e90c5753.js","assets/registerWidgets.8e2e133d.js","assets/registerWidgets.448db7e9.css"])},{path:"members",name:"members",component:()=>t(()=>import("./Members.12bb1bcd.js"),["assets/Members.12bb1bcd.js","assets/registerWidgets.8e2e133d.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.a6090ca2.js","assets/gateway.57276d9e.js","assets/passwordlessManager.cb9f88a0.js","assets/member.7e42d6a2.js","assets/activeRecord.eba5e90d.js","assets/CrudView.927f6207.js","assets/DropdownMenu.fda067f6.js","assets/DropdownMenu.4f69c722.css","assets/Modal.2a0bcd16.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.e71709b4.js","assets/lottie.7a1c6d39.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css"])}]},{path:"/projects/:projectId",name:"project",component:()=>t(()=>import("./Project.74c48bca.js"),["assets/Project.74c48bca.js","assets/registerWidgets.8e2e133d.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.a6090ca2.js","assets/project.6c682a76.js","assets/gateway.57276d9e.js","assets/passwordlessManager.cb9f88a0.js","assets/activeRecord.eba5e90d.js","assets/organization.7a481b36.js","assets/Navbar.df60a519.js","assets/logo.084e5d7c.js","assets/Navbar.a5a179d1.css","assets/Sidebar.30d791c2.js","assets/icons.35c960d1.js","assets/Tooltip.4245b6a5.js","assets/Tooltip.63c4352e.css","assets/Sidebar.054bea37.css","assets/Project.f8096c33.css"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>t(()=>import("./Builds.0f41bb14.js"),["assets/Builds.0f41bb14.js","assets/registerWidgets.8e2e133d.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.a6090ca2.js","assets/gateway.57276d9e.js","assets/passwordlessManager.cb9f88a0.js","assets/build.2dafa1e5.js","assets/activeRecord.eba5e90d.js","assets/CrudView.927f6207.js","assets/DropdownMenu.fda067f6.js","assets/DropdownMenu.4f69c722.css","assets/Modal.2a0bcd16.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.e71709b4.js","assets/lottie.7a1c6d39.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css","assets/Builds.bb724135.css"])},{path:"api-keys",name:"api-keys",component:()=>t(()=>import("./ApiKeys.fa0dfce2.js"),["assets/ApiKeys.fa0dfce2.js","assets/registerWidgets.8e2e133d.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.a6090ca2.js","assets/project.6c682a76.js","assets/gateway.57276d9e.js","assets/passwordlessManager.cb9f88a0.js","assets/activeRecord.eba5e90d.js","assets/member.7e42d6a2.js","assets/CrudView.927f6207.js","assets/DropdownMenu.fda067f6.js","assets/DropdownMenu.4f69c722.css","assets/Modal.2a0bcd16.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.e71709b4.js","assets/lottie.7a1c6d39.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css","assets/icons.35c960d1.js","assets/ApiKeys.1adf158a.css"])},{path:"logs",name:"logs",component:()=>t(()=>import("./Logs.8072ffcf.js"),["assets/Logs.8072ffcf.js","assets/registerWidgets.8e2e133d.js","assets/registerWidgets.448db7e9.css","assets/gateway.57276d9e.js","assets/passwordlessManager.cb9f88a0.js","assets/build.2dafa1e5.js","assets/activeRecord.eba5e90d.js","assets/asyncComputed.a6090ca2.js","assets/LoadingIndicator.e71709b4.js","assets/lottie.7a1c6d39.js","assets/LoadingIndicator.f4d31167.css","assets/Logs.2db855e9.css"])},{path:"settings",name:"project-settings",component:()=>t(()=>import("./ProjectSettings.0fba1388.js"),["assets/ProjectSettings.0fba1388.js","assets/asyncComputed.a6090ca2.js","assets/registerWidgets.8e2e133d.js","assets/registerWidgets.448db7e9.css","assets/project.6c682a76.js","assets/gateway.57276d9e.js","assets/passwordlessManager.cb9f88a0.js","assets/activeRecord.eba5e90d.js","assets/index.a245f875.js","assets/CircularLoading.b144822c.js","assets/lottie.7a1c6d39.js","assets/CircularLoading.f81b57b4.css","assets/icons.35c960d1.js","assets/ProjectSettings.b8d779fa.css"])},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVars.15bb7c95.js"),["assets/EnvVars.15bb7c95.js","assets/registerWidgets.8e2e133d.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.a6090ca2.js","assets/gateway.57276d9e.js","assets/passwordlessManager.cb9f88a0.js","assets/activeRecord.eba5e90d.js","assets/CrudView.927f6207.js","assets/DropdownMenu.fda067f6.js","assets/DropdownMenu.4f69c722.css","assets/Modal.2a0bcd16.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.e71709b4.js","assets/lottie.7a1c6d39.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css","assets/icons.35c960d1.js"])}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{P(e,o);const n=A.getUser();if(!e.meta.allowUnauthenticated&&!n){await a.push({name:"login"});return}});(async()=>{const e=u({render:()=>b(L)});h.init(),l(e,a),e.use(a),e.use(g),e.mount("#app"),e.component("VSelect",v),e.component("Markdown",E),e.component("Icon",f),e.component("Message",I),r(e,w),r(e,y),r(e,D)})();
//# sourceMappingURL=console.41c4831e.js.map
