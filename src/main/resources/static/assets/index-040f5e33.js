import{d as y,r as c,c as h,a as l,o as V,b as C,e as m,t as v,f as t,w as n}from"./index-7d1a1b21.js";const x={style:{margin:"20px","max-width":"520px"}},O=y({__name:"index",setup(w){function d(){const i={a:"1",b:[11,22,33]};console.log(JSON.stringify(i));const o={a:"9",b:[]};console.log(JSON.stringify(o)),o.b=i.b,c(o.b).push(88),console.log(JSON.stringify(i)),console.log(JSON.stringify(o))}const e=c({name:"",region:"",type:""}),u=c({sys:{component:"ElForm"},props:{labelPosition:"top",labelWidth:60,size:"default",model:e},slots:{default:{type:"wrap",value:[{sys:{component:"el-form-item"},props:{prop:"name",labelWidth:"50px",required:!0},slots:{label:["NAME",{"~component":"lc-icon",icon:"mdiHelpCircleOutline",tooltip:"This is a tooltip"}],default:{type:"wrap",value:{sys:{component:"ElInput",modelValue:h({get(){return e.name},set(i){e.name=i}})},props:{placeholder:"Please input name to filter",clearable:!1}}}}},{sys:{component:"el-form-item"},props:{prop:"Region"},slots:{label:{"~component":"div","~classes":["lc-common-toolbar"],"~styles":{"background-color":"transparent"},"#":[{"~component":"div","#":["Region",{"~component":"lc-icon",icon:"mdiHelpCircleOutline",tooltip:"Whether the region <br>is choosed"}]},{"~component":"lc-icon",icon:"mdiHelpCircleOutline",tooltip:"Whether the region <br>is choosed"}]},default:{type:"wrap",value:{sys:{component:"ElSwitch",modelValue:e,modelValuePath:"region"},props:{placeholder:"Input address to filter"}}}}}]}},events:{}});return(i,o)=>{const r=l("lc-icon"),p=l("el-input"),s=l("el-form-item"),f=l("el-form"),_=l("CompWrap"),b=l("el-button"),g=l("el-tooltip");return V(),C("div",x,[m(v(e)+" ",1),t(f,{"label-position":"top","label-width":"100px",model:e,style:{}},{default:n(()=>[t(s,null,{label:n(()=>[m(" Name "),t(r,{icon:"mdiHelpCircleOutline",tooltip:"THIS IS HAHA"})]),default:n(()=>[t(p,{modelValue:e.name,"onUpdate:modelValue":o[0]||(o[0]=a=>e.name=a)},null,8,["modelValue"])]),_:1}),t(s,{label:"Activity zone"},{default:n(()=>[t(p,{modelValue:e.region,"onUpdate:modelValue":o[1]||(o[1]=a=>e.region=a)},null,8,["modelValue"])]),_:1}),t(s,{label:"Activity form"},{default:n(()=>[t(p,{modelValue:e.type,"onUpdate:modelValue":o[2]||(o[2]=a=>e.type=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),t(_,{config:u},null,8,["config"]),t(g,{class:"box-item",effect:"dark",disabled:!1,content:"Top Center prompts info",placement:"top"},{default:n(()=>[t(b,{onClick:d},{default:n(()=>[m("top")]),_:1})]),_:1})])}}});export{O as default};