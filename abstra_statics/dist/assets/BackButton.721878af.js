import{d as v,v as m,y as B,K as T,o as g,b as n,c as a,x as d,z as p,B as r,D as f,F as $,L as x,a8 as I,a as y,G as C,t as k,S as w,N as D,q as l,a9 as L,V as A,aa as V,w as M,e as N}from"./registerWidgets.966858c5.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="1c9358a6-3cdc-4f28-885d-93225ac47224",t._sentryDebugIdIdentifier="sentry-dbid-1c9358a6-3cdc-4f28-885d-93225ac47224")}catch{}})();const S={class:"tab-menu"},E={class:"tabs"},z={key:0,class:"group"},F={class:"group"},H=["onClick"],U={key:1,class:"group"},j={class:"content"},q=v({__name:"TabMenuUnderline",setup(t){const e=m([]),o=B(),c=s=>{const h=_=>_==s;e.forEach((_,i)=>{_.isActive=h(i)})},u=T(()=>e.findIndex(s=>s.isActive));return I("addTab",s=>{e.push(s)}),g(()=>{c(0)}),(s,h)=>{const _=y("icon");return n(),a("div",S,[d("div",E,[p(o).left?(n(),a("div",z,[r(s.$slots,"left",{},void 0,!0)])):f("",!0),d("div",F,[(n(!0),a($,null,x(e,(i,b)=>(n(),a("button",{key:i.title,class:C(["form-tab",p(u)==b&&"active"]),onClick:X=>c(b)},[i.icon?(n(),k(_,{key:0,path:i.icon,fill:"#8692A5",width:"10",height:"10"},null,8,["path"])):f("",!0),w(" "+D(i.title),1)],10,H))),128))]),p(o).right?(n(),a("div",U,[r(s.$slots,"right",{},void 0,!0)])):f("",!0)]),d("div",j,[r(s.$slots,"default",{},void 0,!0)])])}}});const ee=l(q,[["__scopeId","data-v-60b2affa"]]),G={class:"tab"},K=v({__name:"Tab",props:{title:null,icon:null},setup(t){const e=t,o=m({isActive:!1,title:e.title,icon:e.icon}),c=L("addTab");return g(()=>{c(o)}),(u,s)=>A((n(),a("div",G,[r(u.$slots,"default",{},void 0,!0)],512)),[[V,o.isActive]])}});const te=l(K,[["__scopeId","data-v-9c2e92c2"]]),Z={},J={width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},O=d("path",{d:"M2.8725 4.25L5.5575 1.5575L4.5 0.5L0 5L4.5 9.5L5.5575 8.4425L2.8725 5.75H12V4.25H2.8725Z",fill:"#6D7C93"},null,-1),P=[O];function Q(t,e){return n(),a("svg",J,P)}const R=l(Z,[["render",Q]]),W=v({__name:"BackButton",props:{link:null},setup(t){return(e,o)=>{const c=y("router-link");return n(),k(c,{class:"link-button",to:t.link},{default:M(()=>[N(R),w(" Back ")]),_:1},8,["to"])}}});const se=l(W,[["__scopeId","data-v-56a12edc"]]);export{se as B,ee as T,te as a};
//# sourceMappingURL=BackButton.721878af.js.map
