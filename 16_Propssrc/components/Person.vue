<template>
  <h1>我是儿子</h1>
  <div class="person">
    <h2>来自father的a {{ a }}</h2>
    <h2>来自father的list</h2>
    <ul>
      <!-- 传一个数字就是打印几次 -->
      <li v-for="item in list" :key="item.id">
        {{ item.name }} - {{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Person">
  import { defineProps,withDefaults } from 'vue';
  import { type Persons } from '../types';
  /*
  // defineProps(['a']) 接收a
  let x = defineProps(['a','list'])// 返回对象，传输的值作为kv对
  console.log(x)
  */
 /*
  // 接受并限制类型
  defineProps<{
    a: string,
    list: Persons
  }>()
  */
  // 接受+限制类型+限制必要性+指定默认值
  withDefaults(defineProps<{list?: Persons,a:string}>(),
  {list:()=>[
    {id:'01', name: '张三', age: 18},
  ]}
  )
  // 带define的函数是宏函数，无需手动引入
</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
</style>