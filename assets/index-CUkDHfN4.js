import{k as g,s as S,p as x,r as c,R as k,o,b as i,d as e,D as s,h as l,w as V,t as R,e as w,g as u,F as U}from"./index-CebZ7rZo.js";const j={class:"flex"},y={class:"flex items-center"},I={class:"flex items-center mt-4"},D={class:"ml-16"},T=e("p",{class:"font-semibold"},"pinia数据：",-1),B={class:"mt-2"},C={class:"flex overflow-x-auto"},N={class:"mt-8"},z=e("p",{class:"font-bold"},"组件代码：",-1),F=e("pre",null,[s("            "),e("code",null,`
<template>
  姓名：<el-input v-model="user.name"></el-input>
  年龄：<el-input v-model="user.age"></el-input>
  <el-button type="primary" @click="handleSubmit">提交</el-button>
</template>

<script setup>
  // 在 script 标签中，键入 v3s-usepinia ，待代码提示出现后，回车，会自动生成 pinia 使用代码，按 tab 切换下一项。
  import { ref } from "vue";
  import { useUserStore } from "@/stores/user.js";
  import { storeToRefs } from "pinia";

  const userStore = useUserStore();
  const { userInfo } = storeToRefs(userStore);

  const user = ref({ name: "", age: "" });

  const handleSubmit = () => {
    userStore.$patch(state => {
      state.userInfo = user;
    });
  };
<\/script>
            `),s(`
        `)],-1),L=[z,F],P={class:"mt-8 ml-4"},$=e("p",{class:"font-bold"},"pinia（user.js）代码：",-1),E=e("pre",null,[s("            "),e("code",{class:"js"},`
// 键入 v3s-pinia ，待代码提示出现后，回车，会自动生成 pinia 源文件。
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    userInfo: null, // 用户信息
  }),
  getters: {},
  actions: {},
  persist: {},
});
            `),s(`
        `)],-1),q=[$,E],A={class:"mt-8 ml-4"},G=e("p",{class:"font-bold"},"store 目录结构：",-1),H=e("pre",null,[s("            "),e("code",{class:"js"},`
|-- src
     |-- store
           |-- user.js
            `),s(`
        `)],-1),J=[G,H],O={__name:"index",setup(K){const p=g(),{userInfo:_}=S(p),t=x({name:"",age:""}),h=()=>{p.$patch(d=>{d.userInfo=t})},f=[{label:"Pinia 中文文档：",link:"https://pinia.web3doc.top/"},{label:"Pinia 如何持久化？",link:"https://prazdevs.github.io/pinia-plugin-persistedstate/zh/"}];return(d,n)=>{const m=c("el-input"),v=c("el-button"),b=c("RhReferenceLink"),a=k("highlight");return o(),i(U,null,[e("div",j,[e("div",null,[e("div",y,[s(" 姓名： "),l(m,{modelValue:t.value.name,"onUpdate:modelValue":n[0]||(n[0]=r=>t.value.name=r),class:"w-32",maxlength:"10"},null,8,["modelValue"])]),e("div",I,[s(" 年龄： "),l(m,{modelValue:t.value.age,"onUpdate:modelValue":n[1]||(n[1]=r=>t.value.age=r),class:"w-32",maxlength:"3"},null,8,["modelValue"])]),l(v,{type:"primary",class:"mt-4",onClick:h},{default:V(()=>[s("提交")]),_:1})]),e("div",D,[T,e("p",B,R(w(_)),1)])]),e("div",C,[u((o(),i("div",N,L)),[[a]]),u((o(),i("div",P,q)),[[a]]),u((o(),i("div",A,J)),[[a]])]),l(b,{class:"mt-8",links:f})],64)}}};export{O as default};
