import{d,r as i,o as c,a5 as l,b as f,c as u,N as b,af as y}from"./registerWidgets.ca6243ef.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0e60554c-aab6-4ac0-b2c0-f7d96a8a9bd3",e._sentryDebugIdIdentifier="sentry-dbid-0e60554c-aab6-4ac0-b2c0-f7d96a8a9bd3")}catch{}})();const g=d({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,a=i(null);c(()=>{a.value&&o.action.setElement(a.value),l.addAction(o.action)});const s=()=>n("next");return(m,t)=>(f(),u("button",{ref_key:"element",ref:a,class:"next-button",onClick:t[0]||(t[0]=r=>s()),onKeydown:t[1]||(t[1]=y(r=>s(),["enter"]))},b(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.cdfb7200.js.map
