import{d as u,K as m,b as f,t as _,w as y,z as d,J as b,O as g,Q as w,x as i,U as n,q as h}from"./registerWidgets.d08da683.js";import{a as x}from"./asyncComputed.2c01b8cd.js";import"./gateway.0e8bb8f3.js";import{B as I}from"./build.0a483a87.js";import"./index.ce7159ab.js";import{C as v}from"./CrudView.7fcae0e5.js";import{K as B,M as D}from"./icons.7be61185.js";import{r as C}from"./console.eab88622.js";import{f as k}from"./index.b048d0fb.js";import"./passwordlessManager.7e095e63.js";import"./pubsub.e3196f46.js";import"./activeRecord.7b9ccd8b.js";import"./DropdownMenu.5e686445.js";import"./Modal.f85e67ed.js";import"./LoadingIndicator.dce6e4e2.js";import"./lottie.bb3af4f6.js";import"./index.b8a07348.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="9c1decaa-1f31-48d7-b1d3-c2e7e73935f7",e._sentryDebugIdIdentifier="sentry-dbid-9c1decaa-1f31-48d7-b1d3-c2e7e73935f7")}catch{}})();const S=e=>(g("data-v-e61ab2b9"),e=e(),w(),e),V=S(()=>i("div",{class:"instructions"},[n(" Get started with the local editor in seconds: "),i("pre",null,`    $ pip install abstra --upgrade
    $ abstra serve ./your-project-directory
    `),n(" And you're done! Explore the local editor and start building apps. ")],-1)),j=u({__name:"Builds",setup(e){const s=b().params.projectId,{loading:c,result:l}=x(()=>I.list(s)),p=m(()=>{var a,r;return{columns:[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions"}],rows:(r=(a=l.value)==null?void 0:a.map(t=>({key:t.id,cells:[{text:t.id.slice(0,8),classes:["centered"]},{text:k(t.createdAt,Date.now(),{addSuffix:!0}),classes:[]},{text:t.status+(t.log?": "+t.log:""),classes:[]},{text:"",classes:["centered"],actions:[{icon:B,label:"View logs",onClick:()=>C.push({name:"logs",params:{projectId:s},query:{buildId:t.id}})},{icon:D,label:"Download files",onClick:()=>t.download()}]}]})))!=null?r:[]}});return(a,r)=>(f(),_(v,{"entity-name":"build",loading:d(c),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:d(p)},{"empty-description":y(()=>[V]),_:1},8,["loading","table"]))}});const H=h(j,[["__scopeId","data-v-e61ab2b9"]]);export{H as default};
//# sourceMappingURL=Builds.28b7b32a.js.map