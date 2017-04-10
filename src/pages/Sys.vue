<template>
   <div class="wrapper">
    <Mheader/>
    <aside class="main-sidebar">
      <div class="sidebar">
        <ul class="nav sidebar-menu">
          <li v-for="item in menuData">
            <a href="#">{{item.text}}</a>
            <ul class="nav treeview-menu" v-if="hasChild(item)">
              <li v-for="citem in item.children">
                <a href="#">{{citem.text}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
    <div class="content-wrapper">

    </div>
   </div>
</template>

<script>
  import Mheader from '@/components/Mheader'
  export default {
    data () {
      return {
        menuData: [
          {
            'text': '1111'
          },
          {
            'text': '2222',
            'children': [
              {
                'text': '33333'
              }
            ]
          }
        ]
      }
    },
    methods: {
      hasChild (item) {
        return !!item.children && !!item.children.length && item.children.length > 0
      }
    },
    components: {
      Mheader
    }
  }
</script>

<style lang="stylus" scoped>
  .content-wrapper
    min-height: 610px
</style>
