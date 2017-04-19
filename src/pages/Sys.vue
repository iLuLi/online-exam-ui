<template>
   <div class="wrapper">
    <Mheader/>
    <aside class="main-sidebar">
      <div class="sidebar">
        <ul class="sidebar-menu">
          <li class="treeview">
            <router-link to="/main/generate">生成代码</router-link>
          </li>
        </ul>
      </div>
    </aside>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
   </div>
</template>

<script>
  import Mheader from '@/components/Mheader'
  import Hello from '@/components/Hello.vue'

  function childComponentHander (path) {
    return resolve => {
      require.ensure([], (require) => {
        resolve(require('@/components/' + path + '.vue'))
      })
    }
  }
  export default {
    data () {
      return {
      }
    },
    methods: {
      hasChild (item) {
        return !!item.children && !!item.children.length && item.children.length > 0
      }
    },
    components: {
      Mheader
    },
    created () {
      console.log(this.$router)
      this.$router.addRoutes([{
        path: '/hello',
        name: 'Hello',
        component: childComponentHander('Hello')
      }])
    }
  }
</script>

<style lang="stylus">
  .content-wrapper
    min-height: 610px
</style>
