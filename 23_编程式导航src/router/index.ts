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
          component:Detail,
          // props:true

          props(route){
            return {
              id:route.params.id,
              title:route.params.title,
              content:route.params.content
            }
          }

          // props:{
          //   a:100,
          // }
        }
      ]
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})

export default router;
/*
编程式导航 示例代码在home news组件
之前的导航使用routerlink，这最终会转为原生a标签。这需要用户点击才能跳转。
编程式导航：通过js代码实现路由的跳转，不会产生a标签。
典型场景：判断用户登录状态，如果登录了，就跳转到home，如果没有登录，就跳转到login
to怎么写，push就怎么写,也可以用replace.注意函数要设置参数传递以及接口限制类型

重定向
*/