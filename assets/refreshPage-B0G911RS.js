import{u as p,p as g,a as d,l as h,R as _,g as f,o as m,b as v,e as n}from"./index-BinWA-50.js";const y=["element-loading-text","element-loading-spinner"],x={__name:"refreshPage",setup(A){const{contentAreaLoadingText:a,contentAreaLoadingSvg:l}=p(),i=g(!0),c=d(),t=h();let r={};const o=t.query.refreshPath.split("?");return o.length>1&&o[1].split("&").forEach(s=>{let e=s.split("=");r[e[0]]=e[1]}),setTimeout(()=>{c.replace({path:t.query.refreshPath,query:r})},1e3),(u,s)=>{const e=_("loading");return f((m(),v("div",{"element-loading-text":n(a),"element-loading-spinner":n(l),class:"absolute left-0 right-0 bottom-0 top-0"},null,8,y)),[[e,i.value]])}}};export{x as default};
