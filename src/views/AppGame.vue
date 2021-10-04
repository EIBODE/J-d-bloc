<template>
  <app-main-layout>
    <div v-if="iAmAuthor" class="author">
      <template v-if="step === 'loading'">
        <div>LOADING...</div>
      </template>
      <template v-else-if="step === 'question'">
        <app-button @click="handleNextStep">Suivant</app-button>
        <div class="author-question">
          <app-loader :timer="30" @endTime="handleNextStep" />
          <h2>{{getAnswers.question}}</h2>
          <img :src="getAnswers.image" class="picture"/>
          <app-show-owner-response :answers="getAnswers.responses"/>
        </div>
      </template>
      <template v-else-if="step === 'stats'">
        <app-button @click="handleNextStep">Suivant</app-button>
        <app-show-owner-response :answers="getAnswers.responses"  :response="getAnswers.response" :stats="stats"/>
      </template>
      <template v-else-if="step === 'podium'">
        <app-button @click="handleNextStep">Suivant</app-button>
        <app-game-podium :players="players"/>
      </template>
      <template v-else-if="step === 'first-dice' || step === 'dice'">
        <app-button @click="handleNextStep">Suivant</app-button>
        <app-game-dice :category="getAnswers.category"/>
      </template>
      <template v-else>
        <app-button type="error" @click="handleClose">Close</app-button>
        <app-game-podium :players="players"/>
      </template>
    </div>
    <div v-else class="no-author">
      <template v-if="step === 'loading' || step === 'first-dice'">
        <div class="stats">LOADING...</div>
      </template>
      <template v-else-if="step === 'question'">
        <template v-if="!isScoreShow">
          <app-loader :timer="30" />
          <app-show-not-owner-response
            :answers="getAnswers.responses"
            @choose="handleClickNotHownerResponse($event)"
          />
        </template>
        <div v-else class="stats">
          <h2 v-if="actualScore.success === null"></h2>
          <h2 v-else-if="actualScore.success" class="success">BRAVO</h2>
          <h2 v-else class="error">DOMMAGE</h2>
          <p>Votre score: {{actualScore.score}}</p>
        </div>
      </template>
      <template v-else-if="step === 'stats' || step === 'dice' || step === 'podium'">
        <div class="stats">
          <h2 v-if="actualScore.success" class="success">BRAVO</h2>
          <h2 v-else class="error">DOMMAGE</h2>
          <p>{{getStatsMessage}}</p>
          <p>Votre score: {{gamePlayer.score}}</p>
        </div>
      </template>
      <template v-else>
        <app-button type="error" :style="{margin: '0 0 0 auto'}" @click="handleClose">Close</app-button>
        <app-game-podium :players="players"/>
      </template>
    </div>
  </app-main-layout>
</template>

<script>
import { mapGetters } from 'vuex'

import AppLoader from '../components/ui/AppLoader.vue'
import AppShowNotOwnerResponse from '../components/modules/AppShowNotOwnerResponse.vue'
import AppShowOwnerResponse from '../components/modules/AppShowOwnerResponse.vue'
import AppGamePodium from '../components/modules/AppGamePodium.vue'
import AppGameDice from '../components/modules/AppGameDice.vue'

export default {
  name: 'AppGame',
  components: {
    AppShowNotOwnerResponse,
    AppShowOwnerResponse,
    AppGamePodium,
    AppGameDice,
    AppLoader
  },
  data () {
    return {
      identifier: 0,
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
        success: null
      },
      mesages: {
        success: [
          'Trop fort',
          'Continue comme ça',
          'Bonne réponse',
          "C'est qui le meilleur ?"
        ],
        error: [
          'Allez relache pas',
          'Tu peux réussir',
          'Désespère pas',
          'Aïe...'
        ]
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
    getStatsMessage: function () {
      if (this.actualScore.success === null) {
        return ''
      }

      const isSuccess = this.actualScore.success
      const arr = this.mesages[isSuccess ? 'success' : 'error']
      const randomIndex = Math.floor(Math.random() * arr.length)

      return arr[randomIndex]
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
      this.identifier = meeting.identifier
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
    handleClickNotHownerResponse: function (response) {
      const lastScore = this.gamePlayer.score
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
    },
    handleClose: function () {
      this.$router.push({ name: 'choose' })
    }
  }
}
</script>

<style lang="scss" scoped>
.no-author {
  width: 100%;
  height: calc(100vh - 170px);
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
