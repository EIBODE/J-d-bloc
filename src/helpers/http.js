import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export const http = axios.create({
  baseURL: 'http://192.168.1.16:1337',
  headers: { 'Access-Control-Allow-Origin': '*' }
})
