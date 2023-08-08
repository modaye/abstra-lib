import{r as _,d as m,o as p,a as d,b as c,c as h,e as l,f as b,g as u,_ as t,h as E,T as f,i as v,P as A,C as P,M as I,I as D,s as w,j as a,k as T,l as y,m as V,n as R}from"./registerWidgets.6f0bbac2.js";import{u as L}from"./index.c2ce3dd4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="63d3a851-ff58-45a8-9746-f87b6abbf869",e._sentryDebugIdIdentifier="sentry-dbid-63d3a851-ff58-45a8-9746-f87b6abbf869")}catch{}})();const s=_(!1),g=()=>{window.innerWidth<780?s.value=!0:s.value=!1},O={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},k=m({__name:"App",setup(e){return p(()=>{window.addEventListener("resize",g)}),(o,n)=>{const i=d("router-view");return c(),h("div",O,[l(i)])}}});const r=b({history:u("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.6630725e.js"),["assets/Home.6630725e.js","assets/Modal.4278a303.js","assets/registerWidgets.6f0bbac2.js","assets/registerWidgets.448db7e9.css","assets/Modal.5aaf8eba.css","assets/Home.1c04d83a.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.745b58e8.js"),["assets/Workspace.745b58e8.js","assets/registerWidgets.6f0bbac2.js","assets/registerWidgets.448db7e9.css","assets/icons.33d01da0.js","assets/Tooltip.8370b433.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.e83909df.js","assets/workspaces.64e25f3a.js","assets/activeRecord.9b68dfe2.js","assets/login.572617c7.js","assets/DocsButton.ee9b2c87.js","assets/DocsButton.d2184c76.css","assets/Workspace.4d7eaba0.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.9c9bcfc6.js"),["assets/Forms.9c9bcfc6.js","assets/registerWidgets.6f0bbac2.js","assets/registerWidgets.448db7e9.css","assets/icons.33d01da0.js","assets/asyncComputed.e83909df.js","assets/forms.5f0cd9e2.js","assets/activeRecord.9b68dfe2.js","assets/RuntimeList.c835d57e.js","assets/DropdownMenu.d2068d7f.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.64e0c9cf.js","assets/lottie.68b1efe0.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.fe4924d7.js"),["assets/Dashes.fe4924d7.js","assets/registerWidgets.6f0bbac2.js","assets/registerWidgets.448db7e9.css","assets/icons.33d01da0.js","assets/asyncComputed.e83909df.js","assets/dashes.bdb53fcf.js","assets/activeRecord.9b68dfe2.js","assets/runnerData.48e4b7b9.js","assets/RuntimeList.c835d57e.js","assets/DropdownMenu.d2068d7f.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.64e0c9cf.js","assets/lottie.68b1efe0.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.888336d6.js"),["assets/Jobs.888336d6.js","assets/registerWidgets.6f0bbac2.js","assets/registerWidgets.448db7e9.css","assets/icons.33d01da0.js","assets/asyncComputed.e83909df.js","assets/jobs.e6269439.js","assets/activeRecord.9b68dfe2.js","assets/RuntimeList.c835d57e.js","assets/DropdownMenu.d2068d7f.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.64e0c9cf.js","assets/lottie.68b1efe0.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.58b8f9e1.js"),["assets/Hooks.58b8f9e1.js","assets/registerWidgets.6f0bbac2.js","assets/registerWidgets.448db7e9.css","assets/icons.33d01da0.js","assets/asyncComputed.e83909df.js","assets/hooks.f7d648d4.js","assets/activeRecord.9b68dfe2.js","assets/RuntimeList.c835d57e.js","assets/DropdownMenu.d2068d7f.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.64e0c9cf.js","assets/lottie.68b1efe0.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Hooks"}},{path:"tables",name:"tables",component:()=>t(()=>import("./Tables.31d18318.js"),["assets/Tables.31d18318.js","assets/registerWidgets.6f0bbac2.js","assets/registerWidgets.448db7e9.css","assets/icons.33d01da0.js","assets/asyncComputed.e83909df.js","assets/tables.2e4d771d.js","assets/activeRecord.9b68dfe2.js","assets/RuntimeList.c835d57e.js","assets/DropdownMenu.d2068d7f.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.64e0c9cf.js","assets/lottie.68b1efe0.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Tables"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.0b413e51.js"),["assets/StyleEditor.0b413e51.js","assets/registerWidgets.6f0bbac2.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.e83909df.js","assets/workspaces.64e25f3a.js","assets/activeRecord.9b68dfe2.js","assets/CircularLoading.64e0c9cf.js","assets/lottie.68b1efe0.js","assets/CircularLoading.f81b57b4.css","assets/icons.33d01da0.js","assets/SidebarPreview.7aa11c99.js","assets/PlayerNavbar.e622520f.js","assets/PlayerNavbar.b27e2024.css","assets/runnerData.48e4b7b9.js","assets/colors.44698f96.js","assets/SidebarPreview.d6f4e541.css","assets/SaveButton.0bc0fad8.js","assets/SaveButton.c2f535d8.css","assets/StyleEditor.8a31e1bc.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.3b63d5ee.js"),["assets/SidebarEditor.3b63d5ee.js","assets/registerWidgets.6f0bbac2.js","assets/registerWidgets.448db7e9.css","assets/workspaces.64e25f3a.js","assets/activeRecord.9b68dfe2.js","assets/asyncComputed.e83909df.js","assets/CircularLoading.64e0c9cf.js","assets/lottie.68b1efe0.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.0bc0fad8.js","assets/icons.33d01da0.js","assets/SaveButton.c2f535d8.css","assets/SidebarPreview.7aa11c99.js","assets/PlayerNavbar.e622520f.js","assets/PlayerNavbar.b27e2024.css","assets/runnerData.48e4b7b9.js","assets/colors.44698f96.js","assets/SidebarPreview.d6f4e541.css","assets/SidebarEditor.f65d95bf.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"editor",component:()=>t(()=>import("./FormEditor.d09b867e.js"),["assets/FormEditor.d09b867e.js","assets/registerWidgets.6f0bbac2.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.64e0c9cf.js","assets/lottie.68b1efe0.js","assets/CircularLoading.f81b57b4.css","assets/Error.fb2df009.js","assets/Error.5cfc41d8.css","assets/broker.2e71ffda.js","assets/passwordlessManager.643e43e8.js","assets/icons.33d01da0.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.1ce994cb.js","assets/Passwordless.8d7065c4.js","assets/Passwordless.2b58e538.css","assets/executeJs.5ccd414f.js","assets/PlayerNavbar.e622520f.js","assets/PlayerNavbar.b27e2024.css","assets/index.c2ce3dd4.js","assets/WidgetsFrame.da1e36e0.js","assets/colors.44698f96.js","assets/WidgetsFrame.701a818b.css","assets/Modal.4278a303.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.e20e536c.js","assets/broker.f87ad36d.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.ec286816.js","assets/asyncComputed.e83909df.js","assets/forms.5f0cd9e2.js","assets/activeRecord.9b68dfe2.js","assets/dashes.bdb53fcf.js","assets/runnerData.48e4b7b9.js","assets/hooks.f7d648d4.js","assets/jobs.e6269439.js","assets/workspaces.64e25f3a.js","assets/login.572617c7.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/BackButton.6b463227.js","assets/BackButton.f2f3c401.css","assets/SaveButton.0bc0fad8.js","assets/SaveButton.c2f535d8.css","assets/DocsButton.ee9b2c87.js","assets/DocsButton.d2184c76.css","assets/PreviewButton.385c1649.js","assets/PreviewButton.52324bbf.css","assets/FormEditor.14b0b0e9.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"form-preview",component:()=>t(()=>import("./FormPreview.a2452fd7.js"),["assets/FormPreview.a2452fd7.js","assets/registerWidgets.6f0bbac2.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.64e0c9cf.js","assets/lottie.68b1efe0.js","assets/CircularLoading.f81b57b4.css","assets/Error.fb2df009.js","assets/Error.5cfc41d8.css","assets/broker.2e71ffda.js","assets/passwordlessManager.643e43e8.js","assets/icons.33d01da0.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.1ce994cb.js","assets/Passwordless.8d7065c4.js","assets/Passwordless.2b58e538.css","assets/executeJs.5ccd414f.js","assets/PlayerNavbar.e622520f.js","assets/PlayerNavbar.b27e2024.css","assets/index.c2ce3dd4.js","assets/WidgetsFrame.da1e36e0.js","assets/colors.44698f96.js","assets/WidgetsFrame.701a818b.css","assets/Modal.4278a303.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.e20e536c.js","assets/broker.f87ad36d.css","assets/BackButton.831b73cf.js","assets/BackButton.dd542746.css","assets/asyncComputed.e83909df.js","assets/forms.5f0cd9e2.js","assets/activeRecord.9b68dfe2.js","assets/workspaces.64e25f3a.js","assets/FormPreview.bcd09cdf.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.a6fe452e.js"),["assets/JobEditor.a6fe452e.js","assets/registerWidgets.6f0bbac2.js","assets/registerWidgets.448db7e9.css","assets/BackButton.6b463227.js","assets/BackButton.f2f3c401.css","assets/CircularLoading.64e0c9cf.js","assets/lottie.68b1efe0.js","assets/CircularLoading.f81b57b4.css","assets/asyncComputed.e83909df.js","assets/jobs.e6269439.js","assets/activeRecord.9b68dfe2.js","assets/SaveButton.0bc0fad8.js","assets/icons.33d01da0.js","assets/SaveButton.c2f535d8.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.ec286816.js","assets/forms.5f0cd9e2.js","assets/dashes.bdb53fcf.js","assets/runnerData.48e4b7b9.js","assets/hooks.f7d648d4.js","assets/workspaces.64e25f3a.js","assets/log.e20e536c.js","assets/login.572617c7.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/DocsButton.ee9b2c87.js","assets/DocsButton.d2184c76.css","assets/JobEditor.891795a7.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.fb904d59.js"),["assets/DashEditor.fb904d59.js","assets/index.c2ce3dd4.js","assets/registerWidgets.6f0bbac2.js","assets/registerWidgets.448db7e9.css","assets/BackButton.6b463227.js","assets/BackButton.f2f3c401.css","assets/DashPlayer.b15f40cf.js","assets/passwordlessManager.643e43e8.js","assets/runnerData.48e4b7b9.js","assets/executeJs.5ccd414f.js","assets/PlayerNavbar.e622520f.js","assets/icons.33d01da0.js","assets/PlayerNavbar.b27e2024.css","assets/WidgetsFrame.da1e36e0.js","assets/colors.44698f96.js","assets/WidgetsFrame.701a818b.css","assets/Modal.4278a303.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.e20e536c.js","assets/Passwordless.8d7065c4.js","assets/CircularLoading.64e0c9cf.js","assets/lottie.68b1efe0.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.2b58e538.css","assets/DashPlayer.a2bc20b8.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.ec286816.js","assets/asyncComputed.e83909df.js","assets/forms.5f0cd9e2.js","assets/activeRecord.9b68dfe2.js","assets/dashes.bdb53fcf.js","assets/hooks.f7d648d4.js","assets/jobs.e6269439.js","assets/workspaces.64e25f3a.js","assets/login.572617c7.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/SaveButton.0bc0fad8.js","assets/SaveButton.c2f535d8.css","assets/PreviewButton.385c1649.js","assets/PreviewButton.52324bbf.css","assets/DocsButton.ee9b2c87.js","assets/DocsButton.d2184c76.css","assets/DashEditor.7f66656f.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.23f11566.js"),["assets/DashPreview.23f11566.js","assets/registerWidgets.6f0bbac2.js","assets/registerWidgets.448db7e9.css","assets/DashPlayer.b15f40cf.js","assets/passwordlessManager.643e43e8.js","assets/runnerData.48e4b7b9.js","assets/executeJs.5ccd414f.js","assets/PlayerNavbar.e622520f.js","assets/icons.33d01da0.js","assets/PlayerNavbar.b27e2024.css","assets/index.c2ce3dd4.js","assets/WidgetsFrame.da1e36e0.js","assets/colors.44698f96.js","assets/WidgetsFrame.701a818b.css","assets/Modal.4278a303.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.e20e536c.js","assets/Passwordless.8d7065c4.js","assets/CircularLoading.64e0c9cf.js","assets/lottie.68b1efe0.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.2b58e538.css","assets/DashPlayer.a2bc20b8.css","assets/BackButton.831b73cf.js","assets/BackButton.dd542746.css","assets/asyncComputed.e83909df.js","assets/dashes.bdb53fcf.js","assets/activeRecord.9b68dfe2.js","assets/workspaces.64e25f3a.js","assets/DashPreview.e38d1101.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.3f04af68.js"),["assets/HookEditor.3f04af68.js","assets/registerWidgets.6f0bbac2.js","assets/registerWidgets.448db7e9.css","assets/BackButton.6b463227.js","assets/BackButton.f2f3c401.css","assets/CircularLoading.64e0c9cf.js","assets/lottie.68b1efe0.js","assets/CircularLoading.f81b57b4.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.ec286816.js","assets/icons.33d01da0.js","assets/asyncComputed.e83909df.js","assets/forms.5f0cd9e2.js","assets/activeRecord.9b68dfe2.js","assets/dashes.bdb53fcf.js","assets/runnerData.48e4b7b9.js","assets/hooks.f7d648d4.js","assets/jobs.e6269439.js","assets/workspaces.64e25f3a.js","assets/log.e20e536c.js","assets/login.572617c7.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/SaveButton.0bc0fad8.js","assets/SaveButton.c2f535d8.css","assets/DocsButton.ee9b2c87.js","assets/DocsButton.d2184c76.css","assets/HookEditor.57f047c8.css"]),meta:{title:"Abstra - Hook Editor"}},{path:"table/:tableName",name:"tableEditor",component:()=>t(()=>import("./TableEditor.aef3aa2b.js"),["assets/TableEditor.aef3aa2b.js","assets/asyncComputed.e83909df.js","assets/registerWidgets.6f0bbac2.js","assets/registerWidgets.448db7e9.css","assets/tables.2e4d771d.js","assets/activeRecord.9b68dfe2.js","assets/CircularLoading.64e0c9cf.js","assets/lottie.68b1efe0.js","assets/CircularLoading.f81b57b4.css","assets/BackButton.6b463227.js","assets/BackButton.f2f3c401.css","assets/icons.33d01da0.js","assets/DocsButton.ee9b2c87.js","assets/DocsButton.d2184c76.css","assets/TableEditor.86fe96d8.css"]),meta:{title:"Abstra - Table Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});r.beforeEach(async(e,o)=>{L(e,o)});(async()=>{const e=E({render:()=>T(k)});f.init(),v(e,r),e.use(r),e.use(A),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",I),e.component("Icon",D),e.component("Message",w),a(e,y),a(e,V),a(e,R)})();
//# sourceMappingURL=editor.10c9f654.js.map
