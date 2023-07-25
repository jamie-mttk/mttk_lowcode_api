import{_ as Y}from"./index.vue_vue_type_script_setup_true_lang-56720042.js";import{d as R,g as w,c as z,a as c,p as L,q as $,o as V,h as q,w as i,f as t,e as C,b as A,s as O,m as j,F as W,i as F,x as J,y as Q,E as P,z as S,n as G,j as K,t as X,A as M,B as Z,D as H,G as E,H as I}from"./index-fe75cf19.js";import"./index-4816b981.js";import"./index-9f112b7c.js";import"./index-73fa7c58.js";import"./index.vue_vue_type_script_setup_true_lang-ec470aac.js";import"./index-7c2cadb6.js";import"./index.vue_vue_type_style_index_0_lang-b3581869.js";import"./formTransform-6de4b21b.js";const ee={style:{"min-height":"420px","padding-top":"10px"}},te=R({__name:"index",props:{steps:{type:Array,required:!0,default(){return[]}}},emits:["next","finish"],setup(r,{expose:u,emit:p}){const l=r,o=w(!1),n=w(0),s=z(()=>l.steps[n.value]),f=z(()=>n.value!=l.steps.length-1&&!s.value.finish);function v(){n.value>0&&(n.value=n.value-1)}function b(){n.value<l.steps.length-1&&p("next",n.value,()=>{n.value=n.value+1})}function g(_){P.confirm("Are you sure to close this wizard?","Warning").then(()=>{_()}).catch(()=>{})}function d(){g(()=>{o.value=!1})}function e(){p("finish",()=>{o.value=!1})}function a(){n.value=0,o.value=!0}return u({show:a}),(_,m)=>{const y=c("lc-icon"),k=c("el-step"),T=c("el-steps"),h=c("el-button"),D=c("el-dialog"),x=L("el-drag-dialog");return $((V(),q(D,Q({modelValue:o.value,"onUpdate:modelValue":m[0]||(m[0]=U=>o.value=U),"close-on-click-modal":!1,"destroy-on-close":!0},_.$attrs,{"before-close":g}),{footer:i(()=>[t(h,{type:"primary",disabled:n.value==0,onClick:v},{icon:i(()=>[t(y,{icon:"mdiSkipPrevious"})]),default:i(()=>[C(" Previous")]),_:1},8,["disabled"]),t(h,{type:"primary",disabled:n.value>=r.steps.length-1,onClick:b},{icon:i(()=>[t(y,{icon:"mdiSkipNext"})]),default:i(()=>[C(" Next ")]),_:1},8,["disabled"]),t(h,{type:"success",disabled:f.value,onClick:e},{icon:i(()=>[t(y,{icon:"mdiCheck"})]),default:i(()=>[C(" Finish")]),_:1},8,["disabled"]),t(h,{type:"warning",onClick:d},{icon:i(()=>[t(y,{icon:"mdiClose"})]),default:i(()=>[C(" Cancel")]),_:1})]),default:i(()=>[t(T,{active:n.value,simple:"",style:{padding:"8px 8%"}},{default:i(()=>[(V(!0),A(W,null,O(r.steps,U=>(V(),q(k,{key:U.key,title:U.name},{icon:i(()=>[U.icon?(V(),q(y,{key:0,icon:U.icon,size:"large"},null,8,["icon"])):j("",!0)]),_:2},1032,["title"]))),128))]),_:1},8,["active"]),F("div",ee,[J(_.$slots,"default",{active:n.value,step:s.value})])]),_:3},16,["modelValue"])),[[x]])}}}),oe=R({__name:"wizardBasic",props:{modelValue:{type:Object,required:!0,default(){return{}}}},emits:["update:modelValue"],setup(r,{expose:u,emit:p}){const l=r,o=w(l.modelValue.sys),n=S("globalContext"),s=w([]);n.request({method:"GET",url:"page/findAll"}).then(function(d){s.value=d.list});function f(d){if(!d){o.raw_page_name="";return}const e=s.value.find(a=>a._id==d);e?o.raw_page_name=e.name:o.raw_page_name=""}function v(){o.value.key=G()}const b=w();function g(d){b.value.validate(e=>{e&&n.request({method:"GET",url:"page/load",params:{id:l.modelValue.sys.raw_page_id}}).then(function(a){const _=l.modelValue;_.sys=o.value,_.rawPage=a,p("update:modelValue",_),d()})})}return u({beforeClose:g}),(d,e)=>{const a=c("el-alert"),_=c("el-button"),m=c("el-input"),y=c("el-form-item"),k=c("el-option"),T=c("el-select"),h=c("lc-icon-picker"),D=c("el-form");return V(),A("div",null,[t(a,{title:"Basic information of the page widget. The unique key is set first time[System set a default value] and can not be changed after saved.",type:"success",style:{"margin-bottom":"10px"}}),t(D,{model:o.value,"label-width":"120px",ref_key:"basicFormRef",ref:b},{default:i(()=>[t(y,{label:"Unique key",prop:"key",required:""},{default:i(()=>[t(m,{modelValue:o.value.key,"onUpdate:modelValue":e[0]||(e[0]=x=>o.value.key=x),disabled:!!d.$props.modelValue._id},{append:i(()=>[t(_,{onClick:v},{default:i(()=>[C("Generate")]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1}),t(y,{label:"Original page",prop:"raw_page_id",required:""},{default:i(()=>[t(T,{modelValue:o.value.raw_page_id,"onUpdate:modelValue":e[1]||(e[1]=x=>o.value.raw_page_id=x),filterable:"",required:"",onChange:f},{default:i(()=>[(V(!0),A(W,null,O(s.value,x=>(V(),q(k,{key:x._id,label:x.name,value:x._id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(y,{label:"Name",prop:"name",required:""},{default:i(()=>[t(m,{modelValue:o.value.name,"onUpdate:modelValue":e[2]||(e[2]=x=>o.value.name=x)},null,8,["modelValue"])]),_:1}),t(y,{label:"Description",prop:"description"},{default:i(()=>[t(m,{modelValue:o.value.description,"onUpdate:modelValue":e[3]||(e[3]=x=>o.value.description=x)},null,8,["modelValue"])]),_:1}),t(y,{label:"Icon",prop:"icon",required:""},{default:i(()=>[t(h,{modelValue:o.value.icon,"onUpdate:modelValue":e[4]||(e[4]=x=>o.value.icon=x)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])])}}});function ne(r,u){return B(r.ui,u)}function B(r,u){var l,o;if(!Array.isArray(r)||r.length<=0)return;const p=[];for(const n of r){const s=le(n,u);if(s){if(p.push(s),(l=n.config)!=null&&l.props&&n.config.props._container&&Array.isArray(n.config.props._container)&&n.config.props._container.length>0){s.children||(s.children=[]);for(const f of n.config.props._container){const v={label:f.label||f.span||"##",key:f.key,icon:"Folder",nodeType:"container"};s.children.push(v);const b=B(f._children,u);b&&(v.children=b)}}if((o=n.config)!=null&&o.props&&n.config.props._children&&Array.isArray(n.config.props._children)&&n.config.props._children.length>0){const f=B(n.config.props._children,u);for(const v of f||[])s.children.push(v)}}}return p}function le(r,u){var l,o;if(!r.key)return;const p={label:((o=(l=r.config)==null?void 0:l.props)==null?void 0:o.label)||r.key,icon:ie(r.type,u),key:r.key,nodeType:r.type=="_container"?"panel":"component"};return r.type&&(p.children=ae(r.type,r,u)),p}function ae(r,u,p){var s;const l=[],o=p.componentByKey(r);if(!o||!o.editor)return l;let n=o.editor;if(typeof n=="function"&&(n=n(((s=u.config)==null?void 0:s.props)||{})),!Array.isArray(n)||n.length==0)return l;for(const f of n)l.push({label:f["~label"],key:"___prop:"+u.key+":"+f["~prop"],data:{type:"prop",ui:u.key,prop:f["~prop"]}});return l}function ie(r,u){const p=u.componentByKey(r);return(p==null?void 0:p.icon)||"Handbag"}const re={style:{"margin-left":"16px"}},ue=R({__name:"wizardProp",props:{modelValue:{type:Object,required:!0,default(){return{}}}},emits:["update:modelValue"],setup(r,{expose:u,emit:p}){const l=r,o=M(),n=z(()=>{const g=l.modelValue.ui||[],d=[];for(const e of g)for(const a of e.props||[])d.push("___prop:"+e.uiKey+":"+a);return d}),s=w(),f=w([]);function v(){l.modelValue.rawPage&&(f.value=ne(l.modelValue.rawPage,o))}K(()=>l.modelValue.rawPage,()=>{v()},{immediate:!0});function b(g){const d=[],e=s.value.getCheckedKeys(!0);for(const _ of e){if(!_.startsWith("___prop:"))continue;const m=_.substring(8),y=m.indexOf(":");if(y<0)continue;const k=m.substring(0,y),T=m.substring(y+1);let h=d.find(D=>D.uiKey==k);h||(h={uiKey:k,props:[]},d.push(h)),h.props.push(T)}const a=l.modelValue;a.ui=d,p("update:modelValue",a),g()}return u({beforeClose:b}),(g,d)=>{const e=c("el-alert"),a=c("lc-icon"),_=c("el-tree");return V(),A("div",null,[t(e,{title:"Choose the UI properties which will be configured in page widget.",type:"success",style:{"margin-bottom":"10px"}}),t(_,{ref_key:"uiPropTreeRef",ref:s,props:{children:"children",label:"label",disabled:"disabled"},"node-key":"key",data:f.value,"show-checkbox":"","default-expanded-keys":["_root"],"default-checked-keys":n.value},{default:i(({node:m})=>[m.data.icon?(V(),q(a,{key:0,icon:m.data.icon},null,8,["icon"])):j("",!0),F("span",re,X(m.label),1)]),_:1},8,["data","default-checked-keys"])])}}}),se=R({__name:"wizardData",props:{modelValue:{type:Object,required:!0,default(){return{}}}},emits:["update:modelValue"],setup(r,{expose:u,emit:p}){const l=r,o=S("globalContext"),n=w(),s=w([]);function f(){l.modelValue.sys.raw_page_id&&o.request({method:"GET",url:"page/load",params:{id:l.modelValue.sys.raw_page_id}}).then(function(g){s.value=g.data,Z(()=>v())})}K(()=>l.modelValue.sys.raw_page_id,()=>{f()},{immediate:!0});function v(){n.value.clearSelection();for(const g of l.modelValue.data||[]){const d=s.value.find(e=>e.key==g);d&&n.value.toggleRowSelection(d,!0)}}function b(g){let d=n.value.getSelectionRows().map(a=>a.key);const e=l.modelValue;e.data=d,p("update:modelValue",e),g()}return u({beforeClose:b}),(g,d)=>{const e=c("el-alert"),a=c("el-table-column"),_=c("el-table");return V(),A("div",null,[t(e,{title:"Choose the data which will be configured in page widget.",type:"success",style:{"margin-bottom":"10px"}}),t(_,{ref_key:"wizardDataTableRef",ref:n,data:s.value,style:{width:"100%"}},{default:i(()=>[t(a,{type:"selection",width:"55"}),t(a,{property:"key",label:"Key"}),t(a,{property:"description",label:"Description"}),t(a,{property:"type",label:"Type"})]),_:1},8,["data"])])}}}),de=R({__name:"wizardModelValue",props:{modelValue:{type:Object,required:!0,default(){return{}}}},emits:["update:modelValue"],setup(r,{expose:u,emit:p}){const l=r,o=w(l.modelValue.modelValue||{}),n=S("globalContext"),s=w([]);function f(){l.modelValue.sys.raw_page_id&&n.request({method:"GET",url:"page/load",params:{id:l.modelValue.sys.raw_page_id}}).then(function(b){s.value=b.data})}K(()=>l.modelValue.sys.raw_page_id,()=>{f()},{immediate:!0});function v(b){const g=l.modelValue;g.modelValue=o.value,p("update:modelValue",g),b()}return u({beforeClose:v}),(b,g)=>{const d=c("el-alert"),e=c("el-option"),a=c("el-select"),_=c("el-form-item"),m=c("el-form");return V(),A("div",null,[t(d,{title:"Optional. Please choose a data from page which will be mapped to widget model value",type:"success",style:{"margin-bottom":"10px"}}),t(m,{model:o.value,"label-width":"120px",ref:"modelValueFormRef"},{default:i(()=>[t(_,{label:"Data mapped",prop:"raw_page_id"},{default:i(()=>[t(a,{modelValue:o.value.dataMapped,"onUpdate:modelValue":g[0]||(g[0]=y=>o.value.dataMapped=y),clearable:""},{default:i(()=>[(V(!0),A(W,null,O(s.value,y=>(V(),q(e,{key:y.key,label:y.name,value:y.key},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])])}}});function ce(r,u){return N(r.ui,u)}function N(r,u){var l,o;if(console.log(r),!Array.isArray(r)||r.length<=0)return;const p=[];for(const n of r){const s=pe(n,u);if(s){if(p.push(s),(l=n.config)!=null&&l.props&&n.config.props._container&&Array.isArray(n.config.props._container)&&n.config.props._container.length>0){s.children=[];for(const f of n.config.props._container){const v={label:f.label||f.span||"##",value:f.key,icon:"Folder",disabled:!0};s.children.push(v);const b=N(f._children,u);b&&(v.children=b)}}(o=n.config)!=null&&o.props&&n.config.props._children&&Array.isArray(n.config.props._children)&&n.config.props._children.length>0&&(s.children=N(n.config.props._children,u))}}return p}function pe(r,u){var l,o;return r.key?{label:((o=(l=r.config)==null?void 0:l.props)==null?void 0:o.label)||r.key,icon:me(r.type,u),value:r.key,disabled:r.type=="_container"}:void 0}function me(r,u){const p=u.componentByKey(r);return(p==null?void 0:p.icon)||"Handbag"}const fe={class:"dialog-footer"},_e=R({__name:"wizardEventDialog",setup(r,{expose:u}){function p(d,e,a){o.value=d,n=a,b(e),l.value=!0}const l=w(!1),o=w({});let n;const s=w(),f=w([]),v=M();function b(d){f.value=ce(d.rawPage,v)}const g=async d=>{d&&await d.validate(e=>{e&&(l.value=!1,n&&n(o.value))})};return u({show:p}),(d,e)=>{const a=c("el-tree-select"),_=c("el-form-item"),m=c("el-input"),y=c("el-form"),k=c("el-button"),T=c("el-dialog");return V(),q(T,{modelValue:l.value,"onUpdate:modelValue":e[5]||(e[5]=h=>l.value=h),title:"Event mapping editor","close-on-click-modal":!1,"close-on-press-escape":!1},{footer:i(()=>[F("span",fe,[t(k,{onClick:e[3]||(e[3]=h=>l.value=!1)},{default:i(()=>[C("Cancel")]),_:1}),t(k,{type:"primary",onClick:e[4]||(e[4]=h=>g(s.value))},{default:i(()=>[C(" Save ")]),_:1})])]),default:i(()=>[t(y,{ref_key:"eventMappingEditorRef",ref:s,model:o.value,"label-width":"120px"},{default:i(()=>[t(_,{label:"UI component",prop:"ui",required:""},{default:i(()=>[t(a,{modelValue:o.value.ui,"onUpdate:modelValue":e[0]||(e[0]=h=>o.value.ui=h),data:f.value,"render-after-expand":!1,"check-strictly":!0},null,8,["modelValue","data"])]),_:1}),t(_,{label:"Original event",prop:"event",required:""},{default:i(()=>[t(m,{modelValue:o.value.event,"onUpdate:modelValue":e[1]||(e[1]=h=>o.value.event=h)},null,8,["modelValue"])]),_:1}),t(_,{label:"Event to raise",prop:"eventRaise",required:""},{default:i(()=>[t(m,{modelValue:o.value.eventRaise,"onUpdate:modelValue":e[2]||(e[2]=h=>o.value.eventRaise=h)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}}),ge=R({__name:"wizardEvent",props:{modelValue:{type:Object,required:!0,default(){return{}}}},emits:["update:modelValue"],setup(r,{expose:u,emit:p}){const l=r,o=w(l.modelValue.events),n=w();let s=-1;function f(){s=-1,n.value.show({key:G()},l.modelValue,b)}function v(e){s=e.$index;const a=H(e.row);n.value.show(a,l.modelValue,b)}const b=e=>{s<0?o.value.push(e):o.value[s]=e},g=e=>{P.confirm("Will you want to delte this event","Warning",{confirmButtonText:"Yes",cancelButtonText:"No",type:"warning"}).then(()=>{o.value.splice(e.$index,1)})};function d(e){const a=l.modelValue;a.events=o.value,p("update:modelValue",a),e()}return u({beforeClose:d}),(e,a)=>{const _=c("el-alert"),m=c("el-table-column"),y=c("el-button"),k=c("el-button-group"),T=c("el-table");return V(),A("div",null,[t(_,{title:"Map the event of internal component to component to created.",type:"success",style:{"margin-bottom":"10px"}}),t(T,{ref:"wizardEventTableRef",data:o.value,style:{width:"100%"}},{empty:i(()=>[t(y,{onClick:f},{default:i(()=>[C("Add a new event mapping")]),_:1})]),default:i(()=>[t(m,{property:"ui",label:"UI component"}),t(m,{property:"event",label:"Original event"}),t(m,{property:"eventRaise",label:"Event to raise"}),t(m,{label:"Operation"},{default:i(h=>[t(k,null,{default:i(()=>[t(y,{onClick:f},{default:i(()=>[C("Add")]),_:1}),t(y,{onClick:D=>v(h)},{default:i(()=>[C("Edit")]),_:2},1032,["onClick"]),t(y,{onClick:D=>g(h)},{default:i(()=>[C("Delete")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1})]),_:1},8,["data"]),t(_e,{ref_key:"wizardEventDialogRef",ref:n},null,512)])}}}),ye=R({__name:"index",setup(r,{expose:u}){const p=w(),l=w({}),o=[{key:"basic",name:"Basic",icon:"mdiTextBoxMultipleOutline"},{key:"prop",name:"UI properties",icon:"mdiChartTree"},{key:"data",name:"Data",icon:"mdiDatabaseMarker"},{key:"modelValue",name:"Model value",icon:"mdiDatabaseEye"},{key:"event",name:"Event",icon:"mdiCalendarAlert",finish:!0}];let n;const s=[];function f(e,a){b(e,a)}function v(e){b(o.length-1,()=>{n(l.value),e()})}function b(e,a){s[e].beforeClose&&typeof s[e].beforeClose=="function"?s[e].beforeClose(a):a()}function g(e,a){l.value=e,n=a,p.value.show()}function d(e){return function(a){s[e]=a}}return u({show:g}),(e,a)=>(V(),q(te,{title:"Page widget build wizard",width:"85%",top:"4vh",ref_key:"wizardDialogRef",ref:p,steps:o,onNext:f,onFinish:v},{default:i(_=>[$(t(oe,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=m=>l.value=m),ref:d(0)},null,8,["modelValue"]),[[E,_.active==0]]),$(t(ue,{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=m=>l.value=m),ref:d(1)},null,8,["modelValue"]),[[E,_.active==1]]),$(t(se,{modelValue:l.value,"onUpdate:modelValue":a[2]||(a[2]=m=>l.value=m),ref:d(2)},null,8,["modelValue"]),[[E,_.active==2]]),$(t(de,{modelValue:l.value,"onUpdate:modelValue":a[3]||(a[3]=m=>l.value=m),ref:d(3)},null,8,["modelValue"]),[[E,_.active==3]]),$(t(ge,{modelValue:l.value,"onUpdate:modelValue":a[4]||(a[4]=m=>l.value=m),ref:d(4)},null,8,["modelValue"]),[[E,_.active==4]])]),_:1},512))}}),be=R({__name:"index",setup(r){const u=S("globalContext"),p=w([]),l=w();o();function o(){u.request({method:"GET",url:"pageWidget/findAll"}).then(function(e){p.value=e.list})}function n(){M().resetPageWidget(u)}function s(){l.value.show({sys:{folder:"pageWidget"},data:[],ui:[],events:[],modelValue:{}},v)}function f(e){const a=H(e.row);l.value.show(a,v)}const v=e=>{u.request({method:"POST",url:"pageWidget/save",data:e}).then(function(){o(),n()})},b=e=>{P.confirm("Will you want to delte this widget","Warning",{confirmButtonText:"Yes",cancelButtonText:"No",type:"warning"}).then(()=>{u.request({method:"POST",url:"pageWidget/delete",params:{id:e.row._id}}).then(function(){o(),n()})})},g=w();function d(){const e=g.value.getSelectionRows();if(!e||e.length==0){I.error("Please select rows first");return}const a=e.map(_=>_._id);P.confirm("This will update the page content in page widget into the current page content, do you want to continue?","Warning",{confirmButtonText:"Yes",cancelButtonText:"No",type:"warning"}).then(()=>{u.request({method:"POST",url:"pageWidget/updateRawPage",data:a}).then(function(){o(),n(),I.success("Update done!")})})}return(e,a)=>{const _=c("el-alert"),m=c("el-button"),y=c("button-group"),k=c("el-table-column"),T=c("el-button-group"),h=c("el-table");return V(),A("div",null,[t(_,{title:"Page widget is to convert a page into a widget with properties and events to customize.",type:"success",style:{"margin-bottom":"10px"}}),t(y,null,{default:i(()=>[t(m,{type:"primary",onClick:s},{default:i(()=>[C("Add")]),_:1}),t(m,{type:"warning",onClick:d},{default:i(()=>[C("Update page")]),_:1})]),_:1}),t(h,{data:p.value,style:{width:"100%"},ref_key:"pageWidgetTableRef",ref:g},{empty:i(()=>[C(" No page widget, press add button at top to add a new one ")]),default:i(()=>[t(k,{type:"selection",width:"55"}),t(k,{prop:"sys.name",label:"Name"}),t(k,{prop:"sys.description",label:"Description"}),t(k,{prop:"sys.raw_page_name",label:"Original page"}),t(k,{label:"Operation"},{default:i(D=>[t(T,null,{default:i(()=>[t(m,{type:"success",onClick:x=>f(D)},{default:i(()=>[C("Edit")]),_:2},1032,["onClick"]),t(m,{type:"warning",onClick:x=>b(D)},{default:i(()=>[C("Delete")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1})]),_:1},8,["data"]),t(ye,{ref_key:"wizardRef",ref:l},null,512)])}}}),Re=R({__name:"index",setup(r){const u=w("app");return(p,l)=>{const o=c("el-tab-pane"),n=c("el-tabs");return V(),q(n,{type:"border-card",modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=s=>u.value=s)},{default:i(()=>[t(o,{label:"Applications",name:"app"},{default:i(()=>[t(Y)]),_:1}),t(o,{label:"Page widget",name:"widget"},{default:i(()=>[t(be)]),_:1})]),_:1},8,["modelValue"])}}});export{Re as default};
