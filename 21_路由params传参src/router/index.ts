// 创建并暴露路由器
import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import News from '../views/News.vue';
import Detail from '../views/Detail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      name:'zhuye',
      path:'/home',
      component:Home
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/news',
      component:News,
      children:[
        {
          name:'detail',
          path:'detail/:id/:title/:content?',
          component:Detail
        }
      ]
    }
  ]
})

export default router;
/*
路由传参有两种：query params

params:
  1. 跳转路径使用/分割参数
  2. 路由规则用:设置参数名占位
  3. 对应组件接受
  4. :to使用模板字符串
  4. :to对象写法注意
    必须使用命名路由
params不可以传对象类型数据
?设置可选参数
*/