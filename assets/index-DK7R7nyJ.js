import{a as g,l as k,Z as b,r as l,R as y,o as a,b as i,d as n,h as o,w as r,g as w,F as C,D as e}from"./index-BinWA-50.js";const x=n("p",{class:"italic mt-4"},"请打开控制台查看打印内容。",-1),z={class:"mt-8",style:{width:"920px"}},B=n("p",{class:"font-bold"},"组件代码：",-1),L=n("pre",null,[e("            "),n("code",null,`
<template>
  <el-button type="primary" @click="handleRouter">点我打印router对象</el-button>
  <el-button type="primary" @click="handleRoute">点我打印route对象</el-button>
  <el-button type="primary" @click="handleGo">点我跳转</el-button>
  <el-button type="primary" @click="handleCurrent">点我打印当前路由</el-button>
</template>

<script setup>
  import { useRouter, useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";

  // 键入 v3s-router ，待代码提示出现后，回车，会自动生成 router 代码。
  const router = useRouter();
  // 键入 v3s-route ，待代码提示出现后，回车，会自动生成 route 代码。
  const route = useRoute();

  const handleRouter = () => {
    console.log("router对象，内含路由操作方法：", router);
  };
  const handleRoute = () => {
    console.log("route对象，内含当前路由属性：", route);
  };
  const handleGo = () => {
    router.push("/package/1-axios");
  };
  const handleCurrent = () => {
    console.log("当前页面路由：", route.path);
  };

  // 导航守卫
  onBeforeRouteLeave((to, from) => {
    const answer = window.confirm("你确定要跳转页面吗？");
    // 取消导航并停留在同一页面上
    if (!answer) return false;
  });
<\/script>
            `),e(`
        `)],-1),j=[B,L],D={__name:"index",setup(F){const s=g(),u=k(),c=()=>{console.log("router对象，内含路由操作方法：",s)},p=()=>{console.log("route对象，内含当前路由属性：",u)},h=()=>{s.push("/package/1-axios")},d=()=>{console.log("当前页面路由：",u.path)};b((R,_)=>{if(!window.confirm("你确定要跳转页面吗？"))return!1});const m=[{label:"vue-router 如何在 setup 模式中使用组合式API？",link:"https://router.vuejs.org/zh/guide/advanced/composition-api.html"},{label:"useRouter 是什么？",link:"https://router.vuejs.org/zh/api/#Functions-useRouter"},{label:"Router 对象都有哪些方法？",link:"https://router.vuejs.org/zh/api/interfaces/Router.html#Methods"},{label:"useRoute 是什么？",link:"https://router.vuejs.org/zh/api/#Functions-useRoute"},{label:"Route 对象都有哪些属性？",link:"https://router.vuejs.org/zh/api/interfaces/RouteLocationNormalizedLoaded.html#Properties"},{label:"vue-router 如何在 setup 模式中使用导航守卫？",link:"https://router.vuejs.org/zh/guide/advanced/composition-api.html#导航守卫"}];return(R,_)=>{const t=l("el-button"),f=l("RhReferenceLink"),v=y("highlight");return a(),i(C,null,[n("div",null,[o(t,{type:"primary",onClick:c},{default:r(()=>[e("点我打印router对象")]),_:1}),o(t,{type:"primary",onClick:p},{default:r(()=>[e("点我打印route对象")]),_:1}),o(t,{type:"primary",onClick:h},{default:r(()=>[e("点我跳转")]),_:1}),o(t,{type:"primary",onClick:d},{default:r(()=>[e("点我打印当前路由")]),_:1})]),x,w((a(),i("div",z,j)),[[v]]),o(f,{class:"mt-4",links:m})],64)}}};export{D as default};
