<template>
  <div class="person">
    <h1>情况1. 监视ref定义的基本类型数据</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
    <hr>
    <h1>情况2. 监视ref定义的对象类型数据</h1>
    <h2>当前person的name为：{{ person.name }}</h2>
    <h2>当前person的age为：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>
<!-- 
  监视属性监视四种数据：
  1. ref定义的数据
  2. reactive定义的数据
  3. 函数返回一个值(getter函数)
  4. 一个包含上述内容的对象
 -->
<script setup lang="ts" name="Person">
  import {ref,watch} from 'vue'
  const sum = ref(0)
  const changeSum = () => {
    sum.value++
  }
  /*
  1. 监视ref定义的基本类型数据：直接写数据名，监视其value值的变化
  */
  const stopWatch = watch(sum, (newValue, oldValue) => {// 直接写sum，无需写sum.value
    console.log('sum变化了', newValue, oldValue)
    if(newValue >= 5) {
      stopWatch()// 停止监视
    }
  })// 监视器返回一个函数，调用该函数可以解除监视

  /*
  2. 监视ref定义的对象类型数据：直接写数据名，监视对象的地址值，监视内部数据需要手动开启深度监视
  */
  let person = ref({name: 'tom', age: 18})
  const changeName = () => {
    person.value.name += 'a'
  }
  const changeAge = () => {
    person.value.age++
  }
  const changePerson = () => {
    person.value = {name: 'jerry', age: 20}
  }
  watch(person, (newValue, oldValue) => {
    console.log('person变化了', newValue, oldValue)
  }, {deep: true,immediate:true})// 开启深度监视(监视对象内部数据的变化)
  /*
  不开启深度监视，监视地址值：修改name和age不会触发监视，因为不会修改地址值，只有赋值一个新对象导致地址修改才会触发监视
  immediate:true，立即触发监视.就是刚进入页面时，就会触发一次监视
  坑：底层不会保存上一次对象内的值，对原对象修改属性，新旧值一样
  */
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