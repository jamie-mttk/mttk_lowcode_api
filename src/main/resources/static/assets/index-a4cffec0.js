import{l as y,m as w,t as S}from"./index-73fa7c58.js";import{d as k,o as l,b as c,f as r,u,i as U,t as B,_ as g,g as _,j as L,c as O,a as h,p as q,w as C,e as z,q as V,F as x,s as D,h as F,v as N,C as P}from"./index-fe75cf19.js";const j={class:"name"},M=k({__name:"pickerSingle",props:{icon:{type:String,required:!0,default:""}},emits:["iconChoosed"],setup(d,{emit:i}){const o=d;return(e,t)=>(l(),c("div",{class:"icon-holder",onClick:t[0]||(t[0]=n=>i("iconChoosed",u(o).icon))},[r(y,{size:"3em",icon:u(o).icon},null,8,["icon"]),U("span",j,B(d.icon),1)]))}});const T=g(M,[["__scopeId","data-v-89ee694a"]]),A={class:"icon-list"},E=k({__name:"pickerList",emits:["iconChoosed"],setup(d,{emit:i}){const o=_([]),e=_(""),t=_(0),n=_([]),v=()=>{t.value=Math.min(t.value+60,n.value.length)};let p=[];for(const[s]of Object.entries(w))p.push(s);o.value=p,L(e,()=>{e.value?n.value=o.value.filter(s=>s.toUpperCase().indexOf(e.value.toUpperCase())>=0):n.value=o.value,t.value=Math.min(60,n.value.length)},{immediate:!0});const m=O(()=>e.value?o.value.filter(s=>s.toUpperCase().indexOf(e.value.toUpperCase())>=0):o.value);return(s,f)=>{const I=h("el-button"),b=h("el-input"),$=q("infinite-scroll");return l(),c(x,null,[r(b,{modelValue:e.value,"onUpdate:modelValue":f[1]||(f[1]=a=>e.value=a),clearable:"",placeholder:"You should input something to filter icons so the infinite scroll works. This is a BUG."},{append:C(()=>[r(I,{onClick:f[0]||(f[0]=a=>i("iconChoosed",void 0))},{default:C(()=>[z("Clear Icon")]),_:1})]),_:1},8,["modelValue"]),V((l(),c("ul",A,[(l(!0),c(x,null,D(t.value,a=>(l(),c("li",{key:a,class:"icon-item"},[r(T,{icon:m.value[a-1],onIconChoosed:H=>i("iconChoosed",u(S)(m.value[a-1]))},null,8,["icon","onIconChoosed"])]))),128))])),[[$,v]])],64)}}});const G=g(E,[["__scopeId","data-v-ee443469"]]),Y=k({__name:"index",props:{modelValue:{type:String,required:!0,default:""}},emits:["update:modelValue"],setup(d,{emit:i}){const o=d,e=_(!1);function t(v){i("update:modelValue",v),e.value=!1}const n=()=>{e.value=!1};return(v,p)=>{const m=h("el-popover");return l(),F(m,{visible:e.value,placement:"bottom",width:"40%",teleported:!0},{reference:C(()=>[V((l(),c("div",{class:N(["icon",{icon_empty:!u(o).modelValue}]),onClick:p[0]||(p[0]=s=>e.value=!0)},[r(y,{size:"large",icon:u(o).modelValue},null,8,["icon"])],2)),[[u(P),n]])]),default:C(()=>[r(G,{onIconChoosed:t})]),_:1},8,["visible"])}}});const Q=g(Y,[["__scopeId","data-v-9ec12144"]]);export{Q as default};
