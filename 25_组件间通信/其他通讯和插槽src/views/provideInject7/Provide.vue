<template>
  <div class="right">
      <div class="outer">
        <h2>爷爷 {{ info }}</h2>
        <p>钱：{{ money }}</p>
        <p>车：{{ car.brand }} 价格：{{ car.price }}</p>
        <RightInner />
      </div>
    </div>
</template>

<script setup lang='ts' name='Provide'>
  import RightInner from './RightInner.vue' 
  defineProps(['info'])

  import {ref,reactive,provide} from 'vue'
  let money = ref(100)
  let car = reactive({
    brand:'BMW',
    price:100
  })
  // 孙子改变爷爷数据
  const updateMoney = (val:any)=>{
    money.value += val
  }
  // 向后代提供数据
  provide('money',money)
  provide('car',car)
  provide('updateMoney',updateMoney)
</script>

<style scoped>
  
  .outer {
    width: 700px;
    height: 700px;
    background-color: #ccc;
  }
  
</style>