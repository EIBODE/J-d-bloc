<template>
  <app-game-layout>
    <template #left>
      <app-game-left-menu
        :players="players"
        :captain="captain"/>
    </template>
    <template #right>
      <app-game-stats
        v-if="player && players"
        :players="players"/>
      <app-game-steps
      :players="players"
      :messages="messages"
      :captain="captain"
      @messageAction="getMessageAction($event)"/>
    </template>
  </app-game-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import AppGameLayout from '../components/layout/AppGameLayout'
import AppGameLeftMenu from '../components/modules/AppGameLeftMenu'
import AppGameStats from '../components/modules/AppGameStats'
import AppGameSteps from '../components/modules/AppGameSteps'

export default {
  name: 'AppGame',
  components: {
    AppGameLayout,
    AppGameLeftMenu,
    AppGameStats,
    AppGameSteps
  },
  data () {
    return {
      players: [],
      player: {},
      messages: [],
      captain: ''
    }
  },
  computed: {
    token: function () {
      return localStorage.getItem('token')
    },
    meetingId: function () {
      return this.$route.params.gameId
    },
    gamePlayer: function () {
      return this.players.find(p => p._id === this.ownPlayer._id)
    },
    ...mapGetters({
      ownPlayer: 'player/getPlayer'
    })
  },
  mounted () {
    this.$socket.emit('joinRoom', this.meetingId)
    this.$store.dispatch('player/getPlayer')
    this.$socket.emit('gameInit', {
      token: this.token,
      meetingIdentifier: this.meetingId
    })
  },
  sockets: {
    game (meeting) {
      this.players = meeting.players
      this.messages = meeting.steps
      this.captain = meeting.captain
    },
    resultAction (resultAction) {
      if (resultAction.for === '*' || resultAction.for === this.gamePlayer.role) {
        this.$store.dispatch('resultAction/create', resultAction)
      }
    }
  },
  methods: {
    getMessageAction: function ({ players, action }) {
      this.$socket.emit(action, {
        token: this.token,
        meetingIdentifier: this.meetingId,
        players
      })
    }
  }
}
</script>

<style lang="scss">

</style>
