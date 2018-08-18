
import Vue from 'vue'
import Vuetify from 'vuetify'
import axios from 'axios'
import router from './router/routes.js'
import App from './App.vue'
import store from './store/store.js'
import {ChartPlugin} from './plugins/chart.js'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css' 


Vue.use(Vuetify);
Vue.prototype.axios =axios;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
