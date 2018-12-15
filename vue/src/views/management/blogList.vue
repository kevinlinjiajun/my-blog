<template>
  <div class="blogList">
    <h3 class="management_title">博客列表</h3>
    <el-table :data="blogListTableData">
      <el-table-column label="标题"></el-table-column>
      <el-table-column label="分类"></el-table-column>
      <el-table-column label="创建时间"></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'blogList',
  data () {
    return {
      blogListTableData: []
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-input,.el-select{
  max-width: 50%;
  display: block;
}
</style>

<style>
</style>
