import{m as k,l as _}from"./icons.e3de8035.js";import{d as f,K as y,b as s,c as i,x as l,F as p,L as R,z as n,G as u,N as g,q as S,v as N,D as r,e as x,I as C,t as I,O as $,Q as B}from"./registerWidgets.4a0d8d45.js";const E={class:"sidebar-content"},U={class:"section"},P=["onClick"],w=f({__name:"Sidebar",props:{currentRuntime:null,displaySidebar:{type:Boolean},forceResponsivity:null},emits:["selectRuntime","closeSidebar"],setup(e,{emit:m}){const c=e,d=y(()=>c.currentRuntime.runtimeType==="dash"),o=t=>{a(t.id)||m("selectRuntime",t)},b=y(()=>c.currentRuntime.sidebar.filter(t=>t.visible)),a=t=>t===c.currentRuntime.id;return(t,h)=>(s(),i("div",{class:u(["sidebar",e.forceResponsivity,{open:e.displaySidebar,dash:n(d)}])},[l("div",E,[l("div",U,[(s(!0),i(p,null,R(n(b),v=>(s(),i("div",{key:v.id,class:u(["item",{active:a(v.id)}]),onClick:Q=>o(v)},[l("div",{class:u(["item-title",{open:e.displaySidebar}])},g(v.name),3)],10,P))),128))])])],2))}});const D=S(w,[["__scopeId","data-v-09ca60c8"]]),T=e=>($("data-v-b7752801"),e=e(),B(),e),V={class:"left-side"},z=["d"],F={key:1,class:"brand"},L=["src"],q={key:1,class:"brand-name"},G=T(()=>l("div",null,null,-1)),K={key:0,class:"signed-email"},O=f({__name:"PlayerNavbar",props:{runtime:null,brandName:null,logoUrl:null,userEmail:null,forceResponsivity:null},emits:["logout","navigate"],setup(e,{emit:m}){const c=e,d=N({displaySidebar:!1}),o=y(()=>{const a=c.runtime.sidebar;return!a||a.length==0?!1:a.some(t=>t.visible)}),b=a=>m("navigate",a);return(a,t)=>(s(),i(p,null,[n(o)||e.runtime.logoUrl||e.runtime.brandName||e.userEmail?(s(),i("div",{key:0,class:u(["navbar",(e.runtime.runtimeType=="dash"||n(o))&&"background"])},[l("div",V,[n(o)?(s(),i("svg",{key:0,class:u(["sidebar-menu-icon",e.forceResponsivity,{dash:e.runtime.runtimeType=="dash"}]),viewBox:"0 0 24 24",fill:"var(--color-main)",onClick:t[0]||(t[0]=h=>d.displaySidebar=!d.displaySidebar)},[l("path",{d:n(k)},null,8,z)],2)):r("",!0),e.runtime.logoUrl||e.runtime.brandName?(s(),i("div",F,[e.runtime.logoUrl?(s(),i("img",{key:0,src:e.runtime.logoUrl,class:"logo-image"},null,8,L)):r("",!0),e.runtime.brandName?(s(),i("p",q,g(e.runtime.brandName),1)):r("",!0)])):r("",!0)]),G,e.userEmail?(s(),i("div",K,[l("span",null,g(e.userEmail),1),x(C,{width:"20",height:"20",class:"logout",path:n(_),fill:"var(--color-main)",onClick:t[1]||(t[1]=h=>m("logout"))},null,8,["path"])])):r("",!0)],2)):r("",!0),n(o)?(s(),I(D,{key:1,"current-runtime":e.runtime,"display-sidebar":d.displaySidebar,"force-responsivity":e.forceResponsivity,onSelectRuntime:b},null,8,["current-runtime","display-sidebar","force-responsivity"])):r("",!0)],64))}});const H=S(O,[["__scopeId","data-v-b7752801"]]);export{H as P};
//# sourceMappingURL=PlayerNavbar.e4922711.js.map
