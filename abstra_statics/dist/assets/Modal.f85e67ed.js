import{d as p,y as _,v as b,b as c,c as r,x as i,z as v,A as a,B as f,D as m,E as S,G as g,q as k}from"./registerWidgets.d08da683.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7afdca2-d817-419a-9fbd-029f6fbe48fc",e._sentryDebugIdIdentifier="sentry-dbid-a7afdca2-d817-419a-9fbd-029f6fbe48fc")}catch{}})();const h=p({__name:"Modal",props:{containerStyle:null,headerStyle:null,contentStyle:null},emits:["open","close"],setup(e,{expose:s,emit:t}){const u=_(),y=()=>{n.isOpened=!0,t("open")},o=()=>{n.isOpened=!1,t("close")};s({open:y,close:o});const n=b({isOpened:!1});return(d,l)=>(c(),r("div",{class:g(["background",n.isOpened&&"visible"]),onClick:o},[i("div",{class:"container",style:a(e.containerStyle),onClick:l[0]||(l[0]=S(()=>{},["stop"]))},[v(u).header?(c(),r("div",{key:0,class:"header",style:a(e.headerStyle)},[f(d.$slots,"header",{},void 0,!0)],4)):m("",!0),i("div",{class:"content",style:a(e.contentStyle)},[f(d.$slots,"content",{},void 0,!0)],4)],4)],2))}});const I=k(h,[["__scopeId","data-v-24f739ca"]]);export{I as M};
//# sourceMappingURL=Modal.f85e67ed.js.map