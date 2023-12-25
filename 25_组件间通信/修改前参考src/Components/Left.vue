<template>
  <div class="left">
      <ul>
        <li>
          <router-link class="router-link" :to="{path:'/home'}" >Home</router-link>
        </li>
        <li v-for="item in leftList" :key="item.id">
          <RouterLink class="router-link" :to="{name:'Right',params:{info:item.info}}">{{item.title}}</RouterLink>
        </li>
      </ul>
    </div>
</template>

<script setup lang='ts' name='Left'>
  import {RouterLink} from 'vue-router'
  import { reactive } from 'vue';

  const leftList = reactive([
    {
      id:1,
      title:'1. props',
      info:'props 演示'
    },
    {
      id:2,
      title:'2. 自定义事件',
      info:'自定义事件 演示'
    },
    {
      id:3,
      title:'3. mitt',
      info:'mitt 演示'
    },
    {
      id:4,
      title:'4. v-model',
      info:'v-model 演示'
    },
    {
      id:5,
      title:'5. $attrs',
      info:'$attrs 演示'
    },
    {
      id:6,
      title:'6. $refs $parent',
      info:'$refs $parent 演示'
    },
    {
      id:7,
      title:'7. provide inject',
      info:'provide inject 演示'
    },
    {
      id:8,
      title:'8. pinia',
      info:'pinia 演示'
    },
    {
      id:9,
      title:'9. slot',
      info:'slot 演示'
    },
  ])
</script>

<style scoped>
  li{
    list-style: none;
  }
  .router-link {
      display: block;
      background-color: pink;
      height: 20px;
      width: 150px;
      padding: 10px;
      margin-bottom: 10px;
    }
</style>