import HomeView from '@/views/HomeView.vue'
import ScheduleView from '@/views/ScheduleView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: ScheduleView,
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    },
  ],
  scrollBehavior(to, from, savedPosition) {

    if (to.hash) return { el: to.hash, behavior: 'smooth' };

    if (savedPosition) return savedPosition;

    return { top: 0 }
  }
})

export default router
