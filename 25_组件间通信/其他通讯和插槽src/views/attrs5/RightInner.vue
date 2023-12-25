<template>
  <div class="inner">
    <h2>父亲</h2>
    <!-- <h4>
      <span>a: {{ a }}</span>
      <span> 其他：{{ $attrs }}</span>
    </h4> -->
    <GrandChild v-bind="$attrs"/>
  </div>
</template>

<script setup lang='ts' name='RightInner'>
  import GrandChild from './GrandChild.vue'

  // defineProps(['a'])
</script>

<style scoped>
  .inner {
    width: 500px;
    height: 500px;
    background-color: pink;
    margin-top: 50px;
  }
</style>