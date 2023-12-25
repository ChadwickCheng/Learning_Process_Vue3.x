<template>
  <div class="grand">
    <h2>孙子</h2>
    <h4>孙子拿到爷爷的数据 {{ $attrs }}</h4>
    <button @click="changeGrand">改变爷爷的数据</button>
  </div>
</template>

<script setup lang='ts' name='GrandChild.vue'>
  import {ref} from 'vue'
  let props = defineProps(['sendVal'])
  let a = ref(100)
  const changeGrand = ()=>{
    props.sendVal(100)
  }
</script>

<style scoped>
  .grand{
    height: 300px;
    width: 300px;
    background-color: skyblue;
    margin-top: 150px;
  }
</style>