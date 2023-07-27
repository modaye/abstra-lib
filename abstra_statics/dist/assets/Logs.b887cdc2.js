import{d as B,v as w,z as r,b as c,t as L,c as u,x as e,e as D,V as y,Y as I,N as d,D as S,F as x,L as k,ag as V,J as O,as as C,O as N,Q as T,q as A}from"./registerWidgets.ad696c68.js";import{C as U}from"./gateway.d1b7c117.js";import{B as j}from"./build.7ce5fe66.js";import{a as E}from"./asyncComputed.40a67fe8.js";import{L as F}from"./LoadingIndicator.2a6b2cd0.js";import"./passwordlessManager.86ad8b48.js";import"./activeRecord.da3a3625.js";import"./lottie.d1a83079.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[t]="689a3e02-5a39-43ef-a3a5-376c038c1c9f",l._sentryDebugIdIdentifier="sentry-dbid-689a3e02-5a39-43ef-a3a5-376c038c1c9f")}catch{}})();class R{list(t){const n=new URLSearchParams({offset:t.offset.toString(),limit:t.limit.toString(),from:t.from.getTime().toString(),to:t.to.getTime().toString(),search:t.search});return U.get(`projects/${t.projectId}/builds/${t.buildId}/logs?${n}`)}}const $=new R;class _{constructor(t,n,i,s,h,g,f){this.executionId=t,this.runtimeType=n,this.runtimeName=i,this.payload=s,this.event=h,this.buildId=g,this.createdAt=f}static fromDTO(t){return new _(t.executionId,t.runtimeType,t.runtimeName,t.payload,t.event,t.buildId,new Date(t.createdAt))}static async list(t){return(await $.list(t)).logs.map(_.fromDTO)}}const m=l=>(N("data-v-b02e5d24"),l=l(),T(),l),P={key:1,class:"logs"},z=m(()=>e("h1",null,"Logs",-1)),G={class:"filters"},J={class:"field field-build"},M=m(()=>e("label",null,"Build",-1)),Q={class:"field"},Y=m(()=>e("label",null,"From",-1)),H={class:"field"},K=m(()=>e("label",null,"To",-1)),W={class:"field"},X=m(()=>e("label",null,"Search",-1)),Z={key:0,class:"log-list"},q={class:"search-summary"},ee={class:"log"},te={class:"log-header"},se={key:0,class:"log-date log-header-item"},oe=m(()=>e("span",{class:"log-header-item-name"},"Build",-1)),ae=[oe],le=V('<div class="log-date log-header-item" data-v-b02e5d24><span class="log-header-item-name" data-v-b02e5d24>Date</span></div><div class="log-runtime log-header-item" data-v-b02e5d24><span class="log-header-item-name" data-v-b02e5d24>Runtime</span></div><div class="log-execution log-header-item" data-v-b02e5d24><span class="log-header-item-name" data-v-b02e5d24>Execution</span></div><div class="log-event log-header-item" data-v-b02e5d24><span class="log-header-item-name" data-v-b02e5d24>Event</span></div>',4),ie={class:"log-header"},de={key:0,class:"log-date log-header-item"},ne={class:"log-header-item-value"},ce={class:"log-date log-header-item"},re={class:"log-header-item-value"},ue={class:"log-runtime log-header-item"},me={class:"log-header-item-value"},pe={class:"log-execution log-header-item"},_e={class:"log-header-item-value"},he={class:"log-event log-header-item"},ge={class:"log-header-item-value"},fe={class:"log-payload"},ve=["textContent"],be={key:1,class:"no-logs"},ye=m(()=>e("p",null,"No logs found.",-1)),Ie=[ye],we=B({__name:"Logs",setup(l){const n=O().params.projectId,i=w({buildOptions:[{label:"Latest",value:"latest"},{label:"All",value:"all"}],buildsLoading:!1,buildLoaded:!1}),s=w({selectedBuild:"all",from:new Date(Date.now()-1e3*60*60*24*7).toISOString().slice(0,16),to:new Date().toISOString().slice(0,16),search:"",limit:50,offset:0}),h=async()=>{if(i.buildLoaded)return;i.buildsLoading=!0;const p=await j.list(n);i.buildOptions=[...i.buildOptions,...p.map(a=>({label:a.label,value:a.id}))],i.buildLoaded=!0,i.buildsLoading=!1},g=p=>{s.selectedBuild=p.value,b()},{loading:f,result:v,refetch:b}=E(()=>_.list({projectId:n,limit:s.limit,offset:s.offset,buildId:s.selectedBuild,from:new Date(s.from),to:new Date(s.to),search:s.search}));return(p,a)=>r(f)||!r(v)?(c(),L(F,{key:0})):(c(),u("div",P,[z,e("div",G,[e("div",J,[M,D(r(C),{modelValue:s.selectedBuild,"onUpdate:modelValue":a[0]||(a[0]=o=>s.selectedBuild=o),class:"build-dropdown",options:i.buildOptions,"option-label":"label","option-value":"value",loading:i.buildsLoading,filter:!1,onShow:h,onChange:g},null,8,["modelValue","options","loading"])]),e("div",Q,[Y,y(e("input",{"onUpdate:modelValue":a[1]||(a[1]=o=>s.from=o),type:"datetime-local"},null,512),[[I,s.from]])]),e("div",H,[K,y(e("input",{"onUpdate:modelValue":a[2]||(a[2]=o=>s.to=o),type:"datetime-local"},null,512),[[I,s.to]])]),e("div",W,[X,y(e("input",{"onUpdate:modelValue":a[3]||(a[3]=o=>s.search=o),type:"search"},null,512),[[I,s.search]])]),e("button",{onClick:a[4]||(a[4]=(...o)=>r(b)&&r(b)(...o))},"Filter")]),r(v).length>0?(c(),u("div",Z,[e("div",q," Showing from "+d(s.offset+1)+" to "+d(s.offset+s.limit),1),e("details",ee,[e("summary",te,[s.selectedBuild=="all"?(c(),u("div",se,ae)):S("",!0),le])]),(c(!0),u(x,null,k(r(v),o=>(c(),u("details",{key:o.createdAt.toString(),class:"log"},[e("summary",ie,[s.selectedBuild=="all"?(c(),u("div",de,[e("span",ne,d(o.buildId.split("-")[0]),1)])):S("",!0),e("div",ce,[e("span",re,d(o.createdAt.toISOString()),1)]),e("div",ue,[e("span",me,d(o.runtimeType)+":"+d(o.runtimeName),1)]),e("div",pe,[e("span",_e,d(o.executionId.slice(0,8)),1)]),e("div",he,[e("span",ge,d(o.event),1)])]),e("div",fe,[e("pre",{class:"log-payload-content",textContent:d(o.payload)},null,8,ve)])]))),128))])):(c(),u("div",be,Ie))]))}});const Ce=A(we,[["__scopeId","data-v-b02e5d24"]]);export{Ce as default};
//# sourceMappingURL=Logs.b887cdc2.js.map