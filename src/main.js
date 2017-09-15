import 'vuetify/dist/vuetify.min.css'

import Vue from 'vue'
import Vuetify from 'vuetify'
import StarRating from 'vue-star-rating'

import App from './App'
import router from './router'
import store from './store'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.component('star-rating', StarRating)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
