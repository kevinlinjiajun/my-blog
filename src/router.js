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
          component: () => import(/* webpackChunkName: "home" */ './views/index.vue')
        },
        {
          path: 'about',
          component: () => import(/* webpackChunkName: "home" */ './views/About.vue')
        },
        {
          path: 'login',
          name: 'login',
          component: () => import(/* webpackChunkName: "home" */ './views/Login.vue')
        },
        {
          path: 'message',
          name: 'message',
          component: () => import(/* webpackChunkName: "home" */ './views/Message.vue')
        },
        {
          path: 'management',
          name: 'management',
          component: () => import(/* webpackChunkName: "home" */ './views/Management.vue')
        }
      ]
    }
  ]
})
