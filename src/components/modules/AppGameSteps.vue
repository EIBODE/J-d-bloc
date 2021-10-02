<template>
  <div class="steps">
    <div
      ref="messages"
      class="messages-wrapper">
      <div
        v-for="message in messages"
        :key="message.id"
        class="messages">
        <div class="message">
          <span class="message-header">
            {{ $t(`contact.${message.writer}`) }}:&nbsp;
            </span>
          <span class="message-message">
            {{
              $t(`game.${allMessages[message.message]}`, {
                player: message.player? message.player.username : null,
                players: message.players? getPlayersUsernames(message.players) : null
              })
            }}
          </span>
          <div
            v-if="message.action"
            class="message-percent">
            <div
              class="percent"
              :style="`width: ${message.percent}%`"/>
              <span style="z-index: 2;">
                {{message.percent}}&nbsp;%
              </span>
          </div>
          <div
            v-if="message.action && canShowMessage(message.to) &&!isDoneAction(message.done) && !gamePlayer.death"
            class="message-action">
            <app-button @click="isOpenModalSelectPlayer = true">
              {{ $t('label.select') }}
            </app-button>
            <component
              :is="getActionComponent(message.action)"
              v-if="isOpenModalSelectPlayer"
              :is-open="isOpenModalSelectPlayer"
              :players="getPlayersByMessage(message.to, message.players)"
              @close="receivePlayers($event, message.action)"/>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="isOpenNewMessages"
      class="more-messages-wrapper">
      <app-button
        class="more-messages"
        @click="clickNewMessages()">
        {{ $t('label.more-steps') }}
      </app-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const AppSelectPlayers = () => import('../ui/AppSelectPlayers')

export default {
  name: 'AppGameSteps',
  components: {
    selectCaptain: {
      props: ['isOpen', 'players'],
      components: { AppSelectPlayers },
      methods: {
        submit: function (players) {
          this.$emit('close', players)
        }
      },
      render: function (h) {
        return <AppSelectPlayers
          title={this.$t('title.select-your-captain')}
          is-open={this.isOpen}
          players={this.players}
          multiple={false}
          howManySelected={1}
          onSubmit={this.submit}/>
      }
    },
    clairvoyantSelect: {
      props: ['isOpen', 'players'],
      components: { AppSelectPlayers },
      methods: {
        submit: function (players) {
          this.$emit('close', players)
        }
      },
      render: function (h) {
        return <AppSelectPlayers
          title={this.$t('title.select-player')}
          is-open={this.isOpen}
          players={this.players}
          multiple={false}
          howManySelected={1}
          onSubmit={this.submit}/>
      }
    },
    werewolfSelect: {
      props: ['isOpen', 'players'],
      components: { AppSelectPlayers },
      methods: {
        submit: function (players) {
          this.$emit('close', players)
        }
      },
      render: function (h) {
        return <AppSelectPlayers
          title={this.$t('title.select-victim')}
          is-open={this.isOpen}
          players={this.players}
          multiple={false}
          howManySelected={1}
          onSubmit={this.submit}/>
      }
    },
    voteSelect: {
      props: ['isOpen', 'players'],
      components: { AppSelectPlayers },
      methods: {
        submit: function (players) {
          this.$emit('close', players)
        }
      },
      render: function (h) {
        return <AppSelectPlayers
          title={this.$t('title.vote')}
          is-open={this.isOpen}
          players={this.players}
          multiple={false}
          howManySelected={1}
          onSubmit={this.submit}/>
      }
    },
    captainSelect: {
      props: ['isOpen', 'players'],
      components: { AppSelectPlayers },
      methods: {
        submit: function (players) {
          this.$emit('close', players)
        }
      },
      render: function (h) {
        return <AppSelectPlayers
          title={this.$t('title.select-player')}
          is-open={this.isOpen}
          players={this.players}
          multiple={false}
          howManySelected={1}
          onSubmit={this.submit}/>
      }
    },
    changeCaptain: {
      props: ['isOpen', 'players'],
      components: { AppSelectPlayers },
      methods: {
        submit: function (players) {
          this.$emit('close', players)
        }
      },
      render: function (h) {
        return <AppSelectPlayers
          title={this.$t('title.select-player')}
          is-open={this.isOpen}
          players={this.players}
          multiple={false}
          howManySelected={1}
          onSubmit={this.submit}/>
      }
    }
  },
  props: {
    players: {
      type: Array,
      required: true
    },
    messages: {
      type: Array,
      required: true
    },
    captain: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isOpenModalSelectPlayer: false,
      isOpenNewMessages: false
    }
  },
  computed: {
    token: function () {
      return localStorage.getItem('token')
    },
    gamePlayer: function () {
      return this.players.find(p => this.ownPlayer._id === p._id)
    },
    ...mapGetters({
      ownPlayer: 'player/getPlayer',
      allMessages: 'meeting/allMessages'
    })
  },
  mounted () {
    this.$ready(() => {
      this.clickNewMessages()
    })
  },
  updated () {
    if ((this.$refs.messages.scrollHeight - this.$refs.messages.offsetHeight - this.$refs.messages.scrollTop) >= 10) {
      this.isOpenNewMessages = true
    } else {
      this.$refs.messages.scrollTo(0, this.$refs.messages.scrollHeight)
    }
  },
  methods: {
    getOwnPlayerInPlayers: function () {
      return this.players.find(p => p._id === this.ownPlayer._id)
    },
    canShowMessage: function (to) {
      return to === '*' ||
        (to === 'captain' && this.ownPlayer._id === this.captain) ||
        (this.getOwnPlayerInPlayers() && this.getOwnPlayerInPlayers().role === to && !this.getOwnPlayerInPlayers().death)
    },
    getActionComponent: function (action) {
      return action
    },
    isDoneAction: function (done) {
      return done.includes(this.token)
    },
    getPlayersByMessage: function (to, players) {
      if (to === 'captain') {
        return players
      }

      return this.players.filter(p => {
        if (p._id === this.ownPlayer._id) {
          return false
        }

        switch (to) {
          case '*':
            return !p.death
          case 'clairvoyant':
            return p.role !== 'clairvoyant' && !p.death
          case 'werewolf':
            return p.role !== to && !p.death
          default:
            return false
        }
      })
    },
    receivePlayers: function (players, action) {
      this.$emit('messageAction', { players, action })
      this.isOpenModalSelectPlayer = false
    },
    clickNewMessages: function () {
      this.$refs.messages.scrollTo(0, this.$refs.messages.scrollHeight)
      this.isOpenNewMessages = false
    },
    $ready (fn) {
      setTimeout(() => {
        this.$nextTick(fn)
      }, 500)
    },
    getPlayersUsernames: function (players) {
      return players.map(p => p.username).join(this.$t('label.and'))
    }
  }
}
</script>

<style lang="scss" scoped>
.message-action {
  width: calc(100% - 30px);
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.message-percent {
  position: relative;
  width: 100%;
  height: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: $neutral-lightest;
  color: $neutral-light-absolute;

  .percent {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.2rem;
    border-radius: 15px;
    background: $default;
  }
}

.steps {
  height: 100%;
  width: 100%;
  position: relative;
  display: block;
}

.messages-wrapper {
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  position: absolute;
  bottom: 0;
  scrollbar-width: thin;

  .messages {
    width: calc(100% - 10px);
    padding: 5px;

    .message {
      width: 100%;
      font-size: 1rem;

      .message-header {
        font-weight: 800;
      }
      .message-message {
        padding-left: 10px;
      }
    }
  }
}

.more-messages-wrapper {
  position: absolute;
  bottom: 10px;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;

  .more-messages {
    border-radius: 50px;
  }
}
</style>
