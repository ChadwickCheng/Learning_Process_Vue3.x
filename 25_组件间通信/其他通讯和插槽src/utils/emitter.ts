import mitt from 'mitt'

const emitter = mitt()

/*
// 绑定事件
emitter.on('test1',()=>{
  console.log('test1调用')
})
// 触发事件
setTimeout(()=>{
  emitter.emit('test1')
},2000)
// 解绑事件
setTimeout(()=>{
  // emitter.off('test1')
  emitter.all.clear()
},3000)
*/

export default emitter