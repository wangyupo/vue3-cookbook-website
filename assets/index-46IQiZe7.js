import{p as o,q as N,c as g,r as w,R as x,o as p,b as v,d as e,h as t,g as f,F as k,D as u}from"./index-DrdufzcW.js";const S={class:"flex"},M=e("p",null,[e("span",{class:"font-semibold"},"watch示例："),e("span",{class:"italic"},"通过 watch 监听值，实现求和")],-1),U={class:"mt-4"},R=e("span",{class:"mx-2"},"+",-1),y=e("span",{class:"mx-2"},"=",-1),B={class:"mt-8"},D=e("p",{class:"font-bold"},"watch 求和代码：",-1),j=e("pre",null,[u("            "),e("code",null,`
<template>
  <el-input v-model.number="wNum1" />
  +
  <el-input v-model.number="wNum2" />
  =
  <el-input v-model.number="wSum" readonly />
</template>

<script setup>
  import { ref, watch } from "vue";

  const wNum1 = ref(1);
  const wNum2 = ref(2);
  const wSum = ref(3);

  watch(
    [wNum1, wNum2],
    (val, oldVal) => {
      wSum.value = val[0] + val[1];
    },
    { immediate: true, deep: true } // 立即检测、深度检测，如果需要就添加
  );
<\/script>
            `),u(`
        `)],-1),F=[D,j],L={class:"ml-32"},q=e("p",null,[e("span",{class:"font-semibold"},"computed示例："),e("span",{class:"italic"},"通过 computed 计算属性求和")],-1),C={class:"mt-4"},E=e("span",{class:"mx-2"},"+",-1),T=e("span",{class:"mx-2"},"=",-1),z={class:"mt-8"},A=e("p",{class:"font-bold"},"computed 求和代码：",-1),G=e("pre",null,[u("          "),e("code",null,`
<template>
  <el-input v-model.number="cNum1" />
  +
  <el-input v-model.number="cNum2" />
  =
  <el-input v-model.number="cSum" readonly />
</template>

<script setup>
  import { ref, computed } from "vue";

  const cNum1 = ref(1);
  const cNum2 = ref(2);

  const cSum = computed(() => {
    return cNum1.value + cNum2.value
  });
<\/script>
          `),u(`
        `)],-1),H=[A,G],K={__name:"index",setup(I){const a=o(1),m=o(2),d=o(3);N([a,m],(r,l)=>{d.value=r[0]+r[1]},{immediate:!0,deep:!0});const c=o(1),i=o(2),_=g(()=>c.value+i.value),V=[{label:"vue3 setup 模式中如何使用 watch？",link:"https://cn.vuejs.org/guide/essentials/watchers.html#watchers"},{label:"vue3 setup 模式中如何使用 computed？",link:"https://cn.vuejs.org/guide/essentials/computed.html#computed-properties"}];return(r,l)=>{const s=w("el-input"),b=w("RhReferenceLink"),h=x("highlight");return p(),v(k,null,[e("div",S,[e("div",null,[M,e("p",U,[t(s,{class:"w-16",modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=n=>a.value=n),modelModifiers:{number:!0},maxlength:"3"},null,8,["modelValue"]),R,t(s,{class:"w-16",modelValue:m.value,"onUpdate:modelValue":l[1]||(l[1]=n=>m.value=n),modelModifiers:{number:!0},maxlength:"3"},null,8,["modelValue"]),y,t(s,{class:"w-16",modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=n=>d.value=n),modelModifiers:{number:!0},readonly:""},null,8,["modelValue"])]),f((p(),v("div",B,F)),[[h]])]),e("div",L,[q,e("p",C,[t(s,{class:"w-16",modelValue:c.value,"onUpdate:modelValue":l[3]||(l[3]=n=>c.value=n),modelModifiers:{number:!0},maxlength:"3"},null,8,["modelValue"]),E,t(s,{class:"w-16",modelValue:i.value,"onUpdate:modelValue":l[4]||(l[4]=n=>i.value=n),modelModifiers:{number:!0},maxlength:"3"},null,8,["modelValue"]),T,t(s,{class:"w-16",modelValue:_.value,"onUpdate:modelValue":l[5]||(l[5]=n=>_.value=n),modelModifiers:{number:!0},readonly:""},null,8,["modelValue"])]),f((p(),v("div",z,H)),[[h]])])]),t(b,{links:V})],64)}}};export{K as default};
