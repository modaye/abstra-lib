import{L as S}from"./CircularLoading.8d9a0f4b.js";import{d as h,v,b as s,c as a,x as o,N as g,V as b,Y as w,ad as I,D as p,O as T,Q as x,q as y,z as V,S as B,e as f}from"./registerWidgets.c33434b6.js";import{v as C}from"./icons.da9eecb0.js";import{p as k}from"./passwordlessManager.dde65e6d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="570853b3-dd63-43ea-9ad1-9ffcc449fa36",t._sentryDebugIdIdentifier="sentry-dbid-570853b3-dd63-43ea-9ad1-9ffcc449fa36")}catch{}})();const $=t=>(T("data-v-1b435c3a"),t=t(),x(),t),D={class:"auth-info"},E={class:"auth-header"},K={class:"auth-label"},N=$(()=>o("div",{class:"description"},"To continue we need you to authenticate",-1)),P=["onKeyup"],R={key:0,class:"span-error"},L=$(()=>o("div",{class:"spacer"},null,-1)),M=h({__name:"AuthInfo",props:{invalid:{type:Boolean,default:!1},header:{type:String}},emits:["sendAuthInfo"],setup(t,{emit:n}){const e=v({email:""}),c=()=>{n("sendAuthInfo",e)};return(_,l)=>(s(),a("div",D,[o("div",E,[o("div",K,g(t.header),1),N]),b(o("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>e.email=u),type:"email",placeholder:"Email address",class:"input email-input",onKeyup:I(c,["enter"])},null,40,P),[[w,e.email]]),t.invalid?(s(),a("span",R," Email invalid, please try again. ")):p("",!0),L,o("button",{class:"next-button",onClick:c}," Send a verification email ")]))}});const U=y(M,[["__scopeId","data-v-1b435c3a"]]),A=t=>(T("data-v-9316d802"),t=t(),x(),t),q={class:"auth-token"},z={class:"auth-label"},O=["onKeyup"],Q={key:0,class:"span-error"},Y={key:1,class:"span-error"},j=A(()=>o("div",{class:"spacer"},null,-1)),F={class:"button-icon",viewBox:"0 0 24 24"},G=["d"],H=A(()=>o("div",{class:"footer"}," If you haven't received the verification code, try again or choose another email ",-1)),J=h({__name:"AuthToken",props:{expired:{type:Boolean},invalid:{type:Boolean},email:null},emits:["sendToken","restartAuth","resendToken"],setup(t,{emit:n}){const e=v({token:""}),c=()=>{n("restartAuth")},_=()=>{n("resendToken")},l=()=>{n("sendToken",e.token)};return(u,i)=>(s(),a("div",q,[o("div",z," Check "+g(t.email)+"'s inbox and enter your verification code below ",1),b(o("input",{"onUpdate:modelValue":i[0]||(i[0]=d=>e.token=d),type:"text",placeholder:"Type your verification code",class:"input",onKeyup:I(l,["enter"])},null,40,O),[[w,e.token]]),t.expired?(s(),a("span",Q," Token expired, try to resend it. ")):p("",!0),t.invalid?(s(),a("span",Y," Token invalid, please try again or go back and alter you email address. ")):p("",!0),j,o("button",{class:"next-button",onClick:l},"Verify Email"),o("button",{class:"secondary-button back",onClick:c},[(s(),a("svg",F,[o("path",{d:V(C)},null,8,G)])),B(" Try Again ")]),o("button",{class:"secondary-button back",onClick:_}," Resend Email "),H]))}});const W=y(J,[["__scopeId","data-v-9316d802"]]),X={key:0,class:"form"},Z={class:"form-wrapper"},ee={class:"widget"},te={key:1,class:"form"},oe={class:"form-wrapper"},ne={class:"widget"},se={key:2,class:"form"},ae={class:"form-wrapper"},ie={class:"loading"},de=h({__name:"Passwordless",props:{header:{type:String,default:"Validate your email"}},emits:["done"],setup(t,{emit:n}){const e=v({stage:"collect-info",info:null,token:null,invalid:!1}),c=async i=>{e.info=i,e.stage="loading";const d=await k.authenticate(i.email);e.invalid=!!d,d?e.stage="collect-info":e.stage="collect-token"},_=async i=>{var d;if(!!((d=e.info)!=null&&d.email)){e.token=i,e.stage="loading";try{const r=await k.verify(e.info.email,e.token);if(!r)throw new Error("no user");n("done",r),e.stage="done"}catch{e.invalid=!0,e.stage="collect-token"}}},l=()=>{e.info&&c(e.info)},u=()=>{e.stage="collect-info",e.info=null,e.token=null,e.invalid=!1};return(i,d)=>{var r,m;return e.stage==="collect-info"?(s(),a("div",X,[o("div",Z,[o("div",ee,[f(U,{invalid:e.invalid,header:t.header,onSendAuthInfo:c},null,8,["invalid","header"])])])])):e.stage==="collect-token"?(s(),a("div",te,[o("div",oe,[o("div",ne,[f(W,{invalid:e.invalid,email:(m=(r=e.info)==null?void 0:r.email)!=null?m:"",onSendToken:_,onResendToken:l,onRestartAuth:u},null,8,["invalid","email"])])])])):(s(),a("div",se,[o("div",ae,[o("div",ie,[f(S)])])]))}}});const ue=y(de,[["__scopeId","data-v-cdf5651f"]]);export{ue as P};
//# sourceMappingURL=Passwordless.9bcddd63.js.map
