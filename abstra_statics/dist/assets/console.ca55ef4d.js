import{q as s,a as i,b as _,c as p,e as m,f as c,g as d,_ as t,h as u,T as h,P as l,C as g,M as v,I as E,s as I,i as a,j as A,k as P,l as T,m as V}from"./registerWidgets.bb4c7eff.js";import{p as b}from"./passwordlessManager.a806df6a.js";import{u as f}from"./index.82e1a6b3.js";import{i as R}from"./sentry.2692e5c6.js";const D={},L={style:{height:"100vh","box-sizing":"border-box",width:"100%"}};function O(e,r){const n=i("router-view");return _(),p("div",L,[m(n)])}const y=s(D,[["render",O]]),o=c({history:d("/"),routes:[{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./Login.96d2c274.js"),["assets/Login.96d2c274.js","assets/Passwordless.7dbc83c1.js","assets/CircularLoading.8dab92fc.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/CircularLoading.f81b57b4.css","assets/icons.97625e56.js","assets/passwordlessManager.a806df6a.js","assets/Passwordless.c981501a.css","assets/Navbar.de35b0e2.js","assets/logo.084e5d7c.js","assets/asyncComputed.0adffaf6.js","assets/Navbar.af6c4d32.css","assets/member.ccec4849.js","assets/utils.f02a47e6.js","assets/pubsub.a0411919.js","assets/Login.8dc5040f.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>t(()=>import("./Organizations.702815af.js"),["assets/Organizations.702815af.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/icons.97625e56.js","assets/asyncComputed.0adffaf6.js","assets/utils.f02a47e6.js","assets/passwordlessManager.a806df6a.js","assets/pubsub.a0411919.js","assets/organization.99ca3e7f.js","assets/CrudView.74273abd.js","assets/DropdownMenu.45ad2be4.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/Modal.bf534f7d.js","assets/Modal.5aaf8eba.css","assets/CrudView.f0cb67b2.css","assets/Navbar.de35b0e2.js","assets/logo.084e5d7c.js","assets/Navbar.af6c4d32.css","assets/Organizations.9d79a4d8.css"])},{path:"/organizations/:organizationId",name:"organization",component:()=>t(()=>import("./Organization.e38617a1.js"),["assets/Organization.e38617a1.js","assets/Sidebar.2b5198c6.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/icons.97625e56.js","assets/Tooltip.e8984c12.js","assets/Tooltip.63c4352e.css","assets/Sidebar.a295cdc7.css","assets/Navbar.de35b0e2.js","assets/logo.084e5d7c.js","assets/passwordlessManager.a806df6a.js","assets/asyncComputed.0adffaf6.js","assets/Navbar.af6c4d32.css","assets/utils.f02a47e6.js","assets/pubsub.a0411919.js","assets/organization.99ca3e7f.js","assets/Organization.3577d69b.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>t(()=>import("./Projects.ecb719d4.js"),["assets/Projects.ecb719d4.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/icons.97625e56.js","assets/asyncComputed.0adffaf6.js","assets/project.8394fcae.js","assets/utils.f02a47e6.js","assets/passwordlessManager.a806df6a.js","assets/pubsub.a0411919.js","assets/organization.99ca3e7f.js","assets/CrudView.74273abd.js","assets/DropdownMenu.45ad2be4.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/Modal.bf534f7d.js","assets/Modal.5aaf8eba.css","assets/CrudView.f0cb67b2.css"])},{path:"settings",name:"organization-settings",component:()=>t(()=>import("./OrganizationSettings.2d372005.js"),["assets/OrganizationSettings.2d372005.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css"])},{path:"members",name:"members",component:()=>t(()=>import("./Members.bc40bde6.js"),["assets/Members.bc40bde6.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/asyncComputed.0adffaf6.js","assets/utils.f02a47e6.js","assets/passwordlessManager.a806df6a.js","assets/pubsub.a0411919.js","assets/member.ccec4849.js","assets/CrudView.74273abd.js","assets/DropdownMenu.45ad2be4.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/Modal.bf534f7d.js","assets/Modal.5aaf8eba.css","assets/CrudView.f0cb67b2.css"])}]},{path:"/projects/:projectId",name:"project",component:()=>t(()=>import("./Project.6aac6f3c.js"),["assets/Project.6aac6f3c.js","assets/Sidebar.2b5198c6.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/icons.97625e56.js","assets/Tooltip.e8984c12.js","assets/Tooltip.63c4352e.css","assets/Sidebar.a295cdc7.css","assets/Navbar.de35b0e2.js","assets/logo.084e5d7c.js","assets/passwordlessManager.a806df6a.js","assets/asyncComputed.0adffaf6.js","assets/Navbar.af6c4d32.css","assets/project.8394fcae.js","assets/utils.f02a47e6.js","assets/pubsub.a0411919.js","assets/organization.99ca3e7f.js","assets/Project.73b105d5.css"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>t(()=>import("./Builds.49b4607a.js"),["assets/Builds.49b4607a.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/asyncComputed.0adffaf6.js","assets/utils.f02a47e6.js","assets/passwordlessManager.a806df6a.js","assets/pubsub.a0411919.js","assets/CrudView.74273abd.js","assets/DropdownMenu.45ad2be4.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/Modal.bf534f7d.js","assets/Modal.5aaf8eba.css","assets/CrudView.f0cb67b2.css","assets/Builds.bb724135.css"])},{path:"api-keys",name:"api-keys",component:()=>t(()=>import("./ApiKeys.ba7003e8.js"),["assets/ApiKeys.ba7003e8.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/asyncComputed.0adffaf6.js","assets/project.8394fcae.js","assets/utils.f02a47e6.js","assets/passwordlessManager.a806df6a.js","assets/pubsub.a0411919.js","assets/member.ccec4849.js","assets/CrudView.74273abd.js","assets/DropdownMenu.45ad2be4.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/Modal.bf534f7d.js","assets/Modal.5aaf8eba.css","assets/CrudView.f0cb67b2.css","assets/icons.97625e56.js","assets/ApiKeys.1370f2e8.css"])},{path:"settings",name:"project-settings",component:()=>t(()=>import("./ProjectSettings.5141585e.js"),["assets/ProjectSettings.5141585e.js","assets/asyncComputed.0adffaf6.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/project.8394fcae.js","assets/utils.f02a47e6.js","assets/passwordlessManager.a806df6a.js","assets/pubsub.a0411919.js","assets/index.82e1a6b3.js","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/icons.97625e56.js","assets/ProjectSettings.417128e6.css"])},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVars.8a42ab0b.js"),["assets/EnvVars.8a42ab0b.js","assets/registerWidgets.bb4c7eff.js","assets/registerWidgets.64440b7a.css","assets/asyncComputed.0adffaf6.js","assets/utils.f02a47e6.js","assets/passwordlessManager.a806df6a.js","assets/pubsub.a0411919.js","assets/CrudView.74273abd.js","assets/DropdownMenu.45ad2be4.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.8dab92fc.js","assets/CircularLoading.f81b57b4.css","assets/Modal.bf534f7d.js","assets/Modal.5aaf8eba.css","assets/CrudView.f0cb67b2.css","assets/icons.97625e56.js"])}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});o.beforeEach(async(e,r)=>{f(e,r);const n=b.getUser();if(!e.meta.allowUnauthenticated&&!n){await o.push({name:"login"});return}});(async()=>{const e=u({render:()=>A(y)});h.init(),R(e,o,"console.abstracloud.com"),e.use(o),e.use(l),e.mount("#app"),e.component("VSelect",g),e.component("Markdown",v),e.component("Icon",E),e.component("Message",I),a(e,P),a(e,T),a(e,V)})();
//# sourceMappingURL=console.ca55ef4d.js.map
