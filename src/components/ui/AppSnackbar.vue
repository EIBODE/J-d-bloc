<template>
  <transition
    name="animation-tada"
    enter-active-class="animated fadeInUp"
    leave-active-class="animated fadeOutDown">
    <div :class="snackbarClasses" data-cy="snackbar">
      <div class="message-wrapper">
        <slot></slot>
      </div>
      <div v-if="closable" class="close-wrapper" @click="$emit('close')">
        <div class="close">
          <fa-icon :icon="['fas', 'times']"></fa-icon>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AppSnackbar',
  props: {
    position: {
      type: String,
      required: false,
      default: 'bottom-left',
      validator: function (input) {
        return ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'].indexOf(input) > -1
      }
    },
    type: {
      type: String,
      required: false,
      default: 'error',
      validator: function (input) {
        return ['default', 'success', 'warning', 'error', 'neutral'].indexOf(input) > -1
      }
    },
    closable: {
      type: Boolean,
      required: false,
      default: true
    },
    autoCloseAfter: {
      type: Number,
      required: false,
      default: null,
      validator: function (input) {
        return input === null || input > 0
      }
    }
  },
  computed: {
    snackbarClasses: function () {
      const classes = ['app-snackbar']
      classes.push(this.position)
      classes.push(this.type)
      if (this.closable) classes.push('closable')
      return classes
    }
  },
  created () {
    if (this.autoCloseAfter) {
      setTimeout(() => {
        this.$emit('close')
      }, this.autoCloseAfter)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-snackbar {
  position: fixed;
  z-index: 200;
  min-height: 60px;
  padding: 10px 20px;
  width: calc(100% - 40px);
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $neutral-light-absolute;
  font-weight: 700;
  border-radius: 6px;
  text-align: left;
  font-size: 0.9rem;

  &.closable {
    padding: 0 0 0 20px;
  }

  .message-wrapper {
    flex-grow: 1;
    padding: 10px;
  }

  .close-wrapper {
    width: 80px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .close {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }

  &.top-left {
    top: 40px;
    left: 40px;
  }

  &.top-center {
    top: 40px;
    left: calc(50% - 250px);
  }

  &.top-right {
    top: 40px;
    right: 40px;
  }

  &.bottom-left {
    bottom: 40px;
    left: 10px;
  }

  &.bottom-center {
    bottom: 40px;
    left: calc(50% - 250px);
  }

  &.bottom-right {
    bottom: 40px;
    right: 40px;
  }

  &.default {
    background: $default;
  }

  &.default {
    .close {
      background: $default-lighter;
      color: $default-lightest;
    }
  }

  &.success {
    background: $success;
    .close {
      background: $success-lighter;
      color: $neutral-light-absolute;
    }
  }

  &.warning {
    background: $warning;
    .close {
      background: $warning-lighter;
      color: $warning;
    }
  }

  &.error {
    background: $error;
    .close {
      background: $error-lighter;
      color: $error-lightest;
    }
  }

  &.neutral {
    background: $neutral-light;
    .close {
      background: $neutral-lighter;
      color: $neutral-lightest;
    }
  }

  &.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  &.fadeOutDown {
    -webkit-animation-name: fadeOutDown;
    animation-name: fadeOutDown;
  }

  &.fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
  }
}

@-webkit-keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>
