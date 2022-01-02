import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const home = () => import('../pages/Home.vue')
const login = () => import('../pages/Login.vue')

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: home,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
