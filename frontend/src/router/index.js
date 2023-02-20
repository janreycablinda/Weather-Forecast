import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Authentication/LoginView.vue'
import loginWithGithub from '../views/Authentication/LoginWithGithub.vue'
import Home from '../views/Pages/Home/Home.vue'
import Weather from '../views/Pages/Weather/Weather.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false
    },
  },
  {
    path: '/auth/github/callback',
    name: 'loginWithGithub',
    component: loginWithGithub,
    meta: {
      requiresAuth: false
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/weather',
    name: 'Weather',
    component: Weather,
    meta: {
      requiresAuth: true
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
    if (!store.getters["auth/authenticated"]) {
      next({
        name: "Login"
      });
    }else{
      next();
    }
  }else{
    next();
  }
});

export default router
