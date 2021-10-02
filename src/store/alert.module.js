const state = {
  alert: {
    type: null,
    message: null,
    closable: true,
    autoCloseAfter: null,
    position: 'bottom-left'
  }
}

const getters = {
  getAlert (state) {
    return state.alert
  }
}

const actions = {
  create ({ commit }, alert) {
    commit('create', alert)
  },
  clear ({ commit }) {
    commit('clear')
  }
}

const mutations = {
  create (state, alert) {
    state.alert = alert
  },
  clear (state) {
    state.alert = {
      type: null,
      message: null,
      closable: true,
      autoCloseAfter: null,
      position: 'bottom-left'
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
