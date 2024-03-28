import{U as c,y as r,r as p,R as d,o as n,b as o,g as u,h as m,F as h,X as f,d as e,D as t}from"./index-DrdufzcW.js";const v=f('<div class="flex justify-between"><div><p class="italic"> 1、本节请打开控制台，并刷新页面，观察打印 <span class="font-semibold">“组合式API：API name”</span></p><p class="italic"> 2、所有组合式 API 的使用方法都是传入一个 <span class="font-semibold underline">函数（即“方法”）</span></p></div><div class="w-96 italic text-sm font-semibold leading-6 mr-8"><p><span class="text-xl">注：</span> 选项式 API 即 vue2.x 中 export default 中的生命周期函数，而组合式 API 是 vue3.x 中 setup 模式中的生命周期函数，具体参考： <a class="text-blue-600" href="https://v3.cn.vuejs.org/api/composition-api.html#生命周期钩子" target="__blank"> 生命周期钩子 </a></p></div></div>',1),g={class:"w-3/5 mt-8"},_=e("p",{class:"font-bold"},"组件代码：",-1),k=e("pre",null,[t("        "),e("code",null,`
<script setup>
  // vue setup 中所有的组合式API
  import {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    onErrorCaptured,
    onRenderTracked,
    onRenderTriggered,
    onActivated,
    onDeactivated,
  } from "vue";

  // 使用方法均为：传入一个函数（即“方法”）
  onBeforeMount(() => {
    console.log("组合式API：onBeforeMount");
  });

  const cons = () => {
    console.log("组合式API：onMounted");
  };
  onMounted(() => {
    cons();
  });
<\/script>
        `),t(`
    `)],-1),b=[_,k],B={__name:"index",setup(x){c(()=>{console.log("组合式API：onBeforeMount")});const s=()=>{console.log("组合式API：onMounted")};r(()=>{s()});const i=[{label:"什么是组合式 API？",link:"https://cn.vuejs.org/guide/extras/composition-api-faq.html#what-is-composition-api"},{label:"vue生命周期图示：",link:"https://cn.vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram"},{label:"在 <script setup> 中使用组合式生命周期：",link:"https://cn.vuejs.org/guide/essentials/lifecycle.html#lifecycle-hooks"},{label:"所有的组合式生命周期钩子：",link:"https://cn.vuejs.org/api/composition-api-lifecycle.html#composition-api-lifecycle-hooks"},{label:"Vue3 组合式生命周期完整指南：",link:"https://segmentfault.com/a/1190000039680245"}];return(A,I)=>{const l=p("RhReferenceLink"),a=d("highlight");return n(),o(h,null,[v,u((n(),o("div",g,b)),[[a]]),m(l,{links:i})],64)}}};export{B as default};
