import{t as i,p as a}from"./passwordlessManager.afd7d1d0.js";import"./registerWidgets.cb3a7b8d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="ab42df13-3e8f-47c4-ab59-549d181f1164",t._sentryDebugIdIdentifier="sentry-dbid-ab42df13-3e8f-47c4-ab59-549d181f1164")}catch{}})();const n=i("cloud-api");class p{static async get(e){const r=await(await fetch(`${n}/console/${e}`,{headers:{...a.getUserHeaders("Author-Authorization")}})).text();return r?JSON.parse(r):null}static async post(e,s){const o=await(await fetch(`${n}/console/${e}`,{method:"POST",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return o?JSON.parse(o):null}static async patch(e,s){const o=await(await fetch(`${n}/console/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return o?JSON.parse(o):null}static async delete(e){await fetch(`${n}/console/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")}})}}export{p as C};
//# sourceMappingURL=gateway.2edca867.js.map
