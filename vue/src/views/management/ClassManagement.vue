<template>
  <div class="classManagement">
    <h3 class="management_title">分类管理</h3>
    <el-card>
      <el-tag v-for="(item, index) in classContent" :key='index'
        closable type="info" @close="handleClose(item)">
        {{ item.name }}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm">
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'classManagement',
  data () {
    return {
      classContent: [],
      inputValue: '',
      inputVisible: false
    }
  },
  mounted () {
    this.getClass()
  },
  methods: {
    handleClose (item) {
      console.log(item)
      let id = item.id
      this.axios.delete(this.urls.BlogClass + '?id=' + id).then((response) => {
        this.classContent.map((val, index, arr) => {
          if (val.id === id) {
            this.classContent.splice(index, 1)
          }
        })
      }).catch((error) => {
        console.log(error)
      })
    },
    getClass () {
      this.axios.get(this.urls.BlogClass).then((response) => {
        console.log(response)
        this.classContent = response.data.payload
      }).catch((error) => {
        console.log(error)
      })
    },
    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.axios.post(this.urls.BlogClass, this.qs.stringify({
          name: inputValue })).then(response => {
          let data = response.data
          console.log(data)
          if (data.code === 0) {
            this.classContent.push({
              id: data.payload.id,
              name: inputValue
            })
          }
        }).catch(response => {
          console.log(response)
        })
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-card{
  text-align: left
}
.el-tag{
  margin: 0 5px
}
</style>

<style>
</style>
