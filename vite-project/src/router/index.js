import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/SignUp.vue'
import MapSelect from '@/views/MapSelect.vue'
import FreshWater from '@/views/FreshWater.vue'
import InShore from '@/views/InShore.vue'
import OffShore from '@/views/OffShore.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SignIn.vue'),
    },
    {
      path: '/map',
      name: 'map',
      component: MapSelect
    },
    {
      path: '/freshwater',
      name: 'freshwater',
      component: FreshWater,
    },
    {
      path: '/inshore',
      name: 'inshore',
      component: InShore,
    },
    {
      path: '/offshore',
      name: 'offshore',
      component: OffShore,
    },

  ]
})

export default router
