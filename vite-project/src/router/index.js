import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/SignUp.vue'
import MapSelect from '@/views/MapSelect.vue'

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
    }
  ]
})

export default router
