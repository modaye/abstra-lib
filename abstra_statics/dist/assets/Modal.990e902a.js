import{d as p,y as _,v,b as r,c,x as i,z as b,A as a,B as f,D as m,E as S,G as g,q as k}from"./registerWidgets.cbdb5b20.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="95ae8696-1ede-468d-a8be-aaf557f9c82f",e._sentryDebugIdIdentifier="sentry-dbid-95ae8696-1ede-468d-a8be-aaf557f9c82f")}catch{}})();const h=p({__name:"Modal",props:{containerStyle:null,headerStyle:null,contentStyle:null},emits:["open","close"],setup(e,{expose:s,emit:t}){const u=_(),y=()=>{n.isOpened=!0,t("open")},o=()=>{n.isOpened=!1,t("close")};s({open:y,close:o});const n=v({isOpened:!1});return(l,d)=>(r(),c("div",{class:g(["background",n.isOpened&&"visible"]),onClick:o},[i("div",{class:"container",style:a(e.containerStyle),onClick:d[0]||(d[0]=S(()=>{},["stop"]))},[b(u).header?(r(),c("div",{key:0,class:"header",style:a(e.headerStyle)},[f(l.$slots,"header",{},void 0,!0)],4)):m("",!0),i("div",{class:"content",style:a(e.contentStyle)},[f(l.$slots,"content",{},void 0,!0)],4)],4)],2))}});const I=k(h,[["__scopeId","data-v-24f739ca"]]);export{I as M};
//# sourceMappingURL=Modal.990e902a.js.map
