import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import i18n from './i18n'
import './helpers/index'
import './helpers/filters'
import './helpers/socket-io'

const AppButton = () => import('./components/ui/AppButton')
const AppMainLayout = () => import('./components/layout/AppMainLayout')

Vue.config.productionTip = false

Vue.component('AppButton', AppButton)
Vue.component('app-main-layout', AppMainLayout)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
