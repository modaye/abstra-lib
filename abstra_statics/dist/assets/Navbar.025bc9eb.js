import{_ as k}from"./logo.084e5d7c.js";import{q as i,b as s,c as o,O as u,Q as b,x as t,d as p,H as I,a as x,z as _,N as g,e as r,w as m,S as f,F as $,L as w,D as L,aq as N}from"./registerWidgets.29ceb1a3.js";import{p as l}from"./passwordlessManager.68f14bfc.js";import{a as C}from"./asyncComputed.9ed582d0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="97e8dfb8-b695-437d-9b2e-96ab7f2dca27",e._sentryDebugIdIdentifier="sentry-dbid-97e8dfb8-b695-437d-9b2e-96ab7f2dca27")}catch{}})();const B={},v=e=>(u("data-v-439be421"),e=e(),b(),e),D={class:"logo"},S=v(()=>t("img",{class:"logo-img",src:k,alt:"Abstra cloud logo"},null,-1)),V=v(()=>t("span",null,"Abstra Cloud",-1)),q=[S,V];function A(e,a){return s(),o("div",D,q)}const E=i(B,[["render",A],["__scopeId","data-v-439be421"]]),F={key:0},R={key:1,class:"logged"},U={class:"author-email"},z={key:2},H=p({__name:"LoginBlock",setup(e){const a=I(),{result:c,loading:n,refetch:d}=C(async()=>l.getUser());function h(){l.removeUser(),d(),a.push({name:"login"})}return(P,W)=>{const y=x("router-link");return _(n)?(s(),o("div",F,"loading...")):_(c)?(s(),o("div",R,[t("span",U,g(_(c).claims.email),1),t("button",{class:"btn",onClick:h},"Logout")])):(s(),o("div",z,[r(y,{class:"btn",to:"/login"},{default:m(()=>[f("Login")]),_:1})]))}}});const M=i(H,[["__scopeId","data-v-6c08207b"]]),O=e=>(u("data-v-cf48b8cc"),e=e(),b(),e),Q={class:"nav"},T={class:"left"},j={key:0,class:"breadcrumb-container"},G=O(()=>t("span",{class:"divider"},">",-1)),J={class:"right"},K=p({__name:"Navbar",props:{breadcrumb:null},setup(e){return(a,c)=>(s(),o("nav",Q,[t("div",T,[r(E),e.breadcrumb?(s(),o("div",j,[(s(!0),o($,null,w(e.breadcrumb,(n,d)=>(s(),o("span",{key:d,class:"breadcrumb-item"},[r(_(N),{class:"breadcrumb-link",to:n.path},{default:m(()=>[f(g(n.label),1)]),_:2},1032,["to"]),G]))),128))])):L("",!0)]),t("div",J,[r(M)])]))}});const se=i(K,[["__scopeId","data-v-cf48b8cc"]]);export{se as N};
//# sourceMappingURL=Navbar.025bc9eb.js.map
