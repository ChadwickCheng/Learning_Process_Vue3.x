<template>
  <div class="inner">
    <h2>son</h2>
    <h4>toy: {{ toy }}</h4>
    <h4>延迟两秒发放</h4>
    <i>注意：事件名建议使用烤串命名 send-toy</i>
  </div>
</template>

<script setup lang='ts' name='RightInner'>
  import {ref,onMounted} from 'vue'
  let toy = ref('aoteman')
  // 声明事件 使用emit触发
  const emit = defineEmits(['sendToy'])
  onMounted(() => {
    setTimeout(() => {
      emit('sendToy', toy.value)
    }, 2000);
  })
</script>

<style scoped>
  .inner {
    width: 500px;
    height: 500px;
    background-color: pink;
  }
</style>