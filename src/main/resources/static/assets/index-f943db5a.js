import{Z as f,c as l,u as i}from"./index-7d1a1b21.js";import{a,e as c}from"./transformUtil-8cdafba7.js";import{b as p,a as u,c as r}from"./uiUtil-e8f4b7d4.js";function b(e,t){const o=a("el-form",e,t);return o.slots.default=h(e,t),o}function h(e,t){const o=[];for(const n of e._items||[])o.push(y(n,t));return o}function y(e,t){const o=a("el-form-item",e);return o.slots.default=w(e,t),o}function w(e,t){const o=e["~controllerType"]||"input";if(o=="container")return C(e);const n={sys:{modelValue:t,modelValuePath:e.prop},props:{}};if(o=="input")_(e,n);else if(o=="input-number")T(e,n);else if(o=="switch")v(e,n);else if(o=="select")g(e,n);else throw new Error("Unsuported type:"+o);return n}function _(e,t){t.sys.component="el-input",c(e,t)}function T(e,t){t.sys.component="el-input-number",c(e,t)}function v(e,t){t.sys.component="el-switch",c(e,t)}function g(e,t){t.sys.component="el-select",c(e,t),x(e,t)}function x(e,t){const o=[],m=(e["~options"]||"").split(",");for(const d of m){const s=d.split(":");o.push({sys:{component:"el-option"},props:{label:s.length>1?s[1]:s[0],value:s[0]}})}t.slots={},t.slots.default={type:"wrap",value:o}}function C(e){return{sys:{component:f,modelValue:l({get(){return e._children||[]},set(t){e._children=t}})}}}const F={key:"_form",name:"Form",description:"Basic form",icon:"mdiFormatColumns",sequence:3,transform:b,editor:[p("inline"),u("label-position",["left","right","top"]),r("label-width"),{"~component":"lc-editable-list","~label":"Items","~prop":"_items",labelColumn:"label",editConfig:function(e){return[r("label"),r("prop"),p("required"),u("~controllerType",["input","input-number","select","switch","container"]),u("_type",["text","textarea"],void 0,{"~show":l(()=>i(e)["~controllerType"]=="input")}),p("_controls","Show controls",{"~show":l(()=>i(e)["~controllerType"]=="input-number"),"~default":!0}),r("_placeholder",void 0,{"~show":l(()=>i(e)["~controllerType"]!="switch")}),p("_clearable",void 0,{"~show":l(()=>i(e)["~controllerType"]!="switch")}),r("_active-text",void 0,{"~show":l(()=>i(e)["~controllerType"]=="switch")}),r("_inactive-text",void 0,{"~show":l(()=>i(e)["~controllerType"]=="switch")}),r("~options",void 0,{"~show":l(()=>i(e)["~controllerType"]=="select")})]}}],dataConfig:{modelValueName:"model",type:"Object"},initConfig:{props:{inline:!0,"label-position":"left","label-width":"50px",_items:[{label:"Name",prop:"name",type:"input"},{label:"Address",prop:"address",type:"input"}]}},initStyles:{display:"block",width:"100%",margin:"4px 0 4px 0"}};export{F as default};