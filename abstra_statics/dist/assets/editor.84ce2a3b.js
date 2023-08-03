import{r as _,d as m,o as d,a as p,b as c,c as h,e as l,f as b,g as u,_ as t,h as E,T as v,i as A,P as f,C as P,M as I,I as D,s as w,j as a,k as T,l as y,m as V,n as R}from"./registerWidgets.db466a36.js";import{u as L}from"./index.225e18e9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="9bc9ca3e-7cf4-4d61-bed4-6ed07ad39b06",e._sentryDebugIdIdentifier="sentry-dbid-9bc9ca3e-7cf4-4d61-bed4-6ed07ad39b06")}catch{}})();const s=_(!1),g=()=>{window.innerWidth<780?s.value=!0:s.value=!1},O={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},k=m({__name:"App",setup(e){return d(()=>{window.addEventListener("resize",g)}),(o,n)=>{const i=p("router-view");return c(),h("div",O,[l(i)])}}});const r=b({history:u("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.d06c405e.js"),["assets/Home.d06c405e.js","assets/Modal.94856ed8.js","assets/registerWidgets.db466a36.js","assets/registerWidgets.448db7e9.css","assets/Modal.5aaf8eba.css","assets/Home.1c04d83a.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.db6d9f93.js"),["assets/Workspace.db6d9f93.js","assets/registerWidgets.db466a36.js","assets/registerWidgets.448db7e9.css","assets/icons.1210223a.js","assets/Tooltip.9840a429.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.9891ab9c.js","assets/workspaces.be9334c8.js","assets/activeRecord.74699a56.js","assets/login.381196d5.js","assets/DocsButton.ba7bfe84.js","assets/DocsButton.d2184c76.css","assets/Workspace.4d7eaba0.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.50485440.js"),["assets/Forms.50485440.js","assets/registerWidgets.db466a36.js","assets/registerWidgets.448db7e9.css","assets/icons.1210223a.js","assets/asyncComputed.9891ab9c.js","assets/forms.2955e1ee.js","assets/activeRecord.74699a56.js","assets/RuntimeList.4327f9d3.js","assets/DropdownMenu.637f3ff1.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.57cd4b94.js","assets/lottie.e796547d.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.42121314.js"),["assets/Dashes.42121314.js","assets/registerWidgets.db466a36.js","assets/registerWidgets.448db7e9.css","assets/icons.1210223a.js","assets/asyncComputed.9891ab9c.js","assets/dashes.31ee999d.js","assets/activeRecord.74699a56.js","assets/runnerData.70fc6c3f.js","assets/RuntimeList.4327f9d3.js","assets/DropdownMenu.637f3ff1.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.57cd4b94.js","assets/lottie.e796547d.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.4a26297b.js"),["assets/Jobs.4a26297b.js","assets/registerWidgets.db466a36.js","assets/registerWidgets.448db7e9.css","assets/icons.1210223a.js","assets/asyncComputed.9891ab9c.js","assets/jobs.acb4a8b7.js","assets/activeRecord.74699a56.js","assets/RuntimeList.4327f9d3.js","assets/DropdownMenu.637f3ff1.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.57cd4b94.js","assets/lottie.e796547d.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.0ae79e06.js"),["assets/Hooks.0ae79e06.js","assets/registerWidgets.db466a36.js","assets/registerWidgets.448db7e9.css","assets/icons.1210223a.js","assets/asyncComputed.9891ab9c.js","assets/hooks.631644b6.js","assets/activeRecord.74699a56.js","assets/RuntimeList.4327f9d3.js","assets/DropdownMenu.637f3ff1.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.57cd4b94.js","assets/lottie.e796547d.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Hooks"}},{path:"tables",name:"tables",component:()=>t(()=>import("./Tables.02fdb328.js"),["assets/Tables.02fdb328.js","assets/registerWidgets.db466a36.js","assets/registerWidgets.448db7e9.css","assets/icons.1210223a.js","assets/asyncComputed.9891ab9c.js","assets/tables.109be0c0.js","assets/activeRecord.74699a56.js","assets/RuntimeList.4327f9d3.js","assets/DropdownMenu.637f3ff1.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.57cd4b94.js","assets/lottie.e796547d.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Tables"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.b6a7ec9b.js"),["assets/StyleEditor.b6a7ec9b.js","assets/registerWidgets.db466a36.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.9891ab9c.js","assets/workspaces.be9334c8.js","assets/activeRecord.74699a56.js","assets/CircularLoading.57cd4b94.js","assets/lottie.e796547d.js","assets/CircularLoading.f81b57b4.css","assets/icons.1210223a.js","assets/SidebarPreview.a70aa359.js","assets/PlayerNavbar.b1c47987.js","assets/PlayerNavbar.b27e2024.css","assets/runnerData.70fc6c3f.js","assets/colors.9a2cbb67.js","assets/SidebarPreview.d6f4e541.css","assets/SaveButton.456fd897.js","assets/SaveButton.7277f302.css","assets/StyleEditor.8a31e1bc.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.78baed62.js"),["assets/SidebarEditor.78baed62.js","assets/registerWidgets.db466a36.js","assets/registerWidgets.448db7e9.css","assets/workspaces.be9334c8.js","assets/activeRecord.74699a56.js","assets/asyncComputed.9891ab9c.js","assets/CircularLoading.57cd4b94.js","assets/lottie.e796547d.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.456fd897.js","assets/icons.1210223a.js","assets/SaveButton.7277f302.css","assets/SidebarPreview.a70aa359.js","assets/PlayerNavbar.b1c47987.js","assets/PlayerNavbar.b27e2024.css","assets/runnerData.70fc6c3f.js","assets/colors.9a2cbb67.js","assets/SidebarPreview.d6f4e541.css","assets/SidebarEditor.f65d95bf.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"editor",component:()=>t(()=>import("./FormEditor.a34eb013.js"),["assets/FormEditor.a34eb013.js","assets/registerWidgets.db466a36.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.57cd4b94.js","assets/lottie.e796547d.js","assets/CircularLoading.f81b57b4.css","assets/Error.2e23a3d5.js","assets/Error.5cfc41d8.css","assets/broker.f37c2e68.js","assets/passwordlessManager.3137a6b4.js","assets/icons.1210223a.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.3c018778.js","assets/Passwordless.2fd90347.js","assets/Passwordless.2b58e538.css","assets/executeJs.899326bf.js","assets/PlayerNavbar.b1c47987.js","assets/PlayerNavbar.b27e2024.css","assets/index.225e18e9.js","assets/WidgetsFrame.5fda7209.js","assets/colors.9a2cbb67.js","assets/WidgetsFrame.701a818b.css","assets/Modal.94856ed8.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.55f57274.js","assets/broker.f87ad36d.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.c6e2eb51.js","assets/asyncComputed.9891ab9c.js","assets/forms.2955e1ee.js","assets/activeRecord.74699a56.js","assets/dashes.31ee999d.js","assets/runnerData.70fc6c3f.js","assets/hooks.631644b6.js","assets/jobs.acb4a8b7.js","assets/workspaces.be9334c8.js","assets/login.381196d5.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/BackButton.ab1c8946.js","assets/BackButton.f2f3c401.css","assets/SaveButton.456fd897.js","assets/SaveButton.7277f302.css","assets/DocsButton.ba7bfe84.js","assets/DocsButton.d2184c76.css","assets/PreviewButton.b135a287.js","assets/PreviewButton.52324bbf.css","assets/FormEditor.14b0b0e9.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"form-preview",component:()=>t(()=>import("./FormPreview.a0d45374.js"),["assets/FormPreview.a0d45374.js","assets/registerWidgets.db466a36.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.57cd4b94.js","assets/lottie.e796547d.js","assets/CircularLoading.f81b57b4.css","assets/Error.2e23a3d5.js","assets/Error.5cfc41d8.css","assets/broker.f37c2e68.js","assets/passwordlessManager.3137a6b4.js","assets/icons.1210223a.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.3c018778.js","assets/Passwordless.2fd90347.js","assets/Passwordless.2b58e538.css","assets/executeJs.899326bf.js","assets/PlayerNavbar.b1c47987.js","assets/PlayerNavbar.b27e2024.css","assets/index.225e18e9.js","assets/WidgetsFrame.5fda7209.js","assets/colors.9a2cbb67.js","assets/WidgetsFrame.701a818b.css","assets/Modal.94856ed8.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.55f57274.js","assets/broker.f87ad36d.css","assets/BackButton.dbd919f2.js","assets/BackButton.dd542746.css","assets/asyncComputed.9891ab9c.js","assets/forms.2955e1ee.js","assets/activeRecord.74699a56.js","assets/workspaces.be9334c8.js","assets/FormPreview.bcd09cdf.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.0d900d61.js"),["assets/JobEditor.0d900d61.js","assets/registerWidgets.db466a36.js","assets/registerWidgets.448db7e9.css","assets/BackButton.ab1c8946.js","assets/BackButton.f2f3c401.css","assets/CircularLoading.57cd4b94.js","assets/lottie.e796547d.js","assets/CircularLoading.f81b57b4.css","assets/asyncComputed.9891ab9c.js","assets/jobs.acb4a8b7.js","assets/activeRecord.74699a56.js","assets/SaveButton.456fd897.js","assets/icons.1210223a.js","assets/SaveButton.7277f302.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.c6e2eb51.js","assets/forms.2955e1ee.js","assets/dashes.31ee999d.js","assets/runnerData.70fc6c3f.js","assets/hooks.631644b6.js","assets/workspaces.be9334c8.js","assets/log.55f57274.js","assets/login.381196d5.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/DocsButton.ba7bfe84.js","assets/DocsButton.d2184c76.css","assets/JobEditor.891795a7.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.c7044915.js"),["assets/DashEditor.c7044915.js","assets/index.225e18e9.js","assets/registerWidgets.db466a36.js","assets/registerWidgets.448db7e9.css","assets/BackButton.ab1c8946.js","assets/BackButton.f2f3c401.css","assets/DashPlayer.35715721.js","assets/passwordlessManager.3137a6b4.js","assets/runnerData.70fc6c3f.js","assets/executeJs.899326bf.js","assets/PlayerNavbar.b1c47987.js","assets/icons.1210223a.js","assets/PlayerNavbar.b27e2024.css","assets/WidgetsFrame.5fda7209.js","assets/colors.9a2cbb67.js","assets/WidgetsFrame.701a818b.css","assets/Modal.94856ed8.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.55f57274.js","assets/Passwordless.2fd90347.js","assets/CircularLoading.57cd4b94.js","assets/lottie.e796547d.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.2b58e538.css","assets/DashPlayer.a2bc20b8.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.c6e2eb51.js","assets/asyncComputed.9891ab9c.js","assets/forms.2955e1ee.js","assets/activeRecord.74699a56.js","assets/dashes.31ee999d.js","assets/hooks.631644b6.js","assets/jobs.acb4a8b7.js","assets/workspaces.be9334c8.js","assets/login.381196d5.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/SaveButton.456fd897.js","assets/SaveButton.7277f302.css","assets/PreviewButton.b135a287.js","assets/PreviewButton.52324bbf.css","assets/DocsButton.ba7bfe84.js","assets/DocsButton.d2184c76.css","assets/DashEditor.7f66656f.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.be66664a.js"),["assets/DashPreview.be66664a.js","assets/registerWidgets.db466a36.js","assets/registerWidgets.448db7e9.css","assets/DashPlayer.35715721.js","assets/passwordlessManager.3137a6b4.js","assets/runnerData.70fc6c3f.js","assets/executeJs.899326bf.js","assets/PlayerNavbar.b1c47987.js","assets/icons.1210223a.js","assets/PlayerNavbar.b27e2024.css","assets/index.225e18e9.js","assets/WidgetsFrame.5fda7209.js","assets/colors.9a2cbb67.js","assets/WidgetsFrame.701a818b.css","assets/Modal.94856ed8.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.55f57274.js","assets/Passwordless.2fd90347.js","assets/CircularLoading.57cd4b94.js","assets/lottie.e796547d.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.2b58e538.css","assets/DashPlayer.a2bc20b8.css","assets/BackButton.dbd919f2.js","assets/BackButton.dd542746.css","assets/asyncComputed.9891ab9c.js","assets/dashes.31ee999d.js","assets/activeRecord.74699a56.js","assets/workspaces.be9334c8.js","assets/DashPreview.e38d1101.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.5a3dc90f.js"),["assets/HookEditor.5a3dc90f.js","assets/registerWidgets.db466a36.js","assets/registerWidgets.448db7e9.css","assets/BackButton.ab1c8946.js","assets/BackButton.f2f3c401.css","assets/CircularLoading.57cd4b94.js","assets/lottie.e796547d.js","assets/CircularLoading.f81b57b4.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.c6e2eb51.js","assets/icons.1210223a.js","assets/asyncComputed.9891ab9c.js","assets/forms.2955e1ee.js","assets/activeRecord.74699a56.js","assets/dashes.31ee999d.js","assets/runnerData.70fc6c3f.js","assets/hooks.631644b6.js","assets/jobs.acb4a8b7.js","assets/workspaces.be9334c8.js","assets/log.55f57274.js","assets/login.381196d5.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/SaveButton.456fd897.js","assets/SaveButton.7277f302.css","assets/DocsButton.ba7bfe84.js","assets/DocsButton.d2184c76.css","assets/HookEditor.57f047c8.css"]),meta:{title:"Abstra - Hook Editor"}},{path:"table/:tableName",name:"tableEditor",component:()=>t(()=>import("./TableEditor.d69eb2ac.js"),["assets/TableEditor.d69eb2ac.js","assets/asyncComputed.9891ab9c.js","assets/registerWidgets.db466a36.js","assets/registerWidgets.448db7e9.css","assets/tables.109be0c0.js","assets/activeRecord.74699a56.js","assets/CircularLoading.57cd4b94.js","assets/lottie.e796547d.js","assets/CircularLoading.f81b57b4.css","assets/BackButton.ab1c8946.js","assets/BackButton.f2f3c401.css","assets/icons.1210223a.js","assets/DocsButton.ba7bfe84.js","assets/DocsButton.d2184c76.css","assets/TableEditor.86fe96d8.css"]),meta:{title:"Abstra - Table Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});r.beforeEach(async(e,o)=>{L(e,o)});(async()=>{const e=E({render:()=>T(k)});v.init(),A(e,r),e.use(r),e.use(f),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",I),e.component("Icon",D),e.component("Message",w),a(e,y),a(e,V),a(e,R)})();
//# sourceMappingURL=editor.84ce2a3b.js.map