import{t as i,p as a}from"./passwordlessManager.7e095e63.js";import"./registerWidgets.d08da683.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="5b5ec82b-6ca7-4c30-b2df-32f35fdbac07",t._sentryDebugIdIdentifier="sentry-dbid-5b5ec82b-6ca7-4c30-b2df-32f35fdbac07")}catch{}})();const n=i("cloud-api");class p{static async get(e){const r=await(await fetch(`${n}/console/${e}`,{headers:{...a.getUserHeaders("Author-Authorization")}})).text();return r?JSON.parse(r):null}static async post(e,s){const o=await(await fetch(`${n}/console/${e}`,{method:"POST",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return o?JSON.parse(o):null}static async patch(e,s){const o=await(await fetch(`${n}/console/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return o?JSON.parse(o):null}static async delete(e){await fetch(`${n}/console/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")}})}}export{p as C};
//# sourceMappingURL=gateway.0e8bb8f3.js.map