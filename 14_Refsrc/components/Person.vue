<template>
  <div class="person">
    <h1>China</h1>
    <h2 ref="title2">Beijing</h2>
    <h3>Atguigu</h3>
    <button @click="showLog">输出h2元素</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import { ref,defineExpose } from 'vue'
  const title2 = ref()// 创建容器存储ref标记内容
  let a = ref(0)
  let b = ref(1)
  let c = ref(2)
  const showLog = () => {
    console.log(title2.value);
  }
  // 即使不同组件有相同的ref标记，也不会冲突
  defineExpose({// 暴露数据
    title2,
    a,
    b,
    c
  })
</script>

<!-- 
  局部样式：只能在当前组件中使用
 -->
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