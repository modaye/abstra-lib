import{q as i,a as s,b as _,c as p,e as c,f as m,g as d,_ as t,h as u,T as h,i as l,P as g,C as v,M as E,I as b,s as f,j as r,k as I,l as w,m as y,n as D}from"./registerWidgets.eddc32f4.js";import{p as A}from"./passwordlessManager.8b97cbcd.js";import{u as P}from"./index.611a11f3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="302a01a8-b734-42cc-b60b-5bf5b299150e",e._sentryDebugIdIdentifier="sentry-dbid-302a01a8-b734-42cc-b60b-5bf5b299150e")}catch{}})();const T={},V={style:{height:"100vh","box-sizing":"border-box",width:"100%"}};function R(e,o){const n=s("router-view");return _(),p("div",V,[c(n)])}const L=i(T,[["render",R]]),a=m({history:d("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./WidgetPreview.480666f9.js"),["assets/WidgetPreview.480666f9.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.93a730d7.js","assets/registerWidgets.eddc32f4.js","assets/registerWidgets.a7e6ab4f.css","assets/WidgetsFrame.b21a0c80.js","assets/colors.bcdf4144.js","assets/WidgetsFrame.701a818b.css","assets/WidgetPreview.83bab6c7.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./Login.2f9b04f0.js"),["assets/Login.2f9b04f0.js","assets/Passwordless.a3421c62.js","assets/CircularLoading.c96bd1c9.js","assets/lottie.6d443700.js","assets/registerWidgets.eddc32f4.js","assets/registerWidgets.a7e6ab4f.css","assets/CircularLoading.f81b57b4.css","assets/icons.54ab2234.js","assets/passwordlessManager.8b97cbcd.js","assets/Passwordless.2b58e538.css","assets/Navbar.9761abf7.js","assets/logo.084e5d7c.js","assets/asyncComputed.562c187e.js","assets/Navbar.a5a179d1.css","assets/member.f4bff51a.js","assets/gateway.7d65591c.js","assets/activeRecord.ed4e0294.js","assets/Login.8e4eb3db.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>t(()=>import("./Organizations.42318211.js"),["assets/Organizations.42318211.js","assets/registerWidgets.eddc32f4.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.54ab2234.js","assets/asyncComputed.562c187e.js","assets/gateway.7d65591c.js","assets/passwordlessManager.8b97cbcd.js","assets/organization.bf5e7e86.js","assets/activeRecord.ed4e0294.js","assets/CrudView.4dc213ee.js","assets/DropdownMenu.07e05b99.js","assets/DropdownMenu.4f69c722.css","assets/Modal.bb1eb9c5.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.f662ca6a.js","assets/lottie.6d443700.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css","assets/Navbar.9761abf7.js","assets/logo.084e5d7c.js","assets/Navbar.a5a179d1.css","assets/Organizations.07de1b82.css"])},{path:"/organizations/:organizationId",name:"organization",component:()=>t(()=>import("./Organization.d2f43c0c.js"),["assets/Organization.d2f43c0c.js","assets/Sidebar.b07e9ce8.js","assets/registerWidgets.eddc32f4.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.54ab2234.js","assets/Tooltip.fd35ea5a.js","assets/Tooltip.63c4352e.css","assets/Sidebar.054bea37.css","assets/Navbar.9761abf7.js","assets/logo.084e5d7c.js","assets/passwordlessManager.8b97cbcd.js","assets/asyncComputed.562c187e.js","assets/Navbar.a5a179d1.css","assets/gateway.7d65591c.js","assets/organization.bf5e7e86.js","assets/activeRecord.ed4e0294.js","assets/Organization.b3fd9094.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>t(()=>import("./Projects.9ada1837.js"),["assets/Projects.9ada1837.js","assets/registerWidgets.eddc32f4.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.54ab2234.js","assets/asyncComputed.562c187e.js","assets/project.87bcd326.js","assets/gateway.7d65591c.js","assets/passwordlessManager.8b97cbcd.js","assets/activeRecord.ed4e0294.js","assets/organization.bf5e7e86.js","assets/CrudView.4dc213ee.js","assets/DropdownMenu.07e05b99.js","assets/DropdownMenu.4f69c722.css","assets/Modal.bb1eb9c5.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.f662ca6a.js","assets/lottie.6d443700.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css"])},{path:"settings",name:"organization-settings",component:()=>t(()=>import("./OrganizationSettings.75437f56.js"),["assets/OrganizationSettings.75437f56.js","assets/registerWidgets.eddc32f4.js","assets/registerWidgets.a7e6ab4f.css"])},{path:"members",name:"members",component:()=>t(()=>import("./Members.df081e1f.js"),["assets/Members.df081e1f.js","assets/registerWidgets.eddc32f4.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.562c187e.js","assets/gateway.7d65591c.js","assets/passwordlessManager.8b97cbcd.js","assets/member.f4bff51a.js","assets/activeRecord.ed4e0294.js","assets/CrudView.4dc213ee.js","assets/DropdownMenu.07e05b99.js","assets/DropdownMenu.4f69c722.css","assets/Modal.bb1eb9c5.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.f662ca6a.js","assets/lottie.6d443700.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css"])}]},{path:"/projects/:projectId",name:"project",component:()=>t(()=>import("./Project.74af72e0.js"),["assets/Project.74af72e0.js","assets/registerWidgets.eddc32f4.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.562c187e.js","assets/project.87bcd326.js","assets/gateway.7d65591c.js","assets/passwordlessManager.8b97cbcd.js","assets/activeRecord.ed4e0294.js","assets/organization.bf5e7e86.js","assets/Navbar.9761abf7.js","assets/logo.084e5d7c.js","assets/Navbar.a5a179d1.css","assets/Sidebar.b07e9ce8.js","assets/icons.54ab2234.js","assets/Tooltip.fd35ea5a.js","assets/Tooltip.63c4352e.css","assets/Sidebar.054bea37.css","assets/Project.f8096c33.css"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>t(()=>import("./Builds.fbe847f1.js"),["assets/Builds.fbe847f1.js","assets/registerWidgets.eddc32f4.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.562c187e.js","assets/gateway.7d65591c.js","assets/passwordlessManager.8b97cbcd.js","assets/build.501050a0.js","assets/activeRecord.ed4e0294.js","assets/CrudView.4dc213ee.js","assets/DropdownMenu.07e05b99.js","assets/DropdownMenu.4f69c722.css","assets/Modal.bb1eb9c5.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.f662ca6a.js","assets/lottie.6d443700.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css","assets/Builds.bb724135.css"])},{path:"api-keys",name:"api-keys",component:()=>t(()=>import("./ApiKeys.513c4902.js"),["assets/ApiKeys.513c4902.js","assets/registerWidgets.eddc32f4.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.562c187e.js","assets/project.87bcd326.js","assets/gateway.7d65591c.js","assets/passwordlessManager.8b97cbcd.js","assets/activeRecord.ed4e0294.js","assets/member.f4bff51a.js","assets/CrudView.4dc213ee.js","assets/DropdownMenu.07e05b99.js","assets/DropdownMenu.4f69c722.css","assets/Modal.bb1eb9c5.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.f662ca6a.js","assets/lottie.6d443700.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css","assets/icons.54ab2234.js","assets/ApiKeys.1adf158a.css"])},{path:"logs",name:"logs",component:()=>t(()=>import("./Logs.b4971557.js"),["assets/Logs.b4971557.js","assets/registerWidgets.eddc32f4.js","assets/registerWidgets.a7e6ab4f.css","assets/gateway.7d65591c.js","assets/passwordlessManager.8b97cbcd.js","assets/build.501050a0.js","assets/activeRecord.ed4e0294.js","assets/asyncComputed.562c187e.js","assets/LoadingIndicator.f662ca6a.js","assets/lottie.6d443700.js","assets/LoadingIndicator.f4d31167.css","assets/Logs.2db855e9.css"])},{path:"settings",name:"project-settings",component:()=>t(()=>import("./ProjectSettings.5d5590aa.js"),["assets/ProjectSettings.5d5590aa.js","assets/asyncComputed.562c187e.js","assets/registerWidgets.eddc32f4.js","assets/registerWidgets.a7e6ab4f.css","assets/project.87bcd326.js","assets/gateway.7d65591c.js","assets/passwordlessManager.8b97cbcd.js","assets/activeRecord.ed4e0294.js","assets/index.611a11f3.js","assets/CircularLoading.c96bd1c9.js","assets/lottie.6d443700.js","assets/CircularLoading.f81b57b4.css","assets/icons.54ab2234.js","assets/ProjectSettings.b8d779fa.css"])},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVars.6203d044.js"),["assets/EnvVars.6203d044.js","assets/registerWidgets.eddc32f4.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.562c187e.js","assets/gateway.7d65591c.js","assets/passwordlessManager.8b97cbcd.js","assets/activeRecord.ed4e0294.js","assets/CrudView.4dc213ee.js","assets/DropdownMenu.07e05b99.js","assets/DropdownMenu.4f69c722.css","assets/Modal.bb1eb9c5.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.f662ca6a.js","assets/lottie.6d443700.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css","assets/icons.54ab2234.js"])}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{P(e,o);const n=A.getUser();if(!e.meta.allowUnauthenticated&&!n){await a.push({name:"login"});return}});(async()=>{const e=u({render:()=>I(L)});h.init(),l(e,a),e.use(a),e.use(g),e.mount("#app"),e.component("VSelect",v),e.component("Markdown",E),e.component("Icon",b),e.component("Message",f),r(e,w),r(e,y),r(e,D)})();
//# sourceMappingURL=console.b36eb1d8.js.map