import SocketIO from 'socket.io-client'
import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'

const options = { path: '/socket.io' }

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('http://192.168.1.16:1337', options)
}))
