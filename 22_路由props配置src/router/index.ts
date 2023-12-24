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
    }
  ]
})

export default router;
/*
路由的props配置

第一种写法：props:true，将params参数作为props传递给路由组件
第二种写法：函数式 自行决定将什么作为props参数传递给路由组件
  route.query.xxx route.params.xxx 但是用params直接第一种
第三种写法：对象式 自行决定将什么作为props参数传递给路由组件
  这只能传死数据

replace
路由跳转会操作历史记录 push||replace 默认是push
routerllink加replace属性
*/