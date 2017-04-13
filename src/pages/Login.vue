<template>
  <div class="login-box">
    <div class="login-logo">在线考试系统</div>
    <div class="login-box-body">
      <div class="form-group has-feedback">
        <input type="text" class="form-control" v-model="username">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" class="form-control" v-model="password">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="row">
        <div class="col-xs-8">
          <div class="checkbox">
            <label>
              <input type="checkbox" class="ml0">
              记住我
            </label>
          </div>
        </div>
        <div class="col-xs-4">
          <button class="btn btn-primary btn-block btn-flat" @click="login">登录</button>
        </div>
        <div v-show="success">{{msg}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      isRememberMe: false
    }
  },
  computed: mapState({
    success,
    msg
  }),
  methods: {
    login () {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>

<style lang="stylus">
  body
    background-color: #d2d6de
  .login-box
    text-align: left !important
  .ml0 
    margin-left: 0
</style>
