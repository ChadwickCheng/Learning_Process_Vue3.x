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
    name:'Person',
    data(){
      return{
        a:100,
        c:this.name
      }
    },
    methods:{
      b(){
        console.log('b');
      }
    },
    setup(){
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
      return {name,age,changAge,changeName,showTel}
    }
  }
  /*
    setup与data+methods的区别
    1. data methods setup可以同时存在成为兄弟
    2. setup早于beforeCreate，data可以使用this找出setup中的数据和方法。setup不能使用data和methods中的数据和方法
  */
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