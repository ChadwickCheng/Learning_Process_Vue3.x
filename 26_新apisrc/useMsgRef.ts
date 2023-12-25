import {customRef} from 'vue'

export default function(val:string,delay:number = 1000){
  let initValue = val
  let timer:number
  let msg:any = customRef((track, trigger) => {
    return {
      // msg读取时调用
      get() {
        track()//第一个用 告知vue追踪msg，msg变化时就更新
        return initValue
      },
      // msg更新时调用
      set(newVal) {
        clearTimeout(timer)
        setTimeout(()=>{
          initValue = newVal
          trigger()//最后一个用 通知vue数据msg变化了，更新视图
        },delay)
      }
    }
  })
  // 一般是写成hooks
  return {msg}
}