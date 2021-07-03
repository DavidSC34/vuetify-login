import Vue from 'vue'
import VueRouter from 'vue-router'

import { auth } from '@/firebase';


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Home.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/ingreso',
        name: 'ingreso',

        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Ingreso.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

//Rutas protegidas
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {

        const user = auth.currentUser;
        console.log(user)

        if (user) {
            next()
        } else {
            next({
                path: '/ingreso'
            });
        }

    } else {
        next()
    }
})

export default router