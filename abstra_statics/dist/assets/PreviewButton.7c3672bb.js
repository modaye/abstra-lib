import{u as a}from"./icons.6bb7a228.js";import{d,J as u,H as i,a as p,b as _,c as l,e as f,z as m,S as b,q as y}from"./registerWidgets.0e006b6f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ccd04cd8-ae9a-4160-8694-8d9708b947cf",e._sentryDebugIdIdentifier="sentry-dbid-ccd04cd8-ae9a-4160-8694-8d9708b947cf")}catch{}})();const v=d({__name:"PreviewButton",props:{model:null},setup(e){const t=e,o=u(),s=i(),c=()=>{const n=o.query;s.push({path:`/_editor/${t.model.routeName}/${encodeURIComponent(t.model.path)}/preview`,query:n})};return(n,w)=>{const r=p("icon");return _(),l("button",{class:"preview-button",onClick:c},[f(r,{class:"icon",path:m(a),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),b(" Preview ")])}}});const I=y(v,[["__scopeId","data-v-4b4c109d"]]);export{I as P};
//# sourceMappingURL=PreviewButton.7c3672bb.js.map