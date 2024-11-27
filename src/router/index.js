import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GetStartedView from '@/views/GetStartedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/get-started',
      name: 'get-started',
      component: GetStartedView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.name === 'get-started') {
      return { top: 10 }; // Scroll to the top for the Get Started page
    } else if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return {
        top: 0
      };
    }
  },
});

export default router
