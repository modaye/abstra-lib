import{r as n,d as _,o as m,a as p,b as d,c,e as h,f as l,g as E,_ as e,h as u,T as b,P as v,C as A,M as P,I as T,s as f,i as o,j as I,k as D,l as V,m as R}from"./registerWidgets.04dc761e.js";import{u as L}from"./index.6f0d5525.js";import{i as w}from"./sentry.2692e5c6.js";const s=n(!1),O=()=>{window.innerWidth<780?s.value=!0:s.value=!1},k={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},y=_({__name:"App",setup(t){return m(()=>{window.addEventListener("resize",O)}),(r,g)=>{const i=p("router-view");return d(),c("div",k,[h(i)])}}});const a=l({history:E("/"),routes:[{path:"/_editor/",name:"app",component:()=>e(()=>import("./Home.1a631b9d.js"),["assets/Home.1a631b9d.js","assets/Modal.02341c49.js","assets/registerWidgets.04dc761e.js","assets/registerWidgets.3aec804f.css","assets/Modal.5aaf8eba.css","assets/Home.1c04d83a.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>e(()=>import("./Workspace.c200f5ca.js"),["assets/Workspace.c200f5ca.js","assets/registerWidgets.04dc761e.js","assets/registerWidgets.3aec804f.css","assets/icons.d4e872e2.js","assets/Tooltip.4672f205.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.e0f43af3.js","assets/workspaces.741b6616.js","assets/activeRecord.57c6bf02.js","assets/login.29b4c1f1.js","assets/DocsButton.5c9fcb4f.js","assets/DocsButton.d2184c76.css","assets/Workspace.4d7eaba0.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>e(()=>import("./Forms.ec64c15c.js"),["assets/Forms.ec64c15c.js","assets/registerWidgets.04dc761e.js","assets/registerWidgets.3aec804f.css","assets/icons.d4e872e2.js","assets/asyncComputed.e0f43af3.js","assets/forms.cc593bbd.js","assets/activeRecord.57c6bf02.js","assets/RuntimeList.0a3aa9db.js","assets/DropdownMenu.d347b089.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.78e37a70.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>e(()=>import("./Dashes.37743ceb.js"),["assets/Dashes.37743ceb.js","assets/registerWidgets.04dc761e.js","assets/registerWidgets.3aec804f.css","assets/icons.d4e872e2.js","assets/asyncComputed.e0f43af3.js","assets/dashes.4aa38f44.js","assets/activeRecord.57c6bf02.js","assets/runnerData.91239e67.js","assets/RuntimeList.0a3aa9db.js","assets/DropdownMenu.d347b089.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.78e37a70.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>e(()=>import("./Jobs.ad43080a.js"),["assets/Jobs.ad43080a.js","assets/registerWidgets.04dc761e.js","assets/registerWidgets.3aec804f.css","assets/icons.d4e872e2.js","assets/asyncComputed.e0f43af3.js","assets/jobs.098bcb10.js","assets/activeRecord.57c6bf02.js","assets/RuntimeList.0a3aa9db.js","assets/DropdownMenu.d347b089.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.78e37a70.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>e(()=>import("./Hooks.4d88ea4d.js"),["assets/Hooks.4d88ea4d.js","assets/registerWidgets.04dc761e.js","assets/registerWidgets.3aec804f.css","assets/icons.d4e872e2.js","assets/asyncComputed.e0f43af3.js","assets/hooks.d59fb935.js","assets/activeRecord.57c6bf02.js","assets/RuntimeList.0a3aa9db.js","assets/DropdownMenu.d347b089.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.78e37a70.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Hooks"}},{path:"tables",name:"tables",component:()=>e(()=>import("./Tables.1f081090.js"),["assets/Tables.1f081090.js","assets/registerWidgets.04dc761e.js","assets/registerWidgets.3aec804f.css","assets/icons.d4e872e2.js","assets/asyncComputed.e0f43af3.js","assets/tables.1eeef4d2.js","assets/activeRecord.57c6bf02.js","assets/RuntimeList.0a3aa9db.js","assets/DropdownMenu.d347b089.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.78e37a70.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Tables"}},{path:"style",name:"style",component:()=>e(()=>import("./StyleEditor.85093f66.js"),["assets/StyleEditor.85093f66.js","assets/registerWidgets.04dc761e.js","assets/registerWidgets.3aec804f.css","assets/asyncComputed.e0f43af3.js","assets/workspaces.741b6616.js","assets/activeRecord.57c6bf02.js","assets/CircularLoading.78e37a70.js","assets/CircularLoading.f81b57b4.css","assets/icons.d4e872e2.js","assets/SidebarPreview.afcfd7c3.js","assets/PlayerNavbar.c204244e.js","assets/PlayerNavbar.1542e7ca.css","assets/runnerData.91239e67.js","assets/SidebarPreview.bcbdd067.css","assets/SaveButton.81b0cbf4.js","assets/SaveButton.7277f302.css","assets/StyleEditor.df51333d.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>e(()=>import("./SidebarEditor.73c42ff6.js"),["assets/SidebarEditor.73c42ff6.js","assets/registerWidgets.04dc761e.js","assets/registerWidgets.3aec804f.css","assets/workspaces.741b6616.js","assets/activeRecord.57c6bf02.js","assets/asyncComputed.e0f43af3.js","assets/CircularLoading.78e37a70.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.81b0cbf4.js","assets/icons.d4e872e2.js","assets/SaveButton.7277f302.css","assets/SidebarPreview.afcfd7c3.js","assets/PlayerNavbar.c204244e.js","assets/PlayerNavbar.1542e7ca.css","assets/runnerData.91239e67.js","assets/SidebarPreview.bcbdd067.css","assets/SidebarEditor.f65d95bf.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"editor",component:()=>e(()=>import("./FormEditor.4d33bafa.js"),["assets/FormEditor.4d33bafa.js","assets/registerWidgets.04dc761e.js","assets/registerWidgets.3aec804f.css","assets/CircularLoading.78e37a70.js","assets/CircularLoading.f81b57b4.css","assets/Error.75c6a6cf.js","assets/Error.5cfc41d8.css","assets/broker.4829432d.js","assets/passwordlessManager.271a8058.js","assets/icons.d4e872e2.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.c4424b2b.js","assets/Passwordless.0107ba48.js","assets/Passwordless.2b58e538.css","assets/executeJs.740555ed.js","assets/PlayerNavbar.c204244e.js","assets/PlayerNavbar.1542e7ca.css","assets/index.6f0d5525.js","assets/WidgetsFrame.e00c0ab1.js","assets/WidgetsFrame.cf328b77.css","assets/Modal.02341c49.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.0073b587.js","assets/broker.7a2eb540.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.9b504e6b.js","assets/asyncComputed.e0f43af3.js","assets/forms.cc593bbd.js","assets/activeRecord.57c6bf02.js","assets/dashes.4aa38f44.js","assets/runnerData.91239e67.js","assets/hooks.d59fb935.js","assets/jobs.098bcb10.js","assets/workspaces.741b6616.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/BackButton.846cedef.js","assets/BackButton.f2f3c401.css","assets/SaveButton.81b0cbf4.js","assets/SaveButton.7277f302.css","assets/DocsButton.5c9fcb4f.js","assets/DocsButton.d2184c76.css","assets/PreviewButton.ec857376.js","assets/PreviewButton.52324bbf.css","assets/FormEditor.14b0b0e9.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"form-preview",component:()=>e(()=>import("./FormPreview.8b18ec75.js"),["assets/FormPreview.8b18ec75.js","assets/registerWidgets.04dc761e.js","assets/registerWidgets.3aec804f.css","assets/CircularLoading.78e37a70.js","assets/CircularLoading.f81b57b4.css","assets/Error.75c6a6cf.js","assets/Error.5cfc41d8.css","assets/broker.4829432d.js","assets/passwordlessManager.271a8058.js","assets/icons.d4e872e2.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.c4424b2b.js","assets/Passwordless.0107ba48.js","assets/Passwordless.2b58e538.css","assets/executeJs.740555ed.js","assets/PlayerNavbar.c204244e.js","assets/PlayerNavbar.1542e7ca.css","assets/index.6f0d5525.js","assets/WidgetsFrame.e00c0ab1.js","assets/WidgetsFrame.cf328b77.css","assets/Modal.02341c49.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.0073b587.js","assets/broker.7a2eb540.css","assets/BackButton.093dc56e.js","assets/BackButton.dd542746.css","assets/asyncComputed.e0f43af3.js","assets/forms.cc593bbd.js","assets/activeRecord.57c6bf02.js","assets/workspaces.741b6616.js","assets/FormPreview.bcd09cdf.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>e(()=>import("./JobEditor.7ea3b0c6.js"),["assets/JobEditor.7ea3b0c6.js","assets/registerWidgets.04dc761e.js","assets/registerWidgets.3aec804f.css","assets/BackButton.846cedef.js","assets/BackButton.f2f3c401.css","assets/CircularLoading.78e37a70.js","assets/CircularLoading.f81b57b4.css","assets/asyncComputed.e0f43af3.js","assets/jobs.098bcb10.js","assets/activeRecord.57c6bf02.js","assets/SaveButton.81b0cbf4.js","assets/icons.d4e872e2.js","assets/SaveButton.7277f302.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.9b504e6b.js","assets/forms.cc593bbd.js","assets/dashes.4aa38f44.js","assets/runnerData.91239e67.js","assets/hooks.d59fb935.js","assets/workspaces.741b6616.js","assets/log.0073b587.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/DocsButton.5c9fcb4f.js","assets/DocsButton.d2184c76.css","assets/JobEditor.891795a7.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>e(()=>import("./DashEditor.24b43b61.js"),["assets/DashEditor.24b43b61.js","assets/index.6f0d5525.js","assets/registerWidgets.04dc761e.js","assets/registerWidgets.3aec804f.css","assets/BackButton.846cedef.js","assets/BackButton.f2f3c401.css","assets/DashPlayer.79dbd8c0.js","assets/passwordlessManager.271a8058.js","assets/runnerData.91239e67.js","assets/executeJs.740555ed.js","assets/PlayerNavbar.c204244e.js","assets/icons.d4e872e2.js","assets/PlayerNavbar.1542e7ca.css","assets/WidgetsFrame.e00c0ab1.js","assets/WidgetsFrame.cf328b77.css","assets/Modal.02341c49.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.0073b587.js","assets/Passwordless.0107ba48.js","assets/CircularLoading.78e37a70.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.2b58e538.css","assets/DashPlayer.a2bc20b8.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.9b504e6b.js","assets/asyncComputed.e0f43af3.js","assets/forms.cc593bbd.js","assets/activeRecord.57c6bf02.js","assets/dashes.4aa38f44.js","assets/hooks.d59fb935.js","assets/jobs.098bcb10.js","assets/workspaces.741b6616.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/SaveButton.81b0cbf4.js","assets/SaveButton.7277f302.css","assets/PreviewButton.ec857376.js","assets/PreviewButton.52324bbf.css","assets/DocsButton.5c9fcb4f.js","assets/DocsButton.d2184c76.css","assets/DashEditor.848239ee.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>e(()=>import("./DashPreview.bab88cd9.js"),["assets/DashPreview.bab88cd9.js","assets/registerWidgets.04dc761e.js","assets/registerWidgets.3aec804f.css","assets/DashPlayer.79dbd8c0.js","assets/passwordlessManager.271a8058.js","assets/runnerData.91239e67.js","assets/executeJs.740555ed.js","assets/PlayerNavbar.c204244e.js","assets/icons.d4e872e2.js","assets/PlayerNavbar.1542e7ca.css","assets/index.6f0d5525.js","assets/WidgetsFrame.e00c0ab1.js","assets/WidgetsFrame.cf328b77.css","assets/Modal.02341c49.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.0073b587.js","assets/Passwordless.0107ba48.js","assets/CircularLoading.78e37a70.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.2b58e538.css","assets/DashPlayer.a2bc20b8.css","assets/BackButton.093dc56e.js","assets/BackButton.dd542746.css","assets/asyncComputed.e0f43af3.js","assets/dashes.4aa38f44.js","assets/activeRecord.57c6bf02.js","assets/workspaces.741b6616.js","assets/DashPreview.e38d1101.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>e(()=>import("./HookEditor.742a97c8.js"),["assets/HookEditor.742a97c8.js","assets/registerWidgets.04dc761e.js","assets/registerWidgets.3aec804f.css","assets/BackButton.846cedef.js","assets/BackButton.f2f3c401.css","assets/CircularLoading.78e37a70.js","assets/CircularLoading.f81b57b4.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.9b504e6b.js","assets/icons.d4e872e2.js","assets/asyncComputed.e0f43af3.js","assets/forms.cc593bbd.js","assets/activeRecord.57c6bf02.js","assets/dashes.4aa38f44.js","assets/runnerData.91239e67.js","assets/hooks.d59fb935.js","assets/jobs.098bcb10.js","assets/workspaces.741b6616.js","assets/log.0073b587.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/SaveButton.81b0cbf4.js","assets/SaveButton.7277f302.css","assets/DocsButton.5c9fcb4f.js","assets/DocsButton.d2184c76.css","assets/HookEditor.57f047c8.css"]),meta:{title:"Abstra - Hook Editor"}},{path:"table/:tableName",name:"tableEditor",component:()=>e(()=>import("./TableEditor.d8125af6.js"),["assets/TableEditor.d8125af6.js","assets/asyncComputed.e0f43af3.js","assets/registerWidgets.04dc761e.js","assets/registerWidgets.3aec804f.css","assets/tables.1eeef4d2.js","assets/activeRecord.57c6bf02.js","assets/CircularLoading.78e37a70.js","assets/CircularLoading.f81b57b4.css","assets/BackButton.846cedef.js","assets/BackButton.f2f3c401.css","assets/icons.d4e872e2.js","assets/DocsButton.5c9fcb4f.js","assets/DocsButton.d2184c76.css","assets/TableEditor.86fe96d8.css"]),meta:{title:"Abstra - Table Editor"}}]}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});a.beforeEach(async(t,r)=>{L(t,r)});(async()=>{const t=u({render:()=>I(y)});b.init(),w(t,a,"console.abstracloud.com"),t.use(a),t.use(v),t.mount("#app"),t.component("VSelect",A),t.component("Markdown",P),t.component("Icon",T),t.component("Message",f),o(t,D),o(t,V),o(t,R)})();
//# sourceMappingURL=editor.3ed66758.js.map
