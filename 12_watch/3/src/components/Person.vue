<template>
  <div class="person">
    <h1>情况3. 监视reactive定义的对象类型数据</h1>
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
  import {reactive,watch} from 'vue'
  /*
  3. 监视reactive定义的对象类型数据 默认开启深度监听，无法关闭
  */
  const person = reactive({name: 'tom', age: 18})
  const changeName = () => {
    person.name += 'a'
  }
  const changeAge = () => {
    person.age++
  }
  const changePerson = () => {
    Object.assign(person, {name: 'jerry', age: 20})
  }
  watch(person, (newVal, oldVal) => {
    console.log('person发生了改变', newVal, oldVal)
  })
  /*
  属性变化依旧新旧相同，与ref不同，这里就算改变了对象，还是新旧一样
  由于默认开启深度监听，所以修改属性也会触发watch
  注意：深度监视能够监视对象所有层级的变化。ref使用深度监视也可以同时监视地址值和监视对象属性
  注意：新旧一样，从地址值理解
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