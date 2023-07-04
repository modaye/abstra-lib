import{r as n,d as _,o as m,a as p,b as d,c,e as h,f as l,g as E,_ as e,h as u,T as b,P as v,C as A,M as P,I as f,s as T,i as o,j as I,k as D,l as V,m as R}from"./registerWidgets.ba12cd54.js";import{u as w}from"./index.a464e9f0.js";import{i as L}from"./sentry.923a3738.js";const s=n(!1),O=()=>{window.innerWidth<780?s.value=!0:s.value=!1},k={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},g=_({__name:"App",setup(t){return m(()=>{window.addEventListener("resize",O)}),(r,y)=>{const i=p("router-view");return d(),c("div",k,[h(i)])}}});const a=l({history:E("/"),routes:[{path:"/_editor/",name:"app",component:()=>e(()=>import("./Home.e62d29e2.js"),["assets/Home.e62d29e2.js","assets/Modal.9cffe8c6.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/Modal.5aaf8eba.css","assets/Home.1c04d83a.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>e(()=>import("./Workspace.df617436.js"),["assets/Workspace.df617436.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/icons.ea1ef9e9.js","assets/Tooltip.0dc21a61.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.3e2c3bcb.js","assets/Workspace.1f4b6fe5.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>e(()=>import("./Forms.efcefbb6.js"),["assets/Forms.efcefbb6.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/icons.ea1ef9e9.js","assets/asyncComputed.3e2c3bcb.js","assets/forms.a8d20ba7.js","assets/utils.f91c500c.js","assets/pubsub.a0411919.js","assets/RuntimeList.e52dc580.js","assets/DropdownMenu.7287e391.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.79e96d11.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.fb8a1e5e.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>e(()=>import("./Dashes.ca09b6b0.js"),["assets/Dashes.ca09b6b0.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/icons.ea1ef9e9.js","assets/asyncComputed.3e2c3bcb.js","assets/dashes.d14bfa94.js","assets/utils.f91c500c.js","assets/pubsub.a0411919.js","assets/runnerData.c05f40df.js","assets/RuntimeList.e52dc580.js","assets/DropdownMenu.7287e391.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.79e96d11.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.fb8a1e5e.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>e(()=>import("./Jobs.d582d006.js"),["assets/Jobs.d582d006.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/icons.ea1ef9e9.js","assets/asyncComputed.3e2c3bcb.js","assets/jobs.9a947645.js","assets/utils.f91c500c.js","assets/pubsub.a0411919.js","assets/RuntimeList.e52dc580.js","assets/DropdownMenu.7287e391.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.79e96d11.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.fb8a1e5e.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>e(()=>import("./Hooks.54ccc72a.js"),["assets/Hooks.54ccc72a.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/icons.ea1ef9e9.js","assets/asyncComputed.3e2c3bcb.js","assets/hooks.2479f4f4.js","assets/utils.f91c500c.js","assets/pubsub.a0411919.js","assets/RuntimeList.e52dc580.js","assets/DropdownMenu.7287e391.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.79e96d11.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.fb8a1e5e.css"]),meta:{title:"Abstra - Hooks"}},{path:"tables",name:"tables",component:()=>e(()=>import("./Tables.cbea5f06.js"),["assets/Tables.cbea5f06.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/icons.ea1ef9e9.js","assets/asyncComputed.3e2c3bcb.js","assets/tables.e9c2644d.js","assets/utils.f91c500c.js","assets/pubsub.a0411919.js","assets/RuntimeList.e52dc580.js","assets/DropdownMenu.7287e391.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.79e96d11.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.fb8a1e5e.css"]),meta:{title:"Abstra - Tables"}},{path:"settings",name:"settings",component:()=>e(()=>import("./Settings.d951dbc4.js"),["assets/Settings.d951dbc4.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/asyncComputed.3e2c3bcb.js","assets/workspaces.32af92db.js","assets/CircularLoading.79e96d11.js","assets/CircularLoading.f81b57b4.css","assets/index.a464e9f0.js","assets/icons.ea1ef9e9.js","assets/SaveButton.f4cd69fb.js","assets/SaveButton.f1dc522a.css","assets/Settings.19c0a661.css"]),meta:{title:"Abstra - Settings"}}]},{path:"form/:formPath",name:"editor",component:()=>e(()=>import("./FormEditor.238e08b5.js"),["assets/FormEditor.238e08b5.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/CircularLoading.79e96d11.js","assets/CircularLoading.f81b57b4.css","assets/Error.8bdf5cf7.js","assets/Error.5cfc41d8.css","assets/broker.8a22d701.js","assets/passwordlessManager.a5941d42.js","assets/icons.ea1ef9e9.js","assets/Passwordless.ada2efe6.js","assets/Passwordless.c981501a.css","assets/WidgetsFrame.6a2a8a84.js","assets/index.a464e9f0.js","assets/Modal.9cffe8c6.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.f427edd2.css","assets/log.b865b541.js","assets/broker.b057aed3.css","assets/SmartConsole.4fb49f9f.js","assets/asyncComputed.3e2c3bcb.js","assets/forms.a8d20ba7.js","assets/utils.f91c500c.js","assets/pubsub.a0411919.js","assets/dashes.d14bfa94.js","assets/runnerData.c05f40df.js","assets/hooks.2479f4f4.js","assets/jobs.9a947645.js","assets/workspaces.32af92db.js","assets/SmartConsole.9a68b5ac.css","assets/BackButton.49bc8a7b.js","assets/BackButton.ae9a631b.css","assets/FormEditor.3e4dba2f.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"form-preview",component:()=>e(()=>import("./FormPreview.e4db9f33.js"),["assets/FormPreview.e4db9f33.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/CircularLoading.79e96d11.js","assets/CircularLoading.f81b57b4.css","assets/Error.8bdf5cf7.js","assets/Error.5cfc41d8.css","assets/broker.8a22d701.js","assets/passwordlessManager.a5941d42.js","assets/icons.ea1ef9e9.js","assets/Passwordless.ada2efe6.js","assets/Passwordless.c981501a.css","assets/WidgetsFrame.6a2a8a84.js","assets/index.a464e9f0.js","assets/Modal.9cffe8c6.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.f427edd2.css","assets/log.b865b541.js","assets/broker.b057aed3.css","assets/BackButton.b1ae22c8.js","assets/BackButton.802d214e.css","assets/asyncComputed.3e2c3bcb.js","assets/forms.a8d20ba7.js","assets/utils.f91c500c.js","assets/pubsub.a0411919.js","assets/workspaces.32af92db.js","assets/FormPreview.69e549a7.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>e(()=>import("./JobEditor.7202bbb2.js"),["assets/JobEditor.7202bbb2.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/BackButton.49bc8a7b.js","assets/BackButton.ae9a631b.css","assets/CircularLoading.79e96d11.js","assets/CircularLoading.f81b57b4.css","assets/asyncComputed.3e2c3bcb.js","assets/jobs.9a947645.js","assets/utils.f91c500c.js","assets/pubsub.a0411919.js","assets/SaveButton.f4cd69fb.js","assets/icons.ea1ef9e9.js","assets/SaveButton.f1dc522a.css","assets/SmartConsole.4fb49f9f.js","assets/forms.a8d20ba7.js","assets/dashes.d14bfa94.js","assets/runnerData.c05f40df.js","assets/hooks.2479f4f4.js","assets/workspaces.32af92db.js","assets/log.b865b541.js","assets/SmartConsole.9a68b5ac.css","assets/JobEditor.e5f4d76c.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>e(()=>import("./DashEditor.fe78eb24.js"),["assets/DashEditor.fe78eb24.js","assets/index.a464e9f0.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/BackButton.49bc8a7b.js","assets/BackButton.ae9a631b.css","assets/icons.ea1ef9e9.js","assets/DashPlayer.8cf4b63b.js","assets/passwordlessManager.a5941d42.js","assets/runnerData.c05f40df.js","assets/WidgetsFrame.6a2a8a84.js","assets/Modal.9cffe8c6.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.f427edd2.css","assets/log.b865b541.js","assets/Passwordless.ada2efe6.js","assets/CircularLoading.79e96d11.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.c981501a.css","assets/DashPlayer.f60035bd.css","assets/SmartConsole.4fb49f9f.js","assets/asyncComputed.3e2c3bcb.js","assets/forms.a8d20ba7.js","assets/utils.f91c500c.js","assets/pubsub.a0411919.js","assets/dashes.d14bfa94.js","assets/hooks.2479f4f4.js","assets/jobs.9a947645.js","assets/workspaces.32af92db.js","assets/SmartConsole.9a68b5ac.css","assets/SaveButton.f4cd69fb.js","assets/SaveButton.f1dc522a.css","assets/DashEditor.36d1f0a5.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>e(()=>import("./DashPreview.56e6b75c.js"),["assets/DashPreview.56e6b75c.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/DashPlayer.8cf4b63b.js","assets/passwordlessManager.a5941d42.js","assets/runnerData.c05f40df.js","assets/WidgetsFrame.6a2a8a84.js","assets/icons.ea1ef9e9.js","assets/index.a464e9f0.js","assets/Modal.9cffe8c6.js","assets/Modal.5aaf8eba.css","assets/WidgetsFrame.f427edd2.css","assets/log.b865b541.js","assets/Passwordless.ada2efe6.js","assets/CircularLoading.79e96d11.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.c981501a.css","assets/DashPlayer.f60035bd.css","assets/BackButton.b1ae22c8.js","assets/BackButton.802d214e.css","assets/asyncComputed.3e2c3bcb.js","assets/dashes.d14bfa94.js","assets/utils.f91c500c.js","assets/pubsub.a0411919.js","assets/workspaces.32af92db.js","assets/DashPreview.4ac074a5.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>e(()=>import("./HookEditor.60ac3e88.js"),["assets/HookEditor.60ac3e88.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/BackButton.49bc8a7b.js","assets/BackButton.ae9a631b.css","assets/CircularLoading.79e96d11.js","assets/CircularLoading.f81b57b4.css","assets/SmartConsole.4fb49f9f.js","assets/icons.ea1ef9e9.js","assets/asyncComputed.3e2c3bcb.js","assets/forms.a8d20ba7.js","assets/utils.f91c500c.js","assets/pubsub.a0411919.js","assets/dashes.d14bfa94.js","assets/runnerData.c05f40df.js","assets/hooks.2479f4f4.js","assets/jobs.9a947645.js","assets/workspaces.32af92db.js","assets/log.b865b541.js","assets/SmartConsole.9a68b5ac.css","assets/SaveButton.f4cd69fb.js","assets/SaveButton.f1dc522a.css","assets/HookEditor.a3db11d1.css"]),meta:{title:"Abstra - Hook Editor"}},{path:"table/:tableName",name:"tableEditor",component:()=>e(()=>import("./TableEditor.0661aad0.js"),["assets/TableEditor.0661aad0.js","assets/asyncComputed.3e2c3bcb.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/tables.e9c2644d.js","assets/utils.f91c500c.js","assets/pubsub.a0411919.js","assets/CircularLoading.79e96d11.js","assets/CircularLoading.f81b57b4.css","assets/BackButton.49bc8a7b.js","assets/BackButton.ae9a631b.css","assets/icons.ea1ef9e9.js","assets/TableEditor.73c06e25.css"]),meta:{title:"Abstra - Table Editor"}}]}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});a.beforeEach(async(t,r)=>{w(t,r)});(async()=>{const t=u({render:()=>I(g)});b.init(),L(t,a,"console.abstracloud.com"),t.use(a),t.use(v),t.mount("#app"),t.component("VSelect",A),t.component("Markdown",P),t.component("Icon",f),t.component("Message",T),o(t,D),o(t,V),o(t,R)})();
//# sourceMappingURL=editor.6eecb017.js.map