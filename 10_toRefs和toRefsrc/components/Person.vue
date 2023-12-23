<template>
  <div class="person">
    <h2>name:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
    <h2>nl:{{ nl }}</h2>
    <button @click="changeName">change name</button>
    <button @click="changeAge">change age</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import {reactive,toRefs,toRef} from 'vue'
  const person = reactive({
    name: 'Max',
    age: 27
  })
  let {name, age} = toRefs(person)
  /*
  直接解构相当于
  let name = person.name 不是响应式
  加了toRefs，name就是refimpl对象，是响应式的
  console.log(toRefs(person)) // {name:refimpl,age:refimpl} 此时解构就是解构refimpl。这也意味着person.name是一个refimpl对象，此时模板可以写person.name也可以写name
  toRefs接受reactive对象，返回一个对象，对象的属性的属性值是refimpl对象
  */
  let nl = toRef(person,'name') // nl是refimpl对象
  const changeName = () => {
    name.value = 'Maximilian'
  }
  const changeAge = () => {
    age.value = 28
  }
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