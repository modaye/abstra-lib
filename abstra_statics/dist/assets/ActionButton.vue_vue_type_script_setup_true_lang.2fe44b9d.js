import{d as r,r as i,o as l,a5 as f,b as u,c,N as y,af as b}from"./registerWidgets.309e60e2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="94d3135e-de16-4aca-85a3-54a9d1f61b59",e._sentryDebugIdIdentifier="sentry-dbid-94d3135e-de16-4aca-85a3-54a9d1f61b59")}catch{}})();const g=r({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,a=i(null);l(()=>{a.value&&o.action.setElement(a.value),f.addAction(o.action)});const s=()=>n("next");return(m,t)=>(u(),c("button",{ref_key:"element",ref:a,class:"next-button",onClick:t[0]||(t[0]=d=>s()),onKeydown:t[1]||(t[1]=b(d=>s(),["enter"]))},y(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.2fe44b9d.js.map
