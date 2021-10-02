<template>
  <app-main-layout>
    <div class="header">
      <span class="header-title">
        Identifiant de réunion: {{ $route.params.meetingId }}
      </span>
      <br>
      <span class="header-title">
        Participant: {{ players.length }}
      </span>
      <br>
      <!-- // TODO -->
      <!-- :disabled="!canPlay" -->
      <app-button
        v-if="isContributor"
        :size="'big'"
        @click="goToGame()">
        {{ $t('title.lets-go') }}
      </app-button>
    </div>
    <div class="player-list">
      <div
        v-for="p in players"
        :key="p.id"
        class="player">
        <span class="player-username">
          {{ p.username|shorten(8) }}
          <faIcon
            v-if="isContributor && p._id !== player._id"
            class="error"
            :icon="['fa', 'trash']"
            @click="openRemovePlayer(p)"/>
        </span>
        <img :src="p.picture" height="150" width="150">
      </div>
    </div>
    <app-modal
      v-if="isOpenPlayer"
      :open-modal="isOpenPlayer"
      :title="$t('modal.sure-delete')"
      @close="isOpenPlayer = false">
      <div class="modal-body">
        Voulez-vous supprimmer {{ selectedPlayer.username }} de cette réunion?
      </div>
      <div class="modal-action">
        <app-button
          type="error"
          @click="deletePlayer()">
          Valider
        </app-button>
        <app-button
          style="margin-left: 10px;"
          type="neutral"
          @click="isOpenPlayer = false">
          Annuler
        </app-button>
      </div>
    </app-modal>
  </app-main-layout>
</template>

<script>
import { mapGetters } from 'vuex'

const AppModal = () => import('../components/ui/AppModal')

export default {
  name: 'AppMeeting',
  components: {
    AppModal
  },
  data () {
    return {
      players: [],
      selectedPlayer: null,
      isOpenPlayer: false,
      isContributor: false,
      canPlay: false
    }
  },
  computed: {
    meetingId: function () {
      return this.$route.params.meetingId
    },
    ...mapGetters({
      player: 'player/getPlayer'
    })
  },
  mounted () {
    this.$socket.emit('joinRoom', this.meetingId)

    this.$store.dispatch('meeting/isContributor', this.meetingId)
      .then(response => { this.isContributor = response })

    this.$store.dispatch('meeting/canPlay', this.meetingId)
      .then(response => { this.canPlay = response })

    this.$store.dispatch('player/getPlayer')
      .then(response => {
        this.$socket.emit('getMeetingPlayers', {
          meetingIdentifier: this.meetingId,
          player: response
        })
      })
  },
  sockets: {
    getPlayers (players) {
      this.players = players
    },
    deletedMeetingPlayer (player) {
      this.isOpenPlayer = false
      this.$store.dispatch('loader/stopLoading', 'AppMeeting/deletePlayer')
      if (this.player._id === player._id) {
        this.$store.dispatch('alert/create', {
          type: 'error',
          message: this.$t('snackbar.delete-player-error'),
          closable: true,
          autoCloseAfter: 5000
        })
        this.$router.go(-2)
      } else {
        this.$store.dispatch('alert/create', {
          type: 'success',
          message: this.$t('snackbar.delete-player-success', { player: player.username }),
          closable: true,
          autoCloseAfter: 5000
        })
      }
    },
    launchGame () {
      this.$router.push({ name: 'game', params: { gameId: this.meetingId } })
    }
  },
  methods: {
    goToGame: function () {
      if (this.players.length > 5 && this.players.length < 19) {
        this.$socket.emit('launchGame', { meetingIdentifier: this.meetingId })
      } else {
        this.$store.dispatch('alert/create', {
          type: 'error',
          message: this.$t('snackbar.players-size-error'),
          closable: true,
          autoCloseAfter: 5000
        })
      }
    },
    openRemovePlayer: function (player) {
      this.selectedPlayer = player
      this.isOpenPlayer = true
    },
    deletePlayer: function () {
      this.$store.dispatch('loader/startLoading', 'AppMeeting/deletePlayer')
      this.$socket.emit('deleteMeetingPlayer', {
        meetingIdentifier: this.meetingId,
        player: this.selectedPlayer
      })
    }
  }
}
</script>

<style lang="scss">
.header {
  width: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;

  .header-title {
    padding-right: 20px;
    font-weight: 800;
    font-size: 1.5rem;
  }
}

.error {
  cursor: pointer;
  color: $error;
}

.player-list {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .player {
    width: 160px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 15px;
    box-shadow: $box-shadow-medium;

    .player-username {
      font-weight: 800;
      font-size: 1.2rem;
      padding: 5px;
    }
  }
}

.app-modal .default-slot {
  justify-content: center;

  .modal-body {
    color: $neutral-darkest;
  }
  .modal-action {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding: 20px 0;
  }
}

</style>
