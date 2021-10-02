import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export const http = axios.create({
  baseURL: 'https://my-kahoot.herokuapp.com',
  headers: { 'Access-Control-Allow-Origin': '*' }
})
