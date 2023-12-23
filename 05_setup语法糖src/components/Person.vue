<template>
  <div class="person">
    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
    <button @click="changeName">change name</button>
    <button @click="changAge">change age</button>
    <button @click="showTel">search tel number</button>
  </div>
</template>

<!-- <script lang="ts">
  export default {
    name:'Person',
  }
</script> -->

<script setup lang="ts" name="Person">
  let name = '久远寺有珠'
  let age = 18
  let tel = '123456789'
  const changeName = () => {
    name = '苍崎青子'
  }
  const changAge = () => {
    age = 20
  }
  const showTel = () => {
    alert(tel)
  }
  // setup语法糖 还会自动return。
  // 注意：如果去掉上面的export default，组件名就是文件名
  /*
  npm i vite-plugin-vue-setup-extend -D
  vite.config.ts引入和调用
  引入这个插件不用写export default而是在标签中写name代表组件名
  */
  // 实际开发中文件名和组件名一般都是一样
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