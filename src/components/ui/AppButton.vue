<template>
  <button :class="buttonClasses" :type="role" @click.prevent="click()">
    <AppLoader v-if="loadingState"></AppLoader>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    role: {
      type: String,
      required: false,
      default: 'button',
      validator: function (input) {
        return ['reset', 'button', 'submit'].indexOf(input) > -1
      }
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: 'default',
      validator: function (input) {
        return [
          'default',
          'success',
          'warning',
          'error',
          'neutral',
          'no-background',
          'no-background-error',
          'ghost-default',
          'ghost-neutral',
          'ghost-warning',
          'ghost-success',
          'ghost-error',
          'link-error',
          'link-default',
          'link-warning',
          'link-success',
          'link-neutral'].indexOf(input) > -1
      }
    },
    loadingState: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: 'medium',
      validator: function (value) {
        return ['icon', 'small', 'medium', 'big'].indexOf(value) > -1
      }
    },
    block: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    buttonClasses: function () {
      const classes = ['app-button']
      if (this.disabled) {
        classes.push('disabled')
      } else {
        classes.push(this.type)
      }
      if (this.block) classes.push('block-width')
      classes.push(this.size)
      return classes
    }
  },
  methods: {
    click: function () {
      if (!this.disabled) {
        this.$emit('click')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-button {
  border: 0;
  background: none;
  border-radius: 10px;
  color: $neutral-light;
  font-weight: 600;
  font-family: inherit;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.all-center {
    justify-content: center;
  }

  * {
    margin: 0 5px;
  }

  &.icon {
    height: 30px;
    width: 30px;
    padding: 0;
    justify-content: center;
  }

  &.small {
    height: 30px;
    font-size: 0.9rem;
    padding: 0 10px;
  }

  &.medium {
    height: 35px;
    font-size: 1rem;
    padding: 0 60px;
  }

  &.big {
    height: 60px;
    font-size: 1.1rem;
    padding: 0 40px;
  }

  &.default {
    background: $default;
    color: $neutral-light-absolute;
    cursor: pointer;
  }

  &.success {
    background: $success;
    color: $neutral-light-absolute;
    cursor: pointer;
  }

  &.warning {
    background: $warning;
    color: $neutral-light-absolute;
    cursor: pointer;
  }

  &.error {
    background: $error;
    color: $neutral-light-absolute;
    cursor: pointer;
  }

  &.neutral {
    background: lighten($neutral-light, 5%);
    color: $neutral-light-absolute;
    cursor: pointer;
  }

  &.no-background {
    background: none;
    font-size: 0.9rem;
    color: $default;
    padding: 0 14px;

    &:hover {
      background: $default;
      color: $neutral-light-absolute;
    }
  }

  &.no-background-error {
    background: none;
    font-size: 0.9rem;
    color: $error;
    padding: 0 14px;

    &:hover {
      background: $error;
      color: $neutral-light-absolute;
    }
  }

  &.link-error,
  &.link-default,
  &.link-warning,
  &.link-success,
  &.link-neutral {
    background: none;
    font-size: 1.2rem;
    cursor: pointer;
  }

  &.link-error { color: $error; }
  &.link-default { color: $default; }
  &.link-warning { color: $warning; }
  &.link-success { color: $success; }
  &.link-neutral { color: $neutral-light; }

  &.ghost-default,
  &.ghost-neutral,
  &.ghost-warning,
  &.ghost-success,
  &.ghost-error {
    background: none;
    cursor: pointer;
  }

  &.ghost-default { color: $default; border: 2px solid $default;}
  &.ghost-neutral { color: darken($neutral-lighter, 4%); border: 2px solid darken($neutral-lighter, 4%);}
  &.ghost-warning { color: $warning; border: 2px solid $warning;}
  &.ghost-success { color: $success; border: 2px solid $success;}
  &.ghost-error { color: $error; border: 2px solid $error;}

  &.disabled {
    background: $neutral-lightest;
    color: $neutral-light;
    cursor: default;
  }

  &.block-width {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
