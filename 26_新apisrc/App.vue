<template>
  <div class="app">
    <h2>sum: {{ sum }}</h2>
    <h2>person name: {{ person.name }}</h2>
    <h2>person age: {{ person.age }}</h2>
    <button @click="changeSum">sum+1</button>
    <button @click="changeName">change name</button>
    <button @click="changeAge">change age</button>
    <button @click="changePerson">change person</button>
    <hr>
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg">
    <hr>
    <div class="outer">
      <h2>app component</h2>
      <img src="../public/屏幕截图 2021-10-29 073834.png" alt="witch">
      <hr>
      <Modal />
    </div>
    <hr>
    <Suspense>
      <!-- 异步任务结束时出现 -->
      <template #default>
        <Child />
      </template>
      <!-- 异步任务未结束时出现 -->
      <template #fallback>
        <h2>loading...</h2>
      </template>
    </Suspense>
    <hr>
    <!-- component -->
    <Hello></Hello>
    <hr>
    <!-- config -->
    <h2>$myName: {{ $myName }}</h2>
    <hr>
    <!-- directive -->
    <h2 v-beauty="sum">很开心</h2>
  </div>
</template>

<script setup lang='ts' name='App'>
  import {ref,shallowRef,shallowReactive,readonly,customRef} from 'vue'
  /*
  shallowRef只处理第一层响应式
  ref处理所有层响应式
  使用场景：对于一个庞大的对象，我们只会全部替换，或者改第一层

  提一嘴：reactive定义的对象不能被替代只能assign
  shallowReactive也是只处理第一层响应式

  readonly和shallowReadonly
  readonly所有层都只读
  shallowReadonly只有第一层是只读，其余层可以修改

  toRaw 将响应式对象转为原始数据.发给外部系统时可以包裹响应式
  markRaw 将一个对象标记为不可响应，返回对象本身。此后就算再用ref或reactive包裹也不是响应式的了

  customRef 自定义ref 参考hooks

  teleport 参考modal

  suspense 异步组件 参考child

  app.component 注册全局组件 在main.ts设置

  app.config 全局配置 在main.ts设置

  app.directive 全局指令 在main.ts设置

  app.mount
  app.unmount
  app.use
  */

  let sum = ref(0)
  let person = ref({name: 'xiaoming', age: 18})
  const changeSum = () => {
    sum.value++
  }
  const changeName = () => {
    person.value.name = 'xiaohong'
  }
  const changeAge = () => {
    person.value.age++
  }
  const changePerson = () => {
    person.value = {name: 'tom', age: 20}
  }

  let sum2 = readonly(sum)// 改sum会改变sum2，改变sum2无法

  // vue提供的默认ref
  // let msg = ref('hello')
  // 我需要等一秒更新
  // 见hooks
  import useMsgRef from './useMsgRef'
  let {msg} = useMsgRef('ahshs',1000)
  // 这样就可以在ref增添自己的功能

  import Modal from './Modal.vue'

  import Child from './Child.vue'
  import {Suspense} from 'vue'

</script>

<style scoped>
  .app {
    background-color: #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
  }
  img{
    width: 300px;
    height: 300px;
  }
  .outer{
    background-color: #ddd;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 10px;
    filter: saturate(0%);
  }
</style>