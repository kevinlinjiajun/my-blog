let httpServer = 'http://10.139.198.162:8082'

export const urls = {
  login: httpServer + '/login', // 登录接口
  register: httpServer + '/register', // 注册接口

  BlogClass: httpServer + '/blogClass', // 增加博客分类
  addBlog: httpServer + '/addBlog' // 新增博客
}
