import{d as b,K as C,b as g,t as _,z as s,J as w,H as I}from"./registerWidgets.309e60e2.js";import{b as h}from"./index.1c1ab019.js";import"./gateway.51cb6e51.js";import{C as i}from"./connector.95cf95c7.js";import{a as k}from"./asyncComputed.b00f3898.js";import{g as x,r as D}from"./icons.5353538a.js";import{C as E}from"./CrudView.7aecf6b4.js";import"./passwordlessManager.707ad0fd.js";import"./pubsub.5200d147.js";import"./activeRecord.fda98ee0.js";import"./DropdownMenu.5c576288.js";import"./Modal.93f98c35.js";import"./LoadingIndicator.bc80793d.js";import"./lottie.e2f196ac.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="bf1f23d8-e0b6-4567-9d6e-984f1f66b6da",o._sentryDebugIdIdentifier="sentry-dbid-bf1f23d8-e0b6-4567-9d6e-984f1f66b6da")}catch{}})();const Y=b({__name:"Connectors",setup(o){const n=w(),a=I(),c=n.params.projectId;async function d(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const l=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:p,result:m,refetch:u}=k(()=>i.list(c)),f=C(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=m.value)==null?void 0:e.map(r=>({key:r.id,cells:[{text:r.name,classes:["centered"]},{text:r.type},{text:"Actions",classes:["centered"],actions:[{icon:x,label:"Edit",onClick({key:y}){a.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await r.delete(),u()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),_(E,{"entity-name":"connector",loading:s(p),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:s(f),fields:l,"create-button-text":"Create connector",onCreate:d},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Connectors.8d8351fd.js.map
