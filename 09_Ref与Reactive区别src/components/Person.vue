<template>
  <div class="person">
    <h2>座驾信息：一辆{{ car.brand }}车，价值{{ car.price }}</h2>
    <button @click="changeBrand">修改车辆品牌</button>
    <button @click="changePrice">修改车辆价格</button>
    <button @click="changeCar">修改车辆</button>
    <hr>
    <h2>当前求和为:{{ sum }}</h2>
    <button @click="changeSum">sum+1</button>
  </div>
</template>
<!-- 
  宏观：
    1. ref定义基础类型，对象类型
    2. reactive定义对象类型
  区别：
    1. ref创建的变量必须使用.value（可以使用volar插件自动添加.value）
    2. reactive局限：重新分配一个新对象，会失去响应式
  使用场景：
    1. 需要一个基本类型响应式数据，必须ref
    2. 需要一个层级不深的响应式对象，ref，reactive皆可
    3. 需要一个层级较深的响应式对象，推荐reactive
    表单推荐reactive,表单数据多，ref需要大量.value
 -->
<script setup lang="ts" name="Person">
import {ref,reactive} from 'vue'
  let car = reactive({
    brand:'benz',
    price:1000000,
  })
  let sum = ref(0)
  const changePrice = () => {
    car.price += 100000
  }
  const changeSum = () => {
    sum.value += 1
    // sum=ref(9) 不可以越过value直接改变sum
  }
  const changeBrand = () => {
    car.brand = 'bmw'
  }
  const changeCar = () => {
    // car = {
    //   brand:'audi',
    //   price:2000000,
    // }// 重新分配一个新对象，会失去响应式.就算再套一层reactive也不行
    Object.assign(car,{
      brand:'audi',
      price:2000000,
    })// 把后面的对象的属性覆盖到前面的对象上，不会失去响应式
    // ref重新分配一个新对象，不会失去响应式。因为使用.value一定是响应式的
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