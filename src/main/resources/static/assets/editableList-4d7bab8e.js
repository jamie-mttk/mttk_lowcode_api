import{d as q,g as r,j as D,k as E,a as s,o as c,b as u,f as e,w as a,i as p,t as A,u as f,l as O,e as S,m as g,n as T,_ as j}from"./index-7d1a1b21.js";import{f as P}from"./formTransform-c58834db.js";import"./index-937d49e5.js";const W={style:{width:"100%"}},$={key:0},F={class:"list-group-item"},I={class:"list-group-item-inside"},M={class:"content"},U={key:1},z=q({__name:"editableList",props:{modelValue:{type:Array,required:!0,default(){return[]}},labelColumn:{type:String,required:!0},editConfig:{type:[Object,Function],required:!0,default(){return{}}}},emits:["update:modelValue"],setup(m,{emit:v}){const o=m,n=r("list");D(()=>o.editConfig,()=>{n.value="list"});let i=r({}),C=r(null);E(()=>{document.body.ondrop=function(t){t.preventDefault(),t.stopPropagation()}});function b(t){return typeof o.labelColumn=="function"?o.labelColumn(t):t[o.labelColumn]}const h=P(o.editConfig,i);function y(){i.value={key:T()},n.value="add"}function k(t){o.modelValue.splice(t,1)}function x(t){i.value=o.modelValue[t],n.value="edit"}function V(){n.value=="add"&&o.modelValue.push(i.value),v("update:modelValue",o.modelValue),n.value="list"}return(t,G)=>{const l=s("lc-icon"),d=s("el-button"),w=s("CompWrap"),B=s("el-page-header");return c(),u("div",W,[n.value=="list"?(c(),u("div",$,[e(f(O),{tag:"ul",list:m.modelValue,class:"list-group",handle:".handle","item-key":"name"},{item:a(({element:L,index:_})=>[p("li",F,[p("div",I,[e(l,{class:"handle",icon:"mdiDialpad",style:{height:"32px","padding-top":"2px","margin-right":"8px"}}),p("span",M,A(b(L)),1),e(d,{onClick:N=>x(_)},{icon:a(()=>[e(l,{class:"operation",icon:"mdiNoteEditOutline"})]),_:2},1032,["onClick"]),e(d,{text:"",onClick:N=>k(_)},{icon:a(()=>[e(l,{class:"operation",icon:"mdiCloseCircleOutline"})]),_:2},1032,["onClick"])])])]),_:1},8,["list"]),e(d,{style:{"margin-left":"24px","margin-top":"6px"},onClick:y},{icon:a(()=>[e(l,{icon:"mdiPlus"})]),default:a(()=>[S(" Add a new row")]),_:1})])):g("",!0),n.value!="list"?(c(),u("div",U,[e(B,{title:"back",onBack:V,style:{padding:"10px","background-color":"var(--el-fill-color-extra-light)"}},{icon:a(()=>[e(l,{icon:"mdiArrowLeft"})]),default:a(()=>[e(w,{config:f(h),style:{margin:"4px"},ref_key:"tableEditor",ref:C},null,8,["config"])]),_:1})])):g("",!0)])}}});const Q=j(z,[["__scopeId","data-v-961e3b99"]]);export{Q as default};