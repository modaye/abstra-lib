import{d as k,r as m,b as e,c as s,F as r,K as i,G as y,H as x,v as u,L as d,E as _,e as p,I as h,B as o,q as w,w as C,y as B,p as S}from"./registerWidgets.04dc761e.js";import{e as T}from"./icons.d4e872e2.js";import{T as N}from"./Tooltip.4672f205.js";const O={class:"sidebar"},D={class:"section-name"},E=["onClick"],I={class:"item-name"},L={key:0,class:"tag soon"},V={key:1,class:"tag beta"},F={key:2,class:"tag cloud"},R=k({__name:"Sidebar",props:{sections:null},setup(b){var c;const v=y(),f=x(),l=m((c=f.name)!=null?c:"forms"),g=t=>{t.unavailable||(v.push(t.path),l.value=t.path)};return(t,q)=>(e(),s("div",O,[(e(!0),s(r,null,i(b.sections,n=>(e(),s("div",{key:n.name,class:"section"},[u("span",D,d(n.name),1),(e(!0),s(r,null,i(n.items,a=>(e(),s("div",{key:a.name,role:"button",class:_(["item",{active:l.value===a.path,disabled:a.unavailable||n.cloud}]),tabindex:"0",onClick:z=>g(a)},[p(h,{class:_(["icon",{disabled:a.unavailable,active:l.value===a.path}]),path:a.icon,width:"20",height:"20"},null,8,["class","path"]),u("span",I,d(a.name),1),a.unavailable?(e(),s("span",L,"SOON")):o("",!0),a.beta?(e(),s("span",V,"BETA")):o("",!0),a.cloud?(e(),s("span",F,"CLOUD")):o("",!0),a.warning?(e(),w(N,{key:3,class:"warning",text:a.warning,fixed:!0,top:18,left:18},{default:C(()=>[p(h,{path:B(T),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):o("",!0)],10,E))),128))]))),128))]))}});const K=S(R,[["__scopeId","data-v-65839ebd"]]);export{K as S};
//# sourceMappingURL=Sidebar.1b9cbcff.js.map