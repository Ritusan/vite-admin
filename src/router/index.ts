import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const dashboard = () => import('../pages/dashboard/index.vue')
const home = () => import('../pages/Home.vue')
const login = () => import('../pages/Login.vue')
const todolist = () => import('../pages/todolist/index.vue')
const favorites = () => import('../pages/favorites/index.vue')

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
  },
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
  {
    path: '/todolist',
    name: 'todolist',
    component: todolist,
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: favorites,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
