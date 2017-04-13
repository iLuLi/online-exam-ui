import Vue from 'vue'
import router from '@/router'

const AUTHEN = 'authen'
const LOGIN = 'login'
const ERROR = 'error'


const state = {
  username: '',
  success: false,
  msg: ''
}

const mutations = {
  [AUTHEN] (state, {username}) {
    state.username = username
  },
  [ERROR] (state, {msg}) {
    state.success = true
    state.msg = msg
  }
}

const actions = {
  [LOGIN] ({commit}, {username, password}) {
    Vue.http.post('/api/sys/login', {username, password}).then((r) => {
      if (r.body.code === 0) {
        router.push('/')
        commit(AUTHEN, {username: 'iLu'})
      } else {
        commit(ERROR, {msg: r.body.msg})
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}

