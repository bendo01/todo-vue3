import { createStore } from 'vuex';

export default createStore({
  state () {
    return {
      is_login: false,
      token: null,
      user: null
    }
  },
  getters: {
    isLogin(state) {
      return state.is_login;
    },
    getToken(state) {
      return state.token;
    },
    getUser(state) {
      return state.user;
    }
  },
  mutations: {
    loggedIn (state) {
      state.is_login = true;
    },
    loggedOut (state) {
      state.is_login = false;
    },
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = null;
    },
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
    }
  },
  actions: {
    loggedIn (context) {
      context.commit('loggedIn');
    },
    loggedOut (context) {
      context.commit('loggedOut');
    },
    setToken(context, token) {
      context.commit('setToken', token);
    },
    clearToken(context) {
      context.commit('clearToken');
    },
    setUser(context, user) {
      context.commit('setUser', user);
    },
    clearUser(context) {
      context.commit('clearUser');
    },
    logout(context) {
      context.commit('clearToken');
      context.commit('clearUser');
      context.commit('loggedOut');
    }
  },
  modules: {
  }
})
