import{D as v,_ as g}from"./DropdownMenu.7f9500ce.js";import{L as w}from"./CircularLoading.b36562a7.js";import{d as x,b as t,t as d,c as n,x as s,N as o,B as I,F as u,L as m,D as B,a as D,G as _,w as C,S as L,O as S,Q as T,q as N}from"./registerWidgets.05268d5e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[l]="6025d4a5-1e39-4614-b41b-d1108f20341d",e._sentryDebugIdIdentifier="sentry-dbid-6025d4a5-1e39-4614-b41b-d1108f20341d")}catch{}})();const f=e=>(S("data-v-a0aa59f6"),e=e(),T(),e),R={key:1,class:"runtimes-container"},U={class:"header"},V={class:"title-wrapper"},E={class:"description"},F={key:0,class:"empty-list"},j=f(()=>s("img",{src:g},null,-1)),q={class:"empty-list-title"},z={class:"empty-list-description"},A={key:1},G={key:2},M={key:2,class:"video-section"},O=f(()=>s("h1",null,"See it in action",-1)),Q=["src"],$=x({__name:"RuntimeList",props:{loading:{type:Boolean},title:null,description:null,createButtonText:null,emptyTitle:null,videoUrl:null,table:null},emits:["create"],setup(e,{emit:l}){async function c(){l("create")}return(h,H)=>{const k=D("router-link");return e.loading?(t(),d(w,{key:0,class:"loading-wrapper",justify:"center"})):(t(),n("div",R,[s("div",U,[s("div",V,[s("h1",null,o(e.title),1),s("p",E,o(e.description),1),s("button",{onClick:c},o(e.createButtonText),1)])]),e.table.rows.length===0?(t(),n("div",F,[j,s("div",q,o(e.emptyTitle),1),s("div",z,[I(h.$slots,"empty-description",{},void 0,!0)]),s("button",{onClick:c},o(e.createButtonText),1)])):(t(),n("table",A,[s("thead",null,[(t(!0),n(u,null,m(e.table.columns,(i,r)=>(t(),n("td",{key:r,class:"cell"},o(i.name),1))),128))]),(t(!0),n(u,null,m(e.table.rows,(i,r)=>{var y;return t(),n("tr",{key:r,class:_((y=i.classes)!=null?y:[])},[(t(!0),n(u,null,m(i.cells,(a,b)=>{var p;return t(),n("td",{key:b,class:_((p=a.classes)!=null?p:[])},[a.actions?(t(),d(v,{key:0,title:"Actions","highlight-last":!0,options:a.actions,payload:{key:i.key}},null,8,["options","payload"])):a.link?(t(),d(k,{key:1,to:a.link,class:"runtime-title"},{default:C(()=>[L(o(a.text),1)]),_:2},1032,["to"])):(t(),n("div",G,o(a.text),1))],2)}),128))],2)}),128))])),e.videoUrl?(t(),n("section",M,[O,s("iframe",{class:"runtimes-example-video",src:e.videoUrl,title:"runtimes example",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,Q)])):B("",!0)]))}}});const W=N($,[["__scopeId","data-v-a0aa59f6"]]);export{W as R};
//# sourceMappingURL=RuntimeList.eb31ec66.js.map
