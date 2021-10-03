<template>
  <div class="AppGameDice">
    <div class="app-loader" :class="`${isLaunch ? 'disparition' : ''}`">
      <div ref="cube" class="cube">
        <div class="face front"></div>
        <div class="face back"></div>
        <div class="face right"></div>
        <div class="face left"></div>
        <div class="face top"></div>
        <div class="face bottom"></div>
      </div>
    </div>

    <app-button class="launch" v-if="!isLaunch" @click="handleLaunch">lancer</app-button>

    <template v-if="selectedSide">
      <img class="picture" :src="selectedSide.image">
      <h2 class="title">{{selectedSide.slug}}</h2>
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
          slug: 'Foot',
          image: 'https://photos.lci.fr/images/613/344/ballon-football-uefa-04f32a-0@1x.jpeg',
          x: 0,
          y: 0
        },
        {
          slug: 'c2',
          x: 180,
          y: 0
        },
        {
          slug: 'c3',
          x: 0,
          y: 90
        },
        {
          slug: 'c4',
          x: 0,
          y: -90
        },
        {
          slug: 'c5',
          x: 180,
          y: 90
        },
        {
          slug: 'c6',
          x: -90,
          y: 0
        },
        {
          slug: 'c7',
          x: 90,
          y: 0
        }
      ]
    }
  },
  methods: {
    randomGenerator: function () {
      return Math.floor(Math.random() * this.categories.length)
    },
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
  display: flex;
  flex-direction: column;
  position: relative;
}

.app-loader {
  z-index: 2;
  width: 100px;
  height: 100px;
  perspective: 1000px;
  margin: 20% auto 0;

  &.disparition {
    animation: fade 6s ease-out;
    opacity: 0;
  }

  .cube {
    position: relative;
    width: 150px;
    height: 150px;
    transform-style: preserve-3d;
    transform: rotateY(-45deg) rotatex(-45deg);
    transition: 0.5s ease-out;
    animation: spin 2.5s infinite linear;

    div {
      border: 1px solid rgb(44, 44, 44);
      position: absolute;
      width: 150px;
      height: 150px;

      &:nth-child(1) {
        transform: translateZ(75px);
        width: 150px;
        height: 150px;
        background-image: url(https://raw.githubusercontent.com/losefor/7days7websites-challenge/master/day-4/files/2.svg);
        object-position: center;
        object-fit: contain;
      }

      &:nth-child(2) {
        transform: rotateX(180deg) translateZ(75px);
        background: #2a2a2a;
        background-image: url(https://raw.githubusercontent.com/losefor/7days7websites-challenge/master/day-4/files/2.svg);
      }

      &:nth-child(3) {
        transform: rotateY(-90deg) translateZ(75px);
        background:#2a2a2a;
        width: 100%;
        background-image: url(https://raw.githubusercontent.com/losefor/7days7websites-challenge/master/day-4/files/3.svg);
      }

      &:nth-child(4) {
        transform: rotateY(90deg) translateZ(75px);
        background: #2a2a2a;
        background-image: url(https://raw.githubusercontent.com/losefor/7days7websites-challenge/master/day-4/files/4.svg);
      }

      &:nth-child(5) {
        transform: rotateX(90deg) translateZ(75px);
        background: #2a2a2a;
        background-image: url(https://raw.githubusercontent.com/losefor/7days7websites-challenge/master/day-4/files/5.svg);
      }

      &:nth-child(6) {
        transform: rotateX(-90deg) translateZ(75px);
        background: #2a2a2a;
        background-image: url(https://raw.githubusercontent.com/losefor/7days7websites-challenge/master/day-4/files/6.svg);
      }
    }
  }
}

.launch {
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.title {
  z-index: 3;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  font-weight: bolder;
  color: $neutral-darkest;
}

.picture {
  position: absolute;
  left: 0;
  top: 80px;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

@keyframes spin {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

@keyframes fade {
  0% {
    opacity: 1;
  }

  75% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
