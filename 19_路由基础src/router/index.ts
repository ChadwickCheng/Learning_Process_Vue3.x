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
          path:'detail',
          component:Detail
        }
      ]
    }
  ]
})

export default router;
/*
本文件夹创建router
main.ts中引入router
App.vue中使用router

路由组件一般放在pages||views文件夹中
一般组件放在components文件夹中

切换的路由组件默认是被卸载，需要时再挂载

工作模式：
1.history：前台建议
  优点：url不带#
  缺点：后期项目上线，需要后端配合处理路径，否则刷新页面会出现404
2.hash：后台建议
  优点：兼容性好，不需要服务器端处理路径
  缺点：不好看，seo优化差

to两种写法：
1. to='/home'
2. :to='{path:'/home'}'
  优点：可以传递params/query

命名路由：配置name属性，跳转时使用name属性值，注意使用对象类型to

综上三种跳转方式：to to+path to+name

注意/代表的默认路由，即根路由

嵌套路由：展示区还有导航区+展示区
路由配置时不要加/ routerlink时要把路径也全
*/