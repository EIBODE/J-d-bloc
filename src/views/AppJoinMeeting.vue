<template>
  <app-main-layout>
    <app-form>
      <div class="input-row">
        <div class="input-wrapper">
          <input
            id="meeting"
            v-model="form.meeting.value"
            type="number"
            :class="{'error-state': form.meeting.error}"
            @keyup.enter="joinMeeting()"
            >
          <label
            for="meeting"
            :class="{'error-state': form.meeting.error}">
            {{ $t('label.meeting') }}
          </label>
        </div>
      </div>
      <div class="form-action">
        <app-button @click="joinMeeting()">
          {{ $t('label.submit') }}
        </app-button>
      </div>
    </app-form>
  </app-main-layout>
</template>

<script>
import AppForm from '../components/ui/AppForm'

export default {
  name: 'AppJoinMeeting',
  components: {
    AppForm
  },
  data () {
    return {
      form: {
        meeting: {
          value: null,
          error: false
        }
      }
    }
  },
  methods: {
    joinMeeting: function () {
      this.form.meeting.error = false
      if (this.form.meeting.value) {
        this.$store.dispatch('meeting/joinMeeting', this.form.meeting.value)
          .then(response => {
            if (response) {
              this.$router.push({ name: 'meeting', params: { meetingId: response.identifier } })
            } else {
              this.$store.dispatch('alert/create', {
                type: 'error',
                message: this.$t('snackbar.meeting-not-exist'),
                closable: true,
                autoCloseAfter: 5000,
                position: 'bottom-left'
              })
            }
          })
          .catch(() => {
            this.$store.dispatch('alert/create', {
              type: 'error',
              message: this.$t('snackbar.an-error-has-occurred'),
              closable: true,
              autoCloseAfter: 5000
            })
          })
      } else {
        this.form.meeting.error = true
        this.$store.dispatch('alert/create', {
          type: 'error',
          message: this.$t('snackbar.meeting-not-empty'),
          closable: true,
          autoCloseAfter: 5000,
          position: 'bottom-left'
        })
      }
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
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
