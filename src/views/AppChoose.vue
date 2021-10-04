<template>
  <app-main-layout>
    <app-form>
      <div class="form-action">
        <app-button
          v-if="token"
          class="select-form-button all-center"
          :type="'success'"
          :size="'big'"
          @click="createMeeting()">
          {{ $t('label.create-meeting') }}
        </app-button>
        <app-button
          v-if="token"
          class="select-form-button all-center"
          :type="'warning'"
          :size="'big'"
          @click="joinMeeting()">
          {{ $t('label.join-meeting') }}
        </app-button>
        <app-button
          class="select-form-button all-center"
          :size="'big'"
          @click="navToLogin()">
          {{ !token ? $t('label.login') : $t('label.change-user') }}
        </app-button>
      </div>
    </app-form>
    <div class="powered">
      Powered by <a target="_blank" href="https://www.linkedin.com/in/henrique-dos-santos-martins/">Henrique</a>
    </div>
  </app-main-layout>
</template>

<script>
import AppForm from '../components/ui/AppForm'

export default {
  name: 'AppChoose',
  components: {
    AppForm
  },
  computed: {
    token: function () {
      return localStorage.getItem('token')
    }
  },
  methods: {
    createMeeting: function () {
      this.$store.dispatch('meeting/createMeeting')
        .then(response => {
          this.$router.push({ name: 'meeting', params: { meetingId: response.identifier } })
        })
        .catch(() => {
          this.$store.dispatch('alert/create', {
            type: 'error',
            message: this.$t('snackbar.an-error-has-occurred'),
            closable: true,
            autoCloseAfter: 5000
          })
        })
    },
    joinMeeting: function () {
      this.$router.push({ name: 'joinMeeting' })
    },
    navToLogin: function () {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss">
.form-wrapper {
  height: 100%;
  padding: 10px 0;
  box-shadow: $box-shadow-medium;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-action {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.select-form-button {
  width: calc(100% - 40px);
  max-width: 300px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 15px;
}

.powered {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 12px;

  a {
    color: $neutral-darkest;
  }
}
</style>
