import{r,K as f,R as v}from"./registerWidgets.cbdb5b20.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="45586e86-324d-46ca-872e-99bcae4ed2a5",e._sentryDebugIdIdentifier="sentry-dbid-45586e86-324d-46ca-872e-99bcae4ed2a5")}catch{}})();const y=e=>{const t=r(Date.now()),a=r(!0),l=r(null),u=r(null),o=f(()=>(t.value,e())),s=n=>{l.value=n,u.value=null,a.value=!1},c=n=>{u.value=n,l.value=null,a.value=!1},d=()=>{t.value=Date.now()};return v(()=>o.value,()=>{l.value=null,a.value=!0,o.value.then(s).catch(n=>{console.error(n),c(n)})}),o.value.then(s),{result:l,loading:a,error:u,refetch:d}};export{y as a};
//# sourceMappingURL=asyncComputed.0300d9e5.js.map