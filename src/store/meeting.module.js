import { meetingService } from '../services'

const state = {
  meeting: null
}

const getters = {
  getMeeting: function (state) {
    return state.meeting
  },
  allMessages: function () {
    return {
      null: 'null',
      0: 'installation',
      1: 'select-your-captain',
      2: 'night-whole-village-falls-asleep-the-players-close-their-eyes',
      3: 'preparation-round',
      4: 'thief-waking-up',
      5: 'thief-back-sleep',
      6: 'cupid-awakes',
      7: 'cupid-back-sleep',
      8: 'lovers-wake-up-recognize-each-other-and-back-sleep',
      9: 'normal-round',
      10: 'clairvoyant-wakes-up-and-select-player-whose-true-personality-she-wants-probe',
      11: 'clairvoyant-back-sleep',
      12: 'werewolves-wake-up-recognize-each-other-and-select-new-victim',
      13: 'werewolves-back-sleep-and-dream-tasty-new-victims',
      14: 'witch-wakes-up-i-show-the-victim-of-werewolves-will-she-use-healing-potion-or-poisoning-potion',
      15: 'morning-village-wakes-up-everyone-wakes-up-and-opens-eyes-everyone-except',
      16: 'debate-begins',
      17: 'village-votes',
      18: 'you-voted-for-and-he-dead',
      19: 'night-survivors-back-sleep',
      20: 'your-captain-is',
      21: 'selected-player',
      22: 'clairvoyant-select',
      23: 'werewolf-select',
      24: 'werewolf-dead',
      25: 'players-dead',
      26: 'werewolves-show',
      27: 'village-select',
      28: 'player-selected',
      29: 'captain-select',
      30: 'players-equality',
      31: 'change-captain',
      32: 'werewolves-win',
      33: 'werewolves-loose'
    }
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
