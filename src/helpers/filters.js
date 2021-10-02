import Vue from 'vue'

Vue.filter('shorten', function (value, length) {
  if (!value) return ''
  if (!length) return value
  if (value.length <= length) return value
  return `${value.substring(0, length)}...`
})
