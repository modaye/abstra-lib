import{m as k,l as S}from"./icons.da9eecb0.js";import{d as h,K as v,b as s,c as n,x as d,F as p,L as R,z as a,G as m,N as f,q as _,v as I,D as l,e as N,I as w,t as x,O as C,Q as D}from"./registerWidgets.c33434b6.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="933ba307-1d94-4143-935d-38c05edcdced",e._sentryDebugIdIdentifier="sentry-dbid-933ba307-1d94-4143-935d-38c05edcdced")}catch{}})();const $={class:"sidebar-content"},B={class:"section"},E=["onClick"],U=h({__name:"Sidebar",props:{currentRuntime:null,displaySidebar:{type:Boolean},forceResponsivity:null},emits:["selectRuntime","closeSidebar"],setup(e,{emit:r}){const o=e,u=v(()=>o.currentRuntime.runtimeType==="dash"),c=t=>{i(t.id)||r("selectRuntime",t)},b=v(()=>o.currentRuntime.sidebar.filter(t=>t.visible)),i=t=>t===o.currentRuntime.id;return(t,g)=>(s(),n("div",{class:m(["sidebar",e.forceResponsivity,{open:e.displaySidebar,dash:a(u)}])},[d("div",$,[d("div",B,[(s(!0),n(p,null,R(a(b),y=>(s(),n("div",{key:y.id,class:m(["item",{active:i(y.id)}]),onClick:Q=>c(y)},[d("div",{class:m(["item-title",{open:e.displaySidebar}])},f(y.name),3)],10,E))),128))])])],2))}});const P=_(U,[["__scopeId","data-v-09ca60c8"]]),T=e=>(C("data-v-533045c7"),e=e(),D(),e),V={class:"left-side"},z=["d"],F={key:1,class:"brand"},L=["src"],q={key:1,class:"brand-name"},G=T(()=>d("div",null,null,-1)),K={key:0,class:"signed-email"},O=h({__name:"PlayerNavbar",props:{runtime:null,brandName:null,logoUrl:null,userEmail:null,forceResponsivity:null},emits:["logout","navigate"],setup(e,{emit:r}){const o=e,u=I({displaySidebar:!1}),c=v(()=>{const i=o.runtime.sidebar;return!i||i.length==0?!1:i.some(t=>t.visible)}),b=i=>r("navigate",i);return(i,t)=>(s(),n(p,null,[a(c)||e.runtime.logoUrl||e.runtime.brandName||e.userEmail?(s(),n("div",{key:0,class:m(["navbar",(e.runtime.runtimeType=="dash"||a(c))&&"background"])},[d("div",V,[a(c)?(s(),n("svg",{key:0,class:m(["sidebar-menu-icon",e.forceResponsivity,{dash:e.runtime.runtimeType=="dash"}]),viewBox:"0 0 24 24",fill:"var(--color-main)",onClick:t[0]||(t[0]=g=>u.displaySidebar=!u.displaySidebar)},[d("path",{d:a(k)},null,8,z)],2)):l("",!0),e.runtime.logoUrl||e.runtime.brandName?(s(),n("div",F,[e.runtime.logoUrl?(s(),n("img",{key:0,src:e.logoUrl,class:"logo-image"},null,8,L)):l("",!0),e.runtime.brandName?(s(),n("p",q,f(e.runtime.brandName),1)):l("",!0)])):l("",!0)]),G,e.userEmail?(s(),n("div",K,[d("span",null,f(e.userEmail),1),N(w,{width:"20",height:"20",class:"logout",path:a(S),fill:"var(--color-main)",onClick:t[1]||(t[1]=g=>r("logout"))},null,8,["path"])])):l("",!0)],2)):l("",!0),a(c)?(s(),x(P,{key:1,"current-runtime":e.runtime,"display-sidebar":u.displaySidebar,"force-responsivity":e.forceResponsivity,onSelectRuntime:b},null,8,["current-runtime","display-sidebar","force-responsivity"])):l("",!0)],64))}});const H=_(O,[["__scopeId","data-v-533045c7"]]);export{H as P};
//# sourceMappingURL=PlayerNavbar.46c0cad7.js.map
