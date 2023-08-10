import{d as b,K as C,b as g,t as _,z as s,J as w,H as I}from"./registerWidgets.68572380.js";import{b as h}from"./index.5601bb74.js";import"./gateway.7cd64c5e.js";import{C as i}from"./connector.b06e57a5.js";import{a as k}from"./asyncComputed.896b7bde.js";import{g as x,t as D}from"./icons.3acf9dc1.js";import{C as E}from"./CrudView.22ff1852.js";import"./passwordlessManager.8fb0aebd.js";import"./activeRecord.15082700.js";import"./DropdownMenu.06bbb53d.js";import"./Modal.dacb9a40.js";import"./LoadingIndicator.5fb5b875.js";import"./lottie.e503152f.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="9ece9b4c-7e8f-4d7d-8c1c-f842c5cbe7ce",o._sentryDebugIdIdentifier="sentry-dbid-9ece9b4c-7e8f-4d7d-8c1c-f842c5cbe7ce")}catch{}})();const V=b({__name:"Connectors",setup(o){const n=w(),r=I(),a=n.params.projectId;async function l(e){const t=await i.create(a,e.name,e.type);r.push({name:"connectorEditor",params:{connectorId:t.id}})}const d=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:p,result:m,refetch:u}=k(()=>i.list(a)),f=C(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=m.value)==null?void 0:e.map(c=>({key:c.id,cells:[{text:c.name,classes:["centered"]},{text:c.type},{text:"Actions",classes:["centered"],actions:[{icon:x,label:"Edit",onClick({key:y}){r.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await c.delete(),u()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),_(E,{"entity-name":"connector",loading:s(p),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:s(f),fields:d,"create-button-text":"Create connector",onCreate:l},null,8,["loading","table"]))}});export{V as default};
//# sourceMappingURL=Connectors.1ab645a4.js.map