<template>
  <div v-if="time >= 0" class="AppLoader">
    <div class="text">{{ time }}</div>
    <svg
      id="L3"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 0 0"
      xml:space="preserve"
    >
      <circle
        fill="transparent"
        stroke="#3398db"
        stroke-width="4"
        cx="50"
        cy="50"
        r="44"
        style="opacity:0.8;"
      ></circle>
      <circle
        fill="#3398db"
        stroke="#3398db"
        stroke-width="3"
        cx="8"
        cy="54"
        r="6"
      >
        <animateTransform
          attributeName="transform"
          dur="1s"
          type="rotate"
          from="90 50 48"
          to="450 50 48"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'AppLoader',
  props: {
    timer: {
      type: Number,
      required: true
    },
    timeToGo: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      interval: null,
      time: 0
    }
  },
  mounted () {
    this.time = this.getDiffInSeconds(this.timeToGo)
    this.interval = setInterval(() => {
      this.time = this.getDiffInSeconds(this.timeToGo)
      if (this.getDiffInSeconds(this.timeToGo) <= 0) {
        this.$emit('endTime')
        clearInterval(this.interval)
      }
    }, 1000)
  },
  methods: {
    getDiffInSeconds: function (endDate) {
      const now = new Date()

      return Math.trunc((new Date(endDate).getTime() - now.getTime()) / 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.AppLoader {
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;

  .text {
    color: #3398db;
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
