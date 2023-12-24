<template>
  <div class="person">
    <h2>temp>=60℃ || height>=80cm，给服务器发请求</h2>
    <h2>当前水温：{{ temp }}℃</h2>
    <h2>当前水位：{{ height }}cm</h2>
    <button @click="changeTemp">温度+1</button>
    <button @click="changeHeight">水位+1</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import {ref,watch,watchEffect} from 'vue'
  let temp = ref(10)
  let height = ref(0)
  const changeTemp = () => {
    temp.value += 10
  }
  const changeHeight = () => {
    height.value += 10
  }
  // watch缺点：有几个数据监视几个
  watch([temp,height],([newTemp,newHeight])=>{// 数组解构
    if(newTemp>=60 || newHeight>=80){
      console.log('给服务器发请求')
    }
  })
  // watchEffect 默认立即执行 监视的数据无需提前指定
  watchEffect(()=>{
    if(temp.value>=60 || height.value>=80){
      console.log('给服务器发请求')
    }
  })
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