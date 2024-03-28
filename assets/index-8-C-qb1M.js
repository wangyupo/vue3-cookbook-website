import{p as d,r as v,R as f,o as n,b as s,d as t,f as x,h as r,w as c,j as m,a0 as g,g as h,F as k,D as e}from"./index-BinWA-50.js";const y={class:"flex justify-between"},C={key:0,class:"absolute top-0 right-0 bottom-0 left-0 z-10 bg-green-100 flex items-center justify-center flex-col"},w=t("p",null,"我通过 teleport 挂载到了 Vue app 之外的其他位置， 可打开 public 文件夹下的 index.html 查看以下元素：",-1),F=t("p",null,'<div id="topSlot"></div>',-1),j=t("p",{class:"italic font-semibold"}," * 我既剥离了 vue 顶层组件挂载的 DOM 的限制，而且还能使用 vue 组件内的状态。 ",-1),D={key:0,class:"absolute top-0 right-0 bottom-0 left-0 bg-green-100 flex items-center justify-center flex-col"},R=t("p",null,"我仅占据了内容区域",-1),S=t("p",null,"我的 dom 在 vue 单文件中",-1),V=t("div",{class:"w-3/5 italic text-sm font-semibold leading-6 mr-8"},[t("p",null,[t("span",{class:"text-xl"},"注："),e(" 标准情况下，teleport 不能挂载在当前组件的父组件及子组件上，应该挂载到 DOM 中 Vue app 之外的其它位置，即在 index.html 中提供挂载区域。 ")]),t("p",null,' * 如果你挂载到了父组件或子组件上，控制台将会报错 "Failed to locate Teleport target with selector "xxx". Note the target element must exist before the component is mounted" ，解决方案见参考链接第三个（可以解决，但不推荐！）。 ')],-1),B={class:"flex overflow-x-auto"},N={class:"mt-8",style:{width:"800px"}},E=t("p",{class:"font-bold"},"组件代码：",-1),T=t("pre",null,[e("            "),t("code",null,`
<template>
  <teleport to="#topSlot">
    <div v-if="visibleFull">
      <el-button @click="visibleFull = !visibleFull">点我关闭</el-button>
    </div>
  </teleport>

  <div v-if="visibleCurrent">
    <el-button @click="visibleCurrent = !visibleCurrent">点我关闭</el-button>
  </div>
  
  <el-button @click="visibleFull = !visibleFull">全屏弹窗</el-button>
  <el-button @click="visibleCurrent = !visibleCurrent">内容区弹窗</el-button>
</template>

<script setup>
  import { ref } from "vue";

  const visibleFull = ref(false);
  const visibleCurrent = ref(false);
<\/script>
            `),e(`
        `)],-1),$=[E,T],L={class:"mt-8 ml-4",style:{width:"800px"}},O=t("p",{class:"font-bold"},"index.html代码：",-1),A=t("pre",null,[e("            "),t("code",null,`
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong>浏览器不支持</strong>
    </noscript>
    <div id="app"></div>
    <!-- 注意 id 为 topSlot 的 div，teleport 的 to 属性指的就是这儿 -->
    <div id="topSlot"></div>
  </body>
</html>
            `),e(`
        `)],-1),M=[O,A],z={__name:"index",setup(P){const o=d(!1),i=d(!1),_=[{label:"vue3 中的 teleport 是什么？",link:"https://cn.vuejs.org/guide/built-ins/teleport.html#teleport"},{label:"vue3 中的 teleport 有哪些属性？",link:"https://cn.vuejs.org/api/built-in-components.html#teleport"},{label:"teleport 的目标元素如何直接挂载在父组件上？",link:"https://juejin.cn/post/6952697587132530702"}];return(U,l)=>{const a=v("el-button"),b=v("RhReferenceLink"),p=f("highlight");return n(),s(k,null,[t("div",y,[t("div",null,[(n(),x(g,{to:"#topSlot"},[o.value?(n(),s("div",C,[w,F,j,r(a,{class:"mt-4",type:"primary",onClick:l[0]||(l[0]=u=>o.value=!o.value)},{default:c(()=>[e("点我关闭")]),_:1})])):m("",!0)])),i.value?(n(),s("div",D,[R,S,r(a,{class:"mt-4",type:"primary",onClick:l[1]||(l[1]=u=>i.value=!i.value)},{default:c(()=>[e("点我关闭")]),_:1})])):m("",!0),r(a,{type:"primary",onClick:l[2]||(l[2]=u=>o.value=!o.value)},{default:c(()=>[e("全屏弹窗")]),_:1}),r(a,{type:"primary",onClick:l[3]||(l[3]=u=>i.value=!i.value)},{default:c(()=>[e("内容区弹窗")]),_:1})]),V]),t("div",B,[h((n(),s("div",N,$)),[[p]]),h((n(),s("div",L,M)),[[p]])]),r(b,{links:_})],64)}}};export{z as default};
