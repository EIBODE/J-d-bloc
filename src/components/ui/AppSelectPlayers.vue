<template>
  <app-modal
    :title="title"
    :open-modal="isOpen"
    @close="close()">
    <div class="players">
      <div
        v-for="player in players"
        :key="player.id"
        class="player"
        :class="[{'selected': isSelected(player)}]"
        @click="selectPlayer(player)">
        <span class="player-username">
          {{ player.username|shorten(7) }}
        </span>
        <img
          width="90"
          height="90"
          :src="getSourcePicutre(player.picture)">
      </div>
    </div>
    <div class="action">
      <app-button
        :type="'error'"
        :disabled="submitIsDisabled()"
        @click="submit()">
        {{ $t('label.submit') }}
      </app-button>
    </div>
  </app-modal>
</template>

<script>
const AppModal = () => import('./AppModal')

export default {
  name: 'AppSelectPlayers',
  components: {
    AppModal
  },
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    },
    players: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    },
    multiple: {
      type: Boolean,
      required: true,
      default: false
    },
    howManySelected: {
      type: Number,
      required: true,
      default: 1
    }
  },
  data () {
    return {
      selected: []
    }
  },
  methods: {
    getSourcePicutre: function (picture) {
      return picture
    },
    close: function () {
      this.$emit('close')
    },
    selectPlayer: function (player) {
      if (this.isSelected(player)) {
        this.selected = this.selected.filter(p => p._id !== player._id)
      } else {
        if (!this.multiple && this.selected.length > 0) {
          this.selected = []
        }
        if (this.howManySelected === -1 || this.selected.length < this.howManySelected) {
          this.selected.push(player)
        }
      }
    },
    isSelected: function (player) {
      return this.selected.includes(player)
    },
    submitIsDisabled: function () {
      if (!this.multiple) {
        return this.selected.length !== 1
      }
      if (this.howManySelected === -1) {
        return this.selected.length === 0
      }
      return this.selected.length !== this.howManySelected
    },
    submit: function () {
      this.$emit('submit', this.selected)
    }
  }
}
</script>

<style lang="scss" scoped>
.players {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .player {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin: 5px;
    border-radius: 15px;
    box-shadow: $box-shadow-medium;

    &.selected {
      color: $neutral-light-absolute;
      background: $default;
      box-shadow: $box-shadow-default-medium;
    }

    .player-username {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      font-weight: 800;
    }
  }
}

.action {
  width: calc(100% - 30px);
  padding: 15px;
  display: flex;
  justify-content: flex-end;
}
</style>
