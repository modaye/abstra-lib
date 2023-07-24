import{d as l,J as u,b as m,q as _,w as y,y as s,H as b,N as f,O as h,v as r,R as i,p as x}from"./registerWidgets.04dc761e.js";import{a as v}from"./asyncComputed.e0f43af3.js";import"./gateway.743ef31c.js";import{B}from"./build.916479a7.js";import{C as g}from"./CrudView.babb7bf0.js";import"./passwordlessManager.271a8058.js";import"./activeRecord.57c6bf02.js";import"./DropdownMenu.d347b089.js";import"./CircularLoading.78e37a70.js";import"./Modal.02341c49.js";const w=e=>(f("data-v-1b7a68a8"),e=e(),h(),e),I=w(()=>r("div",{class:"instructions"},[i(" Get started with the local editor in seconds: "),r("pre",null,`    $ pip install abstra --upgrade
    $ abstra serve ./your-project-directory
    `),i(" And you're done! Explore the local editor and start building apps. ")],-1)),C=l({__name:"Builds",setup(e){const d=b().params.projectId,{loading:c,result:n}=v(()=>B.list(d)),p=u(()=>{var a,o;return{columns:[{name:"Id"},{name:"Creation date"},{name:"Status"}],rows:(o=(a=n.value)==null?void 0:a.map(t=>({key:t.id,cells:[{text:t.id,classes:["title","centered"]},{text:t.createdAt.toLocaleString(),classes:[]},{text:t.status,classes:["centered"]}]})))!=null?o:[]}});return(a,o)=>(m(),_(g,{"entity-name":"build",loading:s(c),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:s(p)},{"empty-description":y(()=>[I]),_:1},8,["loading","table"]))}});const H=x(C,[["__scopeId","data-v-1b7a68a8"]]);export{H as default};
//# sourceMappingURL=Builds.eb7dba47.js.map
