import{d as y,r as d,K as x,b as g,c as b,B as m,x as p,N as v,A as B,z as w,q as D}from"./registerWidgets.ca6243ef.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="88c31fec-2709-4e14-a0da-7627a1ea0d7f",t._sentryDebugIdIdentifier="sentry-dbid-88c31fec-2709-4e14-a0da-7627a1ea0d7f")}catch{}})();const k={class:"text"},I=y({__name:"Tooltip",props:{text:{type:String,required:!0},left:{type:Number},top:{type:Number},fixed:{type:Boolean,default:!1}},setup(t){const e=t,s=d(Date.now()),c=()=>{s.value=Date.now()},n=d(null),f=()=>{var r,l,i;const o=(r=n.value)==null?void 0:r.getBoundingClientRect();if(!o)return{};const{x:a,y:_}=o;return s.value,{position:"fixed",top:`${_+((l=e.top)!=null?l:0)}px`,left:`${a+((i=e.left)!=null?i:0)}px`}},u=x(()=>{var o;return e.fixed?f():{left:`${(o=e.left)!=null?o:-14}px`,...e.top?{top:`${e.top}px`}:{}}});return(o,a)=>(g(),b("div",{ref_key:"tooltipBox",ref:n,class:"tooltip-box",onMouseenter:c},[m(o.$slots,"default",{},void 0,!0),p("div",{class:"tooltip",style:B(w(u))},[p("span",k,v(t.text),1)],4)],544))}});const $=D(I,[["__scopeId","data-v-74636348"]]);export{$ as T};
//# sourceMappingURL=Tooltip.8c336607.js.map
