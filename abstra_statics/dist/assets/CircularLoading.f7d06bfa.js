import{L as l}from"./lottie.028476ab.js";import{d as u,r as f,o as p,K as a,b as _,c as y,x as g,A as s,z as d,B as m,q as v}from"./registerWidgets.08925b03.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="705dee77-0fe6-4c51-a995-54c47d1cd09c",e._sentryDebugIdIdentifier="sentry-dbid-705dee77-0fe6-4c51-a995-54c47d1cd09c")}catch{}})();const b=u({__name:"CircularLoading",props:{direction:null,justify:null,size:null},setup(e){const t=e,o=f(null);p(()=>{!o.value||l.loadAnimation({container:o.value,renderer:"svg",loop:!0,autoplay:!0,path:"/circularLoading.json"})});const i=a(()=>{const{direction:n="row",justify:r="space-between"}=t;return{flexDirection:n,justifyContent:r}}),c=a(()=>{const{size:n="40"}=t;return{width:`${n}px`,height:`${n}px`}});return(n,r)=>(_(),y("div",{class:"container",style:s(d(i))},[g("div",{ref_key:"loading",ref:o,style:s(d(c))},null,4),m(n.$slots,"default",{},void 0,!0)],4))}});const I=v(b,[["__scopeId","data-v-a1f994d4"]]);export{I as L};
//# sourceMappingURL=CircularLoading.f7d06bfa.js.map
