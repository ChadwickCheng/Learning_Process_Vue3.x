<template>
  <div class="inner">
    <h2>父亲</h2>
    <i>我存在的目的：这个方式不需要我。但是attrs实现祖孙间通讯需要我。</i>
    <GrandChild />
  </div>
</template>

<script setup lang='ts' name='RightInner'>
  import GrandChild from './GrandChild.vue'
</script>

<style scoped>
  .inner {
    width: 500px;
    height: 500px;
    background-color: pink;
  }
</style>