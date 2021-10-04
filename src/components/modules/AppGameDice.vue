<template>
  <div class="AppGameDice">
    <div class="app-loader">
      <div ref="cube" class="cube">
        <div :style="{backgroundImage: `url('/img/dice/4.svg')`}"></div>
        <div :style="{backgroundImage: `url('/img/dice/3.svg')`}"></div>
        <div :style="{backgroundImage: `url('/img/dice/6.svg')`}"></div>
        <div :style="{backgroundImage: `url('/img/dice/1.svg')`}"></div>
        <div :style="{backgroundImage: `url('/img/dice/2.svg')`}"></div>
        <div :style="{backgroundImage: `url('/img/dice/5.svg')`}"></div>
      </div>
    </div>
    <template v-if="selectedSide">
      <div class="category" :style="{background: selectedSide.color}">
        <h2 class="title">{{selectedSide.slug}}</h2>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'AppGameDice',
  props: {
    category: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selectedSide: null,
      isLaunch: false,
      categories: [
        {
          slug: 'Fais pas la moue',
          color: '#38761d',
          x: 0,
          y: 0
        },
        {
          slug: 'Il était une fois',
          color: '#ff0000',
          x: 180,
          y: 0
        },
        {
          slug: 'Info ou botox',
          color: '#ff9900',
          x: 0,
          y: 90
        },
        {
          slug: "C'est du propre",
          color: '#4a86e8',
          x: 0,
          y: -90
        },
        {
          slug: 'Comment ça marche',
          color: '#9900ff',
          x: -90,
          y: 0
        },
        {
          slug: 'Tomber sur un os',
          color: '#ff00ff',
          x: 90,
          y: 0
        }
      ]
    }
  },
  mounted () {
    this.handleLaunch()
  },
  methods: {
    handleLaunch: function () {
      this.isLaunch = true

      setTimeout(() => {
        this.selectedSide = this.categories.find(c => c.slug === this.category)
        this.$refs.cube.style.animation = 'none'
        this.$refs.cube.style.transform = `rotateX(${this.selectedSide.x}deg) rotateY(${this.selectedSide.y}deg)`
      }, 1600)
    }
  }
}
</script>
<style lang="scss" scoped>
.AppGameDice {
  width: 100%;
  height: 100%;
}

.app-loader {
  z-index: 2;
  width: 100px;
  height: 100px;
  perspective: 1000px;
  margin: 100px auto 0;

  .cube {
    position: relative;
    width: 150px;
    height: 150px;
    transform-style: preserve-3d;
    transform: rotateY(-45deg) rotatex(-45deg);
    transition: 0.5s ease-out;
    animation: spin 2.5s infinite linear;

    div {
      position: absolute;
      width: 150px;
      height: 150px;

      &:nth-child(1) {
        transform: translateZ(75px);
        width: 150px;
        height: 150px;
        object-position: center;
        object-fit: contain;
      }

      &:nth-child(2) {
        transform: rotateX(180deg) translateZ(75px);
        background: #2a2a2a;
      }

      &:nth-child(3) {
        transform: rotateY(-90deg) translateZ(75px);
        background:#2a2a2a;
        width: 100%;
      }

      &:nth-child(4) {
        transform: rotateY(90deg) translateZ(75px);
        background: #2a2a2a;
      }

      &:nth-child(5) {
        transform: rotateX(90deg) translateZ(75px);
        background: #2a2a2a;
      }

      &:nth-child(6) {
        transform: rotateX(-90deg) translateZ(75px);
        background: #2a2a2a;
      }
    }
  }
}

.category {
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 15px;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  .title {
    font-size: 50px;
    font-weight: bolder;
    color: $neutral-light-absolute;
  }
}

@keyframes spin {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
</style>
