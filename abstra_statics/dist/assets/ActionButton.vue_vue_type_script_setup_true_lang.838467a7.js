import{d,r as i,o as l,a3 as u,b as c,c as f,N as b,ad as y}from"./registerWidgets.ef15081f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="456233d8-2b72-44a0-833c-8bbb19a702f4",e._sentryDebugIdIdentifier="sentry-dbid-456233d8-2b72-44a0-833c-8bbb19a702f4")}catch{}})();const g=d({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,s=i(null);l(()=>{s.value&&o.action.setElement(s.value),u.addAction(o.action)});const a=()=>n("next");return(m,t)=>(c(),f("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=r=>a()),onKeydown:t[1]||(t[1]=y(r=>a(),["enter"]))},b(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.838467a7.js.map