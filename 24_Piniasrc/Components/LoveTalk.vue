<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句清华</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">
        <h3>{{ talk.title }}</h3>
      </li>
    </ul>
  </div>
</template>

<script setup lang='ts' name='LoveTalk'>
  import { reactive } from 'vue'
  import {useTalkStore} from '../store/loveTalk'
  const talkStore = useTalkStore()
  import axios from 'axios'
  import {nanoid} from 'nanoid'
  // const getLoveTalk = async () => {
  //   let { data:{content:title} } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
  //   // console.log(data)
  //   talkList.unshift({id:nanoid(),title})
  // }

  // $subscribe订阅数据变化
  talkStore.$subscribe((mutate,state)=>{
    console.log('数据变化了')
    console.log('本次修改的信息：',mutate)
    console.log('真正的数据：',state)
  })

  function getLoveTalk(){
    talkStore.getATalk()
  }
</script>

<style scoped>
  .talk {
    background-color: pink;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    margin-top: 20px;
  }
</style>