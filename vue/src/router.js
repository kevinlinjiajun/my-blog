import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "register" */ './views/Register.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
      children: [
        {
          path: 'index',
          component: () => import(/* webpackChunkName: "index" */ './views/index.vue')
        },
        {
          path: 'about',
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
          path: 'login',
          name: 'login',
          component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
        },
        {
          path: 'message',
          name: 'message',
          component: () => import(/* webpackChunkName: "message" */ './views/Message.vue')
        },
        {
          path: 'management',
          name: 'management',
          component: () => import(/* webpackChunkName: "management" */ './views/management/Management.vue'),
          children: [
            {
              path: 'classManagement',
              name: 'classManagement',
              component: () => import(/* webpackChunkName: "classManagement" */ './views/management/ClassManagement.vue')
            },
            {
              path: 'editBlog',
              name: 'editBlog',
              component: () => import(/* webpackChunkName: "editBlog" */ './views/management/EditBlog.vue')
            },
            {
              path: 'blogList',
              name: 'blogList',
              component: () => import(/* webpackChunkName: "blogList" */ './views/management/blogList.vue')
            }
          ]
        }
      ]
    }
  ]
})
