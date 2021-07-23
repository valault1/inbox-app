import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import CaptureView from '../views/CaptureView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/capture',
    name: 'Capture',
    component: CaptureView
  },
  {
    path: '/',
    name: 'Capture',
    component: CaptureView
  },
  {
    path: '/process',
    name: 'Process',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProcessView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router