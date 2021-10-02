<script>
import { mixin as clickaway } from 'vue-clickaway'
const AppOverlay = () => import('@/components/ui/AppOverlay')

export default {
  name: 'AppModalRenderless',
  components: {
    AppOverlay
  },
  mixins: [clickaway],
  props: {
    openModal: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    away: function () {
      this.$emit('close')
    }
  },
  render: function (h, context) {
    return (
      <div class="app-modal-Renderless-wrapper">
        <AppOverlay>
          <div class="app-modal-Renderless-overlay-wrapper">
            <transition name="app-modal-Renderless-clicked-away" mode="out-in">
              <div
                key={this.openModal}
                class="app-modal-Renderless-inner-modal"
                v-on-clickaway={this.away}>
                {this.$slots.default}
              </div>
            </transition>
          </div>
        </AppOverlay>
      </div>
    )
  }
}
</script>
