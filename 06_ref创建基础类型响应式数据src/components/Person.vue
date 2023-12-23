<template>
  <div class="person">
    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
    <h2>address: {{ address }}</h2>
    <button @click="changeName">change name</button>
    <button @click="changAge">change age</button>
    <button @click="showTel">search tel number</button>
  </div>
</template>
<!-- 
  vue3使用ref或reactive实现响应式
 -->

<script setup lang="ts" name="Person">
import {ref} from 'vue'
  let name = ref('久远寺有珠')// RefImpl {_rawValue: "久远寺有珠", _shallow: false, dep: Dep, __v_isRef: true} 模板自动.value js操作需要.value
  let age = ref(18)
  let tel = '123456789'// 打印只是一个字符串
  let address = '东京都三鹰市井之头5-3-2'
  const changeName = () => {
    name.value = '苍崎青子'
  }
  const changAge = () => {
    age.value = 20
  }
  const showTel = () => {
    alert(tel)
  }
  
</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
</style>