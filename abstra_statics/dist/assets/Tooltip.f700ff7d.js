import{d as y,r as i,K as b,b as x,c as g,B as m,x as p,N as v,A as B,z as w,q as D}from"./registerWidgets.cb3a7b8d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="fe0ebb52-64c1-44da-bbea-f3dc72ea8fd5",t._sentryDebugIdIdentifier="sentry-dbid-fe0ebb52-64c1-44da-bbea-f3dc72ea8fd5")}catch{}})();const k={class:"text"},I=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=i(Date.now()),f=()=>{s.value=Date.now()},n=i(null),c=()=>{var r,l,d;const o=(r=n.value)==null?void 0:r.getBoundingClientRect();if(!o)return{};const{x:a,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${a+((d=e.left)!=null?d:0)}px`}},u=b(()=>{var o;return e.fixed?c():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,a)=>(x(),g("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:f},[m(o.$slots,"default",{},void 0,!0),p("div",{class:"tooltip",style:B(w(u))},[p("span",k,v(t.text),1)],4)],544))}});const $=D(I,[["__scopeId","data-v-74636348"]]);export{$ as T};
//# sourceMappingURL=Tooltip.f700ff7d.js.map
