<template>
  <Header />
  <div class="main">
    <Left />
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang='ts' name='App'>
  import Header from './Components/Header.vue'
  import Left from './Components/Left.vue'
  import { RouterView,RouterLink } from 'vue-router';
</script>

<style scoped>
  .main {
      display: flex;
    }
    .right {
      margin-left: 100px;
    }
</style>