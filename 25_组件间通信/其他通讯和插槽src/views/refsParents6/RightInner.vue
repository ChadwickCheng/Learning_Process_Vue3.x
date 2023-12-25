<template>
  <div class="inner">
    <h2>同级别大儿子</h2>
    <h4>玩具：{{ toy }}</h4>
    <h4>几本书：{{ book }}</h4>
    <button @click="minusHouse($parent)">分房子咯</button>
  </div>
</template>

<script setup lang='ts' name='RightInner'>
  import {ref} from 'vue'
  let toy = ref('奥特曼')
  let book = ref(3)
  const minusHouse = (parent:any)=>{
    // console.log(parent)// 父亲组件实例,父亲需要暴露
    parent.house -= 1
  }
  defineExpose({
    toy,book
  })
</script>

<style scoped>
  .inner {
    width: 300px;
    height: 300px;
    background-color: pink;
  }
</style>