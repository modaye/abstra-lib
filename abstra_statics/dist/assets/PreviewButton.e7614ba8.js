import{u as c}from"./icons.3ddac2d4.js";import{d,J as u,H as i,a as p,b as _,c as l,e as b,z as f,S as m,q as y}from"./registerWidgets.29ceb1a3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bc641843-b061-482d-a006-67b57c385fba",e._sentryDebugIdIdentifier="sentry-dbid-bc641843-b061-482d-a006-67b57c385fba")}catch{}})();const v=d({__name:"PreviewButton",props:{model:null},setup(e){const t=e,o=u(),s=i(),r=()=>{const n=o.query;s.push({path:`/_editor/${t.model.routeName}/${encodeURIComponent(t.model.path)}/preview`,query:n})};return(n,w)=>{const a=p("icon");return _(),l("button",{class:"preview-button",onClick:r},[b(a,{class:"icon",path:f(c),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),m(" Preview ")])}}});const I=y(v,[["__scopeId","data-v-4b4c109d"]]);export{I as P};
//# sourceMappingURL=PreviewButton.e7614ba8.js.map
