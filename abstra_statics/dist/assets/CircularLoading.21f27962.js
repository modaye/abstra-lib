import{L as l}from"./lottie.ffe66724.js";import{d as u,r as f,o as p,K as a,b as _,c as y,x as g,A as s,z as d,B as b,q as m}from"./registerWidgets.0897334f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="eba7715d-fb91-4d22-83ad-d5cec83cd871",e._sentryDebugIdIdentifier="sentry-dbid-eba7715d-fb91-4d22-83ad-d5cec83cd871")}catch{}})();const v=u({__name:"CircularLoading",props:{direction:null,justify:null,size:null},setup(e){const t=e,o=f(null);p(()=>{!o.value||l.loadAnimation({container:o.value,renderer:"svg",loop:!0,autoplay:!0,path:"/circularLoading.json"})});const i=a(()=>{const{direction:n="row",justify:r="space-between"}=t;return{flexDirection:n,justifyContent:r}}),c=a(()=>{const{size:n="40"}=t;return{width:`${n}px`,height:`${n}px`}});return(n,r)=>(_(),y("div",{class:"container",style:s(d(i))},[g("div",{ref_key:"loading",ref:o,style:s(d(c))},null,4),b(n.$slots,"default",{},void 0,!0)],4))}});const I=m(v,[["__scopeId","data-v-a1f994d4"]]);export{I as L};
//# sourceMappingURL=CircularLoading.21f27962.js.map