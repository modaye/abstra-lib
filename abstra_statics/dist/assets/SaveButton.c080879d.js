import{j as i}from"./icons.778999cd.js";import{d,r as u,b as v,c as f,e as m,z as p,S as _,N as h,G as y,a as g,q as S}from"./registerWidgets.88d12ae1.js";const C=d({__name:"SaveButton",props:{model:null},setup(a){const n=a,t=u(!1);async function s(){t.value=!0;try{await n.model.save()}finally{t.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),s())}),addEventListener("beforeunload",e=>{n.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,o)=>{var l,r;const c=g("icon");return v(),f("button",{class:y(["save-button",{changes:(l=a.model)==null?void 0:l.hasChanges()}]),onClick:o[0]||(o[0]=k=>s())},[m(c,{class:"icon",path:p(i),width:"20",height:"20",fill:"#5A677A"},null,8,["path"]),_(" "+h(t.value?"Saving ...":(r=a.model)!=null&&r.hasChanges()?"Save":"Saved"),1)],2)}}});const b=S(C,[["__scopeId","data-v-42786fd0"]]);export{b as S};
//# sourceMappingURL=SaveButton.c080879d.js.map
