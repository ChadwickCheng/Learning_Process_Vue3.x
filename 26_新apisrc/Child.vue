<template>
  <div class="child">
    <h2>child sum {{ sum }}</h2>
  </div>
</template>

<script setup lang='ts' name='Child'>
  import {ref} from 'vue'
  import axios from 'axios'
  let sum = ref(0)
  /*
  使用setup语法糖 又写了await 没机会使用async 顶层有async不必担心
  但这样做导致父页面中这个组件消失 父亲使用suspense包裹，底层是插槽，还要写template指明name
  */
  let xxx = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
</script>

<style scoped>
  .child{
    width: 200px;
    height: 200px;
    background-color: #ddd;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
  }
</style>