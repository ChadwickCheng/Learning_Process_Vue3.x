<template>
  <div class="news-list">
    <li>id:{{ id }}</li>
    <li>title:{{ title }}</li>
    <li>content:{{ content }}</li>
  </div>
</template>

<script setup lang='ts' name='Detail'>
  defineProps(['id','title','content'])
</script>

<style scoped>
 .news-list{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
 }
</style>