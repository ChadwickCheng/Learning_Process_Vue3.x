import { createRouter,createWebHistory } from "vue-router";
import Right from "../views/Right.vue";
import Pics from "../views/Pics.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/right/:info",
      name: "Right",
      component: Right,
      props: true,
    },
    {
      path:'/home',
      name:'Home',
      component:Pics
    },
    {
      path:'/',
      redirect:'/home'
    }
  ],
});

export default router;