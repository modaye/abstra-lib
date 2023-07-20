import{r as n,d as _,o as m,a as p,b as d,c,e as h,f as l,g as E,_ as e,h as u,T as b,P as v,C as A,M as P,I as T,s as f,i as o,j as I,k as D,l as V,m as R}from"./registerWidgets.990552e9.js";import{u as L}from"./index.c13cb307.js";import{i as w}from"./sentry.2692e5c6.js";const s=n(!1),O=()=>{window.innerWidth<780?s.value=!0:s.value=!1},k={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},y=_({__name:"App",setup(t){return m(()=>{window.addEventListener("resize",O)}),(r,g)=>{const i=p("router-view");return d(),c("div",k,[h(i)])}}});const a=l({history:E("/"),routes:[{path:"/_editor/",name:"app",component:()=>e(()=>import("./Home.4a4310c8.js"),["assets/Home.4a4310c8.js","assets/Modal.180a3c02.js","assets/registerWidgets.990552e9.js","assets/registerWidgets.a7e6ab4f.css","assets/Modal.5aaf8eba.css","assets/Home.1c04d83a.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>e(()=>import("./Workspace.b2848ea9.js"),["assets/Workspace.b2848ea9.js","assets/registerWidgets.990552e9.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.d4e872e2.js","assets/Tooltip.9340b3bf.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.5a7faf96.js","assets/workspaces.741b6616.js","assets/activeRecord.57c6bf02.js","assets/login.29b4c1f1.js","assets/Workspace.3297a659.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>e(()=>import("./Forms.8594e65d.js"),["assets/Forms.8594e65d.js","assets/registerWidgets.990552e9.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.d4e872e2.js","assets/asyncComputed.5a7faf96.js","assets/forms.7fa52191.js","assets/activeRecord.57c6bf02.js","assets/RuntimeList.74d627c2.js","assets/DropdownMenu.b023d396.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.b7a09562.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>e(()=>import("./Dashes.5039c42c.js"),["assets/Dashes.5039c42c.js","assets/registerWidgets.990552e9.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.d4e872e2.js","assets/asyncComputed.5a7faf96.js","assets/dashes.c71256d5.js","assets/activeRecord.57c6bf02.js","assets/runnerData.bbafb2b3.js","assets/RuntimeList.74d627c2.js","assets/DropdownMenu.b023d396.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.b7a09562.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>e(()=>import("./Jobs.d1ead5cd.js"),["assets/Jobs.d1ead5cd.js","assets/registerWidgets.990552e9.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.d4e872e2.js","assets/asyncComputed.5a7faf96.js","assets/jobs.098bcb10.js","assets/activeRecord.57c6bf02.js","assets/RuntimeList.74d627c2.js","assets/DropdownMenu.b023d396.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.b7a09562.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>e(()=>import("./Hooks.da5cbffd.js"),["assets/Hooks.da5cbffd.js","assets/registerWidgets.990552e9.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.d4e872e2.js","assets/asyncComputed.5a7faf96.js","assets/hooks.d59fb935.js","assets/activeRecord.57c6bf02.js","assets/RuntimeList.74d627c2.js","assets/DropdownMenu.b023d396.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.b7a09562.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Hooks"}},{path:"tables",name:"tables",component:()=>e(()=>import("./Tables.6f0810e1.js"),["assets/Tables.6f0810e1.js","assets/registerWidgets.990552e9.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.d4e872e2.js","assets/asyncComputed.5a7faf96.js","assets/tables.1eeef4d2.js","assets/activeRecord.57c6bf02.js","assets/RuntimeList.74d627c2.js","assets/DropdownMenu.b023d396.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.b7a09562.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Tables"}},{path:"style",name:"style",component:()=>e(()=>import("./StyleEditor.a1ebfb28.js"),["assets/StyleEditor.a1ebfb28.js","assets/registerWidgets.990552e9.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.5a7faf96.js","assets/workspaces.741b6616.js","assets/activeRecord.57c6bf02.js","assets/CircularLoading.b7a09562.js","assets/CircularLoading.f81b57b4.css","assets/icons.d4e872e2.js","assets/SidebarPreview.a054b37f.js","assets/colors.d7a0ca86.js","assets/colors.39fac602.css","assets/runnerData.bbafb2b3.js","assets/SidebarPreview.44dafcd7.css","assets/SaveButton.3e822731.js","assets/SaveButton.7277f302.css","assets/StyleEditor.df51333d.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>e(()=>import("./SidebarEditor.1d9ac4fd.js"),["assets/SidebarEditor.1d9ac4fd.js","assets/registerWidgets.990552e9.js","assets/registerWidgets.a7e6ab4f.css","assets/workspaces.741b6616.js","assets/activeRecord.57c6bf02.js","assets/asyncComputed.5a7faf96.js","assets/CircularLoading.b7a09562.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.3e822731.js","assets/icons.d4e872e2.js","assets/SaveButton.7277f302.css","assets/SidebarPreview.a054b37f.js","assets/colors.d7a0ca86.js","assets/colors.39fac602.css","assets/runnerData.bbafb2b3.js","assets/SidebarPreview.44dafcd7.css","assets/SidebarEditor.f65d95bf.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"editor",component:()=>e(()=>import("./FormEditor.a0a16612.js"),["assets/FormEditor.a0a16612.js","assets/registerWidgets.990552e9.js","assets/registerWidgets.a7e6ab4f.css","assets/CircularLoading.b7a09562.js","assets/CircularLoading.f81b57b4.css","assets/Error.ecbd86d2.js","assets/Error.5cfc41d8.css","assets/broker.1fe1c683.js","assets/passwordlessManager.43e7eeb6.js","assets/icons.d4e872e2.js","assets/Passwordless.62d0ea6a.js","assets/Passwordless.2b58e538.css","assets/WidgetsFrame.b07f4485.js","assets/colors.d7a0ca86.js","assets/colors.39fac602.css","assets/index.c13cb307.js","assets/Modal.180a3c02.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.d5fe3c10.css","assets/log.90d86245.js","assets/broker.f87ad36d.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.abecd08a.js","assets/asyncComputed.5a7faf96.js","assets/forms.7fa52191.js","assets/activeRecord.57c6bf02.js","assets/dashes.c71256d5.js","assets/runnerData.bbafb2b3.js","assets/hooks.d59fb935.js","assets/jobs.098bcb10.js","assets/workspaces.741b6616.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/BackButton.e64118bc.js","assets/BackButton.f2f3c401.css","assets/SaveButton.3e822731.js","assets/SaveButton.7277f302.css","assets/PreviewButton.bf64ef11.js","assets/PreviewButton.52324bbf.css","assets/FormEditor.96d71607.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"form-preview",component:()=>e(()=>import("./FormPreview.853cd18c.js"),["assets/FormPreview.853cd18c.js","assets/registerWidgets.990552e9.js","assets/registerWidgets.a7e6ab4f.css","assets/CircularLoading.b7a09562.js","assets/CircularLoading.f81b57b4.css","assets/Error.ecbd86d2.js","assets/Error.5cfc41d8.css","assets/broker.1fe1c683.js","assets/passwordlessManager.43e7eeb6.js","assets/icons.d4e872e2.js","assets/Passwordless.62d0ea6a.js","assets/Passwordless.2b58e538.css","assets/WidgetsFrame.b07f4485.js","assets/colors.d7a0ca86.js","assets/colors.39fac602.css","assets/index.c13cb307.js","assets/Modal.180a3c02.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.d5fe3c10.css","assets/log.90d86245.js","assets/broker.f87ad36d.css","assets/BackButton.929bf132.js","assets/BackButton.dd542746.css","assets/asyncComputed.5a7faf96.js","assets/forms.7fa52191.js","assets/activeRecord.57c6bf02.js","assets/workspaces.741b6616.js","assets/FormPreview.bcd09cdf.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>e(()=>import("./JobEditor.a6d28b9a.js"),["assets/JobEditor.a6d28b9a.js","assets/registerWidgets.990552e9.js","assets/registerWidgets.a7e6ab4f.css","assets/BackButton.e64118bc.js","assets/BackButton.f2f3c401.css","assets/CircularLoading.b7a09562.js","assets/CircularLoading.f81b57b4.css","assets/asyncComputed.5a7faf96.js","assets/jobs.098bcb10.js","assets/activeRecord.57c6bf02.js","assets/SaveButton.3e822731.js","assets/icons.d4e872e2.js","assets/SaveButton.7277f302.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.abecd08a.js","assets/forms.7fa52191.js","assets/dashes.c71256d5.js","assets/runnerData.bbafb2b3.js","assets/hooks.d59fb935.js","assets/workspaces.741b6616.js","assets/log.90d86245.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/JobEditor.408d8bc3.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>e(()=>import("./DashEditor.dcbad77a.js"),["assets/DashEditor.dcbad77a.js","assets/index.c13cb307.js","assets/registerWidgets.990552e9.js","assets/registerWidgets.a7e6ab4f.css","assets/BackButton.e64118bc.js","assets/BackButton.f2f3c401.css","assets/DashPlayer.a7675809.js","assets/passwordlessManager.43e7eeb6.js","assets/runnerData.bbafb2b3.js","assets/WidgetsFrame.b07f4485.js","assets/colors.d7a0ca86.js","assets/icons.d4e872e2.js","assets/colors.39fac602.css","assets/Modal.180a3c02.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.d5fe3c10.css","assets/log.90d86245.js","assets/Passwordless.62d0ea6a.js","assets/CircularLoading.b7a09562.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.2b58e538.css","assets/DashPlayer.9513da61.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.abecd08a.js","assets/asyncComputed.5a7faf96.js","assets/forms.7fa52191.js","assets/activeRecord.57c6bf02.js","assets/dashes.c71256d5.js","assets/hooks.d59fb935.js","assets/jobs.098bcb10.js","assets/workspaces.741b6616.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/SaveButton.3e822731.js","assets/SaveButton.7277f302.css","assets/PreviewButton.bf64ef11.js","assets/PreviewButton.52324bbf.css","assets/DashEditor.63dac5ef.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>e(()=>import("./DashPreview.84c70f11.js"),["assets/DashPreview.84c70f11.js","assets/registerWidgets.990552e9.js","assets/registerWidgets.a7e6ab4f.css","assets/DashPlayer.a7675809.js","assets/passwordlessManager.43e7eeb6.js","assets/runnerData.bbafb2b3.js","assets/WidgetsFrame.b07f4485.js","assets/colors.d7a0ca86.js","assets/icons.d4e872e2.js","assets/colors.39fac602.css","assets/index.c13cb307.js","assets/Modal.180a3c02.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.d5fe3c10.css","assets/log.90d86245.js","assets/Passwordless.62d0ea6a.js","assets/CircularLoading.b7a09562.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.2b58e538.css","assets/DashPlayer.9513da61.css","assets/BackButton.929bf132.js","assets/BackButton.dd542746.css","assets/asyncComputed.5a7faf96.js","assets/dashes.c71256d5.js","assets/activeRecord.57c6bf02.js","assets/workspaces.741b6616.js","assets/DashPreview.e38d1101.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>e(()=>import("./HookEditor.08d48719.js"),["assets/HookEditor.08d48719.js","assets/registerWidgets.990552e9.js","assets/registerWidgets.a7e6ab4f.css","assets/BackButton.e64118bc.js","assets/BackButton.f2f3c401.css","assets/CircularLoading.b7a09562.js","assets/CircularLoading.f81b57b4.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.abecd08a.js","assets/icons.d4e872e2.js","assets/asyncComputed.5a7faf96.js","assets/forms.7fa52191.js","assets/activeRecord.57c6bf02.js","assets/dashes.c71256d5.js","assets/runnerData.bbafb2b3.js","assets/hooks.d59fb935.js","assets/jobs.098bcb10.js","assets/workspaces.741b6616.js","assets/log.90d86245.js","assets/login.29b4c1f1.js","assets/sentry.2692e5c6.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/SaveButton.3e822731.js","assets/SaveButton.7277f302.css","assets/HookEditor.e8d0c366.css"]),meta:{title:"Abstra - Hook Editor"}},{path:"table/:tableName",name:"tableEditor",component:()=>e(()=>import("./TableEditor.8de654b9.js"),["assets/TableEditor.8de654b9.js","assets/asyncComputed.5a7faf96.js","assets/registerWidgets.990552e9.js","assets/registerWidgets.a7e6ab4f.css","assets/tables.1eeef4d2.js","assets/activeRecord.57c6bf02.js","assets/CircularLoading.b7a09562.js","assets/CircularLoading.f81b57b4.css","assets/BackButton.e64118bc.js","assets/BackButton.f2f3c401.css","assets/icons.d4e872e2.js","assets/TableEditor.e234e809.css"]),meta:{title:"Abstra - Table Editor"}}]}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});a.beforeEach(async(t,r)=>{L(t,r)});(async()=>{const t=u({render:()=>I(y)});b.init(),w(t,a,"console.abstracloud.com"),t.use(a),t.use(v),t.mount("#app"),t.component("VSelect",A),t.component("Markdown",P),t.component("Icon",T),t.component("Message",f),o(t,D),o(t,V),o(t,R)})();
//# sourceMappingURL=editor.9f96d7e7.js.map