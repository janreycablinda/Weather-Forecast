import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
    authenticated: false
  },
  getters: {
    user(state) {
      return state.user;
    },

    token(state) {
      return state.token;
    },

    authenticated(state) {
      return state.authenticated;
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, data) {
      state.user = data;
    },
    SET_AUTHENTICATED(state, data) {
      state.authenticated = data;
    }
  },
  actions: {
    async attempt({commit, state }, token) {
      if (token) {
        commit("SET_TOKEN", token);
      }

      if (!state.token) {
        return;
      }

      try {
        let response = await axios.get("me");
        commit("SET_USER", response.data);
      } catch (e) {
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
      }
    },

    signOut({ commit }) {
      return axios.post("logout").then(() => {
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
      });
    },

    async loginWithGithub(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios.get('auth/github/redirect').then((response) => {
            resolve(response)
        })
        .catch((error) => {
            reject(error);
        })
      })
    },
    
    async loginWithGithubCallback({commit}, payload, code) {
      return new Promise((resolve, reject) => {
        axios.get('auth/github/callback', {
            params: code
        }).then((response) => {
            if(response.data.access_token){
                localStorage.setItem('token', response.data.access_token);
                commit('SET_AUTHENTICATED', true);
            }
            resolve(response)
        })
        .catch((error) => {
            reject(error);
        })
      })
    },
  }
};
