<template>
  <div class="inner">
    <h2>son</h2>
    <h4>toy: {{ toy }}</h4>
    <h4>我是哥哥，我发数据</h4>
    <button @click="emitter.emit('send-toy',toy)">发数据</button>
  </div>
</template>

<script setup lang='ts' name='RightInner'>
  import {ref} from 'vue'
  let toy = ref('car')
  import emitter from '../../utils/emitter'
</script>

<style scoped>
  .inner {
    width: 500px;
    height: 300px;
    background-color: pink;
  }
</style>