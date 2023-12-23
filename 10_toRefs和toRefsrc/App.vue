<template>
  <!-- vue3可以写多个root标签 -->
  <Person/>
</template>

<script lang="ts">
import Person from './components/Person.vue'
  export default {
    name: 'App',// 组件名
    components: {
      Person
    },
  }
</script>

<style>
  
</style>