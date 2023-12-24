<template>
  <Person v-if="isShow"/>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue'
  import {ref,onMounted} from 'vue'
  const isShow = ref(true)
  onMounted(() => {
    console.log('父App挂载完毕');
  })
  // 子先挂载完毕 app永远是最后挂载完毕
</script>

<style>
  
</style>