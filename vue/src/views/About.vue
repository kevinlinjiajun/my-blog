<template>
  <div class="about">
    <el-button type="primary" @click="changeImage('bg.jpg')">image1</el-button>
    <el-button type="primary" @click="changeImage('logo.png')">image2</el-button>
    <img :src="imageUrl">
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      imageUrl: require('../../static/images/logo.png')
    }
  },
  methods: {
    changeImage (str) {
      console.log(str)
      this.imageUrl = require('../../static/images/' + str)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>

<style>
</style>
