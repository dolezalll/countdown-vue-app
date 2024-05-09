import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/PostListView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import('../views/PostView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../components/404.vue')
    },
    {
      path: '/play/sobik/s01/e01',
      name: 'Sobik S01 E01',
      component: () => import('../views/Player.vue')
    }
  ]
})

export default router
