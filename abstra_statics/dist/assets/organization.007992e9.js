var c=Object.defineProperty;var h=(a,t,e)=>t in a?c(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var i=(a,t,e)=>(h(a,typeof t!="symbol"?t+"":t,e),e);import{C as n}from"./gateway.fa3322de.js";import{A as d}from"./activeRecord.11b7d185.js";import"./registerWidgets.ca6243ef.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="87f8c7e5-0693-4af3-93fa-85a3d192a6b5",a._sentryDebugIdIdentifier="sentry-dbid-87f8c7e5-0693-4af3-93fa-85a3d192a6b5")}catch{}})();class o{constructor(){i(this,"urlPath","organizations")}async create(t){return n.post(`${this.urlPath}`,t)}async delete(t){await n.delete(`${this.urlPath}/${t}`)}async list(){return n.get(`${this.urlPath}`)}async get(t){return n.get(`${this.urlPath}/${t}`)}async update(t,e){return n.patch(`${this.urlPath}/${t}`,e)}}const s=new o;class r{constructor(t){i(this,"initialState");i(this,"changes");i(this,"record");this.record=d.create(s,t,"id"),this.initialState=t,this.changes={}}static async list(){const t=await s.list();return console.log(t),t.map(e=>new r(e))}static async create(t){const e=await s.create({name:t});return new r(e)}static async get(t){const e=await s.get(t);return new r(e)}async delete(){await s.delete(this.id)}async save(){Object.keys(this.changes).length!==0&&(this.initialState=await s.update(this.id,this.changes),this.changes={})}get(t){var e;return(e=this.changes[t])!=null?e:this.initialState[t]}set(t,e){this.changes[t]=e}hasChanges(){return Object.keys(this.changes).length>0}get id(){return this.record.get("id")}set id(t){this.record.set("id",t)}get name(){return this.record.get("name")}}export{r as O};
//# sourceMappingURL=organization.007992e9.js.map
