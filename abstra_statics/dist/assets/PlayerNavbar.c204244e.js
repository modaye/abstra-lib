import{m as k,l as _}from"./icons.d4e872e2.js";import{d as f,J as b,b as s,c as a,v as l,F as p,K as R,y as n,E as u,L as g,p as S,u as N,B as r,e as C,I as x,q as B,N as I,O as $}from"./registerWidgets.04dc761e.js";const E={class:"sidebar-content"},U={class:"section"},P=["onClick"],w=f({__name:"Sidebar",props:{currentRuntime:null,displaySidebar:{type:Boolean},forceResponsivity:null},emits:["selectRuntime","closeSidebar"],setup(e,{emit:m}){const c=e,d=b(()=>c.currentRuntime.runtimeType==="dash"),o=t=>{i(t.id)||m("selectRuntime",t)},y=b(()=>c.currentRuntime.sidebar.filter(t=>t.visible)),i=t=>t===c.currentRuntime.id;return(t,h)=>(s(),a("div",{class:u(["sidebar",e.forceResponsivity,{open:e.displaySidebar,dash:n(d)}])},[l("div",E,[l("div",U,[(s(!0),a(p,null,R(n(y),v=>(s(),a("div",{key:v.id,class:u(["item",{active:i(v.id)}]),onClick:j=>o(v)},[l("div",{class:u(["item-title",{open:e.displaySidebar}])},g(v.name),3)],10,P))),128))])])],2))}});const T=S(w,[["__scopeId","data-v-09ca60c8"]]),V=e=>(I("data-v-533045c7"),e=e(),$(),e),D={class:"left-side"},F=["d"],L={key:1,class:"brand"},q=["src"],z={key:1,class:"brand-name"},J=V(()=>l("div",null,null,-1)),K={key:0,class:"signed-email"},O=f({__name:"PlayerNavbar",props:{runtime:null,brandName:null,logoUrl:null,userEmail:null,forceResponsivity:null},emits:["logout","navigate"],setup(e,{emit:m}){const c=e,d=N({displaySidebar:!1}),o=b(()=>{const i=c.runtime.sidebar;return!i||i.length==0?!1:i.some(t=>t.visible)}),y=i=>m("navigate",i);return(i,t)=>(s(),a(p,null,[n(o)||e.runtime.logoUrl||e.runtime.brandName||e.userEmail?(s(),a("div",{key:0,class:u(["navbar",(e.runtime.runtimeType=="dash"||n(o))&&"background"])},[l("div",D,[n(o)?(s(),a("svg",{key:0,class:u(["sidebar-menu-icon",e.forceResponsivity,{dash:e.runtime.runtimeType=="dash"}]),viewBox:"0 0 24 24",fill:"var(--color-main)",onClick:t[0]||(t[0]=h=>d.displaySidebar=!d.displaySidebar)},[l("path",{d:n(k)},null,8,F)],2)):r("",!0),e.runtime.logoUrl||e.runtime.brandName?(s(),a("div",L,[e.runtime.logoUrl?(s(),a("img",{key:0,src:e.logoUrl,class:"logo-image"},null,8,q)):r("",!0),e.runtime.brandName?(s(),a("p",z,g(e.runtime.brandName),1)):r("",!0)])):r("",!0)]),J,e.userEmail?(s(),a("div",K,[l("span",null,g(e.userEmail),1),C(x,{width:"20",height:"20",class:"logout",path:n(_),fill:"var(--color-main)",onClick:t[1]||(t[1]=h=>m("logout"))},null,8,["path"])])):r("",!0)],2)):r("",!0),n(o)?(s(),B(T,{key:1,"current-runtime":e.runtime,"display-sidebar":d.displaySidebar,"force-responsivity":e.forceResponsivity,onSelectRuntime:y},null,8,["current-runtime","display-sidebar","force-responsivity"])):r("",!0)],64))}});const H=S(O,[["__scopeId","data-v-533045c7"]]);export{H as P};
//# sourceMappingURL=PlayerNavbar.c204244e.js.map