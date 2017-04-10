import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Sys from '@/pages/Sys'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'sys',
      component: Sys
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
