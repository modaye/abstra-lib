import{q as i,a as s,b as _,c as p,e as c,f as m,g as d,_ as t,h as u,T as h,i as l,P as g,C as v,M as E,I as f,s as I,j as r,k as b,l as w,m as y,n as D}from"./registerWidgets.f021c1a4.js";import{p as A}from"./passwordlessManager.60015512.js";import{u as P}from"./index.4db2f83c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="39ed7c71-b729-4a86-9fd0-216733752e48",e._sentryDebugIdIdentifier="sentry-dbid-39ed7c71-b729-4a86-9fd0-216733752e48")}catch{}})();const T={},V={style:{height:"100vh","box-sizing":"border-box",width:"100%"}};function R(e,o){const n=s("router-view");return _(),p("div",V,[c(n)])}const L=i(T,[["render",R]]),a=m({history:d("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./WidgetPreview.f50e163a.js"),["assets/WidgetPreview.f50e163a.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.db19569b.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/WidgetsFrame.38d6628f.js","assets/colors.f679b0a6.js","assets/WidgetsFrame.701a818b.css","assets/WidgetPreview.83bab6c7.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./Login.2acb2e33.js"),["assets/Login.2acb2e33.js","assets/Passwordless.41457a61.js","assets/CircularLoading.403df380.js","assets/lottie.61fc86ea.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.f81b57b4.css","assets/icons.b993259e.js","assets/passwordlessManager.60015512.js","assets/Passwordless.2b58e538.css","assets/Navbar.3d36e674.js","assets/logo.084e5d7c.js","assets/asyncComputed.99b3d376.js","assets/Navbar.a5a179d1.css","assets/member.58abb3a0.js","assets/gateway.d0ae64bf.js","assets/activeRecord.ae1eba97.js","assets/Login.8e4eb3db.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>t(()=>import("./Organizations.f81c1db5.js"),["assets/Organizations.f81c1db5.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/icons.b993259e.js","assets/asyncComputed.99b3d376.js","assets/gateway.d0ae64bf.js","assets/passwordlessManager.60015512.js","assets/organization.a52b9df1.js","assets/activeRecord.ae1eba97.js","assets/CrudView.a17c3f4c.js","assets/DropdownMenu.65a6697e.js","assets/DropdownMenu.4f69c722.css","assets/Modal.05754801.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.a872de61.js","assets/lottie.61fc86ea.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css","assets/Navbar.3d36e674.js","assets/logo.084e5d7c.js","assets/Navbar.a5a179d1.css","assets/Organizations.07de1b82.css"])},{path:"/organizations/:organizationId",name:"organization",component:()=>t(()=>import("./Organization.5a8a1f42.js"),["assets/Organization.5a8a1f42.js","assets/Sidebar.46bf1150.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/icons.b993259e.js","assets/Tooltip.b38d7ca3.js","assets/Tooltip.63c4352e.css","assets/Sidebar.054bea37.css","assets/Navbar.3d36e674.js","assets/logo.084e5d7c.js","assets/passwordlessManager.60015512.js","assets/asyncComputed.99b3d376.js","assets/Navbar.a5a179d1.css","assets/gateway.d0ae64bf.js","assets/organization.a52b9df1.js","assets/activeRecord.ae1eba97.js","assets/Organization.b3fd9094.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>t(()=>import("./Projects.9252046a.js"),["assets/Projects.9252046a.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/icons.b993259e.js","assets/asyncComputed.99b3d376.js","assets/project.75a8cced.js","assets/gateway.d0ae64bf.js","assets/passwordlessManager.60015512.js","assets/activeRecord.ae1eba97.js","assets/organization.a52b9df1.js","assets/CrudView.a17c3f4c.js","assets/DropdownMenu.65a6697e.js","assets/DropdownMenu.4f69c722.css","assets/Modal.05754801.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.a872de61.js","assets/lottie.61fc86ea.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css"])},{path:"settings",name:"organization-settings",component:()=>t(()=>import("./OrganizationSettings.c3556dea.js"),["assets/OrganizationSettings.c3556dea.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css"])},{path:"members",name:"members",component:()=>t(()=>import("./Members.9cde76dc.js"),["assets/Members.9cde76dc.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.99b3d376.js","assets/gateway.d0ae64bf.js","assets/passwordlessManager.60015512.js","assets/member.58abb3a0.js","assets/activeRecord.ae1eba97.js","assets/CrudView.a17c3f4c.js","assets/DropdownMenu.65a6697e.js","assets/DropdownMenu.4f69c722.css","assets/Modal.05754801.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.a872de61.js","assets/lottie.61fc86ea.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css"])}]},{path:"/projects/:projectId",name:"project",component:()=>t(()=>import("./Project.1476470b.js"),["assets/Project.1476470b.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.99b3d376.js","assets/project.75a8cced.js","assets/gateway.d0ae64bf.js","assets/passwordlessManager.60015512.js","assets/activeRecord.ae1eba97.js","assets/organization.a52b9df1.js","assets/Navbar.3d36e674.js","assets/logo.084e5d7c.js","assets/Navbar.a5a179d1.css","assets/Sidebar.46bf1150.js","assets/icons.b993259e.js","assets/Tooltip.b38d7ca3.js","assets/Tooltip.63c4352e.css","assets/Sidebar.054bea37.css","assets/Project.f8096c33.css"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>t(()=>import("./Builds.6f47b20d.js"),["assets/Builds.6f47b20d.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.99b3d376.js","assets/gateway.d0ae64bf.js","assets/passwordlessManager.60015512.js","assets/build.f35e792a.js","assets/activeRecord.ae1eba97.js","assets/CrudView.a17c3f4c.js","assets/DropdownMenu.65a6697e.js","assets/DropdownMenu.4f69c722.css","assets/Modal.05754801.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.a872de61.js","assets/lottie.61fc86ea.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css","assets/Builds.bb724135.css"])},{path:"api-keys",name:"api-keys",component:()=>t(()=>import("./ApiKeys.ae27bf63.js"),["assets/ApiKeys.ae27bf63.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.99b3d376.js","assets/project.75a8cced.js","assets/gateway.d0ae64bf.js","assets/passwordlessManager.60015512.js","assets/activeRecord.ae1eba97.js","assets/member.58abb3a0.js","assets/CrudView.a17c3f4c.js","assets/DropdownMenu.65a6697e.js","assets/DropdownMenu.4f69c722.css","assets/Modal.05754801.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.a872de61.js","assets/lottie.61fc86ea.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css","assets/icons.b993259e.js","assets/ApiKeys.1adf158a.css"])},{path:"logs",name:"logs",component:()=>t(()=>import("./Logs.48c7b656.js"),["assets/Logs.48c7b656.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/gateway.d0ae64bf.js","assets/passwordlessManager.60015512.js","assets/build.f35e792a.js","assets/activeRecord.ae1eba97.js","assets/asyncComputed.99b3d376.js","assets/LoadingIndicator.a872de61.js","assets/lottie.61fc86ea.js","assets/LoadingIndicator.f4d31167.css","assets/Logs.2db855e9.css"])},{path:"settings",name:"project-settings",component:()=>t(()=>import("./ProjectSettings.846a69d9.js"),["assets/ProjectSettings.846a69d9.js","assets/asyncComputed.99b3d376.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/project.75a8cced.js","assets/gateway.d0ae64bf.js","assets/passwordlessManager.60015512.js","assets/activeRecord.ae1eba97.js","assets/index.4db2f83c.js","assets/CircularLoading.403df380.js","assets/lottie.61fc86ea.js","assets/CircularLoading.f81b57b4.css","assets/icons.b993259e.js","assets/ProjectSettings.b8d779fa.css"])},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVars.982c40a9.js"),["assets/EnvVars.982c40a9.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.99b3d376.js","assets/gateway.d0ae64bf.js","assets/passwordlessManager.60015512.js","assets/activeRecord.ae1eba97.js","assets/CrudView.a17c3f4c.js","assets/DropdownMenu.65a6697e.js","assets/DropdownMenu.4f69c722.css","assets/Modal.05754801.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.a872de61.js","assets/lottie.61fc86ea.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.0b2733d0.css","assets/icons.b993259e.js"])}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{P(e,o);const n=A.getUser();if(!e.meta.allowUnauthenticated&&!n){await a.push({name:"login"});return}});(async()=>{const e=u({render:()=>b(L)});h.init(),l(e,a),e.use(a),e.use(g),e.mount("#app"),e.component("VSelect",v),e.component("Markdown",E),e.component("Icon",f),e.component("Message",I),r(e,w),r(e,y),r(e,D)})();
//# sourceMappingURL=console.929451ca.js.map
