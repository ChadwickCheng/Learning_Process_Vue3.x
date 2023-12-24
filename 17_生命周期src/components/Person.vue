<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changSum">点我+1</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
  const sum = ref(0)
  const changSum = () => {
    sum.value++
  }

  // 创建
  console.log('Person创建了');
  // 挂载前调用这个指定的回调
  onBeforeMount(() => {
    console.log('Person挂载了');
  })
  // 挂在完毕
  onMounted(() => {
    console.log('子Person挂载完毕');
  })
  // 更新前
  onBeforeUpdate(() => {
    console.log('Person更新前');
  })
  // 更新完毕
  onUpdated(() => {
    console.log('Person更新完毕');
  })
  // 卸载前
  onBeforeUnmount(() => {
    console.log('Person卸载前');
  })
  // 卸载完毕
  onUnmounted(() => {
    console.log('Person卸载完毕');
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