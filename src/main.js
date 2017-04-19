// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { sync } from 'vuex-router-sync'
import VueResource from 'vue-resource'

import store from './store'

// Vue.use(VueResource)

// Vue.http.options.emulateJSON = true

axios.interceptors.request.use(function (config) {
  if (config.method === 'post') {
    config.headers = {
      'content-type': 'application/x-www-form-urlencoded'
    }
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

axios.defaults.transformRequest = [function (data) {
  // Do whatever you want to transform the data
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}]
axios.defaults.baseURL = 'http://localhost:9000/api'

Vue.http = Vue.prototype.$http = axios

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
