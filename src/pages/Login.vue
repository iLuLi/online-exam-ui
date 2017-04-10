<template>
  <div class="login-view">
    <div class="form">
      <Form :model="authc">
        <Form-item prop="user">
          <Input v-model="authc.username" size="large" placeholder="请输入用户名">
            <Icon type="ios-person-outline" size="21" slot="prepend"/>
          </Input>
        </Form-item>
        <Form-item>
          <Input v-model="authc.password" size="large" placeholder="请输入密码" type="password">
            <Icon type="ios-locked-outline" size="21" slot="prepend"/>
          </Input>
        </Form-item>
        <Form-item>
          <Button type="primary" size="large">登陆</Button>
          <Button type="ghost" size="large" style="margin-left: 20px;">注册</Button>
        </Form-item>
      </Form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        authc: {
          username: '',
          password: ''
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .login-view
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color: #2c3e50
    .form 
      width: 300px
      margin: auto
      margin-top: 200px
</style>
