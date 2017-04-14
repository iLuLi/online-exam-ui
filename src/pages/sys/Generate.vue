<template>
  <div>
    <section class="content-header clearfix">
      <h1>控制台</h1>
      <ol class="breadcrumb">
        <li>
          <i class="fa fa-dashboard"></i>
          首页
        </li>
        <li class="active">
          生成代码
        </li>
      </ol>
    </section>
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header form-inline">
              <div class="form-group">
                <input type="text" v-model="tableName" class="form-control">
              </div>
              <button class="btn btn-default" @click="query">查询</button>
              <button class="btn btn-primary">生成代码</button>
            </div>
            <div class="box-body">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <td>
                      <input type="checkbox" v-model="allSelected">
                    </td>
                    <td v-for="col in colModel" :style="{width: col.width}">{{col.label}}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in data" @click="selecteOne(row)">
                    <td>
                      <input type="checkbox" @click.stop v-model="row.selected">
                    </td>
                    <td v-for="col in colModel">{{row[col.name]}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="box-footer">
              <Pagination :curPage="curPage" :totalPage="totalPage" :showNum="5"></Pagination>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Pagination from '@/components/Pagination'
  export default {
    data () {
      return {
        tableName: '',
        loading: false,
        colModel: [
          {label: '表名', name: 'tableName', width: '100'},
          {label: 'Engine', name: 'engine', width: '100'},
          {label: '表备注', name: 'tableComment', width: '100'},
          {label: '创建时间', name: 'createTime', width: '100'}
        ],
        data: [],
        rowNum: 2,
        curPage: 1,
        totalPage: 10,
        tableKey: 'tableName',
        selectedTable: []
      }
    },
    computed: {
      allSelected: {
        get () {
          return this.data.every(d => {
            return d.selected
          })
        },
        set (value) {
          this.data.forEach(d => {
            d.selected = value
          })
        }
      }
    },
    methods: {
      selecteOne (item) {
        item.selected = !item.selected
      },
      query () {
        this.loading = true
        let url = '/api/generate/list?page=' + this.curPage + '&limit=' + this.rowNum + '&tableName=' + this.tableName
        this.$http.get(url).then(r => {
          this.data = r.body.page.list.map(d => {
            return {
              ...d,
              selected: false
            }
          })
          this.loading = false
        })
      }
    },
    created () {
      this.loading = true
      this.query()
    },
    components: {
      Pagination
    }
  }
</script>

<style>
</style>
