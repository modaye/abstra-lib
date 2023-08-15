var g=Object.defineProperty;var b=(r,t,e)=>t in r?g(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var u=(r,t,e)=>(b(r,typeof t!="symbol"?t+"":t,e),e);import{u as f}from"./registerWidgets.5bc8efb7.js";import{P as y}from"./pubsub.d656fdf8.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="d4933005-5790-4f1f-9ab8-2955cbe0adc7",r._sentryDebugIdIdentifier="sentry-dbid-d4933005-5790-4f1f-9ab8-2955cbe0adc7")}catch{}})();const v=()=>window.location.host.includes(".abstra.io"),m={passwordless:"/api/passwordless","cloud-api":"/api/cloud-api"},I={passwordless:"https://passwordless.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},h=r=>{const t="VITE_"+f.toUpper(f.snakeCase(r)),e={VITE_SENTRY_RELEASE:"57e7af6c89842a22f916f3b837bc0a453cd7b68c",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(v()?m[r]:I[r])};class a{static get(t){try{const e=localStorage.getItem(t);return e&&JSON.parse(e)}catch{return null}}static set(t,e){localStorage.setItem(t,JSON.stringify(e))}static pop(t){const e=a.get(t);return a.remove(t),e}static remove(t){localStorage.removeItem(t)}}function l(r){this.message=r}l.prototype=new Error,l.prototype.name="InvalidCharacterError";var w=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(r){var t=String(r).replace(/=+$/,"");if(t.length%4==1)throw new l("'atob' failed: The string to be decoded is not correctly encoded.");for(var e,n,s=0,o=0,p="";n=t.charAt(o++);~n&&(e=s%4?64*e+n:n,s++%4)?p+=String.fromCharCode(255&e>>(-2*s&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return p};function E(r){var t=r.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(w(e).replace(/(.)/g,function(n,s){var o=s.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o}))}(t)}catch{return w(t)}}function d(r){this.message=r}function S(r,t){if(typeof r!="string")throw new d("Invalid token specified");var e=(t=t||{}).header===!0?0:1;try{return JSON.parse(E(r.split(".")[e]))}catch(n){throw new d("Invalid token specified: "+n.message)}}d.prototype=new Error,d.prototype.name="InvalidTokenError";const i=class{constructor(){u(this,"pubsub");this.pubsub=new y}async authenticate(t){try{const e=await fetch(`${h("passwordless")}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const n=await fetch(`${h("passwordless")}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!n.ok)throw new Error(await n.text());const s=await n.json();this.saveJWT(s.jwt);const o=this.getUser();return this.pubsub.publish("authenticated",o),o}saveJWT(t){a.set(i.key,t)}getJWT(){return a.get(i.key)}getUser(){const t=this.getJWT();if(t)try{const e=S(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeUser(){a.remove(i.key)}getUserHeaders(t="User-Authorization"){const e=this.getJWT();return e?{[t]:`Bearer ${e}`}:{}}};let c=i;u(c,"key","hackerforms:auth:jwt");const J=new c;export{J as p,h as t};
//# sourceMappingURL=passwordlessManager.42602b26.js.map
