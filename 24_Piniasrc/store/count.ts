import {defineStore} from 'pinia'

export const useCountStore = defineStore('count',{
  // 存储数据之地
  state(){
    return {
      sum:6
    }
  },
  // 存储方法之地 this是当前store
  actions:{
    increment(val:number){
      this.sum += val
    },
  },
  // getters对数据进行加工处理 this是当前store，所以也可以不接state，用this不用箭头函数，用的时候直接用或者解构
  getters:{
    bigSum(state){
      return state.sum * 10
    }
  }
})