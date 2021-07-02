import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    ccomponent: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/ingreso',
    name: 'ingreso',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Ingreso.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
