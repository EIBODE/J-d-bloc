<template>
  <div class="podium">
    <div class="row">
      <div class="col">
        <template v-if="get3BestScore.length >= 2">
          <span>{{get3BestScore[1].username|shorten(10)}}</span>
          <span>({{get3BestScore[1].score}})</span>
        </template>
        <div class="column two">2</div>
      </div>
      <div class="col">
        <template v-if="get3BestScore.length >= 1">
          <span>{{get3BestScore[0].username|shorten(10)}}</span>
          <span>({{get3BestScore[0].score}})</span>
        </template>
        <div class="column one">1</div>
      </div>
      <div class="col">
        <template v-if="get3BestScore.length >= 3">
          <span>{{get3BestScore[2].username|shorten(10)}}</span>
          <span>({{get3BestScore[2].score}})</span>
        </template>
        <div class="column three">3</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppGamePodium',
  props: {
    players: {
      type: Array,
      required: true
    }
  },
  computed: {
    get3BestScore: function () {
      const arr = [...this.players]

      return arr.sort((p1, p2) => {
        return p2.score - p1.score
      }).slice(0, 3)
    }
  }
}
</script>

<style lang="scss" scoped>
.podium {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: calc(100% - 40px);
  height: calc(100vh - 340px);
  margin-bottom: 30px;
  background: $neutral-dark;
  padding: 20px;
  border-radius: 15px;
  color: $neutral-light-absolute;
  font-weight: bolder;

  .row {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .column {
      font-size: 46px;
      width: 80px;
      display: flex;
      justify-content: center;
      margin: 10px;
      border-radius: 10px;

      &.one {
        height: 300px;
        background: gold;
      }
      &.two {
        height: 150px;
        background:silver;
      }
      &.three {
        height: 75px;
        background: #cc6633 ;
      }
    }
  }

}
</style>
