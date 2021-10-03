<template>
  <div class="AppShowNotOwnerResponse">
    <div
      v-for="(key, index) in answers"
      :key="key"
      :style="{background: `${symbolsWithColor[index].color}`}"
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

    &:nth-child(2n) {
      margin-left: 10px;
    }

    .left {
      margin-left: 10px
    }
    .right {
      margin-right: 10px
    }
  }
}
</style>
