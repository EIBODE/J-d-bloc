const state = {
  currentlyLoading: []
}

const getters = {
  isLoading (state) {
    return state.currentlyLoading.length > 0
  }
}

const actions = {
  startLoading ({ commit }, source) {
    commit('startLoading', source)
  },
  stopLoading ({ commit }, source) {
    commit('stopLoading', source)
  }
}

const mutations = {
  startLoading (state, source) {
    state.currentlyLoading.push(source)
  },
  stopLoading (state, source) {
    state.currentlyLoading = state.currentlyLoading.filter(element => element !== source)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
