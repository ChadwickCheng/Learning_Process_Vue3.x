<template>
  <div class="person">
    <h2>name:{{ person.name }}</h2>
    <h2>age:{{ person.age }}</h2>
    <h2>car:{{ person.car.c1 }},{{ person.car.c2 }}</h2>
    <button @click="changeName">change name</button>
    <button @click="changeAge">change age</button>
    <button @click="changeC1">change car1</button>
    <button @click="changeC2">change car2</button>
    <button @click="changeCar">change car</button>
  </div>
</template>
<!-- 
  监视属性监视四种数据：
  1. ref定义的数据
  2. reactive定义的数据
  3. 函数返回一个值(getter函数)
  4. 一个包含上述内容的对象
 -->
<script setup lang="ts" name="Person">
  /*
  5. 一个包含上述内容的对象
  */
  import {reactive,watch} from 'vue'
  const person = reactive({
    name: '张三',
    age: 18,
    car:{
      c1: '奔驰',
      c2: '宝马'
    }
  }) 
  const changeName = () => {
    person.name = '李四'
  }
  const changeAge = () => {
    person.age++
  }
  const changeC1 = () => {
    person.car.c1 = '奥迪'
  }
  const changeC2 = () => {
    person.car.c2 = '法拉利'
  }
  const changeCar = () => {
    person.car = {
      c1: '雅迪',
      c2: '波斯猫'
    }
  }
  watch([()=>person.name,()=>person.car.c1],(newValue,oldValue) => {
    console.log(newValue,oldValue)
  })
  // 新旧val是这个数组
  // 实际开发 情况1与4较多
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