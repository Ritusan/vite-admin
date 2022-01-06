import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const dashboard = () => import('../pages/dashboard/index.vue')
const home = () => import('../pages/Home.vue')
const login = () => import('../pages/Login.vue')
const todolist = () => import('../pages/todolist/index.vue')
const favorites = () => import('../pages/favorites/index.vue')
const frame = () => import('../pages/frame/index.vue')
const colors = () => import('../pages/colors/index.vue')
const examples = () => import('../pages/examples/index.vue')
const chart = () => import('../pages/chart/index.vue')
const calendar = () => import('../pages/calendar/index.vue')
const write = () => import('../pages/write/index.vue')
const notice = () => import('../pages/notice/index.vue')
const weather = () => import('../pages/weather/index.vue')
const flag = () => import('../pages/flag/index.vue')

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
  {
    path: '/frame',
    name: 'frame',
    component: frame,
  },
  {
    path: '/colors',
    name: 'colors',
    component: colors,
  },
  {
    path: '/examples',
    name: 'examples',
    component: examples,
  },
  {
    path: '/chart',
    name: 'chart',
    component: chart,
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: calendar,
  },
  {
    path: '/write',
    name: 'write',
    component: write,
  },
  {
    path: '/notice',
    name: 'notice',
    component: notice,
  },
  {
    path: '/weather',
    name: 'weather',
    component: weather,
  },
  {
    path: '/flag',
    name: 'flag',
    component: flag,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
