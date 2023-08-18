import{q as i,a as s,b as _,c,e as p,f as m,g as d,_ as t,h as u,T as h,i as l,P as g,C as E,M as v,I as b,s as f,j as a,k as I,l as w,m as y,n as D}from"./registerWidgets.309e60e2.js";import{p as A}from"./passwordlessManager.707ad0fd.js";import{u as P}from"./index.cbdbb816.js";import"./pubsub.5200d147.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="c4bc4a63-15cf-406c-bbdb-e9bcea55ffbd",e._sentryDebugIdIdentifier="sentry-dbid-c4bc4a63-15cf-406c-bbdb-e9bcea55ffbd")}catch{}})();const T={},V={style:{height:"100vh","box-sizing":"border-box",width:"100%"}};function R(e,o){const n=s("router-view");return _(),c("div",V,[p(n)])}const L=i(T,[["render",R]]),r=m({history:d("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./WidgetPreview.5afc244e.js"),["assets/WidgetPreview.5afc244e.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.2fe44b9d.js","assets/registerWidgets.309e60e2.js","assets/registerWidgets.448db7e9.css","assets/WidgetsFrame.47a399e3.js","assets/colors.c92fc37f.js","assets/WidgetsFrame.701a818b.css","assets/WidgetPreview.83bab6c7.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./Login.71dae63e.js"),["assets/Login.71dae63e.js","assets/Passwordless.80f7e38a.js","assets/CircularLoading.ab75fdfe.js","assets/lottie.e2f196ac.js","assets/registerWidgets.309e60e2.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.f81b57b4.css","assets/icons.5353538a.js","assets/passwordlessManager.707ad0fd.js","assets/pubsub.5200d147.js","assets/Passwordless.86ac0c56.css","assets/Navbar.590e241e.js","assets/logo.084e5d7c.js","assets/asyncComputed.b00f3898.js","assets/Navbar.a5a179d1.css","assets/member.a0b2037e.js","assets/gateway.51cb6e51.js","assets/activeRecord.fda98ee0.js","assets/Login.8e4eb3db.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>t(()=>import("./Organizations.186f50bf.js"),["assets/Organizations.186f50bf.js","assets/registerWidgets.309e60e2.js","assets/registerWidgets.448db7e9.css","assets/icons.5353538a.js","assets/asyncComputed.b00f3898.js","assets/gateway.51cb6e51.js","assets/passwordlessManager.707ad0fd.js","assets/pubsub.5200d147.js","assets/organization.ff0a826c.js","assets/activeRecord.fda98ee0.js","assets/index.1c1ab019.js","assets/CrudView.7aecf6b4.js","assets/DropdownMenu.5c576288.js","assets/DropdownMenu.4f69c722.css","assets/Modal.93f98c35.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.bc80793d.js","assets/lottie.e2f196ac.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css","assets/Navbar.590e241e.js","assets/logo.084e5d7c.js","assets/Navbar.a5a179d1.css","assets/Organizations.07de1b82.css"])},{path:"/organizations/:organizationId",name:"organization",component:()=>t(()=>import("./Organization.4312ba23.js"),["assets/Organization.4312ba23.js","assets/Sidebar.dbb27ab4.js","assets/registerWidgets.309e60e2.js","assets/registerWidgets.448db7e9.css","assets/icons.5353538a.js","assets/Tooltip.02f3eb3d.js","assets/Tooltip.63c4352e.css","assets/Sidebar.054bea37.css","assets/Navbar.590e241e.js","assets/logo.084e5d7c.js","assets/passwordlessManager.707ad0fd.js","assets/pubsub.5200d147.js","assets/asyncComputed.b00f3898.js","assets/Navbar.a5a179d1.css","assets/gateway.51cb6e51.js","assets/organization.ff0a826c.js","assets/activeRecord.fda98ee0.js","assets/index.1c1ab019.js","assets/Organization.b3fd9094.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>t(()=>import("./Projects.c5a995ed.js"),["assets/Projects.c5a995ed.js","assets/registerWidgets.309e60e2.js","assets/registerWidgets.448db7e9.css","assets/icons.5353538a.js","assets/asyncComputed.b00f3898.js","assets/project.eae49292.js","assets/gateway.51cb6e51.js","assets/passwordlessManager.707ad0fd.js","assets/pubsub.5200d147.js","assets/activeRecord.fda98ee0.js","assets/organization.ff0a826c.js","assets/index.1c1ab019.js","assets/CrudView.7aecf6b4.js","assets/DropdownMenu.5c576288.js","assets/DropdownMenu.4f69c722.css","assets/Modal.93f98c35.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.bc80793d.js","assets/lottie.e2f196ac.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css"])},{path:"settings",name:"organization-settings",component:()=>t(()=>import("./OrganizationSettings.23a0608d.js"),["assets/OrganizationSettings.23a0608d.js","assets/registerWidgets.309e60e2.js","assets/registerWidgets.448db7e9.css"])},{path:"members",name:"members",component:()=>t(()=>import("./Members.3df57349.js"),["assets/Members.3df57349.js","assets/registerWidgets.309e60e2.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.b00f3898.js","assets/gateway.51cb6e51.js","assets/passwordlessManager.707ad0fd.js","assets/pubsub.5200d147.js","assets/member.a0b2037e.js","assets/activeRecord.fda98ee0.js","assets/index.1c1ab019.js","assets/CrudView.7aecf6b4.js","assets/DropdownMenu.5c576288.js","assets/DropdownMenu.4f69c722.css","assets/Modal.93f98c35.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.bc80793d.js","assets/lottie.e2f196ac.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css"])}]},{path:"/projects/:projectId",name:"project",component:()=>t(()=>import("./Project.ca3dc57b.js"),["assets/Project.ca3dc57b.js","assets/registerWidgets.309e60e2.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.b00f3898.js","assets/project.eae49292.js","assets/gateway.51cb6e51.js","assets/passwordlessManager.707ad0fd.js","assets/pubsub.5200d147.js","assets/activeRecord.fda98ee0.js","assets/organization.ff0a826c.js","assets/index.1c1ab019.js","assets/Navbar.590e241e.js","assets/logo.084e5d7c.js","assets/Navbar.a5a179d1.css","assets/Sidebar.dbb27ab4.js","assets/icons.5353538a.js","assets/Tooltip.02f3eb3d.js","assets/Tooltip.63c4352e.css","assets/Sidebar.054bea37.css","assets/Project.efdfb078.css"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>t(()=>import("./Builds.126bea2b.js"),["assets/Builds.126bea2b.js","assets/registerWidgets.309e60e2.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.b00f3898.js","assets/gateway.51cb6e51.js","assets/passwordlessManager.707ad0fd.js","assets/pubsub.5200d147.js","assets/build.17310f0e.js","assets/activeRecord.fda98ee0.js","assets/index.1c1ab019.js","assets/CrudView.7aecf6b4.js","assets/DropdownMenu.5c576288.js","assets/DropdownMenu.4f69c722.css","assets/Modal.93f98c35.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.bc80793d.js","assets/lottie.e2f196ac.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css","assets/Builds.bb724135.css"])},{path:"connectors",name:"connectors",component:()=>t(()=>import("./Connectors.8d8351fd.js"),["assets/Connectors.8d8351fd.js","assets/registerWidgets.309e60e2.js","assets/registerWidgets.448db7e9.css","assets/index.1c1ab019.js","assets/gateway.51cb6e51.js","assets/passwordlessManager.707ad0fd.js","assets/pubsub.5200d147.js","assets/connector.95cf95c7.js","assets/activeRecord.fda98ee0.js","assets/asyncComputed.b00f3898.js","assets/icons.5353538a.js","assets/CrudView.7aecf6b4.js","assets/DropdownMenu.5c576288.js","assets/DropdownMenu.4f69c722.css","assets/Modal.93f98c35.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.bc80793d.js","assets/lottie.e2f196ac.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css"])},{path:"api-keys",name:"api-keys",component:()=>t(()=>import("./ApiKeys.bac95ab5.js"),["assets/ApiKeys.bac95ab5.js","assets/registerWidgets.309e60e2.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.b00f3898.js","assets/project.eae49292.js","assets/gateway.51cb6e51.js","assets/passwordlessManager.707ad0fd.js","assets/pubsub.5200d147.js","assets/activeRecord.fda98ee0.js","assets/member.a0b2037e.js","assets/index.1c1ab019.js","assets/CrudView.7aecf6b4.js","assets/DropdownMenu.5c576288.js","assets/DropdownMenu.4f69c722.css","assets/Modal.93f98c35.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.bc80793d.js","assets/lottie.e2f196ac.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css","assets/icons.5353538a.js","assets/ApiKeys.1adf158a.css"])},{path:"logs",name:"logs",component:()=>t(()=>import("./Logs.7971759f.js"),["assets/Logs.7971759f.js","assets/registerWidgets.309e60e2.js","assets/registerWidgets.448db7e9.css","assets/gateway.51cb6e51.js","assets/passwordlessManager.707ad0fd.js","assets/pubsub.5200d147.js","assets/build.17310f0e.js","assets/activeRecord.fda98ee0.js","assets/index.1c1ab019.js","assets/asyncComputed.b00f3898.js","assets/LoadingIndicator.bc80793d.js","assets/lottie.e2f196ac.js","assets/LoadingIndicator.f4d31167.css","assets/Logs.364fcb0a.css"])},{path:"settings",name:"project-settings",component:()=>t(()=>import("./ProjectSettings.0d0456f3.js"),["assets/ProjectSettings.0d0456f3.js","assets/asyncComputed.b00f3898.js","assets/registerWidgets.309e60e2.js","assets/registerWidgets.448db7e9.css","assets/project.eae49292.js","assets/gateway.51cb6e51.js","assets/passwordlessManager.707ad0fd.js","assets/pubsub.5200d147.js","assets/activeRecord.fda98ee0.js","assets/index.1c1ab019.js","assets/index.cbdbb816.js","assets/CircularLoading.ab75fdfe.js","assets/lottie.e2f196ac.js","assets/CircularLoading.f81b57b4.css","assets/icons.5353538a.js","assets/ProjectSettings.b8d779fa.css"])},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVars.c149c842.js"),["assets/EnvVars.c149c842.js","assets/registerWidgets.309e60e2.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.b00f3898.js","assets/gateway.51cb6e51.js","assets/passwordlessManager.707ad0fd.js","assets/pubsub.5200d147.js","assets/activeRecord.fda98ee0.js","assets/index.1c1ab019.js","assets/CrudView.7aecf6b4.js","assets/DropdownMenu.5c576288.js","assets/DropdownMenu.4f69c722.css","assets/Modal.93f98c35.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.bc80793d.js","assets/lottie.e2f196ac.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css","assets/icons.5353538a.js"])}]},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>t(()=>import("./ConnectorEditor.1197a0fd.js"),["assets/ConnectorEditor.1197a0fd.js","assets/registerWidgets.309e60e2.js","assets/registerWidgets.448db7e9.css","assets/index.1c1ab019.js","assets/gateway.51cb6e51.js","assets/passwordlessManager.707ad0fd.js","assets/pubsub.5200d147.js","assets/connector.95cf95c7.js","assets/activeRecord.fda98ee0.js","assets/asyncComputed.b00f3898.js","assets/BackButton.63cc1b1a.js","assets/BackButton.40348456.css","assets/SaveButton.eb6132df.js","assets/icons.5353538a.js","assets/SaveButton.c5392044.css","assets/CircularLoading.ab75fdfe.js","assets/lottie.e2f196ac.js","assets/CircularLoading.f81b57b4.css","assets/ConnectorEditor.93911b56.css"])}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});r.beforeEach(async(e,o)=>{P(e,o);const n=A.getUser();if(!e.meta.allowUnauthenticated&&!n){await r.push({name:"login"});return}});(async()=>{const e=u({render:()=>I(L)});h.init(),l(e,r),e.use(r),e.use(g),e.mount("#app"),e.component("VSelect",E),e.component("Markdown",v),e.component("Icon",b),e.component("Message",f),a(e,w),a(e,y),a(e,D)})();
//# sourceMappingURL=console.46e84358.js.map
