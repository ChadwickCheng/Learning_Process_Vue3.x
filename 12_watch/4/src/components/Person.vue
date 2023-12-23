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
  4. 监视ref或reactive定义的对象类型数据中的某个属性，注意：
    1. 若该属性值不是对象类型，需要写成函数形式
    2. 若该属性值依然是对象类型，可直接编，也可以写成函数，建议写成函数

  getter函数：能返回一个值的函数
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
  // 监视整个person
  watch(person, (newVal, oldVal) => {
    console.log('person变化了',newVal, oldVal)
  })

  // 监视person的基础类型属性值 直接写person.name脱离了那四种监视数据的范围
  watch(() => person.name, (newVal, oldVal) => {
    console.log('name变化了',newVal, oldVal)
  })

  // 监视person的对象类型属性值
  // 直接写 可以监视属性(新旧一样)但监视不了整体，深度监视也没用。因为已经不是原来那个对象了
  watch(person.car, (newVal, oldVal) => {
    console.log('car变化了',newVal, oldVal)
  })
  // 函数式 监视地址值，不能监视属性，能监视整体的改变(新旧不一样)
  watch(() => person.car, (newVal, oldVal) => {
    console.log('car变化了',newVal, oldVal)
  },{deep:true})//深度监视解决
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