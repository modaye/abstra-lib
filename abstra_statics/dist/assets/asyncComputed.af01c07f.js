import{r as a,K as d,R as v}from"./registerWidgets.966858c5.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c5138f9c-05bd-4512-9647-6cf4af81d98c",e._sentryDebugIdIdentifier="sentry-dbid-c5138f9c-05bd-4512-9647-6cf4af81d98c")}catch{}})();const y=e=>{const t=a(Date.now()),l=a(!0),r=a(null),u=a(null),o=d(()=>(t.value,e())),c=n=>{r.value=n,u.value=null,l.value=!1},s=n=>{u.value=n,r.value=null,l.value=!1},f=()=>{t.value=Date.now()};return v(()=>o.value,()=>{r.value=null,l.value=!0,o.value.then(c).catch(n=>{console.error(n),s(n)})}),o.value.then(c),{result:r,loading:l,error:u,refetch:f}};export{y as a};
//# sourceMappingURL=asyncComputed.af01c07f.js.map