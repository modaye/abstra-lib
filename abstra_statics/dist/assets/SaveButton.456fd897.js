import{j as f}from"./icons.1210223a.js";import{d as i,r as c,b as u,c as v,e as p,z as y,S as _,N as m,G as b,a as g,q as h}from"./registerWidgets.db466a36.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5a36f745-7b7f-4ec3-8b0d-956641e88458",e._sentryDebugIdIdentifier="sentry-dbid-5a36f745-7b7f-4ec3-8b0d-956641e88458")}catch{}})();const S=i({__name:"SaveButton",props:{model:null},setup(e){const t=e,a=c(!1);async function s(){a.value=!0;try{await t.model.save()}finally{a.value=!1}}return addEventListener("keydown",n=>{(n.metaKey||n.ctrlKey)&&n.key==="s"&&(n.preventDefault(),s())}),addEventListener("beforeunload",n=>{t.model.hasChanges()&&(n.preventDefault(),n.returnValue="")}),(n,o)=>{var l,d;const r=g("icon");return u(),v("button",{class:b(["save-button",{changes:(l=e.model)==null?void 0:l.hasChanges()}]),onClick:o[0]||(o[0]=w=>s())},[p(r,{class:"icon",path:y(f),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),_(" "+m(a.value?"Saving ...":(d=e.model)!=null&&d.hasChanges()?"Save":"Saved"),1)],2)}}});const k=h(S,[["__scopeId","data-v-42786fd0"]]);export{k as S};
//# sourceMappingURL=SaveButton.456fd897.js.map