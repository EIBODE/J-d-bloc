<template>
  <div class="main-layout-wrapper">
    <router-link
      to="/"
      class="main-layout-title">
      <div class="title">
        {{ $t('title.werewolf') }}
      </div>
    </router-link>
    <div class="main-layout-container">
      <slot/>
    </div>
    <app-loading-state v-if="isLoading"/>
  </div>
</template>

<script>
const AppLoadingState = () => import('@/components/ui/AppLoadingState')

export default {
  components: {
    AppLoadingState
  },
  computed: {
    isLoading: function () {
      return this.$store.getters['loader/isLoading']
    }
  }
}
</script>

<style lang="scss">
.main-layout-wrapper {
  height: 100%;
  width: 100%;

  .main-layout-container {
    background: $neutral-light-absolute;
    width: calc(100% - 60px);
    height: calc(100% - 110px);
    padding: 30px;
  }

  .main-layout-title {
    font-size: 2rem;
    font-weight: 900;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 50px;
    padding-top: 10px;
    color: inherit;
    text-decoration: inherit;

    .title {
      padding: 10px;
    }
  }
}
</style>
