var w=Object.defineProperty;var b=(a,e,t)=>e in a?w(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var u=(a,e,t)=>(b(a,typeof e!="symbol"?e+"":e,t),t);import{d as g,K as v,b as k,t as $,z as p,J as C}from"./registerWidgets.05268d5e.js";import{a as I}from"./asyncComputed.8f90be18.js";import{C as l}from"./gateway.c44af888.js";import{A as _}from"./activeRecord.bacc466b.js";import{C as j}from"./CrudView.79f31df7.js";import{t as A}from"./icons.7c77483f.js";import"./passwordlessManager.61e5b6aa.js";import"./DropdownMenu.7f9500ce.js";import"./Modal.ab17c1cc.js";import"./LoadingIndicator.cd761736.js";import"./lottie.ea647b01.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="3e81653c-7d85-49c3-a25a-f103f59b31de",a._sentryDebugIdIdentifier="sentry-dbid-3e81653c-7d85-49c3-a25a-f103f59b31de")}catch{}})();class P{constructor(){u(this,"urlPath","env-vars")}async create(e){return l.post(`projects/${e.projectId}/${this.urlPath}`,{name:e.name,value:e.value})}async delete(e,t){await l.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e){return l.get(`projects/${e}/${this.urlPath}`)}async get(e){return l.get(`${this.urlPath}/${e}`)}async update(e,t){return l.patch(`${this.urlPath}/${e}`,t)}}const n=new P;class s{constructor(e,t){u(this,"record");this.projectId=e,this.record=new _(n,t,"id")}static async list(e){return(await n.list(e)).map(r=>new s(e,r))}static async create(e,t,r){const o=await n.create({projectId:e,name:t,value:r});return new s(e,o)}static async get(e,t){const r=await n.get(t);return new s(e,r)}static async update(e,t,r){const o=await n.update(t,r);return new s(e,o)}get key(){return this.record.get("name")}get value(){return this.record.get("value")}set value(e){this.record.set("value",e)}async save(){await this.record.save()}async delete(){await n.delete(this.projectId,this.key)}hasChanges(){return this.record.hasChanges()}}const q=g({__name:"EnvVars",setup(a){const t=C().params.projectId,{loading:r,result:o,refetch:m}=I(()=>s.list(t)),y=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}];async function f({key:c,value:i}){await s.create(t,c,i),m()}const h=v(()=>{var c,i;return{columns:[{name:"Key"},{name:"Actions"}],rows:(i=(c=o.value)==null?void 0:c.map(d=>({key:d.key,cells:[{text:d.key,classes:["title","centered"]},{text:"Actions",classes:["centered"],actions:[{icon:A,label:"Delete",async onClick(){await d.delete(),m()},dangerous:!0}]}]})))!=null?i:[]}});return(c,i)=>(k(),$(j,{"entity-name":"env-vars",loading:p(r),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:p(h),"create-button-text":"Add Environment Variable",fields:p(y),onCreate:f},null,8,["loading","table","fields"]))}});export{q as default};
//# sourceMappingURL=EnvVars.a7dc32c4.js.map
