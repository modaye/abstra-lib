var c=Object.defineProperty;var d=(r,t,e)=>t in r?c(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var o=(r,t,e)=>(d(r,typeof t!="symbol"?t+"":t,e),e);import{C as a}from"./gateway.8f8e2838.js";import{A as u}from"./activeRecord.65858c58.js";import"./registerWidgets.68b4d727.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="291fb910-80a5-47d0-a89e-3486212ca8ed",r._sentryDebugIdIdentifier="sentry-dbid-291fb910-80a5-47d0-a89e-3486212ca8ed")}catch{}})();class l{constructor(){o(this,"urlPath","members")}async create(t){return a.post(`organizations/${t.organizationId}/${this.urlPath}`,{email:t.email})}async delete(t){await a.delete(`${this.urlPath}/${t}`)}async list(t){return a.get(`organizations/${t}/${this.urlPath}`)}async get(t,e){return a.get(`organizations/${t}/${this.urlPath}/${e}`)}async update(t,e){return a.patch(`${this.urlPath}/${t}`,e)}async duplicate(t){return a.post(`${this.urlPath}/${t}/duplicate`,{})}async login(){return a.post("authors",{})}}const s=new l;class i{constructor(t){o(this,"record");this.record=new u(s,t,"id")}static async login(){return s.login()}static async list(t){return(await s.list(t)).map(n=>new i(n))}static async create(t,e){const n=await s.create({organizationId:t,email:e});return new i(n)}static async get(t,e){const n=await s.get(t,e);return new i(n)}async delete(){await s.delete(this.email)}async save(){return this.record.save()}hasChanges(){return this.record.hasChanges()}get email(){return this.record.get("email")}set email(t){this.record.set("email",t)}get name(){return this.record.get("name")}set name(t){this.record.set("name",t)}get role(){return this.record.get("role")}set role(t){this.record.set("role",t)}get id(){return this.record.get("id")}get authorId(){return this.record.get("authorId")}}export{i as M};
//# sourceMappingURL=member.ae00d95c.js.map
