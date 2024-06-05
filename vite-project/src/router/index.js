import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from '@/stores/store'
import HomeView from '../views/SignUp.vue'
import MapSelect from '@/views/MapSelect.vue'
import FreshWater from '@/views/FreshWater.vue'
import InShore from '@/views/InShore.vue'
import OffShore from '@/views/OffShore.vue'
// import UserProfile from '@/views/UserProfile.vue'
/* function requireAuth(){
  const { data, error } = await supabase.auth.getSession()
} */
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
      component: () => import('../views/SignIn.vue'),
    },
    {
      path: '/map',
      name: 'map',
      component: MapSelect,
      meta: {requiresAuth: true},
    },
    {
      path: '/freshwater',
      name: 'freshwater',
      component: FreshWater,
      meta: {requiresAuth: true},
    },
    {
      path: '/inshore',
      name: 'inshore',
      component: InShore,
      meta: {requiresAuth: true},

    },
    {
      path: '/offshore',
      name: 'offshore',
      component: OffShore,
      meta: {requiresAuth: true},
    },
  /*   {
      path: '/profile',
      name: 'profile',
      component: UserProfile,
      meta: {requiresAuth: true},
    } */

  ]
})
router.beforeEach((to, from, next) => {

  const store = useStore();
  if (to.meta.requiresAuth && !store.isAuthenticated) {
    next({ name: 'about' })
  } else {
    next()
  }
});
export default router
