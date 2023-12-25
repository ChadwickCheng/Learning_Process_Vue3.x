<template>
  <div class="right">
      <div class="outer">
        <h2>father {{ info }}</h2>
        <h4>从孩子得到的toy: {{ toy }}</h4>
        <!-- 给子组件绑定事件 -->
        <RightInner @sendToy="getToy" />
      </div>
    </div>
</template>

<script setup lang='ts' name='CustomEvent'>
  import RightInner from '../customEvent2/RightInner.vue' 
  defineProps(['info'])
  /*
  $event是一个特殊的占位符，它代表触发这个事件时原生 DOM 事件对象
  模板内方法可以直接写str=$event这种简单逻辑
  */
 import {ref} from 'vue'
 const toy = ref('')
  const getToy = (val:any) => {
    console.log(val);
    toy.value = val
  }

</script>

<style scoped>
  
  .outer {
    width: 700px;
    height: 700px;
    background-color: #ccc;
  }
  
</style>