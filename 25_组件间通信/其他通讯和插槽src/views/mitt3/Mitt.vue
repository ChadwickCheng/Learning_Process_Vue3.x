<template>
  <div class="right">
      <div class="outer">
        <h2>father {{ info }}</h2>
        <RightInner />
        <Child2 />
      </div>
    </div>
</template>

<script setup lang='ts' name='Mitt'>
  import RightInner from './RightInner.vue'
  import Child2 from './Child2.vue' 
  defineProps(['info'])
</script>

<style scoped>
  
  .outer {
    width: 700px;
    height: 700px;
    background-color: #ccc;
  }
  
</style>