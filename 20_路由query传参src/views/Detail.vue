<template>
  <div class="news-list">
    <li>id:{{ route.query.id }}</li>
    <li>title:{{ route.query.title }}</li>
    <li>content:{{ route.query.content }}</li>
  </div>
</template>

<script setup lang='ts' name='Detail'>
  import {useRoute} from 'vue-router'
  const route = useRoute()// proxy对象 可以.query.key 解构会丢失响应式，需要使用toRefs包裹
</script>

<style scoped>
 .news-list{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
 }
</style>