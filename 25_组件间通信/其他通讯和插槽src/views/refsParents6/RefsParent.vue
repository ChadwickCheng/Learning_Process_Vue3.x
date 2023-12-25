<template>
  <div class="right">
      <div class="outer">
        <h2>father {{ info }}</h2>
        <h4>房产：{{ house }}</h4>
        <button @click="changeToy">点我把大儿子玩具修改</button>
        <button @click="getAllChild($refs)">获取所有孩子实例,并让书数量变多</button>
        <RightInner ref="c1"/>
        <Child2 ref="c2"/>
      </div>
    </div>
</template>

<script setup lang='ts' name='RefsParent'>
  import RightInner from './RightInner.vue' 
  import Child2 from './Child2.vue'
  defineProps(['info'])

  import {ref} from 'vue'
  let house = ref(4) 
  let c1 = ref()
  const changeToy = ()=>{
    c1.value.toy = '小汽车'
  }
  /*
  c1.value是组件实例 默认会保护数据，需要在对应组件暴露数据
  每个孩子设定ref，refs获取ref变成一个对象
  parent获取所有父亲
  */
  const getAllChild = (refs:{[key:string]:any})=>{
    // console.log(refs)
    for(let key in refs){
      refs[key].book += 2// 这里需要注意 ref在响应式对象里，读取时会自动解包，所以不需要.value
    }
  }
  defineExpose({
    house
  })
</script>

<style scoped>
  
  .outer {
    width: 700px;
    height: 700px;
    background-color: #ccc;
  }
  
</style>