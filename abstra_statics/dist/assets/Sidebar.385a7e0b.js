import{d as v,r as w,b as a,c as s,F as u,L as _,H as k,J as m,x as p,N as f,G as b,e as h,I as g,D as l,t as x,w as D,z as I,q as C}from"./registerWidgets.db466a36.js";import{e as S}from"./icons.1210223a.js";import{T as B}from"./Tooltip.9840a429.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="9fa90497-4299-417f-b67e-4fa998935053",t._sentryDebugIdIdentifier="sentry-dbid-9fa90497-4299-417f-b67e-4fa998935053")}catch{}})();const N={class:"sidebar"},T={class:"section-name"},O=["onClick"],E={class:"item-name"},L={key:0,class:"tag soon"},V={key:1,class:"tag beta"},z={key:2,class:"tag cloud"},F=v({__name:"Sidebar",props:{sections:null},setup(t){var i;const n=k(),d=m(),c=w((i=d.name)!=null?i:"forms"),y=o=>{o.unavailable||(n.push(o.path),c.value=o.path)};return(o,R)=>(a(),s("div",N,[(a(!0),s(u,null,_(t.sections,r=>(a(),s("div",{key:r.name,class:"section"},[p("span",T,f(r.name),1),(a(!0),s(u,null,_(r.items,e=>(a(),s("div",{key:e.name,role:"button",class:b(["item",{active:c.value===e.path,disabled:e.unavailable||r.cloud}]),tabindex:"0",onClick:q=>y(e)},[h(g,{class:b(["icon",{disabled:e.unavailable,active:c.value===e.path}]),path:e.icon,width:"20",height:"20"},null,8,["class","path"]),p("span",E,f(e.name),1),e.unavailable?(a(),s("span",L,"SOON")):l("",!0),e.beta?(a(),s("span",V,"BETA")):l("",!0),e.cloud?(a(),s("span",z,"CLOUD")):l("",!0),e.warning?(a(),x(B,{key:3,class:"warning",text:e.warning,fixed:!0,top:18,left:18},{default:D(()=>[h(g,{path:I(S),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):l("",!0)],10,O))),128))]))),128))]))}});const J=C(F,[["__scopeId","data-v-65839ebd"]]);export{J as S};
//# sourceMappingURL=Sidebar.385a7e0b.js.map