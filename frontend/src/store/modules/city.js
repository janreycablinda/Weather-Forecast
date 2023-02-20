import axios from "axios";

export default {
  namespaced: true,
  state: {
    cities: []
  },
  getters: {
    cities(state) {
        return state.cities;
    }
  },
  mutations: {
    SET_CITY(state, cities) {
        state.cities = cities;
    }
  },
  actions: {
    async filterCity({commit}, city) {
      try {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=6a08b07ee5a61e1a9210cf18eb156e8a`);
        commit('SET_CITY', response.data);
      } catch (e) {
        console.log(e); 
      }
    },
  }
};
