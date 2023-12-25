<template>
  <div class="child2">
    <h2>同级别二儿子</h2>
    <h4>电脑：{{ computer }}</h4>
    <h4>几本书：{{ book }}</h4>
  </div>
</template>

<script setup lang='ts' name='Child2'>
  import {ref} from 'vue'
  let computer = ref('外星人')
  let book = ref(6)
  defineExpose({
    computer,book
  })
</script>

<style scoped>
  .child2 {
    width: 300px;
    height: 300px;
    background-color: aqua;
  }
</style>