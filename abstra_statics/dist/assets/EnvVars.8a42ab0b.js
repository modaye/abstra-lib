var v=Object.defineProperty;var f=(s,e,t)=>e in s?v(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var d=(s,e,t)=>(f(s,typeof e!="symbol"?e+"":e,t),t);import{d as g,K as b,b as k,t as $,z as p,J as C}from"./registerWidgets.bb4c7eff.js";import{a as j}from"./asyncComputed.0adffaf6.js";import{A,C as l}from"./utils.f02a47e6.js";import{C as P}from"./CrudView.74273abd.js";import{t as x}from"./icons.97625e56.js";import"./passwordlessManager.a806df6a.js";import"./pubsub.a0411919.js";import"./DropdownMenu.45ad2be4.js";import"./CircularLoading.8dab92fc.js";import"./Modal.bf534f7d.js";class I{constructor(){d(this,"urlPath","env-vars")}async create(e){return l.post(`projects/${e.projectId}/${this.urlPath}`,{name:e.name,value:e.value})}async delete(e,t){await l.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e){return l.get(`projects/${e}/${this.urlPath}`)}async get(e){return l.get(`${this.urlPath}/${e}`)}async update(e,t){return l.patch(`${this.urlPath}/${e}`,t)}}const n=new I;class r{constructor(e,t){d(this,"record");this.projectId=e,this.record=new A(n,t,"id")}static async list(e){return(await n.list(e)).map(a=>new r(e,a))}static async create(e,t,a){const o=await n.create({projectId:e,name:t,value:a});return new r(e,o)}static async get(e,t){const a=await n.get(t);return new r(e,a)}static async update(e,t,a){const o=await n.update(t,a);return new r(e,o)}get key(){return this.record.get("name")}get value(){return this.record.get("value")}set value(e){this.record.set("value",e)}async save(){await this.record.save()}async delete(){await n.delete(this.projectId,this.key)}hasChanges(){return this.record.hasChanges()}}const S=g({__name:"EnvVars",setup(s){const t=C().params.projectId,{loading:a,result:o,refetch:m}=j(()=>r.list(t)),y=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}];async function h({key:c,value:i}){await r.create(t,c,i),m()}const w=b(()=>{var c,i;return{columns:[{name:"Key"},{name:"Actions"}],rows:(i=(c=o.value)==null?void 0:c.map(u=>({key:u.key,cells:[{text:u.key,classes:["title","centered"]},{text:"Actions",classes:["centered"],actions:[{icon:x,label:"Delete",async onClick(){await u.delete(),m()},dangerous:!0}]}]})))!=null?i:[]}});return(c,i)=>(k(),$(P,{"entity-name":"env-vars",loading:p(a),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:p(w),"create-button-text":"Add Environment Variable","ask-name-on-create":!0,fields:p(y),onCreate:h},null,8,["loading","table","fields"]))}});export{S as default};
//# sourceMappingURL=EnvVars.8a42ab0b.js.map
