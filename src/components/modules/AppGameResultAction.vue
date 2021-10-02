<template>
  <app-modal
    v-if="resultAction.action"
    :title="getModalTitle"
    :open-modal="resultAction.action ? true : false"
    @close="clearResultAction()">
    <div class="result-action-player">
      <div v-if="resultAction.resume" class="action-resume-wrapper">
        <div v-for="action in resultAction.resume" :key="action.id" class="action-resume">
          <span class="action-resume-title">{{ $t(`result-action.${action.from}`) }}&nbsp;{{ action.selected.username }}</span>
          <div class="action-resume-content">
            <img :src="action.selected.picture" height=90 width=90>&nbsp;
            <faIcon :icon="['fa', 'arrow-right']"/>&nbsp;
            <img :src="getSourcePIctureRole(action.selected.role)" height=90 width=90>
          </div>
        </div>
      </div>
      <div v-if="resultAction.player && !resultAction.resume" class="result-action-player-card">
        <span class="result-action-player-title">
          {{ resultAction.player.username|shorten(8) }}
        </span>
        <img
          height=90
          width=90
          :src="resultAction.player.picture">
      </div>
      <div v-if="resultAction.showPartners" style="width: 100%; display: flex;flex-wrap: wrap;justify-content: center;">
        <div
          v-for="partner in resultAction.showPartners"
          :key="partner.id"
          class="result-action-player-card"
          style="margin: 5px;">
          <span class="result-action-player-title">
            {{ partner.username|shorten(8) }}
          </span>
          <img
            height=90
            width=90
            :src="partner.picture">
        </div>
      </div>
    </div>
    <div class="result-action-action">
      <app-button @click="clearResultAction()">
        OK
      </app-button>
    </div>
  </app-modal>
</template>

<script>
const AppModal = () => import('../ui/AppModal')

export default {
  name: 'AppGameResultAction',
  components: {
    AppModal
  },
  computed: {
    resultAction: function () {
      return this.$store.getters['resultAction/getResultAction']
    },
    allMessage: function () {
      return this.$store.getters['meeting/allMessages']
    },
    getModalTitle: function () {
      return this.$t(`game.${this.allMessage[this.resultAction.action]}`, {
        player: this.resultAction.player ? this.resultAction.player.username : null,
        role: this.resultAction.player ? this.$t(`role.${this.resultAction.player.role}`) : null
      })
    }
  },
  methods: {
    clearResultAction: function () {
      this.$store.dispatch('resultAction/clear')
    },
    getSourcePIctureRole: function (role) {
      return `${process.env.BASE_URL}img/roles/${role}.png`
    }
  }
}
</script>

<style lang="scss" scoped>
.action-resume-wrapper {
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .action-resume {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .action-resume-title {
      color: $neutral-darkest;
      padding: 15px;
    }

    .action-resume-content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
}
</style>
