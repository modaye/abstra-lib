import{L as c}from"./lottie.1e0c432a.js";import{d as u,r as f,o as p,K as a,b as _,c as b,x as y,A as s,z as i,B as g,q as m}from"./registerWidgets.1590c05e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2b31481b-9a9b-4db3-b2ca-1fbfe339cfe2",e._sentryDebugIdIdentifier="sentry-dbid-2b31481b-9a9b-4db3-b2ca-1fbfe339cfe2")}catch{}})();const v=u({__name:"CircularLoading",props:{direction:null,justify:null,size:null},setup(e){const t=e,o=f(null);p(()=>{!o.value||c.loadAnimation({container:o.value,renderer:"svg",loop:!0,autoplay:!0,path:"/circularLoading.json"})});const d=a(()=>{const{direction:n="row",justify:r="space-between"}=t;return{flexDirection:n,justifyContent:r}}),l=a(()=>{const{size:n="40"}=t;return{width:`${n}px`,height:`${n}px`}});return(n,r)=>(_(),b("div",{class:"container",style:s(i(d))},[y("div",{ref_key:"loading",ref:o,style:s(i(l))},null,4),g(n.$slots,"default",{},void 0,!0)],4))}});const I=m(v,[["__scopeId","data-v-a1f994d4"]]);export{I as L};
//# sourceMappingURL=CircularLoading.30b3ab43.js.map