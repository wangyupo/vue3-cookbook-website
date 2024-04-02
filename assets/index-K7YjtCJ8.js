import{r as n,R as h,o as s,b as l,d as e,h as o,w as u,g as d,F as _,D as t}from"./index-Cy5EtEjA.js";const m={class:"flex justify-between"},x=e("div",{class:"italic text-sm font-semibold leading-6 mr-8",style:{width:"500px"}},[e("p",null,[e("span",{class:"text-xl"},"注："),t(" 当使用 <script setup> 的时候，任何在 <script setup> 声明的顶层的绑定 (包括变量，函数声明，以及 "),e("span",{class:"underline"},"import 引入的内容"),t(" ) 都能在模板中直接使用。 ")])],-1),f={class:"mt-8",style:{width:"660px"}},g=e("p",{class:"font-bold"},"组件代码：",-1),v=e("pre",null,[t("            "),e("code",null,`
<template>
  <el-button type="primary" @click="handleBtn">点我试试<el-button/>
</template>

<script setup>
  import { ElMessageBox } from "element-plus";

  const handleBtn = () => {
    alert("你触发了点击事件！");
  };

  // 这是一个async await使用示例
  // 你可以把 ElMessageBox 替换成 axios 请求
  const handleAsync = async () => {
    let whichClose = true
    await ElMessageBox.confirm("这是一个弹框", "提示", {
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      type: "success",
    })
      .then(() => {
        whichClose = true
      })
      .catch(() => {
        whichClose = false
      });
    console.log(whichClose)
  };
<\/script>
            `),t(`
        `)],-1),w=[g,v],C={__name:"index",setup(b){const c=()=>{alert("你触发了点击事件！")},i=[{label:"vue3 setup 模式中的方法不需要暴露给methods对象？",link:"https://v3.cn.vuejs.org/api/sfc-spec.html#script-setup"},{label:"vue3 setup 模式中的方法如何暴露给模板？",link:"https://cn.vuejs.org/api/sfc-script-setup.html#top-level-bindings-are-exposed-to-template"}];return(y,B)=>{const a=n("el-button"),p=n("RhReferenceLink"),r=h("highlight");return s(),l(_,null,[e("div",m,[o(a,{type:"primary",onClick:c},{default:u(()=>[t("点我试试")]),_:1}),x]),d((s(),l("div",f,w)),[[r]]),o(p,{links:i})],64)}}};export{C as default};
