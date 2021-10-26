/*
 * @Description:
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-26 09:16:12
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BasicLayout from '@/layout/BasicLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: BasicLayout,
    redirect: '/home',
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
