import{d as r,r as f,o as i,a3 as d,b as l,c as u,N as b,ad as y}from"./registerWidgets.05268d5e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fc25e8bc-cc1f-4a13-a29f-a9eb6389ce5f",e._sentryDebugIdIdentifier="sentry-dbid-fc25e8bc-cc1f-4a13-a29f-a9eb6389ce5f")}catch{}})();const g=r({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,s=f(null);i(()=>{s.value&&o.action.setElement(s.value),d.addAction(o.action)});const a=()=>n("next");return(m,t)=>(l(),u("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=c=>a()),onKeydown:t[1]||(t[1]=y(c=>a(),["enter"]))},b(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.0b189a46.js.map
