import{p as a,o as l,b as i,d as e,r,R as x,h as o,w as v,g as p,F as k,X as C,D as s}from"./index-z4f0t7nZ.js";const b=e("p",{class:"font-semibold"},"我是子组件",-1),g=e("p",{class:"mt-2"},"向外暴露的值：childExpose",-1),$=e("p",{class:"mt-2"},"不向外暴露值：childUnexpose",-1),E=e("p",{class:"mt-2"},"内部方法：handleChildClick",-1),R=[b,g,$,E],w={__name:"Child",setup(h,{expose:t}){const c=a("我是暴露的值！");a("我是没有被暴露的值！");const n=()=>{alert("我是子组件内部的方法！")};return t({childExpose:c,handleChildClick:n}),(_,f)=>(l(),i("div",{onClick:n,class:"text-sm"},R))}},j={class:"flex justify-between"},y={class:"flex"},U={class:"w-80 h-80 rounded-2xl relative text-center shadow"},F=e("p",{class:"font-semibold"},"我是父组件",-1),V=C('<div class="w-96 italic text-sm font-semibold leading-6 mr-8"><p><span class="text-xl">注：</span><a class="text-blue-600" href="https://v3.cn.vuejs.org/guide/migration/children.html#children" target="__blank"> $children </a> 实例 property 已从 Vue 3.0 中移除，不再支持。如果你需要访问子组件实例，我们建议使用 <a class="text-blue-600" href="https://v3.cn.vuejs.org/guide/composition-api-template-refs.html#模板引用" target="__blank"> $refs </a> 。 <a class="text-blue-600" href="https://v3.cn.vuejs.org/api/instance-properties.html#parent" target="__blank"> $parent </a> 仍支持。 </p></div>',1),N={class:"flex mt-8 overflow-x-auto"},B=e("p",{class:"font-bold"},"父组件代码：",-1),D=e("pre",null,[s("        "),e("code",null,`
<template>
  我是父组件
  <div @click="handleFn">点我获取子组件值、触发方法</div>
  <Child ref="childRef"/>
</template>

<script setup>
  import { ref } from "vue";
  import Child from "./Child.vue";

  const childRef = ref(); // 这里的变量名必须和组件 ref 的名称一致
  const handleFn = () => {
    alert(\`子组件暴露的值-'childExpose'：\${childRef.value.childExpose}\`);
    alert(\`子组件未暴露的值-'childUnexpose'：\${childRef.value.childUnexpose}\`);
    childRef.value.handleChildClick();
  };
<\/script>
        `),s(`
    `)],-1),L=[B,D],S={class:"ml-4"},T=e("p",{class:"font-bold"},"子组件代码：",-1),X=e("pre",null,[s("        "),e("code",null,`
<template>
  <div @click="handleChildClick">
    <p>我是子组件</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const childExpose = ref("我是暴露的值！");
const childUnexpose = ref("我是没有被暴露的值！");
const handleChildClick = () => {
  alert("我是子组件内部的方法！");
};

// 通过 defineExpose 暴露出去的值、方法等，才能被取到
defineExpose({
  childExpose,
  handleChildClick,
});
<\/script>
        `),s(`
    `)],-1),q=[T,X],A={__name:"index",setup(h){const t=a(),c=()=>{alert(`子组件暴露的值-'childExpose'：${t.value.childExpose}`),alert(`子组件未暴露的值-'childUnexpose'：${t.value.childUnexpose}`),t.value.handleChildClick()},n=[{label:"vue3 setup 模式中为什么不能直接通过ref调用组件的方法、值？",answer:"使用 <script setup> 的组件是默认关闭的，也即通过模板 ref 或者 $parent 链获取到的组件的公开实例，不会暴露任何在 <script setup> 中声明的绑定。为了在 <script setup> 组件中明确要暴露出去的属性，使用 defineExpose 编译器宏。"},{label:"vue3 setup 模式中defineExpose是什么？",link:"https://cn.vuejs.org/api/sfc-script-setup.html#defineexpose"},{label:"vue3 setup 模式中如何使用 ref 获取 dom？",link:"https://cn.vuejs.org/guide/essentials/template-refs.html#template-refs"}];return(_,f)=>{const u=r("el-button"),m=r("RhReferenceLink"),d=x("highlight");return l(),i(k,null,[e("div",j,[e("div",y,[e("div",U,[F,o(u,{type:"primary",class:"mt-2",onClick:c},{default:v(()=>[s("点我获取子组件值、触发方法")]),_:1}),o(w,{ref_key:"childRef",ref:t,class:"w-60 h-40 mt-8 text-center shadow-md flex flex-col items-center justify-center absolute transform -translate-x-2/4 -translate-y-1/2 top-2/4 left-2/4"},null,512)])]),V]),e("div",N,[p((l(),i("div",null,L)),[[d]]),p((l(),i("div",S,q)),[[d]])]),o(m,{links:n})],64)}}};export{A as default};
