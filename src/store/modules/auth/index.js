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
    Vue.http.post('/sys/login', {username, password}).then((r) => {
      if (r.data.code === 0) {
        router.push('/main')
        commit(AUTHEN, {username: 'iLu'})
      } else {
        commit(ERROR, {msg: r.data.msg})
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}

