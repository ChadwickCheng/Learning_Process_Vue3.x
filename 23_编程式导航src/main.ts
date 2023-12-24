import {createApp} from 'vue'// 引入createApp用于创建应用
import App from './App.vue'// 引入app根组件
import router from './router'// 引入路由器

const app = createApp(App)
app.use(router)
app.mount('#app')