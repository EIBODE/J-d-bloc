import { meetingService } from '../services'

const state = {
  meeting: null
}

const getters = {
  getMeeting: function (state) {
    return state.meeting
  }
}

const actions = {
  createMeeting ({ dispatch, commit }) {
    dispatch('loader/startLoading', 'meeting/createMeeting', { root: true })
    return meetingService.createMeeting()
      .then(response => {
        commit('setMeeting', response._id)
        return response
      })
      .finally(() => dispatch('loader/stopLoading', 'meeting/createMeeting', { root: true }))
  },
  setMeeting: function ({ commit }, meeting) {
    commit('setMeeting', meeting)
  },
  joinMeeting ({ dispatch, commit }, meetingIdentifier) {
    dispatch('loader/startLoading', 'meeting/joinMeeting', { root: true })
    return meetingService.joinMeeting(meetingIdentifier)
      .then(response => {
        commit('setMeeting', response)
        return response
      })
      .finally(() => dispatch('loader/stopLoading', 'meeting/joinMeeting', { root: true }))
  },
  getPlayers ({ dispatch }, meeting) {
    dispatch('loader/startLoading', 'meeting/getPlayers', { root: true })
    return meetingService.getPlayers(meeting)
      .then(response => response)
      .finally(() => dispatch('loader/stopLoading', 'meeting/getPlayers', { root: true }))
  },
  isContributor: function ({ dispatch }, meetingId) {
    dispatch('loader/startLoading', 'player/isContributor', { root: true })
    return meetingService.isContributor(meetingId)
      .then(response => response)
      .finally(() => dispatch('loader/stopLoading', 'player/isContributor', { root: true }))
  },
  canPlay: function ({ dispatch }, meetingId) {
    dispatch('loader/startLoading', 'player/canPlay', { root: true })
    return meetingService.canPlay(meetingId)
      .then(response => response)
      .finally(() => dispatch('loader/stopLoading', 'player/canPlay', { root: true }))
  }
}

const mutations = {
  setMeeting: function (state, meeting) {
    state.meeting = meeting
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
