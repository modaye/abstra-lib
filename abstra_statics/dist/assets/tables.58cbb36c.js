var h=Object.defineProperty;var l=(n,e,t)=>e in n?h(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var r=(n,e,t)=>(l(n,typeof e!="symbol"?e+"":e,t),t);import{A as p}from"./activeRecord.57c6bf02.js";class u{async list(){return await(await fetch("/_editor/api/tables")).json()}async create(){return await(await fetch("/_editor/api/tables",{method:"POST",headers:{"Content-Type":"application/json"}})).json()}async get(e){return await(await fetch(`/_editor/api/tables/${e}`)).json()}async update(e,t){return await(await fetch(`/_editor/api/tables/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}async delete(e){await fetch(`/_editor/api/tables/${e}`,{method:"DELETE"})}async duplicate(e){return await(await fetch(`/_editor/api/tables/${e}/duplicate`,{method:"POST"})).json()}async dbTypes(){return(await fetch("/_editor/api/workspace/db-types")).json()}async selectRow(e,t,s){return(await fetch(`/_editor/api/tables/${e}/rows`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"select",where:t,params:s})})).json()}async insertRow(e,t){return(await fetch(`/_editor/api/tables/${e}/rows`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"insert",values:t})})).json()}async updateRow(e,t,s,o){await fetch(`/_editor/api/tables/${e}/rows`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"update",params:o,where:t,set:s})})}async deleteRow(e,t,s){await fetch(`/_editor/api/tables/${e}/rows`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"delete",where:t,params:s})})}}const a=new u;class d{constructor(e){r(this,"tableName");this.tableName=e}async list(){return(await fetch(`/_editor/api/tables/${this.tableName}/columns`)).json()}async get(e){return(await fetch(`/_editor/api/tables/${this.tableName}/columns/${e}`)).json()}async update(e,t){return(await fetch(`/_editor/api/tables/${this.tableName}/columns/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}async create(){return(await fetch(`/_editor/api/tables/${this.tableName}/columns`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}async delete(e){await fetch(`/_editor/api/tables/${this.tableName}/columns/${e}`,{method:"DELETE"})}}class c{constructor(e,t){r(this,"record");r(this,"table");r(this,"api");this.api=new d(e.name),this.record=new p(this.api,t,"name"),this.table=e}static from(e,t){return new c(e,t)}static async create(e){const s=await new d(e.name).create();return c.from(e,s)}get name(){return this.record.get("name")}set name(e){this.record.set("name",e)}get type(){return this.record.get("type")}set type(e){this.record.set("type",e)}hasChanges(){return this.record.hasChanges()}async delete(){this.table.deleteColumn(this.name)}async save(){return this.record.save()}get primaryKey(){return this.record.get("primary_key")}get notNull(){return this.record.get("not_null")}set notNull(e){this.record.set("not_null",e)}get default(){return this.record.get("default")}set default(e){e||this.record.set("not_null",!1),this.record.set("default",e)}get id(){return this.record.get("id")}}class i{constructor(e){r(this,"record");r(this,"_columns");this.record=new p(a,e,"name"),this._columns=e.columns.map(t=>c.from(this,t))}static async list(){return(await a.list()).map(t=>new i(t))}static async create(){const e=await a.create();return new i(e)}static async get(e){const t=await a.get(e);return new i(t)}async delete(){await a.delete(this.name)}async duplicate(){const e=await a.duplicate(this.name);return new i(e)}async save(){await this.record.save()}onUpdate(e){this.record.pubsub.subscribe("update",e)}hasChanges(){return this.record.hasChanges()}get name(){return this.record.get("name")}set name(e){this.record.set("name",e)}get columns(){return this._columns}async createColumn(){const e=await c.create(this);this._columns.push(e)}static async dbTypes(){return a.dbTypes()}async deleteColumn(e){await new d(this.name).delete(e),this._columns=this._columns.filter(s=>s.name!==e)}async select(e={}){const t=Object.keys(e).map(s=>`${s} = :${s}`).join(" AND ");return a.selectRow(this.name,t,e)}async insertRow(e){return a.insertRow(this.name,e)}async updateRow(e,t){const s=Object.keys(e).map(o=>`${o} = :${o}`).join(", ");return a.updateRow(this.name,s,t,e)}async deleteRow(e){const t=Object.keys(e).map(s=>`${s} = :${s}`).join(" AND ");return a.deleteRow(this.name,t,e)}}export{i as T};
//# sourceMappingURL=tables.58cbb36c.js.map