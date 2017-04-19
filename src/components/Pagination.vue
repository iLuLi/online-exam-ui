<template>
  <ul class="pagination no-margin pull-right">
    <li :class="{disabled: curPage === 1}" @click="query(1)"><a href="javascript:void(0)">首页</a></li>
    <li v-for="p in pages" :class="{active: p === curPage}" @click="query(p)"><a href="javascript:void(0)">{{p}}</a></li>
    <li :class="{disabled: curPage === pageCount}" @click="query(pageCount)"><a href="javascript:void(0)">尾页</a></li>
  </ul>
</template>

<script>
  export default {
    props: {
      showNum: Number,
      curPage: Number,
      pageCount: Number,
      ulClass: String
    },
    computed: {
      pages () {
        let i,
          begin,
          nums = []

        if (this.showNum >= this.pageCount) {
          for (i = 0; i < this.pageCount; i++) {
            nums.push(i + 1)
          }
        } else {
          begin = this.curPage - Math.floor(this.showNum / 2)
          if (begin < 1) {
            begin = 1
          }
          if (begin + this.showNum > this.pageCount) {
            begin = this.pageCount - this.showNum + 1
          }
          for (i = begin; i < begin + this.showNum; i++) {
            nums.push(i)
          }
        }
        return nums
      }
    },
    methods: {
      query (index) {
        if (index === this.curPage) {
          return
        }
        this.$emit('changePage', index)
      }
    }
  }
</script>
