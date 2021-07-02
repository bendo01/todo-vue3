import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      is_login: false
    }
  },
  mutations: {
    loggedIn (state) {
      state.is_login = true
    },
    loggedOut (state) {
      state.is_login = false
    },
  },
  actions: {
    loggedIn (context) {
      context.commit('loggedIn')
    },
    loggedOut (context) {
      context.commit('loggedOut')
    }
  },
  modules: {
  }
})
