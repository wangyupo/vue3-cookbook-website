import{p as f,r as o,R as m,o as a,b as r,d as e,h as c,t as h,g as _,F as g,D as t}from"./index-BinWA-50.js";const b={class:"flex justify-between"},x={class:"flex"},k={class:"mt-4"},V=e("div",{class:"italic text-sm font-semibold leading-6 mr-8",style:{width:"500px"}},[e("p",null,[e("span",{class:"text-xl"},"注："),t(" vue3 中，对象、数组的更新不再需要 $set（且已被 "),e("a",{class:"text-blue-600",href:"https://v3.cn.vuejs.org/guide/migration/introduction.html#被移除的-api"},"移除"),t(" ），只需要用 ref、reactive 声明对象、数组即可实现实时响应，如 const obj = reactive({ a: 1 })，你可以直接使用 obj.b = 2，即可更新数据，并实时响应。这与 vue3 的 proxy 实现原理有关。 ")])],-1),w={class:"mt-8",style:{width:"600px"}},y=e("p",{class:"font-bold"},"组件代码：",-1),j=e("pre",null,[t("        "),e("code",null,[t(`
<template>
  <el-input v-model="inputValue" placeholder="请输入"/>
  `),e("span",null,"{{ inputValue }}"),t(`
</template>

<script setup>
  import { ref, reactive } from "vue";
  const inputValue = ref("中国"); // 初始值，空值设置：ref('')

  // 以下为常见的响应数据示例（对象、数组、基本类型）
  const user = reactive({
      name: "",
      address: "",
  });
  const tableData = ref([]);
  const title = ref("");
  const one = ref(1);
  const isValid = ref(true);
  const foo = ref(null);
  const ufo = ref(undefined);

  // 用ref、reactive声明的对象、数组，可以直接更新，
  // 并且数据是响应的，可以在视图实时更新
  user.age = 13;
  tableData.value[0] = {
    name: "apple",
    price: "12.0"
  }
<\/script>
        `)]),t(`
    `)],-1),R=[y,j],C={__name:"index",setup(D){const s=f("中国（编辑我试试）"),u=[{label:"vue3 setup 模式中如何创建数据的响应式状态",link:"https://cn.vuejs.org/api/reactivity-core.html"},{label:"vue3 setup 模式中的ref是什么？有什么作用？",link:"https://cn.vuejs.org/api/reactivity-core.html#ref"},{label:"Vue 3 Composition API: Ref vs Reactive?",link:"https://www.danvega.dev/blog/2020/02/12/vue3-ref-vs-reactive/"},{label:"ref vs reactive in Vue 3?",link:"https://stackoverflow.com/questions/61452458/ref-vs-reactive-in-vue-3"},{label:"《vue3》reactivity API（vue3的$set呢?）",link:"https://www.jianshu.com/p/d3300061ce89"}];return(i,n)=>{const p=o("el-input"),d=o("RhReferenceLink"),v=m("highlight");return a(),r(g,null,[e("div",b,[e("div",null,[e("div",x,[e("span",{style:{flex:"0 0 80px"},onClick:n[0]||(n[0]=(...l)=>i.dd&&i.dd(...l))},"我的国籍："),c(p,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=l=>s.value=l),placeholder:"请输入",maxlength:"20"},null,8,["modelValue"])]),e("div",k,"响应的值："+h(s.value),1)]),V]),_((a(),r("div",w,R)),[[v]]),c(d,{links:u})],64)}}};export{C as default};
