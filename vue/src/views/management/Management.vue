<template>
  <div class="management">
    <el-row>
      <el-col :span="4">
        <el-menu
          default-active="1-2"
          class="el-menu-vertical-demo"
          active-text-color="#19aa8d">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>博客管理</span>
            </template>
            <el-menu-item index="1-1">
              <router-link :to="{name: 'editBlog'}">博客填写</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link :to="{name: 'blogList'}">博客列表</router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link :to="{name: 'classManagement'}">分类管理</router-link>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'management',
  data () {
    return {
    }
  },
  mounted () {
    this.$router.push({
      name: 'blogList'
    })
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.management>.el-row>.el-col-20{
  padding: 10px
}
li.el-menu-item{
  padding: 0
}
li.el-menu-item a{
  display: block;
}
</style>

<style>
</style>
