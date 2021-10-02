<template>
  <div class="game-layout-wrapper">
    <div class="game-layout-title">
      <div
        class="layout-left-header"
        @click="isOpenLeftMenu = !isOpenLeftMenu">
        <faIcon :icon="['fa', 'bars']"/>
      </div>
      <div class="game-layout-title">
        <div class="title">
          {{ $t('title.werewolf') }}
        </div>
      </div>
    </div>
    <div class="game-layout-container">
      <div
        class="layout-left"
        :class="openClasses">
        <slot
          v-if="isOpenLeftMenu"
          name="left"/>
      </div>
      <div
        class="layout-right"
        :class="openClasses">
        <slot name="right"/>
      </div>
    </div>
    <app-game-result-action/>
    <app-loading-state v-if="isLoading"/>
  </div>
</template>

<script>
import AppGameResultAction from '../modules/AppGameResultAction'
const AppLoadingState = () => import('../ui/AppLoadingState')

export default {
  components: {
    AppGameResultAction,
    AppLoadingState
  },
  data () {
    return {
      isOpenLeftMenu: false
    }
  },
  computed: {
    isLoading: function () {
      return this.$store.getters['loader/isLoading']
    },
    openClasses: function () {
      return [this.isOpenLeftMenu ? 'open' : 'close']
    }
  }
}
</script>

<style lang="scss">
.game-layout-wrapper {
  height: 100%;
  width: 100%;

  .game-layout-title {
    font-size: 2rem;
    font-weight: 900;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 50px;
    padding-top: 10px;
    color: inherit;
    text-decoration: inherit;

    .layout-left-header {
      cursor: pointer;
      padding: 10px;
      border-radius: 50%;
      box-shadow: $box-shadow-medium;
      font-size: 1.2rem;
    }

    .title {
      padding: 10px;
    }
  }

  .game-layout-container {
    background: $neutral-light-absolute;
    width: calc(100% - 60px);
    height: calc(100% - 110px);
    padding: 30px;
    display: flex;

    .layout-left {
      &.open {
        width: 250px;
        height: calc(100% - 20px);
        z-index: 3;
        padding: 15px;
        background: $neutral-light-absolute;
        border-radius: 15px 0 0 15px;
        box-shadow: $box-shadow-medium;
        overflow-y: auto;
        scrollbar-width: thin;
      }
    }

    .layout-right {
      position: relative;
      width: calc(100% - 260px);
      height: calc(100% - 20px);
      padding: 15px;
      box-shadow: $box-shadow-medium;
      background:$neutral-light-absolute;
      border-radius: 0 15px 15px 0;

      &.close {
        width: 100%;
        border-radius: 15px;
      }
    }
  }
}

.result-action-player {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .result-action-player-card {
    padding: 10px;
    border-radius: 15px;
    box-shadow: $box-shadow-medium;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .result-action-player-title {
      font-weight: 800;
    }
  }
}

.result-action-action {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0 0 0;
}
</style>
