<template>
  <div v-if="openModal" :key="openModal" class="app-modal">
    <app-modal-renderless :open-modal="openModal" @close="close()">
      <template #default>
        <div class="default-slot">
          <div class="modal-header">
            <div class="title">
              {{ title }}
            </div>
            <!-- <div class="close" @click="close()">
              <faIcon :icon="['fa', 'times']"></faIcon>
            </div> -->
          </div>
          <div class="body">
            <slot></slot>
          </div>
        </div>
      </template>
    </app-modal-renderless>
  </div>
</template>

<script>
import AppModalRenderless from '@/components/renderless/AppModalRenderless'

export default {
  name: 'AppModal',
  components: {
    AppModalRenderless
  },
  props: {
    openModal: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    close: function () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.app-modal-Renderless-inner-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 100%;
  // overflow-y: scroll;
  // overflow-x: hidden;
}

.app-modal-Renderless-overlay-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $neutral-transparent;
  z-index: 3;
}

.modal-header {
  width: calc(100% - 40px);
  height: 60px;
  padding: 20px;
  display: flex;
  justify-content: space-between;

  .title {
    font-size: 2rem;
  }
  .close {
    font-size: 2rem;
    padding: 0 15px;
    color: $neutral-darker;
  }
}

.app-modal {
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  .default-slot {
    min-height: 70px;
    min-width: 300px;
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    padding: 15px;
    overflow-y: auto;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: space-between;
    color: $neutral-medium;
    background: $neutral-light-absolute;
    border-radius: 15px;
    box-shadow: $box-shadow-light;
    font-family: $font-stack;
    font-size: 1.5rem;
    font-weight: 800;
  }
}
</style>
