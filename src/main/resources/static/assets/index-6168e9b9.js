import{d as y,z as c,g as x,j as w,P as V,a as i,o as l,b as g,h as m,w as p,F as q,s as M,f as h,e as P,t as T,m as A,Q as E,G as v,c as j,u as G}from"./index-83dc2c00.js";function B(o=void 0,t){return o?t[t.length-1].codeManager.getCode()._id==o.codeManager.getCode()._id?!0:C(t)?B(o,t):!1:!!C(t)}function C(o){if(!(o.length<=1))return o.pop()}const $=y({__name:"deployedNoRouter",props:{modelValue:{type:String,required:!0,default:""},showBreadcrumb:{type:Boolean,required:!1,default:!0}},setup(o){const t=o,u=c("globalContext"),d=c("appContext"),n=x([]);w(()=>t.modelValue,e=>{r(e)},{immediate:!0});function r(e){e&&u.request({method:"GET",url:"deployed/load",params:{id:e}}).then(function(f){const s=V("view",d);s.codeManager.setCode(f),n.value[0]=s,n.value.length=1})}function a(e){B(e,n.value)}return(e,f)=>{const s=i("el-button"),k=i("el-breadcrumb-item"),R=i("el-breadcrumb");return l(),g("div",null,[t.showBreadcrumb?(l(),m(R,{key:0,"separator-icon":"ArrowRight",style:{padding:"10px","border-bottom":"solid 1px var(--el-menu-border-color)"}},{default:p(()=>[(l(!0),g(q,null,M(n.value,(_,b)=>(l(),m(k,{key:b},{default:p(()=>[h(s,{link:"",type:"primary",onClick:F=>a(_),disabled:b==n.value.length-1},{default:p(()=>[P(T(_.codeManager.getCode().name),1)]),_:2},1032,["onClick","disabled"])]),_:2},1024))),128))]),_:1})):A("",!0),h(E,{contextStack:n.value},null,8,["contextStack"])])}}}),N=y({__name:"index",setup(o){const t=c("globalContext");let u=x("");w(()=>t.router.currentRoute.value.params.page,()=>{let r=t.router.currentRoute.value.params.app,a=t.router.currentRoute.value.params.page;if(!r){const e=c("appContext");if(!e){v({message:"App is neither provided in URL normal inejct from appContext, launch failed",type:"error"});return}r=e.key.value}d(r,a)},{immediate:!0});function d(r,a){if(a&&a!="ROOT"){u.value=a;return}t.request({method:"GET",url:"page/query",params:{app:r}}).then(function(e){e.list&&Array.isArray(e.list)&&e.list.length>0?u.value=e.list[0]._id:v({message:"The app has no page, launch failed.app:"+r+",page:"+a,type:"error"})})}const n=j(()=>{var a;const r=(a=t.router.currentRoute.value.meta)==null?void 0:a.showBreadcrumb;return r==null?!0:!!r});return(r,a)=>(l(),m($,{modelValue:G(u),showBreadcrumb:n.value},null,8,["modelValue","showBreadcrumb"]))}});export{N as default};