<template>
  <div class="child2">
    <h1>son2</h1>
    <h4>电脑: {{ computer }}</h4>
    <h4>我是弟弟，我收数据</h4>
    <h4>接受哥哥的数据 {{ toy }}</h4>
  </div>
</template>

<script setup lang='ts' name='Child2'>
  import {ref,onUnmounted} from 'vue'
  import emitter from '../../utils/emitter'
  let computer = ref('computer')
  let toy = ref('')
  emitter.on('send-toy',(val:any)=>{
    toy.value = val
  })
  onUnmounted(()=>{
    emitter.off('send-toy')
  })
</script>

<style scoped>
  .child2 {
    background-color: green;
    height: 300px;
    width: 500px;
  }
</style>