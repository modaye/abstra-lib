import{a as U}from"./asyncComputed.93878fc8.js";import{d as S,H as q,b as t,c as n,x as e,V as f,Y as x,G as B,e as b,z as d,I as g,F as h,L as k,t as I,D as V,W as G,N as $,a1 as H,S as A,O as J,Q,q as W,r as R,ab as D,w as C,J as Y}from"./registerWidgets.68b4d727.js";import{T as K}from"./tables.7056aa59.js";import{L}from"./CircularLoading.d7ae4d10.js";import{T as P,B as X,a as E}from"./BackButton.7d38491b.js";import{j as M,E as Z,t as j,D as ee,g as te,i as ae}from"./icons.ef86ff2e.js";import{D as le}from"./DocsButton.f7d961ed.js";import"./activeRecord.65858c58.js";import"./lottie.d1957a7e.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="aab3388c-a1dc-43fd-913e-176b47c07f60",a._sentryDebugIdIdentifier="sentry-dbid-aab3388c-a1dc-43fd-913e-176b47c07f60")}catch{}})();const N=a=>(J("data-v-5812aa88"),a=a(),Q(),a),ne={class:"table-settings"},se=N(()=>e("label",null,"Name",-1)),oe={class:"table-field"},ue={class:"columns"},de=N(()=>e("label",null,"Columns",-1)),ie=["onUpdate:modelValue"],re=["onUpdate:modelValue"],ce=["onUpdate:modelValue"],be=["onUpdate:modelValue","disabled"],pe=N(()=>e("label",null,"Not null",-1)),_e=["onClick"],me=["onClick"],ve=S({__name:"TableSettings",props:{table:null},setup(a){var o;const s=a,{result:_}=U(()=>K.dbTypes()),w=q();(o=s.table)==null||o.onUpdate(()=>{w.replace({name:"tableEditor",params:{tableName:s.table.name}})});function m(p){confirm(`Are you sure you want to delete column "${p.name}"?`)&&p.delete()}return(p,c)=>(t(),n("div",ne,[se,e("div",oe,[f(e("input",{"onUpdate:modelValue":c[0]||(c[0]=l=>a.table.name=l),class:"table-name"},null,512),[[x,a.table.name]]),e("button",{class:B(["button","save",{disabled:!a.table.hasChanges()}]),onClick:c[1]||(c[1]=l=>a.table.save())},[b(g,{path:d(M)},null,8,["path"])],2)]),e("div",ue,[de,(t(!0),n(h,null,k(a.table.columns,l=>(t(),n("div",{key:l.id,class:"column"},[l.primaryKey?(t(),I(g,{key:0,class:"column-primary-key",path:d(Z)},null,8,["path"])):V("",!0),d(_)?f((t(),n("select",{key:1,"onUpdate:modelValue":i=>l.type=i,class:"column-type"},[(t(!0),n(h,null,k(d(_),i=>(t(),n("option",{key:i.type},$(i.type),1))),128))],8,ie)),[[G,l.type]]):V("",!0),f(e("input",{"onUpdate:modelValue":i=>l.name=i,class:"column-name",placeholder:"Column name"},null,8,re),[[x,l.name]]),f(e("input",{"onUpdate:modelValue":i=>l.default=i,class:"column-default",placeholder:"Default value"},null,8,ce),[[x,l.default]]),f(e("input",{"onUpdate:modelValue":i=>l.notNull=i,type:"checkbox",disabled:!l.default},null,8,be),[[H,l.notNull]]),pe,l.primaryKey?V("",!0):(t(),n("button",{key:2,class:"button delete",onClick:i=>m(l)},[b(g,{path:d(j)},null,8,["path"])],8,_e)),e("button",{class:B(["button","save",{disabled:!l.hasChanges()}]),onClick:i=>l.save()},[b(g,{path:d(M)},null,8,["path"])],10,me)]))),128)),e("button",{class:"button add",onClick:c[2]||(c[2]=l=>a.table.createColumn())},[b(g,{path:d(ee)},null,8,["path"]),A(" Add Column ")])])]))}});const ye=W(ve,[["__scopeId","data-v-5812aa88"]]),fe={class:"table-data"},he={class:"column-header"},ke={class:"column-name"},we=e("th",null,null,-1),ge={key:1},Ce=["open"],$e={key:0,class:"editing-row-content"},Ve={class:"editing-row-header"},Te=["onUpdate:modelValue"],xe={key:0,class:"row-error"},Ie=S({__name:"TableData",props:{table:null},setup(a){const s=a,{result:_,loading:w,refetch:m}=U(()=>s.table.select()),o=R(null),p=R(null),c=R(null);function l(){!s.table||(o.value={},c.value=null,p.value=null)}function i(r){return Object.keys(r).reduce((T,u)=>{var v;return(v=s.table.columns.find(y=>y.name===u))!=null&&v.primaryKey?{[u]:r[u]}:T},{})}async function z(){if(!(!s.table||!o.value))if(c.value){const r=await s.table.updateRow(i(c.value),o.value);r.type==="update-row:error"?p.value=r.reason:(o.value=null,c.value=null,p.value=null,m())}else{const r=await s.table.insertRow(o.value);r.type==="insert-row:error"?p.value=r.reason:(o.value=null,c.value=null,p.value=null,m())}}function F(r){!s.table||(o.value={...r},c.value={...r},p.value=null)}async function O(r){confirm("Are you sure you want to delete this row?")&&(await s.table.deleteRow(i(r)),m())}return(r,T)=>(t(),n("div",fe,[e("button",{class:"add-row",onClick:l},"Add Row"),e("table",null,[e("thead",null,[e("tr",null,[(t(!0),n(h,null,k(a.table.columns,u=>(t(),n("th",{key:u.id},[e("div",he,[e("div",ke,$(u.name),1)])]))),128)),we])]),d(w)?(t(),I(L,{key:0})):(t(),n("tbody",ge,[(t(!0),n(h,null,k(d(_),(u,v)=>(t(),n("tr",{key:v},[(t(!0),n(h,null,k(a.table.columns,y=>(t(),n("td",{key:y.id},$(u[y.name]),1))),128)),e("td",null,[b(D,{class:"delete-row",path:d(j),onClick:y=>O(u)},null,8,["path","onClick"]),b(D,{class:"edit-row",path:d(te),onClick:y=>F(u)},null,8,["path","onClick"])])]))),128))]))]),e("dialog",{class:"editing-row-container",open:!!o.value},[o.value?(t(),n("div",$e,[e("div",Ve,[A(" New Row "),b(D,{path:d(ae),class:"close",onClick:T[0]||(T[0]=u=>o.value=null)},null,8,["path"])]),(t(!0),n(h,null,k(a.table.columns,u=>(t(),n("div",{key:u.id,class:"column"},[e("label",null,$(u.name),1),f(e("input",{"onUpdate:modelValue":v=>o.value[u.name]=v,type:"text"},null,8,Te),[[x,o.value[u.name]]])]))),128)),e("button",{class:"button save",onClick:z},"Save"),p.value?(t(),n("div",xe,$(p.value),1)):V("",!0)])):V("",!0)],8,Ce)]))}});const Ke=S({__name:"TableEditor",setup(a){const s=Y(),{result:_,loading:w}=U(()=>K.get(s.params.tableName));return(m,o)=>d(w)||!d(_)?(t(),I(L,{key:0})):(t(),I(P,{key:1,class:"editor"},{left:C(()=>[b(X,{link:"/_editor/tables"})]),right:C(()=>[b(le,{path:"tables"})]),default:C(()=>[b(E,{title:"Table data"},{default:C(()=>[b(Ie,{table:d(_)},null,8,["table"])]),_:1}),b(E,{title:"Settings"},{default:C(()=>[b(ye,{table:d(_)},null,8,["table"])]),_:1})]),_:1}))}});export{Ke as default};
//# sourceMappingURL=TableEditor.2fdc1bcb.js.map
