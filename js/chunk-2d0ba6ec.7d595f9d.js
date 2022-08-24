(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba6ec"],{"36d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23");const c={class:"flex justify-between"},l={class:"flex"},a={class:"mt-4"},o=Object(r["createElementVNode"])("div",{class:"italic text-sm font-semibold leading-6 mr-8",style:{width:"500px"}},[Object(r["createElementVNode"])("p",null,[Object(r["createElementVNode"])("span",{class:"text-xl"},"注："),Object(r["createTextVNode"])(" vue3 中，对象、数组的更新不再需要 $set（且已被 "),Object(r["createElementVNode"])("a",{class:"text-blue-600",href:"https://v3.cn.vuejs.org/guide/migration/introduction.html#被移除的-api"},"移除"),Object(r["createTextVNode"])(" ），只需要用 ref、reactive 声明对象、数组即可实现实时响应，如 const obj = reactive({ a: 1 })，你可以直接使用 obj.b = 2，即可更新数据，并实时响应。这与 vue3 的 proxy 实现原理有关。 ")])],-1),s={class:"mt-8",style:{width:"600px"}},i=Object(r["createElementVNode"])("p",{class:"font-bold"},"组件代码：",-1),d=Object(r["createElementVNode"])("pre",null,[Object(r["createTextVNode"])("        "),Object(r["createElementVNode"])("code",null,[Object(r["createTextVNode"])('\r\n<template>\r\n  <el-input v-model="inputValue" placeholder="请输入"/>\r\n  '),Object(r["createElementVNode"])("span",null,"{{ inputValue }}"),Object(r["createTextVNode"])('\r\n</template>\r\n\r\n<script setup>\r\n  import { ref, reactive } from "vue";\r\n  const inputValue = ref("中国"); // 初始值，空值设置：ref(\'\')\r\n\r\n  // 以下为常见的响应数据示例（对象、数组、基本类型）\r\n  const user = reactive({\r\n      name: "",\r\n      address: "",\r\n  });\r\n  const tableData = ref([]);\r\n  const title = ref("");\r\n  const one = ref(1);\r\n  const isValid = ref(true);\r\n  const foo = ref(null);\r\n  const ufo = ref(undefined);\r\n\r\n  // 用ref、reactive声明的对象、数组，可以直接更新，\r\n  // 并且数据是响应的，可以在视图实时更新\r\n  user.age = 13;\r\n  tableData.value[0] = {\r\n    name: "apple",\r\n    price: "12.0"\r\n  }\r\n<\/script>\r\n        ')]),Object(r["createTextVNode"])("\r\n    ")],-1),u=[i,d];var p={__name:"index",setup(e){const t=Object(r["ref"])("中国（编辑我试试）"),n=[{label:"vue3 setup 模式中如何创建数据的响应式状态",link:"https://v3.cn.vuejs.org/api/sfc-script-setup.html#响应式"},{label:"vue3 setup 模式中的ref是什么？有什么作用？",link:"https://v3.cn.vuejs.org/api/refs-api.html#ref"},{label:"Vue 3 Composition API: Ref vs Reactive?",link:"https://www.danvega.dev/blog/2020/02/12/vue3-ref-vs-reactive/"},{label:"ref vs reactive in Vue 3?",link:"https://stackoverflow.com/questions/61452458/ref-vs-reactive-in-vue-3"},{label:"《vue3》reactivity API（vue3的$set呢?）",link:"https://www.jianshu.com/p/d3300061ce89"}];return(e,i)=>{const d=Object(r["resolveComponent"])("el-input"),p=Object(r["resolveComponent"])("ReLink"),v=Object(r["resolveDirective"])("highlight");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createElementVNode"])("div",c,[Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("div",l,[Object(r["createElementVNode"])("span",{style:{flex:"0 0 80px"},onClick:i[0]||(i[0]=(...t)=>e.dd&&e.dd(...t))},"我的国籍："),Object(r["createVNode"])(d,{modelValue:t.value,"onUpdate:modelValue":i[1]||(i[1]=e=>t.value=e),placeholder:"请输入",maxlength:"20"},null,8,["modelValue"])]),Object(r["createElementVNode"])("div",a,"响应的值："+Object(r["toDisplayString"])(t.value),1)]),o]),Object(r["withDirectives"])((Object(r["openBlock"])(),Object(r["createElementBlock"])("div",s,u)),[[v]]),Object(r["createVNode"])(p,{links:n})],64)}}};const v=p;t["default"]=v}}]);
//# sourceMappingURL=chunk-2d0ba6ec.7d595f9d.js.map