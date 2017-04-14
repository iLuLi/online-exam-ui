<template>
  <ul class="pagination no-margin pull-right">
    <li :class="{disabled: curPage === 1}"><a href="#">首页</a></li>
    <li v-for="p in pages" :class="{active: p === curPage}"><a href="#">{{p}}</a></li>
    <li :class="{disabled: curPage === totalPage}"><a href="#">尾页</a></li>
  </ul>
</template>

<script>
  export default {
    props: {
      showNum: Number,
      curPage: Number,
      totalPage: Number,
      ulClass: String
    },
    computed: {
      pages () {
        let i,
          begin,
          nums = [],
          odd = this.showNum % 2,
          limit = this.showNum / 2

        if (this.showNum >= this.totalPage) {
          for (i = 0; i < this.totalPage; i++) {
            nums.push(i + 1)
          }
        } else {
          begin = this.curPage - limit
          if (begin < 1) {
            begin = 1
          }
          for (i = 0; i < this.showNum; i++) {
            nums.push(begin + i)
          }
        }
        console.log(nums)
        return nums
      }
    }
  }
</script>
