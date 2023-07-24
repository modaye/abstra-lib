var d=Object.defineProperty;var o=(r,t,e)=>t in r?d(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var i=(r,t,e)=>(o(r,typeof t!="symbol"?t+"":t,e),e);import{C as s}from"./gateway.743ef31c.js";import{A as h}from"./activeRecord.57c6bf02.js";class u{constructor(){i(this,"urlPath","builds")}async create(t){return s.post(`projects/${t.projectId}/${this.urlPath}`,{})}async delete(t){await s.delete(`${this.urlPath}/${t}`)}async list(t){return s.get(`projects/${t}/${this.urlPath}`)}async get(t){return s.get(`${this.urlPath}/${t}`)}async update(t,e){return s.patch(`${this.urlPath}/${t}`,e)}async duplicate(t){return s.post(`${this.urlPath}/${t}/duplicate`,{})}}const a=new u;class c{constructor(t){i(this,"record");this.record=new h(a,t,"id")}static async list(t){return(await a.list(t)).map(n=>new c(n))}static async create(t){const e=await a.create({projectId:t});return new c(e)}static async get(t){const e=await a.get(t);return new c(e)}async delete(){await a.delete(this.id)}async save(){this.record.save()}hasChanges(){return this.record.hasChanges()}get id(){return this.record.get("id")}set id(t){this.record.set("id",t)}async duplicate(){return await a.duplicate(this.id)}get label(){return`${this.createdAt.toString().slice(0,16).replace("T"," ")} (${this.id.split("-")[0]})`}get name(){return this.record.get("name")}set name(t){this.record.set("name",t)}get projectId(){return this.record.get("projectId")}get createdAt(){return this.record.get("createdAt")}get status(){return this.record.get("status")}}export{c as B};
//# sourceMappingURL=build.916479a7.js.map
