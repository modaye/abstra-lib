import{P as PlayerNavbar}from"./PlayerNavbar.db54667c.js";import{g as getCname}from"./index.9f0d5f28.js";import{d as defineComponent,b as openBlock,c as createElementBlock,S as createTextVNode,z as unref,D as createCommentVNode,ag as createStaticVNode,q as _export_sfc,r as ref,t as createBlock,w as withCtx,x as createBaseVNode,O as pushScopeId,Q as popScopeId,a as resolveComponent,e as createVNode,F as Fragment,L as renderList,N as toDisplayString,ah as TransitionGroup,G as normalizeClass}from"./registerWidgets.68b4d727.js";import{S as Steps}from"./WidgetsFrame.990b2044.js";import{M as Modal}from"./Modal.d08e28ea.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="9ce70b4f-6656-49dd-933b-54742947d3e3",e._sentryDebugIdIdentifier="sentry-dbid-9ce70b4f-6656-49dd-933b-54742947d3e3")}catch{}})();const _hoisted_1$2=["href"],_hoisted_2$1=createStaticVNode('<svg width="44" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f8a478c3><g clip-path="url(#clip0_405_116214)" data-v-f8a478c3><path d="M188.697 133.808L172.68 148.263C172.68 148.263 216.044 185.966 217.997 187.72C219.951 189.475 234.405 174.566 232.843 173.266C231.28 171.966 188.697 133.808 188.697 133.808Z" fill="#E36C7C" data-v-f8a478c3></path><path d="M188.697 133.808L172.68 148.263C172.68 148.263 216.044 185.966 217.997 187.72C219.951 189.475 234.405 174.566 232.843 173.266C231.28 171.966 188.697 133.808 188.697 133.808Z" fill="url(#paint0_linear_405_116214)" data-v-f8a478c3></path><path d="M218.387 91.2249L176.195 127.557L173.851 129.51C151.192 149.849 149.853 152.309 141.642 152.584L141.584 152.586C139.612 152.652 135.357 152.795 131.875 149.849C126.797 145.552 120.155 140.083 117.03 137.348C115.34 135.869 112.465 133.039 109.998 131.097C107.902 129.448 106.482 127.581 104.919 127.581C103.357 127.581 100.622 129.925 96.3246 133.832C92.0272 137.739 82.6511 146.333 82.6511 146.333L65.0712 161.569C65.0712 161.569 42.5857 180.688 36.7256 185.376C30.8656 190.064 16.5797 175.69 21.4895 171.703C21.9628 171.23 26.2429 167.755 29.7179 164.915C32.2165 162.84 34.2084 161.179 34.2084 161.179C34.9897 160.397 66.2433 133.051 66.2433 133.051L87.723 114.573C87.723 114.573 95.9339 106.094 105.701 106.094C108.826 106.094 112.83 106.485 126.015 118.205C129.531 121.33 131.485 122.542 135.782 126.409C137.345 127.816 139.852 130.316 140.861 130.316C141.882 130.316 143.986 128.363 145.549 127.023C145.549 127.023 195.897 84.4149 202.37 77.9421C207.839 72.4726 223.075 86.9273 218.387 91.2249Z" fill="url(#paint1_linear_405_116214)" data-v-f8a478c3></path><path d="M33.238 67.1372C31.2846 68.6564 23.9305 75.1737 22.2992 76.9039C19.3366 80.0417 21.3638 81.3905 25.6611 84.9065C29.9585 88.4225 57.8962 112.712 64.8542 118.963L79.9642 105.221L41.288 71.2331C36.5999 67.1372 35.1913 65.6179 33.238 67.1372Z" fill="url(#paint2_linear_405_116214)" data-v-f8a478c3></path></g><defs data-v-f8a478c3><linearGradient id="paint0_linear_405_116214" x1="172.68" y1="133.808" x2="183.059" y2="196.169" gradientUnits="userSpaceOnUse" data-v-f8a478c3><stop offset="0.114583" stop-color="#FF98A6" data-v-f8a478c3></stop><stop offset="1" stop-color="#E36C7C" data-v-f8a478c3></stop></linearGradient><linearGradient id="paint1_linear_405_116214" x1="219.271" y1="186.305" x2="206.115" y2="57.7298" gradientUnits="userSpaceOnUse" data-v-f8a478c3><stop stop-color="#E36C7C" data-v-f8a478c3></stop><stop offset="0.859375" stop-color="#FF98A6" data-v-f8a478c3></stop></linearGradient><linearGradient id="paint2_linear_405_116214" x1="20.8984" y1="66.56" x2="30.8589" y2="127.049" gradientUnits="userSpaceOnUse" data-v-f8a478c3><stop stop-color="#E36C7C" data-v-f8a478c3></stop><stop offset="0.859375" stop-color="#FF98A6" data-v-f8a478c3></stop></linearGradient><clipPath id="clip0_405_116214" data-v-f8a478c3><rect width="256" height="256" fill="white" data-v-f8a478c3></rect></clipPath></defs></svg><b data-v-f8a478c3>Abstra Cloud</b>',2),_sfc_main$3=defineComponent({__name:"Watermark",props:{runtime:null,type:null},setup(e){const t=window.location.hostname.split(".")[0],a=!getCname();return(s,o)=>a?(openBlock(),createElementBlock("a",{key:0,href:`https://www.abstracloud.com/${e.type}?utm_source=abstra_pages&utm_medium=badge&utm_campaign=${e.runtime.id}&origin_subdomain=${unref(t)}`,target:"_blank",class:"watermark"},[createTextVNode(" Coded in Python with "),_hoisted_2$1],8,_hoisted_1$2)):createCommentVNode("",!0)}}),Watermark_vue_vue_type_style_index_0_scoped_f8a478c3_lang="",Watermark=_export_sfc(_sfc_main$3,[["__scopeId","data-v-f8a478c3"]]),_withScopeId=e=>(pushScopeId("data-v-54969e59"),e=e(),popScopeId(),e),_hoisted_1$1={class:"no-credits-message"},_hoisted_2={class:"image-container"},_hoisted_3={key:0,class:"no-credit-image",src:"https://abstra-cloud-assets.s3.amazonaws.com/no-credit.svg"},_hoisted_4=_withScopeId(()=>createBaseVNode("div",{class:"title"},"Insufficient credits to start this page",-1)),_hoisted_5=_withScopeId(()=>createBaseVNode("div",{class:"message"}," Please contact the creator for more information. ",-1)),_sfc_main$2=defineComponent({__name:"NoCreditsMessage",props:{runner:null},setup(e,{expose:t}){const a=ref(null),s={width:"380px",height:"unset",padding:"30px"},o={borderBottom:"none",color:"#D35249",fontSize:"20px",justifyContent:"flex-start",marginBottom:"17px"},l={color:"#414A58",fontSize:"14px"};return t({open:()=>{var r;(r=a.value)==null||r.open()}}),(r,c)=>(openBlock(),createBlock(Modal,{ref_key:"modalRef",ref:a,"container-style":s,"header-style":o,"content-style":l},{content:withCtx(()=>[createBaseVNode("div",_hoisted_1$1,[createBaseVNode("div",_hoisted_2,[e.runner.logoUrl?(openBlock(),createElementBlock("img",_hoisted_3)):createCommentVNode("",!0)]),_hoisted_4,_hoisted_5])]),_:1},512))}}),NoCreditsMessage_vue_vue_type_style_index_0_scoped_54969e59_lang="",NoCreditsMessage=_export_sfc(_sfc_main$2,[["__scopeId","data-v-54969e59"]]),_hoisted_1={class:"alert"},_sfc_main$1=defineComponent({__name:"Alerts",props:{alerts:null},setup(e){return(t,a)=>{const s=resolveComponent("Message");return openBlock(),createElementBlock("div",_hoisted_1,[createVNode(TransitionGroup,{name:"p-message",tag:"div"},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(e.alerts,o=>(openBlock(),createBlock(s,{key:o.id,severity:o.severity,closable:!1,sticky:!1},{default:withCtx(()=>[createTextVNode(toDisplayString(o.message),1)]),_:2},1032,["severity"]))),128))]),_:1})])}}}),Alerts_vue_vue_type_style_index_0_scoped_737e6861_lang="",AlertsComponent=_export_sfc(_sfc_main$1,[["__scopeId","data-v-737e6861"]]),_sfc_main=defineComponent({__name:"RuntimeCommons",props:{runtime:null,fullWidth:{type:Boolean},isPreview:{type:Boolean},type:null,forceResponsivity:null,userEmail:null,stepsInfo:null,alerts:null},emits:["navigate","logout"],setup(e,{expose:t,emit:a}){const s=ref(null),o=n=>a("navigate",n);return t({open:()=>{var n;return(n=s.value)==null?void 0:n.open()}}),(n,r)=>{var c;return openBlock(),createElementBlock(Fragment,null,[createBaseVNode("header",null,[createVNode(PlayerNavbar,{runtime:e.runtime,"user-email":e.userEmail,"force-responsivity":e.forceResponsivity,"logo-url":"/_assets/logo",onLogout:r[0]||(r[0]=i=>a("logout")),onNavigate:o},null,8,["runtime","user-email","force-responsivity"])]),e.type==="forms"?(openBlock(),createBlock(Steps,{key:0,class:"steps","steps-info":e.stepsInfo},null,8,["steps-info"])):createCommentVNode("",!0),createVNode(NoCreditsMessage,{ref_key:"noCreditsMessageModalRef",ref:s,class:normalizeClass({"full-width":e.fullWidth}),runner:e.runtime},null,8,["class","runner"]),e.isPreview?createCommentVNode("",!0):(openBlock(),createBlock(Watermark,{key:1,class:normalizeClass(["watermark",{"viewport-attached":!e.isPreview}]),runtime:e.runtime,type:e.type},null,8,["class","runtime","type"])),(c=e.alerts)!=null&&c.length?(openBlock(),createBlock(AlertsComponent,{key:2,class:"alerts",alerts:e.alerts},null,8,["alerts"])):createCommentVNode("",!0)],64)}}}),RuntimeCommons_vue_vue_type_style_index_0_scoped_fe5cc5cb_lang="",RuntimeCommons=_export_sfc(_sfc_main,[["__scopeId","data-v-fe5cc5cb"]]),executeCode=($context,code)=>{let evaluatedCode;try{evaluatedCode=eval(code)}catch(e){throw console.error(`[Error: execute_js]: ${e.message}, context: ${$context}`),e}return isSerializable(evaluatedCode)?evaluatedCode:null};async function executeJs(e){return executeCode(e.context,e.code)}const isSerializable=e=>{try{return JSON.stringify(e),!0}catch{return!1}};export{RuntimeCommons as R,executeJs as e};
//# sourceMappingURL=executeJs.c67b4605.js.map
