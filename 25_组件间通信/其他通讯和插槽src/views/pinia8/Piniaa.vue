<template>
  <div class="right">
      <div class="outer">
        <h2>father {{ info }}</h2>
        <h2>pinia参考之前的教程</h2>
        <RightInner />
      </div>
    </div>
</template>

<script setup lang='ts' name='Piniaa'>
  import RightInner from './RightInner.vue' 
  defineProps(['info'])
</script>

<style scoped>
  
  .outer {
    width: 700px;
    height: 700px;
    background-color: #ccc;
  }
  
</style>