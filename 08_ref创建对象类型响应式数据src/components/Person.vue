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
</template>
<!-- 
  使用ref包裹对象，refimpl的value是proxy(reactive实现的)
 -->
<script setup lang="ts" name="Person">
import {ref} from 'vue'
  let car = ref({
    brand:'benz',
    price:1000000,
  })
  let protagonists = ref(['久远寺有珠','苍崎青子','静希草十郎'])
  const changePrice = () => {
    car.value.price += 100000
  }
  const changeFirstName = () => {
    protagonists.value[0] = '久远寺有珠珠'
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