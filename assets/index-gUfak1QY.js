import{_ as a,o as t,b as n,d as e,r,R as h,h as i,g as c,F as p,D as s}from"./index-BinWA-50.js";const u={},m={class:"text-sm"},f=e("p",{class:"font-semibold"},"我是子组件",-1),v=e("p",null,"page2",-1),x=[f,v];function g(_,l){return t(),n("div",m,x)}const b=a(u,[["render",g]]),k={class:"flex"},w={class:"w-80 h-80 rounded-2xl relative text-center shadow"},C=e("p",{class:"font-semibold"},"我是父组件",-1),R=e("p",null,"page1",-1),$={class:"flex mt-8"},j={class:"w-80"},B=e("p",{class:"font-bold"},"父组件代码：",-1),D=e("pre",null,[s("        "),e("code",null,`
<div>
  我是父组件
  <Child/>
</div>

<script setup>
  import Child from "./Child.vue";
<\/script>
        `),s(`
    `)],-1),N=[B,D],V={class:"ml-4 w-80"},y=e("p",{class:"font-bold"},"子组件代码：",-1),F=e("pre",null,[s("        "),e("code",null,`
<template>
  <div>我是子组件</div>
</template>
        `),s(`
    `)],-1),L=[y,F],E={class:"ml-4"},T=e("p",{class:"font-bold"},"目录结构：",-1),q=e("pre",null,[s("        "),e("code",{class:"html"},`
|-- folder                // 文件夹
      |-- index.vue       // 父组件
      |-- Child.vue       // 子组件
        `),s(`
    `)],-1),z=[T,q],I={__name:"index",setup(_){const l=[{label:"vue3 setup 模式中如何使用组件？",link:"https://cn.vuejs.org/api/sfc-script-setup.html#using-components"},{label:"vue3 setup 模式中如何给引用的组件重新命名？",link:"https://cn.vuejs.org/api/sfc-script-setup.html#recursive-components"}];return(A,G)=>{const d=r("RhReferenceLink"),o=h("highlight");return t(),n(p,null,[e("div",k,[e("div",w,[C,R,i(b,{class:"w-40 h-40 text-center shadow-md flex flex-col items-center justify-center absolute transform -translate-x-2/4 -translate-y-1/2 top-2/4 left-2/4"})])]),e("div",$,[c((t(),n("div",j,N)),[[o]]),c((t(),n("div",V,L)),[[o]]),c((t(),n("div",E,z)),[[o]])]),i(d,{links:l})],64)}}};export{I as default};
