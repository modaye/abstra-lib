import{d,r as i,o as f,a5 as l,b as u,c,N as b,af as y}from"./registerWidgets.cb3a7b8d.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4af6d968-6828-4ed1-8baa-035ca30fb314",e._sentryDebugIdIdentifier="sentry-dbid-4af6d968-6828-4ed1-8baa-035ca30fb314")}catch{}})();const g=d({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,a=i(null);f(()=>{a.value&&o.action.setElement(a.value),l.addAction(o.action)});const s=()=>n("next");return(m,t)=>(u(),c("button",{ref_key:"element",ref:a,class:"next-button",onClick:t[0]||(t[0]=r=>s()),onKeydown:t[1]||(t[1]=y(r=>s(),["enter"]))},b(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.9a3f9909.js.map
