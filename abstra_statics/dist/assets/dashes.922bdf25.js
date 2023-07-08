var p=Object.defineProperty;var h=(i,t,e)=>t in i?p(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var c=(i,t,e)=>(h(i,typeof t!="symbol"?t+"":t,e),e);import{A as l}from"./utils.95f0e9e8.js";import{w,d as y}from"./runnerData.891fce22.js";class u{async list(){return await(await fetch("/_editor/api/dashes")).json()}async create(){return await(await fetch("/_editor/api/dashes",{method:"POST",headers:{"Content-Type":"application/json"}})).json()}async get(t){return await(await fetch(`/_editor/api/dashes/${t}`)).json()}async update(t,e){return await(await fetch(`/_editor/api/dashes/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}async delete(t){await fetch(`/_editor/api/dashes/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})}async duplicate(t){return await(await fetch(`/_editor/api/dashes/${t}/duplicate`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}async addVariableToCode(t,e){await fetch(`/_editor/api/dashes/${t}/add-variable`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({variable:e})})}}const o=new u;class n{constructor(t){c(this,"record");this.record=new l(o,t,"path")}static async list(){return(await o.list()).map(e=>new n(e))}static async create(){const t=await o.create();return new n(t)}static async get(t){const e=await o.get(t);return new n(e)}get path(){return this.record.get("path")}set path(t){this.record.set("path",t)}get file(){return this.record.get("file")}set file(t){this.record.set("file",t)}get title(){return this.record.get("title")}set title(t){this.record.set("title",t)}get layout(){const t=this.record.get("layout");return{version:"0.2",props:t.props,slot:{...Object.entries(t.slot).reduce((e,[s,r])=>({...e,[s]:{id:r.id,type:r.type,colStart:r.position.colStart,colEnd:r.position.colEnd,rowStart:r.position.rowStart,rowEnd:r.position.rowEnd,props:r.props,events:r.events,variable:r.variable}}),{})}}}set layout(t){if(t.version==="0.1")throw new Error("TODO: convert 0.1 to 0.2");const e={version:"0.2",props:t.props,slot:{...Object.entries(t.slot).reduce((s,[r,d])=>{if(!(d.type in w))throw new Error("TODO: implement slot support");const a=d;return{...s,[r]:{events:a.events,id:a.id,props:a.props,position:{rowStart:a.rowStart,rowEnd:a.rowEnd,colStart:a.colStart,colEnd:a.colEnd},type:a.type,variable:a.variable}}},{})}};this.record.set("layout",e)}async save(){await this.record.save()}onUpdate(t){this.record.pubsub.subscribe("update",t)}hasChanges(){return this.record.hasChanges()}async delete(){await o.delete(this.path)}async duplicate(){const t=await o.duplicate(this.path);return new n(t)}async addVariableToCode(t){await o.addVariableToCode(this.path,t)}get rootSlot(){if(this.layout.version==="0.1")throw new Error("TODO: convert 0.1 to 0.2");return this.layout.slot}makeRunnerData(t,e){var s,r;return{id:this.path,path:this.path,title:this.title,theme:t.theme,brandName:(s=t.brandName)!=null?s:null,logoUrl:(r=t.logoUrl)!=null?r:null,mainColor:t.mainColor,fontFamily:t.fontFamily,layout:y(e!=null?e:this.layout),idOrPath:this.path,workspaceName:"Untitled Workspace",sidebar:[],runtimeType:"dash"}}}export{n as D};
//# sourceMappingURL=dashes.922bdf25.js.map
