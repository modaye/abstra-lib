var n=Object.defineProperty;var i=(t,e,r)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var s=(t,e,r)=>(i(t,typeof e!="symbol"?e+"":e,r),r);import{A as d}from"./activeRecord.cbf414d4.js";import"./registerWidgets.c33434b6.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="31f62f9e-9585-412a-b800-f86dd0f7e78e",t._sentryDebugIdIdentifier="sentry-dbid-31f62f9e-9585-412a-b800-f86dd0f7e78e")}catch{}})();class c{async get(){return await(await fetch("/_editor/api/workspace",{method:"GET",headers:{"Content-Type":"application/json"}})).json()}async update(e,r){return await(await fetch("/_editor/api/workspace",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).json()}async create(e){throw new Error("Not implemented")}async openFile(e){await fetch("/_editor/api/workspace/open-file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:e})})}async deploy(){await fetch("/_editor/api/workspace/deploy",{method:"POST",headers:{"Content-Type":"application/json"}})}}const o=new c;class a{constructor(e){s(this,"record");this.record=new d(o,e,null)}static async get(){const e=await o.get();return new a(e)}get brandName(){return this.record.get("brand_name")}set brandName(e){this.record.set("brand_name",e)}get fontColor(){var e;return(e=this.record.get("font_color"))!=null?e:"#000000"}set fontColor(e){this.record.set("font_color",e)}get logoUrl(){return this.record.get("logo_url")}set logoUrl(e){this.record.set("logo_url",e)}get mainColor(){var e;return(e=this.record.get("main_color"))!=null?e:"#000000"}set mainColor(e){this.record.set("main_color",e)}get fontFamily(){return this.record.get("font_family")}set fontFamily(e){this.record.set("font_family",e)}get theme(){var e;return(e=this.record.get("theme"))!=null?e:"#ffffff"}set theme(e){this.record.set("theme",e)}async save(){return this.record.save()}hasChanges(){return this.record.hasChanges()}async openFile(e){await o.openFile(e)}static async deploy(){await o.deploy()}get sidebar(){var e;return(e=this.record.get("sidebar"))!=null?e:[]}set sidebar(e){this.record.set("sidebar",e)}}export{a as W};
//# sourceMappingURL=workspaces.ea8984dc.js.map
