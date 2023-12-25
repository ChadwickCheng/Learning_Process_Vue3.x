<template>
  <div class="right">
      <div class="outer">
        <h2>father {{ info }}</h2>
        <i>不常用，但ui组件常用</i><br>
        <hr>
        <!-- v-model用于h5标签 -->
        <!-- <input type="text" v-model="username"> -->
        <!-- v-model本质 动态val+input事件 -->
        <!-- <input type="text" :value="username" @input="username=(<HTMLInputElement>$event.target).value"> -->

        <!-- 用于组件标签 -->
        <!-- v-model不能直接用 需要组件配合设置后才可以直接用 -->
        <KuonjiInput v-model="username" />
        <!-- 本质 @后面整体是个事件名 -->
        <!-- <KuonjiInput :modelValue="username" @update:modelValue="username=$event" /> -->
        <!-- 标准h5标签，原生事件，$event就是dom，可以.target.xxx
          组件标签，自定义事件，$event就是触发事件传输的数据，不可以.target.xxx
        -->
        <!-- v-model 父子间通讯 -->
        <h4>username: {{ username }}</h4>
        <!-- 修改modelvalue变量名,凡是和modelvalue处都可以修改 -->
        <!-- 用处,一个组件标签写多个v-model，组件文件写多个对应input -->
        <!-- <KuonjiInput v-model:qwe="username" /> -->
      </div>
    </div>
</template>

<script setup lang='ts' name='Vmodel'>
  defineProps(['info'])
  import {ref} from 'vue'
  import KuonjiInput from './KuonjiInput.vue'
  let username = ref('zhangsan')
</script>

<style scoped>
  
  .outer {
    width: 700px;
    height: 700px;
    background-color: #ccc;
  }
  
</style>