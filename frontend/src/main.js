import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/tailwind.css'

Vue.config.productionTip = false
require("@/store/subscriber")

axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL + "/api/"

store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})

