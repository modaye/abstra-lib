import{_ as g}from"./ActionButton.vue_vue_type_script_setup_true_lang.a22e4194.js";import{W as y,S as v}from"./WidgetsFrame.8a984b59.js";import{d as h,b as s,q as o,w,H as W,B as c,v as i,c as r,K as k,a5 as B,y as S,al as b,F as q,e as x,k as C,l as P,p as F}from"./registerWidgets.4cc86716.js";import"./colors.267ec6f7.js";const N={class:"form"},V={class:"form-wrapper"},A={key:0,class:"buttons"},I=h({__name:"WidgetPreview",setup(L){const n=W();function d(e){return C[e]||P[e]||null}function a(e){try{const t=JSON.parse(e);return t.component=d(t.type),t.component?t:null}catch{return null}}function l(){const e=n.query.widget;return Array.isArray(e)?e.map(a).filter(Boolean):[a(e)]}function p(){return n.query.steps==="true"}function f(){return n.query.buttons==="true"}const m=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,t)=>(s(),o(y,{"main-color":"#d14056",class:"preview",theme:"#fbfbfb",runtime:"dash","font-family":"Inter"},{default:w(()=>[p()?(s(),o(v,{key:0,"steps-info":{current:2,total:3}})):c("",!0),i("div",N,[i("div",V,[(s(!0),r(q,null,k(l(),(u,_)=>(s(),r("div",{key:_,class:"widget"},[(s(),o(B(u.component),{data:u.props,response:new S(b)()},null,8,["data","response"]))]))),128))]),f()?(s(),r("div",A,[x(g,{action:m("Send")},null,8,["action"])])):c("",!0)])]),_:1}))}});const R=F(I,[["__scopeId","data-v-4700fdc1"]]);export{R as default};
//# sourceMappingURL=WidgetPreview.703c6df3.js.map