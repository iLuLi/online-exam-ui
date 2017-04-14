<template>
  <header class="main-header">
    <a href="#" class="logo">Logo</a>
    <nav class="navbar navbar-static-top" role="navigation">
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button"></a>
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <img src="../assets/imgs/user.jpg" alt="" class="user-image">
              <span class="hidden-xs">{{username}}</span>
            </a>
            <ul class="header-dropdown dropdown-menu">
              <li>
                <a href="#">profile</a>
              </li>
              <li>
                <a href="#">退出</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState({
      username: state => state.auth.username
    })
  }
</script>

<style lang="stylus" scoped>
  .header-dropdown
    width: 80px !important
    li
      text-align: center
      a
        line-height: 40px !important
</style>
