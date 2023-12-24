<template>
  <h1>about</h1>
</template>

<script setup lang='ts' name='About'>
  import {onMounted,onUnmounted} from 'vue'
  onMounted(()=>{
    console.log('about mounted');
  })
  onUnmounted(()=>{
    console.log('about unmounted');
  })
</script>

<style scoped>

</style>