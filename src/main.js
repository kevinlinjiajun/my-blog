import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/style.css'

import qs from 'qs'
import axios from 'axios'

Vue.use(ElementUI)

Vue.prototype.axios = axios
Vue.prototype.qs = qs

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
