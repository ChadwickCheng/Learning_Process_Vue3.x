<template>
  <div class="news-list">
    <li>id:{{ route.params.id }}</li>
    <li>title:{{ route.params.title }}</li>
    <li>content:{{ route.params.content }}</li>
  </div>
</template>

<script setup lang='ts' name='Detail'>
  import {useRoute} from 'vue-router'
  const route = useRoute()// proxy对象 .params.key
</script>

<style scoped>
 .news-list{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
 }
</style>