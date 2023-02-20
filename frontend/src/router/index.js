import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Authentication/LoginView.vue'
import loginWithGithub from '../views/Authentication/LoginWithGithub.vue'
import Home from '../views/Pages/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/auth/github/callback',
    name: 'loginWithGithub',
    component: loginWithGithub
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
