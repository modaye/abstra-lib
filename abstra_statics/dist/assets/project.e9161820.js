var d=Object.defineProperty;var o=(r,t,e)=>t in r?d(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var c=(r,t,e)=>(o(r,typeof t!="symbol"?t+"":t,e),e);import{C as a}from"./gateway.5ce246f2.js";import{A as u}from"./activeRecord.55d1a6e1.js";import"./registerWidgets.f2c3b5e5.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="59bac98c-3ed4-4843-8522-f588ac8a7cc8",r._sentryDebugIdIdentifier="sentry-dbid-59bac98c-3ed4-4843-8522-f588ac8a7cc8")}catch{}})();class h{constructor(){c(this,"urlPath","projects")}async create({name:t,organizationId:e}){return a.post(`organizations/${e}/${this.urlPath}`,{name:t})}async delete(t){await a.delete(`/${this.urlPath}/${t}`)}async list(t){return a.get(`organizations/${t}/${this.urlPath}`)}async get(t){return a.get(`${this.urlPath}/${t}`)}async update(t,e){return a.patch(`${this.urlPath}/${t}`,e)}async duplicate(t){return a.post(`${this.urlPath}/${t}/duplicate`,{})}}const s=new h;class n{constructor(t){c(this,"record");this.record=u.create(s,t,"id")}static async list(t){return(await s.list(t)).map(i=>new n(i))}static async create({name:t,organizationId:e}){const i=await s.create({organizationId:e,name:t});return new n(i)}static async get(t){const e=await s.get(t);return new n(e)}async delete(){await s.delete(this.id)}async save(){return this.record.save()}hasChanges(){return this.record.hasChanges()}get id(){return this.record.get("id")}set id(t){this.record.set("id",t)}async duplicate(){return await s.duplicate(this.id)}get name(){return this.record.get("name")}set name(t){this.record.set("name",t)}get organizationId(){return this.record.get("organizationId")}get subdomain(){return this.record.get("subdomain")}set subdomain(t){this.record.set("subdomain",t)}}export{n as P};
//# sourceMappingURL=project.e9161820.js.map
