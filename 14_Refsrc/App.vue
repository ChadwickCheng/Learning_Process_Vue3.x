<template>
  <h2 ref="title2">hello</h2>
  <button @click="showLog">test</button>
  <Person ref="ren"/>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue'
  import {ref} from 'vue'
  let title2 = ref()
  let ren = ref()
  const showLog = () => {
    console.log(title2.value);
    console.log(ren.value);// ref放在组件标签获得组件实例,子组件需要暴露数据,父组件才能得到
  }
</script>

<style>
  
</style>