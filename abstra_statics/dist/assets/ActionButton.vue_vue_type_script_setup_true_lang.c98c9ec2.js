import{d as i,r as d,o as l,a3 as c,b as u,c as f,N as b,ad as y}from"./registerWidgets.29e41a54.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4b9a138c-7391-4556-b549-559c40f193ba",e._sentryDebugIdIdentifier="sentry-dbid-4b9a138c-7391-4556-b549-559c40f193ba")}catch{}})();const g=i({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,s=d(null);l(()=>{s.value&&o.action.setElement(s.value),c.addAction(o.action)});const a=()=>n("next");return(m,t)=>(u(),f("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=r=>a()),onKeydown:t[1]||(t[1]=y(r=>a(),["enter"]))},b(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.c98c9ec2.js.map
