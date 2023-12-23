<template>
  <div class="person">
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    <!-- 由于程序员会写大量逻辑来操作值，所以这样写会导致插值表达式内比较臃肿 -->
    <!-- 全名：<span>{{ firstName }}-{{ lastName }}</span><br> -->
    全名：<span>{{ fullName }}</span><br>
    <button @click="changeFullName">将全名改为li-si</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import {ref,computed} from 'vue'
  const firstName = ref('zhang')
  const lastName = ref('san')
  /*
  由于vue3弱化this，箭头函数请随意使用
  计算属性只有在依赖的值发生变化时才会重新计算。
  方法没有缓存，调用几次就执行几次。计算属性有缓存，只要依赖的值不变，就不会重新计算。
  方法需要调用，计算属性直接使用即可。
  */

  /*
  直接这样写的计算属性是只读的.因为修改表单数据导致计算属性所依赖的数据发生变化
  注意：计算属性是computedrefimpl 有value(只读，不可修改)
  */
  // const fullName = computed(() => {
  //   return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1) + '-' + lastName.value
  // })
  // const changeFullName = () => {
  //   fullName.value = 'li-si'
  // }

  /*
  这样定义的计算属性可读可写
  */
  const fullName = computed({
    get(){
      return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1) + '-' + lastName.value
    },
    set(val){
      const arr = val.split('-')
      firstName.value = arr[0]
      lastName.value = arr[1]
    }
  })
  const changeFullName = () => {
    fullName.value = 'li-si'
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