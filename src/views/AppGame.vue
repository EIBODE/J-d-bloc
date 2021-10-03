<template>
  <app-main-layout>
    <div v-if="iAmAuthor" class="author">
      <template v-if="step === 'loading'">
        <div>LOADING...</div>
      </template>
      <template v-if="step === 'question'">
        <app-button @click="handleNextStep">Suivant</app-button>
        <div class="author-question">
          <app-loader :timer="30" />
          <h2>{{getAnswers.question}}</h2>
          <img :src="getAnswers.image" class="picture"/>
          <app-show-owner-response :answers="getAnswers.responses"/>
        </div>
      </template>
      <template v-else-if="step === 'stats'">
        <app-button @click="handleNextStep">Suivant</app-button>
        <div>
          <app-show-owner-response :answers="getAnswers.responses"  :response="getAnswers.response" :stats="stats"/>
        </div>
      </template>
      <template v-else-if="step === 'podium'">
        <div>PODIUM</div>
      </template>
      <template v-else>
        <div>FINAL PODIUM</div>
      </template>
    </div>
    <div v-else class="no-author">
      <template v-if="step === 'loading'">
        <div>LOADING...</div>
      </template>
      <template v-if="step === 'question'">
        <template v-if="!isScoreShow">
          <app-loader :timer="30" />
          <app-show-not-owner-response
            :answers="getAnswers.responses"
            @choose="handleClickNotHownerResponse($event)"
          />
        </template>
        <div v-else class="stats">
          <h2 v-if="actualScore.success" class="success">BRAVO</h2>
          <h2 v-else class="error">DOMMAGE</h2>
          <p>Votre score: {{actualScore.score}}</p>
        </div>
      </template>
      <template v-else-if="step === 'stats' || step === 'podium'">
        <div class="stats">
          <h2 v-if="actualScore.success" class="success">BRAVO</h2>
          <h2 v-else class="error">DOMMAGE</h2>
          <p>Votre score: {{actualScore.score}}</p>
        </div>
      </template>
      <template v-else>
        <div>FINAL PODIUM</div>
      </template>
    </div>
  </app-main-layout>
</template>

<script>
import { mapGetters } from 'vuex'

import AppLoader from '../components/ui/AppLoader.vue'
import AppShowNotOwnerResponse from '../components/modules/AppShowNotOwnerResponse.vue'
import AppShowOwnerResponse from '../components/modules/AppShowOwnerResponse.vue'

export default {
  name: 'AppGame',
  components: {
    AppShowNotOwnerResponse,
    AppShowOwnerResponse,
    AppLoader
  },
  data () {
    return {
      counter: [],
      players: [],
      player: {},
      step: 'question',
      stats: [],
      questions: [],
      questionsIndex: 0,
      author: null,
      actualScore: {
        score: 0,
        success: true
      }
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
    iAmAuthor: function () {
      return this.author !== null && this.ownPlayer && this.author === this.ownPlayer._id
    },
    getLastStep: function () {
      return this.steps[this.steps.length - 1]
    },
    getAnswers: function () {
      return this.questions && this.questions[this.questionsIndex]
    },
    isScoreShow: function () {
      return this.counter.find(p => p === this.token)
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
      this.step = meeting.step
      this.counter = meeting.counter
      this.stats = meeting.stats
      this.author = meeting.author
      this.questions = meeting.questions
      this.questionsIndex = meeting.questionsIndex
    }
  },
  methods: {
    getMessageAction: function ({ players, action }) {
      this.$socket.emit(action, {
        token: this.token,
        meetingIdentifier: this.meetingId,
        players
      })
    },
    handleClickNotHownerResponse: function (response) {
      const lastScore = this.players.find(p => p._id === this.token).score
      const isWin = response === this.getAnswers.response

      this.actualScore = {
        score: lastScore + (isWin ? 1 : 0),
        success: isWin
      }
      this.isScoreShow = isWin

      this.$socket.emit('chooseResponse', {
        token: this.token,
        meetingIdentifier: this.meetingId,
        payload: response,
        time: new Date()
      })
    },
    handleNextStep: function () {
      this.$socket.emit('nextStep', {
        token: this.token,
        meetingIdentifier: this.meetingId
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.no-author {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .stats {
    font-size: 40;
    font-weight: bold;
    color: $neutral-light-absolute;
    background: $neutral-dark;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    .success {
      color: $success;
    }
    .error {
      color: $error;
    }
  }
}

.author {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  .author-question {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h2 {
      padding-bottom: 20px;
    }

    .picture {
      object-position: center;
      object-fit: contain;
      width: 100%;
      height: 15vh;
      padding-bottom: 20px;
    }
  }
}

</style>
