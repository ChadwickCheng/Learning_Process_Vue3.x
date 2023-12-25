<template>
  <div class="right">
      <div class="outer">
        <h2>father {{ info }}</h2>
        <h4>car: {{ car }}</h4>
        <h4>从孩子得到的： {{ toy }}</h4>
        <RightInner :car="car" :sendToy="getToy"/>
      </div>
    </div>
</template>

<script setup lang='ts' name='Right'>
  import RightInner from './RightInner.vue' 
  defineProps(['info'])
  import {ref} from 'vue'
  let car = ref('benz')
  let toy = ref('')

  // 父亲接受孩子数据提前定义方法
  function getToy(val:string){
    console.log('son->father',val)
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