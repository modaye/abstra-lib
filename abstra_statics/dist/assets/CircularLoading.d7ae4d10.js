import{L as l}from"./lottie.d1957a7e.js";import{d as u,r as f,o as p,K as r,b as _,c as y,x as b,A as s,z as d,B as g,q as m}from"./registerWidgets.68b4d727.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0ebccca1-7126-4adb-bbff-0a2bfa745fdd",e._sentryDebugIdIdentifier="sentry-dbid-0ebccca1-7126-4adb-bbff-0a2bfa745fdd")}catch{}})();const v=u({__name:"CircularLoading",props:{direction:null,justify:null,size:null},setup(e){const t=e,o=f(null);p(()=>{!o.value||l.loadAnimation({container:o.value,renderer:"svg",loop:!0,autoplay:!0,path:"/circularLoading.json"})});const i=r(()=>{const{direction:n="row",justify:a="space-between"}=t;return{flexDirection:n,justifyContent:a}}),c=r(()=>{const{size:n="40"}=t;return{width:`${n}px`,height:`${n}px`}});return(n,a)=>(_(),y("div",{class:"container",style:s(d(i))},[b("div",{ref_key:"loading",ref:o,style:s(d(c))},null,4),g(n.$slots,"default",{},void 0,!0)],4))}});const I=m(v,[["__scopeId","data-v-a1f994d4"]]);export{I as L};
//# sourceMappingURL=CircularLoading.d7ae4d10.js.map
