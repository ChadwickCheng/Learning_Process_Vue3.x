import {defineStore} from 'pinia'
import axios from 'axios'
import {nanoid} from 'nanoid'
import {reactive} from 'vue'

// export const useTalkStore = defineStore('talk',{
//   state(){
//     return {
//       talkList: [{id:'a3c5613',title:'我喜欢你我喜欢你，就像老鼠喜欢大米'},
//       {id:'a3c5614',title:'草莓，蓝莓，蔓越莓今天你想我了没'},
//       {id:'a3c5615',title:'心里给你留了一块地我想种下你'},]
//     }
//   },
//   actions:{
//     async getATalk(){
//       let { data:{content:title} } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//       this.talkList.unshift({id:nanoid(),title})
//     }
//   }
// })
// 以上是选项式api 下面是组合式
export const useTalkStore = defineStore('talk',()=>{
  const talkList = reactive([{id:'a3c5613',title:'我喜欢你我喜欢你，就像老鼠喜欢大米'}])
  async function getATalk(){
    let { data:{content:title} } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    talkList.unshift({id:nanoid(),title})
  }
  return {talkList,getATalk}
})