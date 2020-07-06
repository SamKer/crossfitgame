import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Home.vue'
import Profil from "../components/Profil/Profil";
import Friends from "../components/Friends/Friends";
import Contact from "../components/Contact/Contact";
import Rgpc from "../components/Rgpc/Rgpc";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profil',
        name: 'Profil',
        component: Profil
    },
    {
        path: '/friends',
        name: 'Friends',
        component: Friends
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/rgpc',
        name: 'policyrules',
        component: Rgpc
    },
    // {
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
    // }
]

const router = new VueRouter({
    routes
})

export default router
