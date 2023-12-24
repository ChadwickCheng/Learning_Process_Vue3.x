<template>
  <div class="app">
    <h2 class="title">Vue路由测试</h2>
    <Header />
    <!-- nav -->
    <div class="nav">
      <RouterLink :to="{name:'zhuye'}" active-class="active">首页</RouterLink>
      <RouterLink to="/news" active-class="active">新闻</RouterLink>
      <RouterLink :to="{path:'/about'}" active-class="active">关于</RouterLink>
    </div>
    <!-- main -->
    <div class="main">
      展示路由组件
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
  import { RouterView,RouterLink } from 'vue-router';
  import Header from './components/Header.vue';
</script>

<style>
  .app {
    width: 500px;
    margin: 0 auto;
    border: 1px solid #ccc;
    padding: 20px;
  }
  .title{
    text-align: center;
  }
  .nav {
    margin-bottom: 20px;
    text-align: center;
  }
  .nav a {
    margin-right: 20px;
  }
  .main {
    border: 1px solid #ccc;
    padding: 20px;
  }
  .active {
    color: red;
  }
</style>