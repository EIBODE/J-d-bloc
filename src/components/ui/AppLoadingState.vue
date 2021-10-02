<template>
  <div class="full-screen-wrapper">
    <div class="wrapper">
      <div class="loader-wrapper">
        <div class="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLoadingState'
}
</script>

<style lang="scss" scoped>

.full-screen-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: $neutral-transparent;
  z-index: 300;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.wrapper {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

}

.loader-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
  background: lighten($neutral-lightest, 10%);
  box-shadow: $box-shadow-light;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

$speed: 1.5s;

.loader {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  width: 80px;
  height: 50px;

  span {
    display: block;
    background: $default;
    width: 3px;
    height: 0;
    border-radius: 14px;
    margin-right: 2px;
    float: left;
    margin-top: 25%;

    &:last-child {
      margin-right: 0px;
    }
    &:first-child {
      margin-left: 3px;
    }
    &:nth-child(1) {
      animation: load $speed 1.4s infinite linear;
    }
    &:nth-child(2) {
      animation: load $speed 1.2s infinite linear;
    }
    &:nth-child(3) {
      animation: load $speed 1s infinite linear;
    }
    &:nth-child(4) {
      animation: load $speed 0.8s infinite linear;
    }
    &:nth-child(5) {
      animation: load $speed 0.6s infinite linear;
    }
    &:nth-child(6) {
      animation: load $speed 0.4s infinite linear;
    }
    &:nth-child(7) {
      animation: load $speed 0.2s infinite linear;
    }
    &:nth-child(8) {
      animation: load $speed 0s infinite linear;
    }
    &:nth-child(9) {
      animation: load $speed 0.2s infinite linear;
    }
    &:nth-child(10) {
      animation: load $speed 0.4s infinite linear;
    }
    &:nth-child(11) {
      animation: load $speed 0.6s infinite linear;
    }
    &:nth-child(12) {
      animation: load $speed 0.8s infinite linear;
    }
    &:nth-child(13) {
      animation: load $speed 1s infinite linear;
    }
    &:nth-child(14) {
      animation: load $speed 1.2s infinite linear;
    }
    &:nth-child(15) {
      animation: load $speed 1.4s infinite linear;
    }
  }
}

@keyframes load {
  0% {
    background: lighten($default, 20%);
    margin-top: 25%;
    height: 10%;
  }
  50% {
    background: $default;
    height: 100%;
    margin-top: 0%;
  }
  100% {
    background: lighten($default, 20%);
    height: 10%;
    margin-top: 25%;
  }
}

</style>
