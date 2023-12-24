<template>
  <div class="news">
    <h2>新闻列表</h2>
    <!-- nav -->
    <ul>
      <li v-for="item in newsList" :key="item.id">
        <button @click="showDetail(item)">查看news</button>
        <RouterLink :to="{name:'detail',params:{id:item.id,title:item.title,content:item.content}}">{{ item.title }}</RouterLink>
      </li>
    </ul>
    <!-- content -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang='ts' name='News'>
  import {reactive} from 'vue'
  import { RouterView,RouterLink,useRouter } from 'vue-router';
  const newsList = reactive([
    {
      id:1,
      title:'尼禄花嫁',
      content:'我大老婆',
    },
    {
      id:2,
      title:'摩根',
      content:'我二老婆',
    },
    {
      id:3,
      title:'水夹馍',
      content:'我三老婆',
    },
    {
      id:4,
      title:'杀狐',
      content:'我四老婆',
    },
  ])
  const router = useRouter()
  interface NewsInter {
    id:number,
    title:string,
    content:string
  }
  const showDetail = (item:NewsInter) => {
    router.push({name:'detail',params:{id:item.id,title:item.title,content:item.content}})
  }
</script>

<style scoped>

</style>