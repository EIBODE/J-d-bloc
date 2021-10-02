<template>
  <div class="left-player-list">
    <div
      v-for="player in players"
      :key="player.id"
      class="left-player">
      <div class="left-players-pictures">
        <img :src="characterPictureSource(player)" height="90" width="90">
        <div
          v-if="isCaptain(player)"
          class="captain">
          <img :src="captainPictureSource()" height="45" width="45">
        </div>
      </div>
      <span class="left-player-title">
        {{ player.username|shorten(8) }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLeftMenu',
  props: {
    players: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    },
    captain: {
      type: String,
      required: true,
      default: ''
    }
  },
  methods: {
    characterPictureSource: function (player) {
      return player.death ? `${process.env.BASE_URL}img/roles/${player.role}.png` : player.picture
    },
    captainPictureSource: function () {
      return `${process.env.BASE_URL}img/roles/captain.jpg`
    },
    isCaptain: function (player) {
      return this.captain === player._id
    }
  }
}
</script>

<style lang="scss" scoped>
.left-player-list {
  width: 100%;
  display: flex;
  flex-direction: column;

  .left-player {
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 800;
    font-size: 1.2rem;

    .left-players-pictures {
      position: relative;

      .captain {
        position: absolute;
        top: 50%;
        left: 50%;
      }
    }

    .left-player-title {
      padding-left: 10px;
    }
  }
}
</style>
