import{d,r as i,o as l,a3 as c,b as f,c as u,N as b,ad as y}from"./registerWidgets.39370cce.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="be2289f7-0df0-49c1-b226-ea369c818416",e._sentryDebugIdIdentifier="sentry-dbid-be2289f7-0df0-49c1-b226-ea369c818416")}catch{}})();const g=d({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,s=i(null);l(()=>{s.value&&o.action.setElement(s.value),c.addAction(o.action)});const a=()=>n("next");return(m,t)=>(f(),u("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=r=>a()),onKeydown:t[1]||(t[1]=y(r=>a(),["enter"]))},b(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.4f7cca41.js.map