import{q as i,a as s,b as _,c as p,e as c,f as m,g as d,_ as t,h as u,T as h,i as l,P as g,C as v,M as E,I as f,s as b,j as r,k as I,l as w,m as y,n as D}from"./registerWidgets.cbdb5b20.js";import{p as A}from"./passwordlessManager.e35aa24f.js";import{u as P}from"./index.7f770457.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="e9a468be-b51b-4119-9f9a-99312a45c24f",e._sentryDebugIdIdentifier="sentry-dbid-e9a468be-b51b-4119-9f9a-99312a45c24f")}catch{}})();const T={},V={style:{height:"100vh","box-sizing":"border-box",width:"100%"}};function R(e,o){const n=s("router-view");return _(),p("div",V,[c(n)])}const L=i(T,[["render",R]]),a=m({history:d("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./WidgetPreview.d3e2c3d1.js"),["assets/WidgetPreview.d3e2c3d1.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.57bc0719.js","assets/registerWidgets.cbdb5b20.js","assets/registerWidgets.a7e6ab4f.css","assets/WidgetsFrame.f7623078.js","assets/colors.5e58f28b.js","assets/WidgetsFrame.701a818b.css","assets/WidgetPreview.83bab6c7.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./Login.135d3f16.js"),["assets/Login.135d3f16.js","assets/Passwordless.68a5dd9f.js","assets/CircularLoading.afc6a364.js","assets/lottie.3c633a53.js","assets/registerWidgets.cbdb5b20.js","assets/registerWidgets.a7e6ab4f.css","assets/CircularLoading.f81b57b4.css","assets/icons.0be4624f.js","assets/passwordlessManager.e35aa24f.js","assets/Passwordless.2b58e538.css","assets/Navbar.fdd7a903.js","assets/logo.084e5d7c.js","assets/asyncComputed.0300d9e5.js","assets/Navbar.a5a179d1.css","assets/member.cafd6100.js","assets/gateway.7f691d9f.js","assets/activeRecord.aaef4d59.js","assets/Login.8e4eb3db.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>t(()=>import("./Organizations.b4ccca4a.js"),["assets/Organizations.b4ccca4a.js","assets/registerWidgets.cbdb5b20.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.0be4624f.js","assets/asyncComputed.0300d9e5.js","assets/gateway.7f691d9f.js","assets/passwordlessManager.e35aa24f.js","assets/organization.4a4a64f2.js","assets/activeRecord.aaef4d59.js","assets/CrudView.181c5be7.js","assets/DropdownMenu.fc9bfa79.js","assets/DropdownMenu.4f69c722.css","assets/Modal.990e902a.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.4ff91a29.js","assets/lottie.3c633a53.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css","assets/Navbar.fdd7a903.js","assets/logo.084e5d7c.js","assets/Navbar.a5a179d1.css","assets/Organizations.07de1b82.css"])},{path:"/organizations/:organizationId",name:"organization",component:()=>t(()=>import("./Organization.4890373d.js"),["assets/Organization.4890373d.js","assets/Sidebar.52b48bab.js","assets/registerWidgets.cbdb5b20.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.0be4624f.js","assets/Tooltip.a3e48250.js","assets/Tooltip.63c4352e.css","assets/Sidebar.054bea37.css","assets/Navbar.fdd7a903.js","assets/logo.084e5d7c.js","assets/passwordlessManager.e35aa24f.js","assets/asyncComputed.0300d9e5.js","assets/Navbar.a5a179d1.css","assets/gateway.7f691d9f.js","assets/organization.4a4a64f2.js","assets/activeRecord.aaef4d59.js","assets/Organization.b3fd9094.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>t(()=>import("./Projects.e74968eb.js"),["assets/Projects.e74968eb.js","assets/registerWidgets.cbdb5b20.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.0be4624f.js","assets/asyncComputed.0300d9e5.js","assets/project.73c89df6.js","assets/gateway.7f691d9f.js","assets/passwordlessManager.e35aa24f.js","assets/activeRecord.aaef4d59.js","assets/organization.4a4a64f2.js","assets/CrudView.181c5be7.js","assets/DropdownMenu.fc9bfa79.js","assets/DropdownMenu.4f69c722.css","assets/Modal.990e902a.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.4ff91a29.js","assets/lottie.3c633a53.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css"])},{path:"settings",name:"organization-settings",component:()=>t(()=>import("./OrganizationSettings.d4230b9b.js"),["assets/OrganizationSettings.d4230b9b.js","assets/registerWidgets.cbdb5b20.js","assets/registerWidgets.a7e6ab4f.css"])},{path:"members",name:"members",component:()=>t(()=>import("./Members.477901c2.js"),["assets/Members.477901c2.js","assets/registerWidgets.cbdb5b20.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.0300d9e5.js","assets/gateway.7f691d9f.js","assets/passwordlessManager.e35aa24f.js","assets/member.cafd6100.js","assets/activeRecord.aaef4d59.js","assets/CrudView.181c5be7.js","assets/DropdownMenu.fc9bfa79.js","assets/DropdownMenu.4f69c722.css","assets/Modal.990e902a.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.4ff91a29.js","assets/lottie.3c633a53.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css"])}]},{path:"/projects/:projectId",name:"project",component:()=>t(()=>import("./Project.beff5e2d.js"),["assets/Project.beff5e2d.js","assets/registerWidgets.cbdb5b20.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.0300d9e5.js","assets/project.73c89df6.js","assets/gateway.7f691d9f.js","assets/passwordlessManager.e35aa24f.js","assets/activeRecord.aaef4d59.js","assets/organization.4a4a64f2.js","assets/Navbar.fdd7a903.js","assets/logo.084e5d7c.js","assets/Navbar.a5a179d1.css","assets/Sidebar.52b48bab.js","assets/icons.0be4624f.js","assets/Tooltip.a3e48250.js","assets/Tooltip.63c4352e.css","assets/Sidebar.054bea37.css","assets/Project.f8096c33.css"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>t(()=>import("./Builds.aa93ad90.js"),["assets/Builds.aa93ad90.js","assets/registerWidgets.cbdb5b20.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.0300d9e5.js","assets/gateway.7f691d9f.js","assets/passwordlessManager.e35aa24f.js","assets/build.6d67065b.js","assets/activeRecord.aaef4d59.js","assets/CrudView.181c5be7.js","assets/DropdownMenu.fc9bfa79.js","assets/DropdownMenu.4f69c722.css","assets/Modal.990e902a.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.4ff91a29.js","assets/lottie.3c633a53.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css","assets/Builds.bb724135.css"])},{path:"api-keys",name:"api-keys",component:()=>t(()=>import("./ApiKeys.3f4f2717.js"),["assets/ApiKeys.3f4f2717.js","assets/registerWidgets.cbdb5b20.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.0300d9e5.js","assets/project.73c89df6.js","assets/gateway.7f691d9f.js","assets/passwordlessManager.e35aa24f.js","assets/activeRecord.aaef4d59.js","assets/member.cafd6100.js","assets/CrudView.181c5be7.js","assets/DropdownMenu.fc9bfa79.js","assets/DropdownMenu.4f69c722.css","assets/Modal.990e902a.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.4ff91a29.js","assets/lottie.3c633a53.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css","assets/icons.0be4624f.js","assets/ApiKeys.1adf158a.css"])},{path:"logs",name:"logs",component:()=>t(()=>import("./Logs.160cc645.js"),["assets/Logs.160cc645.js","assets/registerWidgets.cbdb5b20.js","assets/registerWidgets.a7e6ab4f.css","assets/gateway.7f691d9f.js","assets/passwordlessManager.e35aa24f.js","assets/build.6d67065b.js","assets/activeRecord.aaef4d59.js","assets/asyncComputed.0300d9e5.js","assets/LoadingIndicator.4ff91a29.js","assets/lottie.3c633a53.js","assets/LoadingIndicator.f4d31167.css","assets/Logs.2db855e9.css"])},{path:"settings",name:"project-settings",component:()=>t(()=>import("./ProjectSettings.bd54c6b9.js"),["assets/ProjectSettings.bd54c6b9.js","assets/asyncComputed.0300d9e5.js","assets/registerWidgets.cbdb5b20.js","assets/registerWidgets.a7e6ab4f.css","assets/project.73c89df6.js","assets/gateway.7f691d9f.js","assets/passwordlessManager.e35aa24f.js","assets/activeRecord.aaef4d59.js","assets/index.7f770457.js","assets/CircularLoading.afc6a364.js","assets/lottie.3c633a53.js","assets/CircularLoading.f81b57b4.css","assets/icons.0be4624f.js","assets/ProjectSettings.b8d779fa.css"])},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVars.7488895d.js"),["assets/EnvVars.7488895d.js","assets/registerWidgets.cbdb5b20.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.0300d9e5.js","assets/gateway.7f691d9f.js","assets/passwordlessManager.e35aa24f.js","assets/activeRecord.aaef4d59.js","assets/CrudView.181c5be7.js","assets/DropdownMenu.fc9bfa79.js","assets/DropdownMenu.4f69c722.css","assets/Modal.990e902a.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.4ff91a29.js","assets/lottie.3c633a53.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css","assets/icons.0be4624f.js"])}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{P(e,o);const n=A.getUser();if(!e.meta.allowUnauthenticated&&!n){await a.push({name:"login"});return}});(async()=>{const e=u({render:()=>I(L)});h.init(),l(e,a),e.use(a),e.use(g),e.mount("#app"),e.component("VSelect",v),e.component("Markdown",E),e.component("Icon",f),e.component("Message",b),r(e,w),r(e,y),r(e,D)})();
//# sourceMappingURL=console.93d39d6a.js.map
