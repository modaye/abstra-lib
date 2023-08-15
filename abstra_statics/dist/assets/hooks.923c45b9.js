var y=Object.defineProperty;var l=(a,t,e)=>t in a?y(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var o=(a,t,e)=>(l(a,typeof t!="symbol"?t+"":t,e),e);import{A as f}from"./activeRecord.fdea504c.js";import"./registerWidgets.5bc8efb7.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="fbc3204f-956c-467a-a914-4362a7885a3a",a._sentryDebugIdIdentifier="sentry-dbid-fbc3204f-956c-467a-a914-4362a7885a3a")}catch{}})();class w{async list(){return await(await fetch("/_editor/api/hooks")).json()}async create(){return await(await fetch("/_editor/api/hooks",{method:"POST",headers:{"Content-Type":"application/json"}})).json()}async get(t){return await(await fetch(`/_editor/api/hooks/${t}`)).json()}async update(t,e){return await(await fetch(`/_editor/api/hooks/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}async delete(t){await fetch(`/_editor/api/hooks/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})}async test(t,e){const n=new URLSearchParams(e.query),i=await fetch(`/_editor/api/hooks/${t}/test?${n.toString()}`,{method:e.method,headers:{"Content-Type":"application/json",...e.headers},body:e.method==="GET"?void 0:e.body}),{status:c,headers:d,body:h,stderr:p,stdout:u}=await i.json();return{status:c,headers:d,body:h,stderr:p,stdout:u}}}const s=new w;class r{constructor(t){o(this,"record");this.record=f.create(s,t,"path")}static async list(){return(await s.list()).map(e=>new r(e))}static async create(){const t=await s.create();return new r(t)}static async get(t){const e=await s.get(t);return new r(e)}async delete(){await s.delete(this.path)}async duplicate(){return this}disable(){return s.update(this.path,{enabled:!1})}enable(){return s.update(this.path,{enabled:!0})}async save(){await this.record.save(),console.log("save ",this.path)}onUpdate(t){this.record.pubsub.subscribe("update",t)}hasChanges(){return this.record.hasChanges()}get path(){return this.record.get("path")}set path(t){this.record.set("path",t)}get title(){return this.record.get("title")}get enabled(){return this.record.get("enabled")}get file(){return this.record.get("file")}set file(t){this.record.set("file",t)}async test(t){return s.test(this.path,t)}get routeName(){return"hooks"}}export{r as H};
//# sourceMappingURL=hooks.923c45b9.js.map
