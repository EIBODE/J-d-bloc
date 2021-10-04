<template>
  <div class="AppShowNotOwnerResponse">
    <div v-if="response !== ''" class="stats">
      <template v-for="(key, index) in answers">
        <div :key="key" class="column">
          <div class=value :style="{color: `${symbolsWithColor[index].color}`}">
            {{getSizeByKey(key)}} <faIcon v-if="key === response" :icon="['fas', 'check']"/>
          </div>
          <div
            :style="{
              background: `${symbolsWithColor[index].color}`,
              height: `${60 + getPercentByKey(key)}px`
            }"
            class="bar"
            >
            <faIcon :icon="[...symbolsWithColor[index].symbol]"/>
          </div>
        </div>
      </template>
    </div>
    <div
      v-for="(key, index) in answers"
      :key="key"
      :style="{
        marginRight: index % 2 === 0 ? '10px' : '0',
        background: `${symbolsWithColor[index].color}`,
        opacity: response === '' ? 1 : key === response ? 1 : 0.3
      }"
      class="response"
      >
      <div class="left"><faIcon :icon="[...symbolsWithColor[index].symbol]"/></div>
      <div class="right">{{key}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppShowOwnerResponse',
  props: {
    answers: {
      type: Array,
      required: true
    },
    response: {
      type: String,
      required: false,
      default: ''
    },
    stats: {
      type: Object,
      required: false,
      default: null
    }
  },
  data () {
    return {
      symbolsWithColor: [
        { symbol: ['fas', 'caret-down'], color: '#ff4757' },
        { symbol: ['fas', 'gem'], color: '#3398db' },
        { symbol: ['far', 'circle'], color: '#ff9f43' },
        { symbol: ['far', 'square'], color: '#1cca9b' }
      ]
    }
  },
  methods: {
    getSizeByKey: function (key) {
      return this.stats.filter(s => s === key).length
    },
    getPercentByKey: function (key) {
      const size = this.getSizeByKey(key)

      return size === 0 ? 0 : (100 * size / this.stats.length) * 2
    }
  }
}
</script>

<style lang="scss" scoped>
.AppShowNotOwnerResponse {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .stats {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 20px;

    .column {
      .value {
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 15px;
        font-weight: bold;

        svg {
          margin-left: 5px;
        }
      }

      .bar {
        width: 80px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        border-radius: 15px;
        padding-bottom: 20px;
        font-size: 32px;
        font-weight: bolder;
        color: $neutral-light-absolute;
        margin-right: 10px;
      }
    }

  }

  .response {
    border-radius: 10px;
    margin-bottom: 10px;
    width: calc(50% - 5px);
    height: 60px;
    color: $neutral-light-absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 20vh;
    font-size: 32px;
    font-weight: bolder;

    .left {
      margin-left: 10px
    }
    .right {
      margin-right: 10px
    }
  }
}
</style>
