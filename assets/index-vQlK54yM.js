import{p as m,x as b,r as n,R as h,o,b as c,h as e,w as u,g as k,F as v,d as t,D as r}from"./index-z4f0t7nZ.js";const x=t("p",{class:"italic"},"以下表格的数据，是在 table 的 dom 更新循环之后才添加进去的。",-1),f={class:"mt-8",style:{width:"600px"}},g=t("p",{class:"font-bold"},"组件代码：",-1),w=t("pre",null,[r("            "),t("code",null,`
<template>
  <el-table :data="tableData"">
    <el-table-column prop="date" label="日期" width="180" />
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column prop="address" label="地址" />
  </el-table>
</template>

<script setup>
  import { ref, nextTick } from "vue";

  const tableData = ref([]);

  // 将回调推迟到下一个 DOM 更新周期之后执行。
  nextTick(() => {
    tableData.value = [
      {
        date: "2022-05-02",
        name: "李易",
        address: "北京市海淀区",
      },
      {
        date: "2022-05-03",
        name: "周明",
        address: "上海市普陀区",
      },
    ];
  });
<\/script>
            `),r(`
        `)],-1),D=[g,w],N={__name:"index",setup(R){const l=m([]),s=new Date;b(()=>{l.value=[{date:`${s.getFullYear()}-05-02`,name:"李易",address:"北京市海淀区"},{date:`${s.getFullYear()}-05-03`,name:"周明",address:"上海市普陀区"}]});const d=[{label:"vue3 setup 模式中 nextTick 有什么作？如何在 setup 模式中调用？",link:"https://cn.vuejs.org/api/general.html#nexttick"}];return(T,F)=>{const a=n("el-table-column"),i=n("el-table"),p=n("RhReferenceLink"),_=h("highlight");return o(),c(v,null,[x,e(i,{data:l.value,border:"",class:"w-3/5 mt-4"},{default:u(()=>[e(a,{prop:"date",label:"日期",width:"180"}),e(a,{prop:"name",label:"姓名",width:"180"}),e(a,{prop:"address",label:"地址"})]),_:1},8,["data"]),k((o(),c("div",f,D)),[[_]]),e(p,{links:d})],64)}}};export{N as default};
