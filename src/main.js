import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css'

import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router/routes.js'
import App from './App.vue'


Vue.use(Vuetify)
Vue.use(axios)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
