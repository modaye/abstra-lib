import{d as k,r as m,b as e,c as s,F as r,L as i,H as x,J as y,x as u,N as d,G as _,e as p,I as h,D as o,t as w,w as C,z as S,q as B}from"./registerWidgets.88d12ae1.js";import{e as N}from"./icons.778999cd.js";import{T}from"./Tooltip.ca813c38.js";const D={class:"sidebar"},O={class:"section-name"},I=["onClick"],L={class:"item-name"},V={key:0,class:"tag soon"},z={key:1,class:"tag beta"},E={key:2,class:"tag cloud"},F=k({__name:"Sidebar",props:{sections:null},setup(b){var c;const v=x(),f=y(),l=m((c=f.name)!=null?c:"forms"),g=t=>{t.unavailable||(v.push(t.path),l.value=t.path)};return(t,R)=>(e(),s("div",D,[(e(!0),s(r,null,i(b.sections,n=>(e(),s("div",{key:n.name,class:"section"},[u("span",O,d(n.name),1),(e(!0),s(r,null,i(n.items,a=>(e(),s("div",{key:a.name,role:"button",class:_(["item",{active:l.value===a.path,disabled:a.unavailable||n.cloud}]),tabindex:"0",onClick:q=>g(a)},[p(h,{class:_(["icon",{disabled:a.unavailable,active:l.value===a.path}]),path:a.icon,width:"20",height:"20"},null,8,["class","path"]),u("span",L,d(a.name),1),a.unavailable?(e(),s("span",V,"SOON")):o("",!0),a.beta?(e(),s("span",z,"BETA")):o("",!0),a.cloud?(e(),s("span",E,"CLOUD")):o("",!0),a.warning?(e(),w(T,{key:3,class:"warning",text:a.warning,fixed:!0,top:18,left:18},{default:C(()=>[p(h,{path:S(N),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):o("",!0)],10,I))),128))]))),128))]))}});const J=B(F,[["__scopeId","data-v-65839ebd"]]);export{J as S};
//# sourceMappingURL=Sidebar.34b7969a.js.map
