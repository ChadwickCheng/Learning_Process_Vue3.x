<template>
  <div class="count">
    <h2>当前求和为：{{ countStore.sum }},放大十倍后：{{ bigSum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="minus">-</button>
  </div>
</template>

<script setup lang='ts' name='Count'>
  import {ref} from 'vue'
  import {useCountStore} from '../store/count'
  import { storeToRefs } from 'pinia';
  const countStore = useCountStore()
  // console.log(countStore);// proxy对象 其中有个sum属性，是refimpl类型，直接.sum 或者.$state.sum
  // 注意 proxy里的refimpl，获取值不需要.value

  /*
  toRefs缺点：太重了，会把store所有数据都打成ref
  storeToRefs优点：只关注store中的数据，不会把store中的方法也打成ref
  */
  const {sum,bigSum} = storeToRefs(countStore)

  /*
  修改数据三种方式
  1. pinia允许直接修改数据
  2. patch批量修改
  3. 通过actions修改.在store对应文件配置actions。actions好处在于可以处理固定逻辑实现复用
  */
  const n = ref(1)
  function add(){
    // countStore.sum += n.value

    // countStore.$patch({
    //   sum: countStore.sum + n.value
    // })

    countStore.increment(n.value)
  }
  const minus = () => countStore.sum -= n.value
</script>

<style scoped>
  .count{
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button {
    margin: 0 5px;
    height: 25px;
  }
</style>