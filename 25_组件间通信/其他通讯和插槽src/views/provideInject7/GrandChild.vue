<template>
  <div class="grand">
    <h2>孙子：</h2>
    <p>从爷爷处拿到钱：{{ money }}</p>
    <p>从爷爷处拿到价值{{car.price}} 的车：{{ car.brand }}</p>
    <button @click="updateMoney(100000)">回报爷爷</button>
  </div>
</template>

<script setup lang='ts' name='GrandChild'>
  import {inject} from 'vue'
  const money = inject('money','200')// 第二个参数默认值 第一个参数.value就是赋值，丢失响应式，也不能写对象简写
  const car:any = inject('car')
  const updateMoney:any = inject('updateMoney')
</script>

<style scoped>
.grand{
    height: 300px;
    width: 300px;
    background-color: skyblue;
    margin-top: 150px;
  }
</style>