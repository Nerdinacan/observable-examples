import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Resources from '../views/Resources.vue'
import VueObservability from '../views/VueObservability.vue'
import HistoryNoObservables from "../views/HistoryNoObservables";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/resources',
        name: 'Resources',
        component: Resources
    },
    {
        path: '/vueobs',
        name: 'VueObservability',
        component: VueObservability
    },
    {
        path: '/historynoobs',
        name: 'HistoryNoObservables',
        component: () => import(/* webpackChunkName: "HistoryNoObservables" */ '../views/HistoryNoObservables.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
