import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/style.css'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import { urls } from './assets/js/urls'

import qs from 'qs'
import axios from 'axios'

Vue.use(ElementUI)
Vue.use(mavonEditor)

Vue.prototype.axios = axios
Vue.prototype.qs = qs
Vue.prototype.urls = urls

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
