<template>
  <app-main-layout>
    coucou
  </app-main-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppGame',
  data () {
    return {
      players: [],
      player: {},
      messages: []
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

<style lang="scss" scoped>

</style>
