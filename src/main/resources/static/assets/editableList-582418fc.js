import{d as N,g as c,j as q,k as D,c as E,a as s,o as d,b as u,f as e,w as a,i as p,t as A,u as O,l as S,e as T,m as f,n as j,_ as P}from"./index-1207c5cc.js";import{f as W}from"./formTransform-b67ab3bd.js";import"./index-4a136cf3.js";const $={style:{width:"100%"}},F={key:0},I={class:"list-group-item"},M={class:"list-group-item-inside"},U={class:"content"},z={key:1},G=N({__name:"editableList",props:{modelValue:{type:Array,required:!0,default(){return[]}},labelColumn:{type:String,required:!0},editConfig:{type:[Object,Function],required:!0,default(){return{}}}},emits:["update:modelValue"],setup(m,{emit:g}){const o=m,n=c("list");q(()=>o.editConfig,()=>{n.value="list"});let i=c({}),v=c(null);D(()=>{document.body.ondrop=function(t){t.preventDefault(),t.stopPropagation()}});function b(t){return typeof o.labelColumn=="function"?o.labelColumn(t):t[o.labelColumn]}const C=E(()=>W(o.editConfig,i));function h(){i.value={key:j()},n.value="add"}function y(t){o.modelValue.splice(t,1)}function k(t){i.value=o.modelValue[t],n.value="edit"}function x(){n.value=="add"&&o.modelValue.push(i.value),g("update:modelValue",o.modelValue),n.value="list"}return(t,H)=>{const l=s("lc-icon"),r=s("el-button"),V=s("CompWrap"),w=s("el-page-header");return d(),u("div",$,[n.value=="list"?(d(),u("div",F,[e(O(S),{tag:"ul",list:m.modelValue,class:"list-group",handle:".handle","item-key":"name"},{item:a(({element:B,index:_})=>[p("li",I,[p("div",M,[e(l,{class:"handle",icon:"mdiDialpad",style:{height:"32px","padding-top":"2px","margin-right":"8px"}}),p("span",U,A(b(B)),1),e(r,{onClick:L=>k(_)},{icon:a(()=>[e(l,{class:"operation",icon:"mdiNoteEditOutline"})]),_:2},1032,["onClick"]),e(r,{text:"",onClick:L=>y(_)},{icon:a(()=>[e(l,{class:"operation",icon:"mdiCloseCircleOutline"})]),_:2},1032,["onClick"])])])]),_:1},8,["list"]),e(r,{style:{"margin-left":"24px","margin-top":"6px"},onClick:h},{icon:a(()=>[e(l,{icon:"mdiPlus"})]),default:a(()=>[T(" Add a new row")]),_:1})])):f("",!0),n.value!="list"?(d(),u("div",z,[e(w,{title:"back",onBack:x,style:{padding:"10px","background-color":"var(--el-fill-color-extra-light)"}},{icon:a(()=>[e(l,{icon:"mdiArrowLeft"})]),default:a(()=>[e(V,{config:C.value,style:{margin:"4px"},ref_key:"tableEditor",ref:v},null,8,["config"])]),_:1})])):f("",!0)])}}});const R=P(G,[["__scopeId","data-v-5bf436b6"]]);export{R as default};