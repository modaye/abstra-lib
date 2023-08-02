var d=Object.defineProperty;var o=(a,t,e)=>t in a?d(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var c=(a,t,e)=>(o(a,typeof t!="symbol"?t+"":t,e),e);import{C as r}from"./gateway.52ae1994.js";import{A as u}from"./activeRecord.66fd8f56.js";import"./registerWidgets.e8bf9be7.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="5da724b4-ac36-4c9a-aa61-cb0226ee004a",a._sentryDebugIdIdentifier="sentry-dbid-5da724b4-ac36-4c9a-aa61-cb0226ee004a")}catch{}})();class h{constructor(){c(this,"urlPath","projects")}async create({name:t,organizationId:e}){return r.post(`organizations/${e}/${this.urlPath}`,{name:t})}async delete(t){await r.delete(`/${this.urlPath}/${t}`)}async list(t){return r.get(`organizations/${t}/${this.urlPath}`)}async get(t){return r.get(`${this.urlPath}/${t}`)}async update(t,e){return r.patch(`${this.urlPath}/${t}`,e)}async duplicate(t){return r.post(`${this.urlPath}/${t}/duplicate`,{})}}const s=new h;class n{constructor(t){c(this,"record");this.record=new u(s,t,"id")}static async list(t){return(await s.list(t)).map(i=>new n(i))}static async create({name:t,organizationId:e}){const i=await s.create({organizationId:e,name:t});return new n(i)}static async get(t){const e=await s.get(t);return new n(e)}async delete(){await s.delete(this.id)}async save(){return this.record.save()}hasChanges(){return this.record.hasChanges()}get id(){return this.record.get("id")}set id(t){this.record.set("id",t)}async duplicate(){return await s.duplicate(this.id)}get name(){return this.record.get("name")}set name(t){this.record.set("name",t)}get organizationId(){return this.record.get("organizationId")}get subdomain(){return this.record.get("subdomain")}set subdomain(t){this.record.set("subdomain",t)}}export{n as P};
//# sourceMappingURL=project.6241f860.js.map
