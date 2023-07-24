import{D as T,_ as D}from"./DropdownMenu.d347b089.js";import{L as z}from"./CircularLoading.78e37a70.js";import{d as B,r as V,u as A,b as t,q as y,w as g,R as N,L as o,v as n,c as s,K as k,U as L,aA as E,F as m,N as $,O as I,p as M,J as U,B as b,A as j,z as F,y as q,a as H,E as S}from"./registerWidgets.04dc761e.js";import{M as J}from"./Modal.02341c49.js";const K=e=>($("data-v-c81b14a0"),e=e(),I(),e),O={class:"main-text"},R={class:"fields"},W=["onUpdate:modelValue","type"],Y=K(()=>n("div",{class:"separator"},null,-1)),G={class:"buttons"},P=B({__name:"CreationModal",props:{entityName:null,fields:null},emits:["create"],setup(e,{expose:p,emit:_}){const l=V(null),d=A({inputValue:{}}),v={maxWidth:"350px",height:"unset",padding:"30px"},x={borderBottom:"none",fontSize:"18px",marginBottom:"17px",display:"flex",flexDirection:"column",justifyContent:"center",color:"#4E596A",lineHeight:"22px"},c={color:"#414A58",fontSize:"14px",alignItems:"unset"},w=()=>{var i;return(i=l==null?void 0:l.value)==null?void 0:i.open()},u=()=>{var i;return(i=l==null?void 0:l.value)==null?void 0:i.close()},r=()=>{_("create",d.inputValue),u()};return p({open:w,close:u}),(i,C)=>(t(),y(J,{ref_key:"modalRef",ref:l,"container-style":v,"header-style":x,"content-style":c},{header:g(()=>[N(" Create a new "+o(e.entityName),1)]),content:g(()=>[n("div",O," You may edit the "+o(e.entityName)+" name afterwards at Settings. ",1),n("div",R,[(t(!0),s(m,null,k(e.fields,a=>{var h;return t(),s("div",{key:a.key,class:"field"},[n("label",null,o(a.label),1),L(n("input",{"onUpdate:modelValue":f=>d.inputValue[a.key]=f,type:(h=a.type)!=null?h:"text",class:"ws-name"},null,8,W),[[E,d.inputValue[a.key]]])])}),128))]),Y,n("div",G,[n("button",{class:"cancel",onClick:u},"Cancel"),n("button",{class:"create",onClick:r},"Create "+o(e.entityName),1)])]),_:1},512))}});const Q=M(P,[["__scopeId","data-v-c81b14a0"]]),X=e=>($("data-v-d62df3d4"),e=e(),I(),e),Z={key:1,class:"runtimes-container"},ee={class:"header"},te={class:"title-wrapper"},ne={class:"description"},se={key:0,class:"empty-list"},ae=X(()=>n("img",{src:D},null,-1)),oe={class:"empty-list-title"},le={class:"empty-list-description"},ie={key:2},ce=B({__name:"CrudView",props:{loading:{type:Boolean},title:null,description:null,createButtonText:null,emptyTitle:null,entityName:null,fields:null,table:null},emits:["create"],setup(e,{emit:p}){const _=e,l=V(null),d=()=>{var c;_.fields?(c=l.value)==null||c.open():p("create",{})};async function v(c){p("create",c)}const x=U(()=>({"--columnCount":`${_.table.columns.length}`}));return(c,w)=>{const u=H("router-link");return t(),s(m,null,[e.loading?(t(),y(z,{key:0,class:"loading-wrapper",justify:"center"})):(t(),s("div",Z,[n("div",ee,[n("div",te,[n("h1",null,o(e.title),1),n("p",ne,o(e.description),1),e.createButtonText?(t(),s("button",{key:0,onClick:d},o(e.createButtonText),1)):b("",!0)])]),e.table.rows.length===0?(t(),s("div",se,[ae,n("div",oe,o(e.emptyTitle),1),n("div",le,[j(c.$slots,"empty-description",{},void 0,!0)]),e.createButtonText?(t(),s("button",{key:0,onClick:d},o(e.createButtonText),1)):b("",!0)])):(t(),s("table",{key:1,style:F(q(x))},[n("th",null,[(t(!0),s(m,null,k(e.table.columns,(r,i)=>(t(),s("td",{key:i,class:"cell"},o(r.name),1))),128))]),(t(!0),s(m,null,k(e.table.rows,(r,i)=>{var C;return t(),s("tr",{key:i,class:S((C=r.classes)!=null?C:[])},[(t(!0),s(m,null,k(r.cells,(a,h)=>{var f;return t(),s("td",{key:h,class:S((f=a.classes)!=null?f:[])},[a.actions?(t(),y(T,{key:0,title:"Actions","highlight-last":!0,options:a.actions,payload:{key:r.key}},null,8,["options","payload"])):a.link?(t(),y(u,{key:1,to:a.link,class:"runtime-title"},{default:g(()=>[N(o(a.text),1)]),_:2},1032,["to"])):(t(),s("div",ie,o(a.text),1))],2)}),128))],2)}),128))],4))])),e.fields?(t(),y(Q,{key:2,ref_key:"modalRef",ref:l,fields:e.fields,"entity-name":e.entityName,onCreate:v},null,8,["fields","entity-name"])):b("",!0)],64)}}});const me=M(ce,[["__scopeId","data-v-d62df3d4"]]);export{me as C};
//# sourceMappingURL=CrudView.babb7bf0.js.map
