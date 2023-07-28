var c=Object.defineProperty;var r=(i,t,s)=>t in i?c(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s;var n=(i,t,s)=>(r(i,typeof t!="symbol"?t+"":t,s),s);import"./registerWidgets.29ceb1a3.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[t]="3f88b0dd-c653-4309-9803-d81e5b95c473",i._sentryDebugIdIdentifier="sentry-dbid-3f88b0dd-c653-4309-9803-d81e5b95c473")}catch{}})();class u{constructor(){n(this,"topics");n(this,"subUid");this.topics={},this.subUid=-1}subscribe(t,s){const e=typeof t=="string"?[t]:t,h=(++this.subUid).toString();return e.forEach(a=>{this.topics[a]||(this.topics[a]=[]),this.topics[a].push({token:h,func:s})}),h}async publish(t,s){if(!this.topics[t])return!1;const e=this.topics[t];let h=e?e.length:0;for(;h--;)await e[h].func(s);return!0}unsubscribe(t){for(const s in this.topics)if(this.topics[s]){for(let e=0,h=this.topics[s].length;e<h;e++)if(this.topics[s][e].token===t)return this.topics[s].splice(e,1),t}return!1}}class d{constructor(t,s,e){n(this,"initialState");n(this,"changes");n(this,"api");n(this,"idKey");n(this,"pubsub");this.initialState=s,this.changes={},this.api=t,this.idKey=e,this.pubsub=new u}get(t){var s;return(s=this.changes[t])!=null?s:this.initialState[t]}set(t,s){this.changes[t]=s}async save(){if(Object.keys(this.changes).length===0)return;this.initialState=await this.api.update(this.idKey?this.initialState[this.idKey]:null,this.changes);const t={...this.changes};this.changes={},this.pubsub.publish("update",t)}hasChanges(){return Object.keys(this.changes).length>0}get state(){return{...this.initialState,...this.changes}}}export{d as A};
//# sourceMappingURL=activeRecord.ab1afca6.js.map
