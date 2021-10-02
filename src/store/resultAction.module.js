const state = {
  resultAction: {
    action: null,
    player: null,
    resume: null
  }
}

const getters = {
  getResultAction (state) {
    return state.resultAction
  }
}

const actions = {
  create ({ commit }, resultAction) {
    commit('create', resultAction)
  },
  clear ({ commit }) {
    commit('clear')
  }
}

const mutations = {
  create (state, resultAction) {
    state.resultAction = resultAction
  },
  clear (state) {
    state.resultAction = {
      action: null,
      player: null,
      resume: null
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
