import{r as _,d as m,o as d,a as p,b as c,c as h,e as l,f as b,g as u,_ as t,h as E,T as f,i as v,P as A,C as P,M as I,I as D,s as w,j as a,k as T,l as y,m as V,n as R}from"./registerWidgets.f021c1a4.js";import{u as L}from"./index.4db2f83c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="dccc10ff-2038-4cd4-abe6-f854a2dbe24b",e._sentryDebugIdIdentifier="sentry-dbid-dccc10ff-2038-4cd4-abe6-f854a2dbe24b")}catch{}})();const s=_(!1),g=()=>{window.innerWidth<780?s.value=!0:s.value=!1},O={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},k=m({__name:"App",setup(e){return d(()=>{window.addEventListener("resize",g)}),(o,n)=>{const i=p("router-view");return c(),h("div",O,[l(i)])}}});const r=b({history:u("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.0b4a0a9b.js"),["assets/Home.0b4a0a9b.js","assets/Modal.05754801.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/Modal.5aaf8eba.css","assets/Home.1c04d83a.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.1bc1777d.js"),["assets/Workspace.1bc1777d.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/icons.b993259e.js","assets/Tooltip.b38d7ca3.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.99b3d376.js","assets/workspaces.47f3c87c.js","assets/activeRecord.ae1eba97.js","assets/login.e0773e85.js","assets/DocsButton.9bca51e9.js","assets/DocsButton.d2184c76.css","assets/Workspace.4d7eaba0.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.ee40abd3.js"),["assets/Forms.ee40abd3.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/icons.b993259e.js","assets/asyncComputed.99b3d376.js","assets/forms.b554cf32.js","assets/activeRecord.ae1eba97.js","assets/RuntimeList.6dca7a2c.js","assets/DropdownMenu.65a6697e.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.403df380.js","assets/lottie.61fc86ea.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.9e618250.js"),["assets/Dashes.9e618250.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/icons.b993259e.js","assets/asyncComputed.99b3d376.js","assets/dashes.1f934cf7.js","assets/activeRecord.ae1eba97.js","assets/runnerData.215fc732.js","assets/RuntimeList.6dca7a2c.js","assets/DropdownMenu.65a6697e.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.403df380.js","assets/lottie.61fc86ea.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.4fa49f47.js"),["assets/Jobs.4fa49f47.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/icons.b993259e.js","assets/asyncComputed.99b3d376.js","assets/jobs.c13312c3.js","assets/activeRecord.ae1eba97.js","assets/RuntimeList.6dca7a2c.js","assets/DropdownMenu.65a6697e.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.403df380.js","assets/lottie.61fc86ea.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.1af80d2e.js"),["assets/Hooks.1af80d2e.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/icons.b993259e.js","assets/asyncComputed.99b3d376.js","assets/hooks.318348a2.js","assets/activeRecord.ae1eba97.js","assets/RuntimeList.6dca7a2c.js","assets/DropdownMenu.65a6697e.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.403df380.js","assets/lottie.61fc86ea.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Hooks"}},{path:"tables",name:"tables",component:()=>t(()=>import("./Tables.6a17fb0e.js"),["assets/Tables.6a17fb0e.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/icons.b993259e.js","assets/asyncComputed.99b3d376.js","assets/tables.d6ff3ce2.js","assets/activeRecord.ae1eba97.js","assets/RuntimeList.6dca7a2c.js","assets/DropdownMenu.65a6697e.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.403df380.js","assets/lottie.61fc86ea.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Tables"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.fe5d37df.js"),["assets/StyleEditor.fe5d37df.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.99b3d376.js","assets/workspaces.47f3c87c.js","assets/activeRecord.ae1eba97.js","assets/CircularLoading.403df380.js","assets/lottie.61fc86ea.js","assets/CircularLoading.f81b57b4.css","assets/icons.b993259e.js","assets/SidebarPreview.75fe8965.js","assets/PlayerNavbar.b9e39d0d.js","assets/PlayerNavbar.1542e7ca.css","assets/runnerData.215fc732.js","assets/colors.f679b0a6.js","assets/SidebarPreview.b0faf5a4.css","assets/SaveButton.cd2b16e5.js","assets/SaveButton.7277f302.css","assets/StyleEditor.6f72933e.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.d6a817cf.js"),["assets/SidebarEditor.d6a817cf.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/workspaces.47f3c87c.js","assets/activeRecord.ae1eba97.js","assets/asyncComputed.99b3d376.js","assets/CircularLoading.403df380.js","assets/lottie.61fc86ea.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.cd2b16e5.js","assets/icons.b993259e.js","assets/SaveButton.7277f302.css","assets/SidebarPreview.75fe8965.js","assets/PlayerNavbar.b9e39d0d.js","assets/PlayerNavbar.1542e7ca.css","assets/runnerData.215fc732.js","assets/colors.f679b0a6.js","assets/SidebarPreview.b0faf5a4.css","assets/SidebarEditor.f65d95bf.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"editor",component:()=>t(()=>import("./FormEditor.8909092e.js"),["assets/FormEditor.8909092e.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.403df380.js","assets/lottie.61fc86ea.js","assets/CircularLoading.f81b57b4.css","assets/Error.d058f711.js","assets/Error.5cfc41d8.css","assets/broker.2985690c.js","assets/passwordlessManager.60015512.js","assets/icons.b993259e.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.db19569b.js","assets/Passwordless.41457a61.js","assets/Passwordless.2b58e538.css","assets/executeJs.d39ce091.js","assets/PlayerNavbar.b9e39d0d.js","assets/PlayerNavbar.1542e7ca.css","assets/index.4db2f83c.js","assets/WidgetsFrame.38d6628f.js","assets/colors.f679b0a6.js","assets/WidgetsFrame.701a818b.css","assets/Modal.05754801.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.76987186.js","assets/broker.f87ad36d.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.3468c8f5.js","assets/asyncComputed.99b3d376.js","assets/forms.b554cf32.js","assets/activeRecord.ae1eba97.js","assets/dashes.1f934cf7.js","assets/runnerData.215fc732.js","assets/hooks.318348a2.js","assets/jobs.c13312c3.js","assets/workspaces.47f3c87c.js","assets/login.e0773e85.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/BackButton.f56bf860.js","assets/BackButton.f2f3c401.css","assets/SaveButton.cd2b16e5.js","assets/SaveButton.7277f302.css","assets/DocsButton.9bca51e9.js","assets/DocsButton.d2184c76.css","assets/PreviewButton.ced8e1ec.js","assets/PreviewButton.52324bbf.css","assets/FormEditor.14b0b0e9.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"form-preview",component:()=>t(()=>import("./FormPreview.a56c2d5e.js"),["assets/FormPreview.a56c2d5e.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.403df380.js","assets/lottie.61fc86ea.js","assets/CircularLoading.f81b57b4.css","assets/Error.d058f711.js","assets/Error.5cfc41d8.css","assets/broker.2985690c.js","assets/passwordlessManager.60015512.js","assets/icons.b993259e.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.db19569b.js","assets/Passwordless.41457a61.js","assets/Passwordless.2b58e538.css","assets/executeJs.d39ce091.js","assets/PlayerNavbar.b9e39d0d.js","assets/PlayerNavbar.1542e7ca.css","assets/index.4db2f83c.js","assets/WidgetsFrame.38d6628f.js","assets/colors.f679b0a6.js","assets/WidgetsFrame.701a818b.css","assets/Modal.05754801.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.76987186.js","assets/broker.f87ad36d.css","assets/BackButton.80cc74bf.js","assets/BackButton.dd542746.css","assets/asyncComputed.99b3d376.js","assets/forms.b554cf32.js","assets/activeRecord.ae1eba97.js","assets/workspaces.47f3c87c.js","assets/FormPreview.bcd09cdf.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.f2774f96.js"),["assets/JobEditor.f2774f96.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/BackButton.f56bf860.js","assets/BackButton.f2f3c401.css","assets/CircularLoading.403df380.js","assets/lottie.61fc86ea.js","assets/CircularLoading.f81b57b4.css","assets/asyncComputed.99b3d376.js","assets/jobs.c13312c3.js","assets/activeRecord.ae1eba97.js","assets/SaveButton.cd2b16e5.js","assets/icons.b993259e.js","assets/SaveButton.7277f302.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.3468c8f5.js","assets/forms.b554cf32.js","assets/dashes.1f934cf7.js","assets/runnerData.215fc732.js","assets/hooks.318348a2.js","assets/workspaces.47f3c87c.js","assets/log.76987186.js","assets/login.e0773e85.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/DocsButton.9bca51e9.js","assets/DocsButton.d2184c76.css","assets/JobEditor.891795a7.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.474a7cd1.js"),["assets/DashEditor.474a7cd1.js","assets/index.4db2f83c.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/BackButton.f56bf860.js","assets/BackButton.f2f3c401.css","assets/DashPlayer.d250bbd5.js","assets/passwordlessManager.60015512.js","assets/runnerData.215fc732.js","assets/executeJs.d39ce091.js","assets/PlayerNavbar.b9e39d0d.js","assets/icons.b993259e.js","assets/PlayerNavbar.1542e7ca.css","assets/WidgetsFrame.38d6628f.js","assets/colors.f679b0a6.js","assets/WidgetsFrame.701a818b.css","assets/Modal.05754801.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.76987186.js","assets/Passwordless.41457a61.js","assets/CircularLoading.403df380.js","assets/lottie.61fc86ea.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.2b58e538.css","assets/DashPlayer.a2bc20b8.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.3468c8f5.js","assets/asyncComputed.99b3d376.js","assets/forms.b554cf32.js","assets/activeRecord.ae1eba97.js","assets/dashes.1f934cf7.js","assets/hooks.318348a2.js","assets/jobs.c13312c3.js","assets/workspaces.47f3c87c.js","assets/login.e0773e85.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/SaveButton.cd2b16e5.js","assets/SaveButton.7277f302.css","assets/PreviewButton.ced8e1ec.js","assets/PreviewButton.52324bbf.css","assets/DocsButton.9bca51e9.js","assets/DocsButton.d2184c76.css","assets/DashEditor.7f66656f.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.5fb54687.js"),["assets/DashPreview.5fb54687.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/DashPlayer.d250bbd5.js","assets/passwordlessManager.60015512.js","assets/runnerData.215fc732.js","assets/executeJs.d39ce091.js","assets/PlayerNavbar.b9e39d0d.js","assets/icons.b993259e.js","assets/PlayerNavbar.1542e7ca.css","assets/index.4db2f83c.js","assets/WidgetsFrame.38d6628f.js","assets/colors.f679b0a6.js","assets/WidgetsFrame.701a818b.css","assets/Modal.05754801.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.76987186.js","assets/Passwordless.41457a61.js","assets/CircularLoading.403df380.js","assets/lottie.61fc86ea.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.2b58e538.css","assets/DashPlayer.a2bc20b8.css","assets/BackButton.80cc74bf.js","assets/BackButton.dd542746.css","assets/asyncComputed.99b3d376.js","assets/dashes.1f934cf7.js","assets/activeRecord.ae1eba97.js","assets/workspaces.47f3c87c.js","assets/DashPreview.e38d1101.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.8705be0f.js"),["assets/HookEditor.8705be0f.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/BackButton.f56bf860.js","assets/BackButton.f2f3c401.css","assets/CircularLoading.403df380.js","assets/lottie.61fc86ea.js","assets/CircularLoading.f81b57b4.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.3468c8f5.js","assets/icons.b993259e.js","assets/asyncComputed.99b3d376.js","assets/forms.b554cf32.js","assets/activeRecord.ae1eba97.js","assets/dashes.1f934cf7.js","assets/runnerData.215fc732.js","assets/hooks.318348a2.js","assets/jobs.c13312c3.js","assets/workspaces.47f3c87c.js","assets/log.76987186.js","assets/login.e0773e85.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/SaveButton.cd2b16e5.js","assets/SaveButton.7277f302.css","assets/DocsButton.9bca51e9.js","assets/DocsButton.d2184c76.css","assets/HookEditor.57f047c8.css"]),meta:{title:"Abstra - Hook Editor"}},{path:"table/:tableName",name:"tableEditor",component:()=>t(()=>import("./TableEditor.88f17627.js"),["assets/TableEditor.88f17627.js","assets/asyncComputed.99b3d376.js","assets/registerWidgets.f021c1a4.js","assets/registerWidgets.448db7e9.css","assets/tables.d6ff3ce2.js","assets/activeRecord.ae1eba97.js","assets/CircularLoading.403df380.js","assets/lottie.61fc86ea.js","assets/CircularLoading.f81b57b4.css","assets/BackButton.f56bf860.js","assets/BackButton.f2f3c401.css","assets/icons.b993259e.js","assets/DocsButton.9bca51e9.js","assets/DocsButton.d2184c76.css","assets/TableEditor.86fe96d8.css"]),meta:{title:"Abstra - Table Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});r.beforeEach(async(e,o)=>{L(e,o)});(async()=>{const e=E({render:()=>T(k)});f.init(),v(e,r),e.use(r),e.use(A),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",I),e.component("Icon",D),e.component("Message",w),a(e,y),a(e,V),a(e,R)})();
//# sourceMappingURL=editor.c376f12f.js.map
