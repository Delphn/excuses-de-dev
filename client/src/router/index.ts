import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/lost',
      name: 'lost',
      component: () => import('@/views/Lost.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue')
    },
    {
      path: '/error/:code',
      name: 'error-code',
      component: () => import('@/views/ErrorCode.vue')
    }
  ]
})

export default router
