import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/http'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    isLoadingTodos: false,
    isErrorTodos: false
  },
  mutations: {
    REQUEST_TODOS (state) {
      state.isLoadingTodos = true
    },
    REQUEST_TODOS_SUCCESS (state, todos) {
      state.isLoadingTodos = false
      state.todos = todos
    },
    REQUEST_TODOS_ERROR (state) {
      state.isLoadingTodos = false
      state.isErrorTodos = true
    }
  },
  actions: {
    async fetchTodos ({ commit }) {
      try {
        const data = await http.getTodos()
        commit('REQUEST_TODOS_SUCCESS', data)
      } catch {
        commit('REQUEST_TODOS_ERROR')
      }
    }
  },
  modules: {
  }
})
