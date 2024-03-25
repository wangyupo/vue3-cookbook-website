import{r,o,b as l,d as t,t as m,h as c,w as k,D as e,p,R as b,j as w,g,F as V}from"./index-z4f0t7nZ.js";const $={class:"text-sm"},D=t("p",{class:"font-semibold"},"我是子组件",-1),R={class:"mt-2 text-xs"},j={__name:"Child",props:{today:{type:String,default:""}},emits:["change"],setup(h,{emit:n}){const s=n,a=()=>{s("change","我是经自定义方法传出的值")};return(i,_)=>{const d=r("el-button");return o(),l("div",$,[D,t("p",R,"从父组件传进来的值："+m(h.today),1),c(d,{class:"mt-2",type:"primary",onClick:a},{default:k(()=>[e("点我触发自定义事件")]),_:1})])}}},E={class:"flex"},N={class:"w-80 h-80 rounded-2xl relative text-center shadow"},B=t("p",{class:"font-semibold"},"我是父组件",-1),F={class:"mt-w"},S={class:"mt-2 text-xs italic"},L={key:0},M={class:"flex mt-8 overflow-x-auto"},P=t("p",{class:"font-bold"},"父组件代码：",-1),T=t("pre",null,[e("        "),t("code",null,[e(`
<template>
  我是父组件
  <div>传给子组件的值：<el-input v-model="todaydate" /></div>
  <p>`),t("span",null,"{{ emitVal }}"),e(`</p>
  <Child :today="todaydate" @change="childChange" />
</template>

<script setup>
  import Child from "./Child.vue";
  import { ref } from "vue";

  const todaydate = ref("2022-02-22");  // 传给子组件的值
  const emitVal = ref("");  // 从子组件传出的值

  // 组件的自定义事件
  const childChange = (val) => {
    emitVal.value = val;
  };
<\/script>
        `)]),e(`
    `)],-1),U=[P,T],Y={class:"ml-4"},q=t("p",{class:"font-bold"},"子组件代码：",-1),z=t("pre",null,[e("        "),t("code",null,[e(`
<template>
  我是子组件 
  <div>从父组件传进来的值：`),t("span",null,"{{ today }}"),e(`</div>
  <el-button @click="handleClick">点我触发自定义事件</el-button>
</template>

<script setup>
  // 使用 defineProps 声明 props
  const props = defineProps({
    today: {
      type: String,
      default: "",
    },
  });

  // 使用 defineEmits 声明 emits
  const emit = defineEmits(["change"]);
  const handleClick = () => {
    // 必须经过defineEmits声明，不然方法无效！
    emit("change", "我是经自定义方法传出的值");
  };
<\/script>
        `)]),e(`
    `)],-1),A=[q,z],H={__name:"index",setup(h){const n=new Date,s=p(`${n.getFullYear()}-${n.getMonth()<10?"0":""}${n.getMonth()+1}-${n.getDate()<10?"0":""}${n.getDate()}`),a=p(""),i=p(0),_=u=>{a.value=u,i.value+=1},d=[{label:"在 <script setup> 中如何声明 props 和 emits？",link:"https://cn.vuejs.org/api/sfc-script-setup.html#defineprops-defineemits"},{label:"子组件中的 emit 方法是什么？",link:"https://cn.vuejs.org/api/options-state.html#emits"}];return(u,f)=>{const x=r("el-input"),y=r("RhReferenceLink"),v=b("highlight");return o(),l(V,null,[t("div",E,[t("div",N,[B,t("p",F,[e(" 传给子组件的值： "),c(x,{modelValue:s.value,"onUpdate:modelValue":f[0]||(f[0]=C=>s.value=C),class:"w-2/5"},null,8,["modelValue"])]),t("p",S,[e(m(a.value)+" ",1),i.value>1?(o(),l("span",L,"x"+m(i.value),1)):w("",!0)]),c(j,{class:"w-60 h-40 mt-8 text-center shadow-md flex flex-col items-center justify-center absolute transform -translate-x-2/4 -translate-y-1/2 top-2/4 left-2/4",today:s.value,onChange:_},null,8,["today"])])]),t("div",M,[g((o(),l("div",null,U)),[[v]]),g((o(),l("div",Y,A)),[[v]])]),c(y,{links:d})],64)}}};export{H as default};
