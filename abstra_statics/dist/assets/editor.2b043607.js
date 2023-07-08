import{r as n,d as _,o as m,a as p,b as d,c,e as h,f as l,g as E,_ as e,h as u,T as b,P as v,C as A,M as P,I as T,s as f,i as o,j as I,k as D,l as V,m as R}from"./registerWidgets.bb4c7eff.js";import{u as L}from"./index.82e1a6b3.js";import{i as w}from"./sentry.2692e5c6.js";const s=n(!1),O=()=>{window.innerWidth<780?s.value=!0:s.value=!1},k={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},y=_({__name:"App",setup(t){return m(()=>{window.addEventListener("resize",O)}),(r,g)=>{const i=p("router-view");return d(),c("div",k,[h(i)])}}});const a=l({history:E("/"),routes:[{path:"/_editor/",name:"app",component:()=>e(()=>import("./Home.17c05de9.js"),["assets/Home.17c05de9.js","assets/Modal.bf534f7d.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/Modal.5aaf8eba.css","assets/Home.1c04d83a.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>e(()=>import("./Workspace.f499304d.js"),["assets/Workspace.f499304d.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/icons.97625e56.js","assets/Tooltip.e8984c12.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.0adffaf6.js","assets/workspaces.4c177a35.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/login.29b4c1f1.js","assets/Workspace.e5d0c579.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>e(()=>import("./Forms.b2d23bef.js"),["assets/Forms.b2d23bef.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/icons.97625e56.js","assets/asyncComputed.0adffaf6.js","assets/forms.91463966.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/RuntimeList.d9b613c2.js","assets/DropdownMenu.45ad2be4.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.dc3354c3.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>e(()=>import("./Dashes.93544362.js"),["assets/Dashes.93544362.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/icons.97625e56.js","assets/asyncComputed.0adffaf6.js","assets/dashes.922bdf25.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/runnerData.891fce22.js","assets/RuntimeList.d9b613c2.js","assets/DropdownMenu.45ad2be4.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.dc3354c3.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>e(()=>import("./Jobs.a33d5e47.js"),["assets/Jobs.a33d5e47.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/icons.97625e56.js","assets/asyncComputed.0adffaf6.js","assets/jobs.cb7d0efd.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/RuntimeList.d9b613c2.js","assets/DropdownMenu.45ad2be4.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.dc3354c3.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>e(()=>import("./Hooks.a03da5a0.js"),["assets/Hooks.a03da5a0.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/icons.97625e56.js","assets/asyncComputed.0adffaf6.js","assets/hooks.911e43af.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/RuntimeList.d9b613c2.js","assets/DropdownMenu.45ad2be4.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.dc3354c3.css"]),meta:{title:"Abstra - Hooks"}},{path:"tables",name:"tables",component:()=>e(()=>import("./Tables.39c6b643.js"),["assets/Tables.39c6b643.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/icons.97625e56.js","assets/asyncComputed.0adffaf6.js","assets/tables.0812fe41.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/RuntimeList.d9b613c2.js","assets/DropdownMenu.45ad2be4.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.dc3354c3.css"]),meta:{title:"Abstra - Tables"}},{path:"style",name:"style",component:()=>e(()=>import("./StyleEditor.132e2ccc.js"),["assets/StyleEditor.132e2ccc.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/asyncComputed.0adffaf6.js","assets/workspaces.4c177a35.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/index.82e1a6b3.js","assets/icons.97625e56.js","assets/SaveButton.4505bcbe.js","assets/SaveButton.40e9ccb6.css","assets/StyleEditor.b2884735.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>e(()=>import("./SidebarEditor.9164f754.js"),["assets/SidebarEditor.9164f754.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/workspaces.4c177a35.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/asyncComputed.0adffaf6.js","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.4505bcbe.js","assets/icons.97625e56.js","assets/SaveButton.40e9ccb6.css","assets/SidebarEditor.c4237693.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"editor",component:()=>e(()=>import("./FormEditor.cafe42d8.js"),["assets/FormEditor.cafe42d8.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/Error.93dd1e5c.js","assets/Error.5cfc41d8.css","assets/broker.ab29edba.js","assets/passwordlessManager.a806df6a.js","assets/icons.97625e56.js","assets/Passwordless.7dbc83c1.js","assets/Passwordless.c981501a.css","assets/WidgetsFrame.2804aa92.js","assets/index.82e1a6b3.js","assets/Modal.bf534f7d.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.ee163c82.css","assets/log.6e68571d.js","assets/broker.b057aed3.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.63f69ce1.js","assets/asyncComputed.0adffaf6.js","assets/forms.91463966.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/dashes.922bdf25.js","assets/runnerData.891fce22.js","assets/hooks.911e43af.js","assets/jobs.cb7d0efd.js","assets/workspaces.4c177a35.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.760aa826.css","assets/BackButton.1811d14c.js","assets/BackButton.ae9a631b.css","assets/FormEditor.32b73955.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"form-preview",component:()=>e(()=>import("./FormPreview.7614fb36.js"),["assets/FormPreview.7614fb36.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/Error.93dd1e5c.js","assets/Error.5cfc41d8.css","assets/broker.ab29edba.js","assets/passwordlessManager.a806df6a.js","assets/icons.97625e56.js","assets/Passwordless.7dbc83c1.js","assets/Passwordless.c981501a.css","assets/WidgetsFrame.2804aa92.js","assets/index.82e1a6b3.js","assets/Modal.bf534f7d.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.ee163c82.css","assets/log.6e68571d.js","assets/broker.b057aed3.css","assets/BackButton.0472a0fd.js","assets/BackButton.802d214e.css","assets/asyncComputed.0adffaf6.js","assets/forms.91463966.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/workspaces.4c177a35.js","assets/FormPreview.69e549a7.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>e(()=>import("./JobEditor.c6bb48f5.js"),["assets/JobEditor.c6bb48f5.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/BackButton.1811d14c.js","assets/BackButton.ae9a631b.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/asyncComputed.0adffaf6.js","assets/jobs.cb7d0efd.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/SaveButton.4505bcbe.js","assets/icons.97625e56.js","assets/SaveButton.40e9ccb6.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.63f69ce1.js","assets/forms.91463966.js","assets/dashes.922bdf25.js","assets/runnerData.891fce22.js","assets/hooks.911e43af.js","assets/workspaces.4c177a35.js","assets/log.6e68571d.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.760aa826.css","assets/JobEditor.408d8bc3.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>e(()=>import("./DashEditor.5e27fde9.js"),["assets/DashEditor.5e27fde9.js","assets/index.82e1a6b3.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/BackButton.1811d14c.js","assets/BackButton.ae9a631b.css","assets/icons.97625e56.js","assets/DashPlayer.21334f89.js","assets/passwordlessManager.a806df6a.js","assets/runnerData.891fce22.js","assets/WidgetsFrame.2804aa92.js","assets/Modal.bf534f7d.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.ee163c82.css","assets/log.6e68571d.js","assets/Passwordless.7dbc83c1.js","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.c981501a.css","assets/DashPlayer.f60035bd.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.63f69ce1.js","assets/asyncComputed.0adffaf6.js","assets/forms.91463966.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/dashes.922bdf25.js","assets/hooks.911e43af.js","assets/jobs.cb7d0efd.js","assets/workspaces.4c177a35.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.760aa826.css","assets/SaveButton.4505bcbe.js","assets/SaveButton.40e9ccb6.css","assets/DashEditor.10029962.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>e(()=>import("./DashPreview.f40d8efe.js"),["assets/DashPreview.f40d8efe.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/DashPlayer.21334f89.js","assets/passwordlessManager.a806df6a.js","assets/runnerData.891fce22.js","assets/WidgetsFrame.2804aa92.js","assets/icons.97625e56.js","assets/index.82e1a6b3.js","assets/Modal.bf534f7d.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.ee163c82.css","assets/log.6e68571d.js","assets/Passwordless.7dbc83c1.js","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.c981501a.css","assets/DashPlayer.f60035bd.css","assets/BackButton.0472a0fd.js","assets/BackButton.802d214e.css","assets/asyncComputed.0adffaf6.js","assets/dashes.922bdf25.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/workspaces.4c177a35.js","assets/DashPreview.4ac074a5.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>e(()=>import("./HookEditor.168f2219.js"),["assets/HookEditor.168f2219.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/BackButton.1811d14c.js","assets/BackButton.ae9a631b.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.63f69ce1.js","assets/icons.97625e56.js","assets/asyncComputed.0adffaf6.js","assets/forms.91463966.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/dashes.922bdf25.js","assets/runnerData.891fce22.js","assets/hooks.911e43af.js","assets/jobs.cb7d0efd.js","assets/workspaces.4c177a35.js","assets/log.6e68571d.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.760aa826.css","assets/SaveButton.4505bcbe.js","assets/SaveButton.40e9ccb6.css","assets/HookEditor.6b67e33b.css"]),meta:{title:"Abstra - Hook Editor"}},{path:"table/:tableName",name:"tableEditor",component:()=>e(()=>import("./TableEditor.2b4a9eba.js"),["assets/TableEditor.2b4a9eba.js","assets/asyncComputed.0adffaf6.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/tables.0812fe41.js","assets/utils.95f0e9e8.js","assets/pubsub.a0411919.js","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/BackButton.1811d14c.js","assets/BackButton.ae9a631b.css","assets/icons.97625e56.js","assets/TableEditor.73c06e25.css"]),meta:{title:"Abstra - Table Editor"}}]}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});a.beforeEach(async(t,r)=>{L(t,r)});(async()=>{const t=u({render:()=>I(y)});b.init(),w(t,a,"console.abstracloud.com"),t.use(a),t.use(v),t.mount("#app"),t.component("VSelect",A),t.component("Markdown",P),t.component("Icon",T),t.component("Message",f),o(t,D),o(t,V),o(t,R)})();
//# sourceMappingURL=editor.2b043607.js.map
