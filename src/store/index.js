/**
 * Created by tengteng on 18/7/17.
 */

// vuex

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'hello vuex!'
  },
  mutations: {
    updateName(state, param) {
      state.name = param;
    }
  },
  getters: {
    getName(state) {
      return state.name;
    }
  },
  actions: {
    updateNameAction(context, param) {
      context.commit('updateName', param)
    }
  }
})