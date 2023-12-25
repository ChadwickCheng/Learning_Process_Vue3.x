<template>
  <div class="inner">
    <h2>son</h2>
    <h4>toy:{{ toy }}</h4>
    <h4>老爹给的车：{{ car }}</h4>
    <button @click="fasong(toy)">孩子给父亲toy</button>
  </div>
</template>

<script setup lang='ts' name='RightInner'>
  import {ref} from 'vue'
  let toy = ref('奥特曼')
  let props = defineProps(['car','sendToy'])
  const fasong = (val:string) => {
    props.sendToy(val)
  }
</script>

<style scoped>
  .inner {
    width: 500px;
    height: 500px;
    background-color: pink;
  }
</style>