<template>
  <div class="app">
    <h1>hello vue3</h1>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'App',// 组件名
    setup() {
      return {
        msg: 'hello vue3'
      }
    }
  }
</script>

<style>
  .app {
    color: red;
  }
</style>