<template>
  <h1>我是你的大爹</h1>
  <Person a="haha" :list="PersonList"/>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue'
  import { type Persons } from './types';
  import {reactive} from 'vue'
  let PersonList = reactive<Persons>([
    {id:'01', name: '张三', age: 18},
    {id:'02', name: '李四', age: 20},
    {id:'03', name: '王五', age: 22},])
</script>

<style>
  
</style>