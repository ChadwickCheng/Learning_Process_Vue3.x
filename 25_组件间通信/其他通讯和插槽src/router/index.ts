import { createRouter,createWebHistory } from "vue-router";
import Right from "../views/Right.vue";
import Pics from "../views/Pics.vue";
import CustomEvent from "../views/customEvent2/CustomEvent.vue";
import Mitt from "../views/mitt3/Mitt.vue";
import Vmodel from "../views/vModel4/Vmodel.vue";
import Attrs from '../views/attrs5/Attrs.vue'
import RefsParent from '../views/refsParents6/RefsParent.vue'
import Provide from '../views/provideInject7/Provide.vue'
import Piniaa from '../views/pinia8/Piniaa.vue'
import Slott from '../views/slot9/Slott.vue'

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
      path:'/customEvent/:info',
      name:'CustomEvent',
      component:CustomEvent,
      props: true,
    },
    {
      path:'/mitt/:info',
      name:'Mitt',
      component:Mitt,
      props: true,
    },
    {
      path:'/vmodel/:info',
      name:'Vmodel',
      component:Vmodel,
      props: true,
    },
    {
      path:'/attrs/:info',
      name:'Attrs',
      component:Attrs,
      props: true,
    },
    {
      path:'/refs/:info',
      name:'RefsParent',
      component:RefsParent,
      props: true,
    },
    {
      path:'/provide/:info',
      name:'Provide',
      component:Provide,
      props: true,
    },
    {
      path:'/pinia/:info',
      name:'Piniaa',
      component:Piniaa,
      props: true,
    },
    {
      path:'/slot/:info',
      name:'Slott',
      component:Slott,
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