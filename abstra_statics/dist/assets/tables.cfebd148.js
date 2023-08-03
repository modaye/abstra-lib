var u=Object.defineProperty;var h=(a,e,t)=>e in a?u(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var r=(a,e,t)=>(h(a,typeof e!="symbol"?e+"":e,t),t);import{A as l}from"./activeRecord.bacc466b.js";import"./registerWidgets.05268d5e.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="ecef9d54-b9a5-46bd-9492-dc2dbf8a53c7",a._sentryDebugIdIdentifier="sentry-dbid-ecef9d54-b9a5-46bd-9492-dc2dbf8a53c7")}catch{}})();class y{async list(){return await(await fetch("/_editor/api/tables")).json()}async create(){return await(await fetch("/_editor/api/tables",{method:"POST",headers:{"Content-Type":"application/json"}})).json()}async get(e){return await(await fetch(`/_editor/api/tables/${e}`)).json()}async update(e,t){return await(await fetch(`/_editor/api/tables/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}async delete(e){await fetch(`/_editor/api/tables/${e}`,{method:"DELETE"})}async duplicate(e){return await(await fetch(`/_editor/api/tables/${e}/duplicate`,{method:"POST"})).json()}async dbTypes(){return(await fetch("/_editor/api/workspace/db-types")).json()}async selectRow(e,t,s){return(await fetch(`/_editor/api/tables/${e}/rows`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"select",where:t,params:s})})).json()}async insertRow(e,t){const s=await fetch(`/_editor/api/tables/${e}/rows`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"insert",values:t})});return s.ok?{type:"insert-row:success",row:await s.json()}:{type:"insert-row:error",reason:await s.text()}}async updateRow(e,t,s,o){const d=await fetch(`/_editor/api/tables/${e}/rows`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"update",params:o,where:t,set:s})});return d.ok?{type:"update-row:success",row:await d.json()}:{type:"update-row:error",reason:await d.text()}}async deleteRow(e,t,s){await fetch(`/_editor/api/tables/${e}/rows`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"delete",where:t,params:s})})}}const n=new y;class p{constructor(e){r(this,"tableName");this.tableName=e}async list(){return(await fetch(`/_editor/api/tables/${this.tableName}/columns`)).json()}async get(e){return(await fetch(`/_editor/api/tables/${this.tableName}/columns/${e}`)).json()}async update(e,t){return(await fetch(`/_editor/api/tables/${this.tableName}/columns/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}async create(){return(await fetch(`/_editor/api/tables/${this.tableName}/columns`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}async delete(e){await fetch(`/_editor/api/tables/${this.tableName}/columns/${e}`,{method:"DELETE"})}}class c{constructor(e,t){r(this,"record");r(this,"table");r(this,"api");this.api=new p(e.name),this.record=new l(this.api,t,"name"),this.table=e}static from(e,t){return new c(e,t)}static async create(e){const s=await new p(e.name).create();return c.from(e,s)}get name(){return this.record.get("name")}set name(e){this.record.set("name",e)}get type(){return this.record.get("type")}set type(e){this.record.set("type",e)}hasChanges(){return this.record.hasChanges()}async delete(){this.table.deleteColumn(this.name)}async save(){return this.record.save()}get primaryKey(){return this.record.get("primary_key")}get notNull(){return this.record.get("not_null")}set notNull(e){this.record.set("not_null",e)}get default(){return this.record.get("default")}set default(e){e||this.record.set("not_null",!1),this.record.set("default",e)}get id(){return this.record.get("id")}}class i{constructor(e){r(this,"record");r(this,"_columns");this.record=new l(n,e,"name"),this._columns=e.columns.map(t=>c.from(this,t))}static async list(){return(await n.list()).map(t=>new i(t))}static async create(){const e=await n.create();return new i(e)}static async get(e){const t=await n.get(e);return new i(t)}async delete(){await n.delete(this.name)}async duplicate(){const e=await n.duplicate(this.name);return new i(e)}async save(){await this.record.save()}onUpdate(e){this.record.pubsub.subscribe("update",e)}hasChanges(){return this.record.hasChanges()}get name(){return this.record.get("name")}set name(e){this.record.set("name",e)}get columns(){return this._columns}async createColumn(){const e=await c.create(this);this._columns.push(e)}static async dbTypes(){return n.dbTypes()}async deleteColumn(e){await new p(this.name).delete(e),this._columns=this._columns.filter(s=>s.name!==e)}async select(e={}){const t=Object.keys(e).map(s=>`${s} = :${s}`).join(" AND ");return n.selectRow(this.name,t,e)}async insertRow(e){return n.insertRow(this.name,e)}async updateRow(e,t){const s=Object.keys(e).map(o=>`${o} = :${o}`).join(" AND ");return n.updateRow(this.name,s,t,e)}async deleteRow(e){const t=Object.keys(e).map(s=>`${s} = :${s}`).join(" AND ");return n.deleteRow(this.name,t,e)}}export{i as T};
//# sourceMappingURL=tables.cfebd148.js.map
