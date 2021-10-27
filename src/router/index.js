/*
 * @Description:
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-26 09:16:12
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '@/layout/BasicLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: BasicLayout,
    redirect: '/home',
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/map',
        name: 'Map',
        component: () => import('../views/Map.vue'),
      },
      {
        path: '/ship',
        name: 'Ship',
        component: () => import('../views/Ship.vue'),
      },
      {
        path: '/tuolun',
        name: 'Tuolun',
        component: () => import('../views/Tuolun.vue'),
      },
      {
        path: '/maodi',
        name: 'Maodi',
        component: () => import('../views/Maodi.vue'),
      },
      {
        path: '/data',
        name: 'Data',
        component: () => import('../views/Data.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
