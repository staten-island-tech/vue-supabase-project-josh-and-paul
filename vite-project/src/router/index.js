import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/SignUp.vue'
import MapSelect from '@/views/MapSelect.vue'
import FreshWater from '@/views/FreshWater.vue'
import InShore from '@/views/InShore.vue'
import OffShore from '@/views/OffShore.vue'
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
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("userToken") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      });
    } else {
      if (!store.state.isAuthenticated) {
        next({
          path: "/login",
          params: { nextUrl: to.fullPath },
        });
      } else {
        next();
      }
    }
  } else {
    next();
  }
});
export default router
