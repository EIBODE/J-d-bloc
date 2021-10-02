import SocketIO from 'socket.io-client'
import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'

const options = { path: '/socket.io' }

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('https://my-kahoot.herokuapp.com', options)
}))
