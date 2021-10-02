import camelCase from 'lodash/camelCase'
import Vue from 'vue'
import Vuex from 'vuex'

const requireModule = require.context('.', false, /\.module\.js$/)
const modules = {}

requireModule.keys().forEach(fileName => {
  const moduleName = camelCase(fileName.replace(/(\.\/|\.module\.js)/g, ''))
  modules[moduleName] = {
    ...requireModule(fileName).default
  }
})

Vue.use(Vuex)

console.log(modules)

const store = new Vuex.Store({
  modules
})

export default store
