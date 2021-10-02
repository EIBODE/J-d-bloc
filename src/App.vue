<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>
    <app-snackbar
      v-if="alert.message"
      :position="alert.position"
      :type="alert.type"
      :closable="alert.closable"
      :auto-close-after="alert.autoCloseAfter"
      @close="destroyAlert()"
      >
      {{ alert.message }}
    </app-snackbar>
  </div>
</template>

<script>
const AppSnackbar = () => import('@/components/ui/AppSnackbar')

export default {
  components: {
    AppSnackbar
  },
  computed: {
    isLogged: function () {
      return this.$store.getters['user/isLogged']
    },
    alert: function () {
      return this.$store.getters['alert/getAlert']
    }
  },
  methods: {
    destroyAlert: function () {
      this.$store.dispatch('alert/clear')
    }
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
}

body {
  display: flex;
}

/* width */
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

#app {
  font-family: $font-stack;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
