import{d as h,v as b,y as w,K as y,o as k,b as s,c as o,x as l,z as p,B as r,D as v,F as $,L as x,a8 as C,a as g,G as L,t as B,S as T,N as A,q as d,a9 as V,V as I,aa as M,w as N,e as S}from"./registerWidgets.bb4c7eff.js";const D={class:"tab-menu"},z={class:"tabs"},E={key:0,class:"group"},F={class:"group"},H=["onClick"],U={key:1,class:"group"},j={class:"content"},q=h({__name:"TabMenuUnderline",setup(i){const e=b([]),n=w(),a=t=>{const f=_=>_==t;e.forEach((_,c)=>{_.isActive=f(c)})},u=y(()=>e.findIndex(t=>t.isActive));return C("addTab",t=>{e.push(t)}),k(()=>{a(0)}),(t,f)=>{const _=g("icon");return s(),o("div",D,[l("div",z,[p(n).left?(s(),o("div",E,[r(t.$slots,"left",{},void 0,!0)])):v("",!0),l("div",F,[(s(!0),o($,null,x(e,(c,m)=>(s(),o("button",{key:c.title,class:L(["form-tab",p(u)==m&&"active"]),onClick:X=>a(m)},[c.icon?(s(),B(_,{key:0,path:c.icon,fill:"#8692A5",width:"10",height:"10"},null,8,["path"])):v("",!0),T(" "+A(c.title),1)],10,H))),128))]),p(n).right?(s(),o("div",U,[r(t.$slots,"right",{},void 0,!0)])):v("",!0)]),l("div",j,[r(t.$slots,"default",{},void 0,!0)])])}}});const tt=d(q,[["__scopeId","data-v-60b2affa"]]),G={class:"tab"},K=h({__name:"Tab",props:{title:null,icon:null},setup(i){const e=i,n=b({isActive:!1,title:e.title,icon:e.icon}),a=V("addTab");return k(()=>{a(n)}),(u,t)=>I((s(),o("div",G,[r(u.$slots,"default",{},void 0,!0)],512)),[[M,n.isActive]])}});const et=d(K,[["__scopeId","data-v-9c2e92c2"]]),Z={},J={width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},O=l("path",{d:"M2.8725 4.25L5.5575 1.5575L4.5 0.5L0 5L4.5 9.5L5.5575 8.4425L2.8725 5.75H12V4.25H2.8725Z",fill:"#6D7C93"},null,-1),P=[O];function Q(i,e){return s(),o("svg",J,P)}const R=d(Z,[["render",Q]]),W=h({__name:"BackButton",props:{link:null},setup(i){return(e,n)=>{const a=g("router-link");return s(),B(a,{class:"link-button",to:i.link},{default:N(()=>[S(R),T(" Back ")]),_:1},8,["to"])}}});const st=d(W,[["__scopeId","data-v-56a12edc"]]);export{st as B,tt as T,et as a};
//# sourceMappingURL=BackButton.1811d14c.js.map
