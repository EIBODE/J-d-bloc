<template>
  <app-main-layout>
    <app-form>
      <div class="input-row">
        <div class="input-wrapper">
          <input
            id="username"
            v-model="form.username.value"
            type="text"
            :class="{'error-state': form.username.error}"
            @keyup.enter="registerAuthenticate()">
          <label
            for="username"
            :class="{'error-state': form.username.error}">
            {{ form.username.label }}
          </label>
        </div>
      </div>
      <div class="input-row">
        <div class="input-wrapper">
          <div
            id="picture"
            type="text"
            class="form-select picture"
            :class="{'error-state': form.picture.error}"
            @click="form.picture.isOpen = !form.picture.isOpen">
            <div class="select-form-inner">
              <div class="selected-picture">
                <img
                  v-show="form.picture.value"
                  height="150"
                  width="150"
                  :src="form.picture.value">
              </div>
              <span>
                <faIcon :icon="['fa', form.picture.isOpen ? 'angle-up' : 'angle-down']"/>
              </span>
            </div>
          </div>
          <label
            for="picture"
            :class="{'error-state': form.picture.error}">
            {{ form.picture.label }}
          </label>
          <div
            v-if="form.picture.isOpen"
            v-on-clickaway="away"
            class="picture-list">
            <div
              v-for="option in 18"
              :key="option.id"
              class="picture"
              @click="onSelectImage(option)">
              <img height="150" width="150" :src="playerPictureSource(option)"/>
            </div>
          </div>
        </div>
      </div>
      <div class="form-action">
        <app-button @click="registerAuthenticate()">
          {{ $t('label.submit') }}
        </app-button>
      </div>
    </app-form>
  </app-main-layout>
</template>

<script>
import AppForm from '../components/ui/AppForm'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'AppLogin',
  components: {
    AppForm
  },
  mixins: [clickaway],
  data () {
    return {
      form: {
        username: {
          value: null,
          label: this.$t('label.username'),
          error: false
        },
        picture: {
          value: null,
          label: this.$t('label.picture'),
          error: false,
          isOpen: false
        }
      }
    }
  },
  methods: {
    registerAuthenticate: async function () {
      this.form.username.error = false
      this.form.picture.error = false
      if (!this.form.username.value) {
        this.form.username.error = true
        this.$store.dispatch('alert/create', {
          type: 'error',
          message: this.$t('snackbar.username-not-empty'),
          closable: true,
          autoCloseAfter: 5000
        })
      }
      if (!this.form.picture.value) {
        this.form.picture.error = true
        this.$store.dispatch('alert/create', {
          type: 'error',
          message: this.$t('snackbar.picture-not-empty'),
          closable: true,
          autoCloseAfter: 5000
        })
      }

      if (!this.form.username.error && !this.form.picture.error) {
        this.$store.dispatch('player/authenticate', {
          username: this.form.username.value,
          picture: this.form.picture.value
        })
          .then(() => this.$router.push({ name: 'choose' }))
          .catch(() => {
            this.$store.dispatch('alert/create', {
              type: 'error',
              message: this.$t('snackbar.an-error-has-occurred'),
              closable: true,
              autoCloseAfter: 5000
            })
          })
      }
    },
    onSelectImage: function (picture) {
      this.form.picture.value = this.playerPictureSource(picture)
      this.form.picture.isOpen = false
    },
    away: function () {
      this.form.picture.isOpen = false
    },
    playerPictureSource: function (picture) {
      return process.env.BASE_URL + 'img/players/' + picture + '.png'
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
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.form-select.picture {
  height: 180px;
}

.select-form-inner {
  height: 100%;
  width: calc(100% - 20px);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.selected-picture {
  width: 100%;
  display: flex;
  justify-content: center;
}

.picture-list {
  width: calc(100% - 30px);
  max-height: 300px;
  z-index: 10;
  position: absolute;
  left: 15px;
  top: calc(100% - 10px);
  overflow-y: scroll;
  background: $neutral-light-absolute;
  box-shadow: $box-shadow-medium;
  border-radius: 0 0 15px 15px;

  .picture {
    width: 100%;
    padding: 5px 0;
    display: flex;
    justify-content: center;
  }
}
</style>
