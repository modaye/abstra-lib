var h=Object.defineProperty;var u=(o,t,r)=>t in o?h(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r;var d=(o,t,r)=>(u(o,typeof t!="symbol"?t+"":t,r),r);import{A as y}from"./activeRecord.cbf414d4.js";import{d as w,w as p}from"./runnerData.68fe0ab2.js";import"./registerWidgets.c33434b6.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="4ebb5eda-84b6-4b47-8a7d-a7087d47b7a8",o._sentryDebugIdIdentifier="sentry-dbid-4ebb5eda-84b6-4b47-8a7d-a7087d47b7a8")}catch{}})();function c(o){return Object.entries(o).reduce((t,[r,a])=>{var s;if(a.type in p){const e=a;if(!e.id)throw new Error("Widget must have an id");return{...t,[r]:{events:e.events,id:e.id,props:e.props,position:{rowStart:e.rowStart,rowEnd:e.rowEnd,colStart:e.colStart,colEnd:e.colEnd},type:e.type,variable:(s=e.variable)!=null?s:null}}}else{const e=a;return{...t,[r]:{id:e.id,props:e.props,row:e.row,height:e.height,type:e.type,slot:c(e.slot),order:e.order}}}},{})}function l(o){return Object.entries(o).reduce((t,[r,a])=>{var s;if(a.type in p){const e=a;return{...t,[r]:{id:e.id,name:e.id,type:e.type,colStart:e.position.colStart,colEnd:e.position.colEnd,rowStart:e.position.rowStart,rowEnd:e.position.rowEnd,props:e.props,events:e.events,variable:(s=e.variable)!=null?s:void 0}}}else{const e=a;return{...t,[r]:{id:e.id,type:e.type,row:e.row,height:e.height,order:0,props:e.props,slot:l(e.slot)}}}},{})}class b{async list(){return await(await fetch("/_editor/api/dashes")).json()}async create(){return await(await fetch("/_editor/api/dashes",{method:"POST",headers:{"Content-Type":"application/json"}})).json()}async get(t){return await(await fetch(`/_editor/api/dashes/${t}`)).json()}async update(t,r){return await(await fetch(`/_editor/api/dashes/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).json()}async delete(t){await fetch(`/_editor/api/dashes/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})}async duplicate(t){return await(await fetch(`/_editor/api/dashes/${t}/duplicate`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}async addVariableToCode(t,r){await fetch(`/_editor/api/dashes/${t}/add-variable`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({variable:r})})}}const i=new b;class n{constructor(t){d(this,"record");this.record=new y(i,t,"path")}static async list(){return(await i.list()).map(r=>new n(r))}static async create(){const t=await i.create();return new n(t)}static async get(t){const r=await i.get(t);return new n(r)}get path(){return this.record.get("path")}set path(t){this.record.set("path",t)}get file(){return this.record.get("file")}set file(t){this.record.set("file",t)}get title(){return this.record.get("title")}set title(t){this.record.set("title",t)}get layout(){const t=this.record.get("layout");return{version:"0.2",props:t.props,slot:l(t.slot)}}set layout(t){if(t.version==="0.1")throw new Error("TODO: convert 0.1 to 0.2");const r={version:"0.2",props:t.props,slot:c(t.slot)};this.record.set("layout",r)}async save(){await this.record.save()}onUpdate(t){this.record.pubsub.subscribe("update",t)}hasChanges(){return this.record.hasChanges()}async delete(){await i.delete(this.path)}async duplicate(){const t=await i.duplicate(this.path);return new n(t)}async addVariableToCode(t){await i.addVariableToCode(this.path,t)}get rootSlot(){if(this.layout.version==="0.1")throw new Error("TODO: convert 0.1 to 0.2");return this.layout.slot}makeRunnerData(t,r){var a,s;return{id:this.path,path:this.path,title:this.title,theme:t.theme,brandName:(a=t.brandName)!=null?a:null,logoUrl:(s=t.logoUrl)!=null?s:null,mainColor:t.mainColor,fontFamily:t.fontFamily,layout:w(r!=null?r:this.layout),workspaceName:"Untitled Workspace",sidebar:t.sidebar,runtimeType:"dash"}}get routeName(){return"dash"}}export{n as D};
//# sourceMappingURL=dashes.5de69797.js.map
