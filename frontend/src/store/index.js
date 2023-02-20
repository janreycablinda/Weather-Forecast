import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./modules/auth";
import city from "./modules/city";
import weather from "./modules/weather";

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {},
  modules: {
    auth,
    city,
    weather
  }
});