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
          path:'detail',
          component:Detail
        }
      ]
    }
  ]
})

export default router;
/*
路由传参有两种：query params

query：
  1. 路径携带参数
  2. 对应组件接受
  3. :to需要在""内写``再写模板字符串 不常用
  4. 用:to的对象写法配置query参数
    path需要写全路径 name只需要写name
*/