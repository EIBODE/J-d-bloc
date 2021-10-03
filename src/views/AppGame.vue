<template>
  <app-main-layout>
    <!-- <pre>{{JSON.stringify(meeting, null, 2)}}</pre> -->
    <div v-if="iAmAuthor" class="author">
      <app-button @click="handleNextStep">Suivant</app-button>
      <div class="author-question">
        <app-loader :timer="30" />
        <h2>{{getAnswers.question}}</h2>
        <img :src="getAnswers.image" class="picture"/>
        <app-show-owner-response :answers="getAnswers.responses" />
      </div>
    </div>
    <div v-else class="no-author">
      <template v-if="!isScoreShow">
        <app-loader :timer="30" />
        <app-show-not-owner-response
          :answers="getAnswers.responses"
          @choose="handleClickNotHownerResponse($event)"
        />
      </template>
      <div v-else>
        <h2 v-if="actualScore.success">BRAVO</h2>
        <h2 v-else>DOMMAGE</h2>

        <p>Votre score: {{actualScore.score}}</p>
      </div>
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
      meeting: null,
      players: [],
      player: {},
      steps: [],
      questions: [],
      questionsIndex: 0,
      author: null,
      isScoreShow: false,
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
      this.meeting = meeting
      this.players = meeting.players
      this.steps = meeting.steps
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
      const lastScore = this.meeting.players.find(p => p._id === this.token).score
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
