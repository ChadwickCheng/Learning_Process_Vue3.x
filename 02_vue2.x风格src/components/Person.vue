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
    data(){
      return {
        name: 'Max',
        age:18,
        tel:'123456789',
      }
    },
    methods:{
      showTel(){
        alert(this.tel)
      },
      changeName(){
        this.name = 'Bob'
      },
      changAge(){
        this.age = 20
      }
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