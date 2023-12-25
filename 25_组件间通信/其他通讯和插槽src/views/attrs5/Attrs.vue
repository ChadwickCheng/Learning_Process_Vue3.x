<template>
  <div class="right">
      <div class="outer">
        <h2>爷爷 {{ info }}</h2>
        <h4>
          <span>a: {{ a }} </span>
          <span> b: {{ b }} </span>
          <span> c: {{ c }} </span>
          <span> d: {{ d }} </span>
        </h4>
        <RightInner :a="a" :b="b" :c="c" :d="d" v-bind="{x:100,y:200}" :sendVal="changeNum"/>
        <!-- 给组件传的数据，如果组件没接收，则数据在该组件实例的$attrs上 -->
        <!-- v-bind那个类似于 :x="100" -->
      </div>
    </div>
</template>

<script setup lang='ts' name='Attrs'>
  import RightInner from './RightInner.vue' 
  defineProps(['info'])

  import {ref} from 'vue'
  let a = ref(1)
  let b = ref(2)
  let c = ref(3)
  let d = ref(4)

  const changeNum = (val:any)=>{
    a.value+=val
  }
</script>

<style scoped>
  
  .outer {
    width: 700px;
    height: 700px;
    background-color: #ccc;
  }
  
</style>