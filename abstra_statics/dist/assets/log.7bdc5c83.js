var l=Object.defineProperty;var o=(s,t,e)=>t in s?l(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var x=(s,t,e)=>(o(s,typeof t!="symbol"?t+"":t,e),e);import{u as a}from"./registerWidgets.fff064a1.js";const i=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(s){const t=Math.random()*16|0;return(s=="x"?t:t&3|8).toString(16)});class c{constructor(){x(this,"logState",a({log:[]}));x(this,"_listeners",{})}get logs(){return this.logState.log}log(t,e){if(t.type!=="restart"&&t.log.trim()==="")return;const r=e?this.logs.find(n=>n.id===e):null;return r?Object.assign(r,t):this.logs.push({...t,id:e||i()}),this.notifyListeners(t),e}clear(){this.logState.log=[]}listen(t){const e=i();return this._listeners[e]=t,e}unlisten(t){delete this._listeners[t]}notifyListeners(t){Object.values(this._listeners).forEach(e=>e(t))}}const h=new c;export{h as l,i as u};
//# sourceMappingURL=log.7bdc5c83.js.map
