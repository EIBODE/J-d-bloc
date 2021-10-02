<template>
  <div class="stats-wrapper">
    <div class="stats">
      <div class="role">
        <div
          class="title"
          @click="isOpenRole = !isOpenRole">
          {{ $t('title.your-role') }}&nbsp;
          <faIcon :icon="['fa', isOpenRole ?  'angle-up' : 'angle-down']"/>
        </div>
        <img
          v-if="isOpenRole"
          height="90"
          width="90"
          :src="characterPictureSource(gamePlayer ? gamePlayer.role : null)">
      </div>
      <div
        class="role-list"
        :class="[{'open': isOpenRole}]">
        <div
          class="title"
          @click="isOpenRoleList = !isOpenRoleList">
          {{ $t('title.role-list') }}&nbsp;
          <faIcon :icon="['fa', isOpenRoleList ?  'angle-up' : 'angle-down']"/>
        </div>
        <div v-for="gameRole in gameRoleList" :key="gameRole.id">
          <div
            v-if="isOpenRoleList"
            class="game-role">
            <img
              height="90"
              width="90"
              :src="characterPictureSource(gameRole.role)">
            <span class="game-role-size">{{ gameRole.size }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppGameStats',
  props: {
    players: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isOpenRole: true,
      isOpenRoleList: false
    }
  },
  computed: {
    gamePlayer: function () {
      return this.players.find(p => p._id === this.ownPlayer._id)
    },
    gameRoleList: function () {
      if (!this.players) {
        return []
      }

      const roleList = []
      for (const index in this.allRoles) {
        const role = this.allRoles[index]
        const size = this.players.filter(p => p.role === role).length
        if (size > 0) {
          roleList.push({ role, size })
        }
      }

      return roleList
    },
    ...mapGetters({
      ownPlayer: 'player/getPlayer',
      allRoles: 'player/getRoles'
    })
  },
  methods: {
    characterPictureSource: function (picture) {
      if (!picture) {
        return process.env.BASE_URL + 'img/players/anonymous.png'
      }
      return process.env.BASE_URL + 'img/roles/' + picture + '.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.stats-wrapper {
  height: 100%;
  display: flex;
  position: absolute;
  top: 10px;
  right: 30px;
  z-index: 3;

  .stats {
    display: flex;
    flex-direction: column;

    .title {
      height: 20px;
      cursor: pointer;
      font-size: .9rem;
      font-weight: 800;
    }

    .role {
      margin-bottom: 10px;
    }

    .role-list {
      overflow-y: auto;
      max-height: calc(100% - 90px);
      scrollbar-width: thin;

      &.open {
        max-height: calc(100% - 180px);
      }
    }

    .role,
    .role-list {
      width: 140px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      background:$neutral-light-absolute;
      box-shadow: $box-shadow-medium;
      border-radius: 15px;

      .game-role {
        padding-top: 10px;
        display: flex;
        align-items: center;

        .game-role-size {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background: $neutral-darkest;
          color: $neutral-light-absolute;
          margin-left: 5px;
          padding: 8px;
          font-size: .9rem;
          font-weight: 800;
        }
      }
    }
  }
}
</style>
