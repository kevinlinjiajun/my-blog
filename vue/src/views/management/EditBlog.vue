<template>
  <div class="editBlog">
    <h3 class="management_title">编辑博客</h3>
    <el-form :model="blogForm" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="blogForm.title" placeholder="博客标题"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="blogForm.class" multiple placeholder="请选择博客分类">
          <el-option v-for="item in classArr" :key="item.id"
           :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="博客正文">
        <mavon-editor v-model="blogForm.text" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveBlog">立即发布</el-button>
        <el-button @click="saveDraft">保存为草稿</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'editBlog',
  data () {
    return {
      blogForm: {
        title: '',
        class: [],
        text: ''
      },
      classArr: []
    }
  },
  mounted () {
    this.getClass()
  },
  methods: {
    getClass () {
      this.axios.get(this.urls.BlogClass).then((response) => {
        this.classArr = response.data.payload
      }).catch((error) => {
        console.log(error)
      })
    },
    saveBlog () {
      this.blogForm.class = JSON.stringify(this.blogForm.class)
      console.log('saveBlog', this.blogForm)
      console.log(this.qs.stringify(this.blogForm))
      this.axios.post(this.urls.addBlog, this.qs.stringify(this.blogForm))
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    saveDraft () {
      console.log('saveDraft')
    }
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
