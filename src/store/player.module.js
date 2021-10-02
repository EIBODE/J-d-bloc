import { playerService } from '../services'

const state = {
  player: null
}

const getters = {
  getPlayer: function (state) {
    return state.player
  },
  getRoles: function () {
    return {
      CLAIRVOYANT: 'clairvoyant',
      CUPID: 'cupid',
      HUNTER: 'hunter',
      LITTLE_GIRL: 'little-girl',
      THIEF: 'thief',
      VILLAGER: 'villager',
      WEREWOLF: 'werewolf',
      WITCH: 'witch'
    }
  }
}

const actions = {
  authenticate: function ({ dispatch, commit }, authenticate) {
    dispatch('loader/startLoading', 'player/authenticate', { root: true })
    return playerService.authenticate(authenticate)
      .then(response => commit('setPlayer', response))
      .finally(() => dispatch('loader/stopLoading', 'player/authenticate', { root: true }))
  },
  getPlayer: function ({ dispatch, commit }) {
    dispatch('loader/startLoading', 'player/getPlayer', { root: true })
    return playerService.getPlayer()
      .then(response => {
        commit('setPlayer', response)
        return response
      })
      .finally(() => dispatch('loader/stopLoading', 'player/getPlayer', { root: true }))
  },
  setPlayer: function ({ commit }, player) {
    commit('setPlayer', player)
  }
}

const mutations = {
  setPlayer: function (state, player) {
    state.player = player
    localStorage.setItem('token', player._id)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
