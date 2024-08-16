import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Result from "./components/Result.vue"

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },{
        path: '/result?:query',
        name: 'Result',
        component: Result,
        props: route => ({ query: route.query.q })
    },{
        path: '/:pathMatch(.*)',
        component: () => import('./components/NotFound.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router