import{u as c}from"./icons.c1d7cae2.js";import{d,J as u,H as i,a as f,b as p,c as _,e as l,z as b,S as m,q as y}from"./registerWidgets.39370cce.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="efa10ef8-59e8-4f4a-bdf8-bddf81007e2c",e._sentryDebugIdIdentifier="sentry-dbid-efa10ef8-59e8-4f4a-bdf8-bddf81007e2c")}catch{}})();const v=d({__name:"PreviewButton",props:{model:null},setup(e){const t=e,o=u(),s=i(),r=()=>{const n=o.query;s.push({path:`/_editor/${t.model.routeName}/${encodeURIComponent(t.model.path)}/preview`,query:n})};return(n,w)=>{const a=f("icon");return p(),_("button",{class:"preview-button",onClick:r},[l(a,{class:"icon",path:b(c),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),m(" Preview ")])}}});const I=y(v,[["__scopeId","data-v-4b4c109d"]]);export{I as P};
//# sourceMappingURL=PreviewButton.4e30f446.js.map
