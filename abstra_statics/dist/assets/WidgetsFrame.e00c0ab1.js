import{d as y,J as g,b as n,c as r,v as l,F as b,K as k,E as C,L as F,y as c,B as v,p as h,ak as u,u as S,o as L,Q as O,A as I,z as R,Y as $,Z as d,$ as D,al as A,am as T,an as U,ao as W,ap as q,aq as _,ar as f}from"./registerWidgets.04dc761e.js";const w={key:0,class:"p-steps p-component"},E={class:"p-steps-list"},x={class:"p-menuitem-link"},z={class:"p-steps-number"},B=y({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,i=g(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(m,p)=>e.stepsInfo?(n(),r("nav",w,[l("ol",E,[(n(!0),r(b,null,k(c(i),(s,o)=>(n(),r("li",{key:o,class:C(["p-steps-item",{"p-highlight":o+1===e.stepsInfo.current}])},[l("span",x,[l("span",z,F(o+1),1)])],2))),128))])])):v("",!0)}});const Q=h(B,[["__scopeId","data-v-c6d9488a"]]),N=e=>`https://fonts.googleapis.com/css2?family=${e.split(" ").join("+")}:wght@300;400;500;700;900&display=swap`;function H(e){return e.startsWith("#")||e.match(/^(rgb|hsl)/)}function j(e){try{return new URL(e),!0}catch{return!1}}function G(e){return j(e)?{backgroundImage:`url(${e})`,backgroundSize:"cover"}:H(e)?{backgroundColor:e}:{backgroundColor:"/_assets/background"}}const K=["theme"],M=["href"],V=y({__name:"WidgetsFrame",props:{theme:{type:String,required:!0},mainColor:{type:String,required:!0},fontFamily:{type:String,required:!0},runtime:{type:String,required:!0,validator:e=>["form","dash"].includes(e)}},setup(e){const t=e,i=u(()=>N(t.fontFamily)),m=u(()=>(typeof document<"u"&&document.documentElement.style.setProperty("--ac-global-font-family",t.fontFamily),{"--color-main":t.mainColor,"--color-main-light":$(t.mainColor,.15),"--color-main-hover":d(t.mainColor),"--color-main-active":d(t.mainColor),"--color-secondary":"transparent","--color-secondary-lighter":"transparent","--color-secondary-darker":"transparent","--button-font-color-main":D(t.mainColor),"--font-family":t.fontFamily,...G(t.theme)})),p=u(()=>t.runtime==="dash"?A:T),s=S({"--font-color":p.value,"--background-color":"transparent"}),o=async()=>{const a=U(t.theme)?await W(t.theme):q(t.theme);s["--font-color"]=a?_:f,s["--background-color"]=a?f:_};return L(o),O(()=>t.theme,o),(a,J)=>(n(),r("div",{class:"frame background-theme",theme:e.theme,style:R({...c(m),...c(s)})},[l("link",{href:c(i),rel:"stylesheet"},null,8,M),I(a.$slots,"default",{},void 0,!0)],12,K))}});const Y=h(V,[["__scopeId","data-v-db14be4f"]]);export{Q as S,Y as W};
//# sourceMappingURL=WidgetsFrame.e00c0ab1.js.map
