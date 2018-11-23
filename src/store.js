import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: ''
  },
  mutations: {
    set_name (state, name) {
      state.name = name
    }
  },
  actions: {

  }
})
