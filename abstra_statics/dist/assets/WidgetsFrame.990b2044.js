import{d as y,K as b,b as r,c as l,x as c,F as h,L as k,G as v,N as C,z as i,D as F,q as g,ai as d,v as I,o as S,R as D,B as L,A as O}from"./registerWidgets.68b4d727.js";import{l as w,a as p,b as R,D as $,c as A,i as T,d as U,e as W,L as f,f as _}from"./colors.8344a969.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7ca3bf00-f2e1-4d9b-bb71-f116118a22b8",e._sentryDebugIdIdentifier="sentry-dbid-7ca3bf00-f2e1-4d9b-bb71-f116118a22b8")}catch{}})();const q={key:0,class:"p-steps p-component"},x={class:"p-steps-list"},E={class:"p-menuitem-link"},N={class:"p-steps-number"},z=y({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=b(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(u,m)=>e.stepsInfo?(r(),l("nav",q,[c("ol",x,[(r(!0),l(h,null,k(i(s),(n,o)=>(r(),l("li",{key:o,class:v(["p-steps-item",{"p-highlight":o+1===e.stepsInfo.current}])},[c("span",E,[c("span",N,C(o+1),1)])],2))),128))])])):F("",!0)}});const X=g(z,[["__scopeId","data-v-c6d9488a"]]),B=e=>`https://fonts.googleapis.com/css2?family=${e.split(" ").join("+")}:wght@300;400;500;700;900&display=swap`;function G(e){return e.startsWith("#")||e.match(/^(rgb|hsl)/)}function H(e){try{return new URL(e),!0}catch{return!1}}function j(e){return H(e)?{backgroundImage:`url(${e})`,backgroundSize:"cover"}:G(e)?{backgroundColor:e}:{backgroundColor:"/_assets/background"}}const K=["theme"],M=["href"],V=y({__name:"WidgetsFrame",props:{theme:{type:String,required:!0},mainColor:{type:String,required:!0},fontFamily:{type:String,required:!0},runtime:{type:String,required:!0,validator:e=>["form","dash"].includes(e)}},setup(e){const t=e,s=d(()=>B(t.fontFamily)),u=d(()=>(typeof document<"u"&&document.documentElement.style.setProperty("--ac-global-font-family",t.fontFamily),{"--color-main":t.mainColor,"--color-main-light":w(t.mainColor,.15),"--color-main-hover":p(t.mainColor),"--color-main-active":p(t.mainColor),"--color-secondary":"transparent","--color-secondary-lighter":"transparent","--color-secondary-darker":"transparent","--button-font-color-main":R(t.mainColor),"--font-family":t.fontFamily,...j(t.theme)})),m=d(()=>t.runtime==="dash"?$:A),n=I({"--font-color":m.value,"--background-color":"transparent"}),o=async()=>{const a=T(t.theme)?await U(t.theme):W(t.theme);n["--font-color"]=a?f:_,n["--background-color"]=a?_:f};return S(o),D(()=>t.theme,o),(a,P)=>(r(),l("div",{class:"frame background-theme",theme:e.theme,style:O({...i(u),...i(n)})},[c("link",{href:i(s),rel:"stylesheet"},null,8,M),L(a.$slots,"default",{},void 0,!0)],12,K))}});const Y=g(V,[["__scopeId","data-v-ca2408ab"]]);export{X as S,Y as W};
//# sourceMappingURL=WidgetsFrame.990b2044.js.map
