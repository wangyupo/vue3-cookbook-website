import{p as i,r,R as g,o as m,b as d,d as e,D as l,h as t,w as k,t as x,g as V,F as y}from"./index-C6X5JKUy.js";const b={class:"flex items-center"},N={class:"ml-4"},w={class:"ml-8"},C={class:"mt-8",style:{width:"960px"}},R=e("p",{class:"font-bold"},"组件代码：",-1),D=e("pre",null,[l("        "),e("code",null,[l(`
<template>
  姓：<el-input v-model="surname" placeholder="请输入姓"/>
  名：<el-input v-model="name" placeholder="请输入名"/>
  <el-button type="primary" @click="handleConfirm">确认</el-button>
  <div>我的姓名是：`),e("span",null,"{{ fullName }}"),l(`</div>
</template>


<script setup>
  import { ref } from "vue";

  const surname = ref("老");
  const name = ref("八");
  const fullName = ref("老八");

  const handleConfirm = () => {
    fullName.value = surname.value + name.value;  // ref 对象仅有一个 .value property，指向该内部值。
  };
<\/script>
        `)]),l(`
    `)],-1),B=[R,D],j={__name:"index",setup(F){const o=i("老"),s=i("八"),c=i("老八"),p=()=>{c.value=o.value+s.value},v=[{label:"vue3 setup 模式中赋值为什么要赋在.value对象上？",link:"https://cn.vuejs.org/api/reactivity-core.html#ref"}];return(L,n)=>{const u=r("el-input"),_=r("el-button"),h=r("RhReferenceLink"),f=g("highlight");return m(),d(y,null,[e("div",b,[e("div",null,[l(" 姓： "),t(u,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=a=>o.value=a),placeholder:"请输入姓",maxlength:"5",class:"w-4/5"},null,8,["modelValue"])]),e("div",N,[l(" 名： "),t(u,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=a=>s.value=a),placeholder:"请输入名",maxlength:"10",class:"w-4/5"},null,8,["modelValue"])]),t(_,{type:"primary",class:"ml-4",onClick:p},{default:k(()=>[l("确认")]),_:1}),e("div",w,"我的姓名是："+x(c.value),1)]),V((m(),d("div",C,B)),[[f]]),t(h,{links:v})],64)}}};export{j as default};
