import{_ as k}from"./logo.084e5d7c.js";import{q as i,b as s,c as o,O as u,Q as p,x as t,d as b,H as I,a as x,z as _,N as f,e as r,w as g,U as m,F as $,L as w,D as L,ar as N}from"./registerWidgets.5bc8efb7.js";import{p as l}from"./passwordlessManager.42602b26.js";import{a as C}from"./asyncComputed.7bb233f8.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[c]="0f9d703f-d8ec-493c-ad36-439854f48c61",e._sentryDebugIdIdentifier="sentry-dbid-0f9d703f-d8ec-493c-ad36-439854f48c61")}catch{}})();const B={},v=e=>(u("data-v-439be421"),e=e(),p(),e),D={class:"logo"},S=v(()=>t("img",{class:"logo-img",src:k,alt:"Abstra cloud logo"},null,-1)),V=v(()=>t("span",null,"Abstra Cloud",-1)),U=[S,V];function A(e,c){return s(),o("div",D,U)}const E=i(B,[["render",A],["__scopeId","data-v-439be421"]]),F={key:0},R={key:1,class:"logged"},q={class:"author-email"},z={key:2},H=b({__name:"LoginBlock",setup(e){const c=I(),{result:a,loading:n,refetch:d}=C(async()=>l.getUser());function h(){l.removeUser(),d(),c.push({name:"login"})}return(P,W)=>{const y=x("router-link");return _(n)?(s(),o("div",F,"loading...")):_(a)?(s(),o("div",R,[t("span",q,f(_(a).claims.email),1),t("button",{class:"btn",onClick:h},"Logout")])):(s(),o("div",z,[r(y,{class:"btn",to:"/login"},{default:g(()=>[m("Login")]),_:1})]))}}});const M=i(H,[["__scopeId","data-v-6c08207b"]]),O=e=>(u("data-v-cf48b8cc"),e=e(),p(),e),Q={class:"nav"},T={class:"left"},j={key:0,class:"breadcrumb-container"},G=O(()=>t("span",{class:"divider"},">",-1)),J={class:"right"},K=b({__name:"Navbar",props:{breadcrumb:null},setup(e){return(c,a)=>(s(),o("nav",Q,[t("div",T,[r(E),e.breadcrumb?(s(),o("div",j,[(s(!0),o($,null,w(e.breadcrumb,(n,d)=>(s(),o("span",{key:d,class:"breadcrumb-item"},[r(_(N),{class:"breadcrumb-link",to:n.path},{default:g(()=>[m(f(n.label),1)]),_:2},1032,["to"]),G]))),128))])):L("",!0)]),t("div",J,[r(M)])]))}});const se=i(K,[["__scopeId","data-v-cf48b8cc"]]);export{se as N};
//# sourceMappingURL=Navbar.cb571bd8.js.map
