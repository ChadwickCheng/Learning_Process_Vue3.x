<template>
  <div class="person">
    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
    <button @click="changeName">change name</button>
    <button @click="changAge">change age</button>
    <button @click="showTel">search tel number</button>
  </div>
</template>

<script lang="ts">
  export default {
    // 选项式API vue2.x的写法
    // vue3.x的组合式api将数据方法等集合到一个函数中
    name:'Person',
    setup(){
      // data
      let name = '久远寺有珠'// 简单的赋值不是响应式
      let age = 18
      let tel = '123456789'
      // methods setup没有维护this指向 this默认指向undefined
      const changeName = () => {
        name = '苍崎青子'
      }
      const changAge = () => {
        age = 20
      }
      const showTel = () => {
        alert(tel)
      }
      return {name,age,changAge,changeName,showTel}// 模板使用的数据以及方法
      // setup返回值可以是对象也可以是函数
      // return () => {} // 返回函数的话模板中的数据和方法都要写在函数中
    }
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