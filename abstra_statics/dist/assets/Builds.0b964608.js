import{d as u,K as m,b as _,t as f,w as y,z as d,J as b,O as g,Q as h,x as i,S as n,q as w}from"./registerWidgets.e8bf9be7.js";import{a as I}from"./asyncComputed.15c1fcc9.js";import"./gateway.52ae1994.js";import{B as x}from"./build.ab484a75.js";import{C as v}from"./CrudView.d77460fd.js";import"./passwordlessManager.22684bfc.js";import"./activeRecord.66fd8f56.js";import"./DropdownMenu.546dc055.js";import"./Modal.eeedb03e.js";import"./LoadingIndicator.3b84df59.js";import"./lottie.b4c9148a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="3d28a479-96f0-4f0a-9f4e-035c73c3d239",e._sentryDebugIdIdentifier="sentry-dbid-3d28a479-96f0-4f0a-9f4e-035c73c3d239")}catch{}})();const B=e=>(g("data-v-1b7a68a8"),e=e(),h(),e),C=B(()=>i("div",{class:"instructions"},[n(" Get started with the local editor in seconds: "),i("pre",null,`    $ pip install abstra --upgrade
    $ abstra serve ./your-project-directory
    `),n(" And you're done! Explore the local editor and start building apps. ")],-1)),S=u({__name:"Builds",setup(e){const r=b().params.projectId,{loading:c,result:p}=I(()=>x.list(r)),l=m(()=>{var o,s;return{columns:[{name:"Id"},{name:"Creation date"},{name:"Status"}],rows:(s=(o=p.value)==null?void 0:o.map(t=>({key:t.id,cells:[{text:t.id,classes:["title","centered"]},{text:t.createdAt.toLocaleString(),classes:[]},{text:t.status,classes:["centered"]}]})))!=null?s:[]}});return(o,s)=>(_(),f(v,{"entity-name":"build",loading:d(c),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:d(l)},{"empty-description":y(()=>[C]),_:1},8,["loading","table"]))}});const J=w(S,[["__scopeId","data-v-1b7a68a8"]]);export{J as default};
//# sourceMappingURL=Builds.0b964608.js.map
