import axios from "axios";

export default {
  namespaced: true,
  state: {
    weather: null
  },
  getters: {
    weather(state) {
      return state.weather;
    },
  },
  mutations: {
    SET_WEATHER(state, data) {
      state.weather = data;
    },
  },
  actions: {
    async fetchWeather({ commit }, data) {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=6a08b07ee5a61e1a9210cf18eb156e8a`);
        commit('SET_WEATHER', response);
      } catch (e) {
        console.log(e);
      }
    },
  }
};
