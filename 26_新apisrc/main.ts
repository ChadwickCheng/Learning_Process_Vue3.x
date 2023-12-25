import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App)

// 注册全局组件 此时hello可以随处使用
import Hello from './Hello.vue'
app.component('Hello', Hello)

app.config.globalProperties.$myName = 'Gavin'
declare module 'vue' {
  interface ComponentCustomProperties {
    $myName:string //解决ts报错
  }
}

app.directive('beauty',(ele,{value})=>{
  ele.innerText += value
  ele.style.color = 'green'
  ele.sty.backgroundColor = 'pink'
})

app.mount('#app')