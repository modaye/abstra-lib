import{d as r,r as i,o as f,a3 as l,b as u,c,N as y,ad as b}from"./registerWidgets.29ceb1a3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="cd288d62-a8f2-48f2-9e36-5f5401b65551",e._sentryDebugIdIdentifier="sentry-dbid-cd288d62-a8f2-48f2-9e36-5f5401b65551")}catch{}})();const g=r({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,s=i(null);f(()=>{s.value&&o.action.setElement(s.value),l.addAction(o.action)});const a=()=>n("next");return(m,t)=>(u(),c("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=d=>a()),onKeydown:t[1]||(t[1]=b(d=>a(),["enter"]))},y(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.58d6f594.js.map
