import{d as r,r as i,o as f,a3 as l,b as u,c,N as b,ad as y}from"./registerWidgets.cbdb5b20.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d1289345-8c66-44fb-9dbf-283dd29a1efb",e._sentryDebugIdIdentifier="sentry-dbid-d1289345-8c66-44fb-9dbf-283dd29a1efb")}catch{}})();const g=r({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,s=i(null);f(()=>{s.value&&o.action.setElement(s.value),l.addAction(o.action)});const d=()=>n("next");return(m,t)=>(u(),c("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=a=>d()),onKeydown:t[1]||(t[1]=y(a=>d(),["enter"]))},b(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.57bc0719.js.map