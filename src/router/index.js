import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Sys from '@/pages/Sys'
import Login from '@/pages/Login'
import Generate from '@/pages/sys/Generate.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sys',
      component: Sys,
      children: [
        {
          path: '/generate',
          name: 'generate',
          component: Generate
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
