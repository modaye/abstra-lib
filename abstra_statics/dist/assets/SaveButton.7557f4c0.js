import{j as i}from"./icons.7c77483f.js";import{d as c,r as f,b as u,c as v,e as p,z as y,S as _,N as b,G as m,a as g,q as h}from"./registerWidgets.05268d5e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="b9592d05-37f4-4887-9831-5ea0f1d16c82",e._sentryDebugIdIdentifier="sentry-dbid-b9592d05-37f4-4887-9831-5ea0f1d16c82")}catch{}})();const S=c({__name:"SaveButton",props:{model:null},setup(e){const t=e,a=f(!1);async function s(){a.value=!0;try{await t.model.save()}finally{a.value=!1}}return addEventListener("keydown",n=>{(n.metaKey||n.ctrlKey)&&n.key==="s"&&(n.preventDefault(),s())}),addEventListener("beforeunload",n=>{t.model.hasChanges()&&(n.preventDefault(),n.returnValue="")}),(n,o)=>{var l,d;const r=g("icon");return u(),v("button",{class:m(["save-button",{changes:(l=e.model)==null?void 0:l.hasChanges()}]),onClick:o[0]||(o[0]=w=>s())},[p(r,{class:"icon",path:y(i),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),_(" "+b(a.value?"Saving ...":(d=e.model)!=null&&d.hasChanges()?"Save":"Saved"),1)],2)}}});const k=h(S,[["__scopeId","data-v-64b5b2e8"]]);export{k as S};
//# sourceMappingURL=SaveButton.7557f4c0.js.map