<template>
  <div class="person">
    <h2>座驾信息：一辆{{ car.brand }}车，价值{{ car.price }}</h2>
    <button @click="changePrice">修改车辆价格</button>
    <br>
    <h2>主角们</h2>
    <ul>
      <li v-for="(protagonist, index) in protagonists" :key="index">
        {{ protagonist }}
      </li>
    </ul>
    <button @click="changeFirstName">修改第一个主角名字</button>
  </div>
  <hr>
  <h2>测试:{{ obj.a.b.c }}</h2>
  <button @click="changeObj">测试</button>
</template>
<!-- 
  vue3使用ref或reactive实现响应式
  基础数据使用ref ref也可以用于对象或数组
  reactive只能用于对象或数组
 -->

<script setup lang="ts" name="Person">
import {reactive} from 'vue'
  let car = reactive({
    brand:'benz',
    price:1000000,
  })// Proxy(Object){} 代理对象 内容在target属性中
  let protagonists = reactive(['久远寺有珠','苍崎青子','静希草十郎'])
  const changePrice = () => {
    car.price += 100000
  }
  const changeFirstName = () => {
    protagonists[0] = '久远寺有珠珠'
  }
  // reactive是深层次的响应式
  let obj = reactive({
    a:{
      b:{
        c:1
      }
    }
  })
  const changeObj = () => {
    obj.a.b.c += 1
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