<template>
  <div :class="formClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppForm',
  props: {
    orientation: {
      type: String,
      required: false,
      default: 'vertical',
      validator: function (input) {
        return ['vertical', 'horizontal'].indexOf(input) > -1
      }
    }
  },
  computed: {
    formClasses: function () {
      const classes = ['form-wrapper']
      classes.push(this.orientation)
      return classes
    }
  }
}
</script>

<style lang="scss" scoped>
.form-wrapper {
  width: 100%;
  height: auto;
  display: flex;

  &.vertical {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &.horizontal {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
}

.input-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 20px);
}

.input-wrapper {
  position: relative;
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;

  &.start {
    justify-content: flex-start;
  }

  &.centered {
    justify-content: center;
  }

  &.end {
    justify-content: flex-end;
  }
}

// .validation-error-message {
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   background: $error;
//   color: $neutral-light-absolute;
//   font-weight: 700;
//   font-size: 0.8rem;
//   padding: 4px 10px;
//   border-radius: 12px;
// }

// .input-form-select,
.form-select,
input[type=text],
input[type=number],
input[type=password] {
  position: relative;
  width: 100%;
  height: 50px;
  margin: 10px 0;
  padding: 0 10px;
  box-sizing: border-box;
  outline: none;
  font-size: 1.1em;
  -webkit-appearance: none;
  color: $neutral-darkest;
  border: none;
  border: 2px solid $neutral-lighter;
  border-radius: 15px;
}

// textarea {
//   border: none;
//   overflow: auto;
//   outline: none;
//   -webkit-box-shadow: none;
//   -moz-box-shadow: none;
//   box-shadow: none;
//   resize: none;
//   position: relative;
//   height: 120px;
//   border: 2px solid $neutral-lightest;
//   border-radius: 10px;
//   color: $neutral-medium;
//   padding: 25px;
//   width: 100%;
//   box-sizing: border-box;
//   margin: 15px 0;
//   font-size: 1.1em;
//   font-family: inherit;
//   font-weight: 800;
//   -webkit-appearance: none;
//   outline:0px none transparent;

//   &:focus {
//     outline: 0;
//   }
// }

// select {
//   width: 100%;
//   max-width: 240px;
//   position: relative;
//   height: 35px;
//   border: none;
//   border: 2px solid $neutral-lightest;
//   // border-radius: 10px;
//   color: $neutral-medium;
//   padding: 0 10px;
//   // margin: 15px 0;
//   // font-weight: 600;
//   -moz-appearance: none;
//   -webkit-appearance: none;
//   font-size: 1.1em;
//   outline: none;
// }

// select + label {
//   position: absolute;
//   background: $neutral-light-absolute;
//   top: 3px;
//   left: 14px;
//   color: $neutral-darkest;
//   font-weight: 600;
//   padding: 0 14px;
//   font-size: .9rem;
// }

// span.select {
//   position: relative;

//   &::after {
//     border-bottom: 2px solid;
//     border-left: 2px solid;
//     border-color: $neutral-light;
//     border-right: 0;
//     border-top: 0;
//     content: " ";
//     display: block;
//     pointer-events: none;
//     position: absolute;
//     top: 40%;
//     transform: rotate(-45deg);
//     transform-origin: center;
//     right: 1.125rem;
//     z-index: 4;
//     height: .625em;
//     width: .625em;
//   }
// }

.form-select + label,
input[type=text] + label,
input[type=number] + label,
input[type=password] + label {
  background: red;
  position: absolute;
  z-index: 2;
  top: 5px;
  left: 20px;
  background: $neutral-light-absolute;
  padding: 0 5px;
  font-weight: 600;
  font-size: .9rem;
  color: $neutral-darkest;
  display: flex;
}

// input[type=checkbox] + label {
//   position: unset;
//   color: $neutral-light;
//   font-weight: 600;
//   padding: 0 14px;
//   font-size: .9rem;
// }

// input.focus ~ label {
//   color: $neutral-lighter;
// }

// input:focus,
// textarea:focus,
// select:focus{
//   border: 2px solid $default;
// }

/** Disabled **/
.form-select:disabled,
input[type=text]:disabled,
input[type=number]:disabled,
input[type=password]:disabled,
textarea:disabled {
  background: none;
  color: darken($neutral-darker, 5%);
  border: 2px solid darken($neutral-medium, 3%);
  // cursor: not-allowed;
}

.form-select:disabled + label,
input[type=text]:disabled + label,
input[type=number]:disabled + label,
input[type=password]:disabled + label,
textarea:disabled + label {
  color: darken($neutral-medium, 3%);
}

/** Success **/
.form-select.success-state,
input[type=text].success-state,
input[type=number].success-state,
input[type=password].success-state,
textarea.success-state {
  border: 2px solid $success;
  background: $neutral-light-absolute;
}

.form-select.success-state + label,
input[type=text].success-state + label,
input[type=number].success-state + label,
input[type=password].success-state + label,
textarea.success-state + label {
 color: $success;
 background: $neutral-light-absolute;
}

/** Error **/
.form-select.error-state,
input[type=text].error-state,
input[type=number].error-state,
input[type=password].error-state,
textarea.error-state {
  border: 2px solid $error;
  background: $neutral-light-absolute;
}

.form-select.error-state + label,
input[type=text].error-state + label,
input[type=number].error-state + label,
input[type=password].error-state + label,
textarea.error-state + label {
 color: $error;
 background: $neutral-light-absolute;
}

.form-select-2 {
  height: auto;
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
