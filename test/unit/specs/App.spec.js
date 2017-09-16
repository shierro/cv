import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import StarRating from 'vue-star-rating'

import App from '@/App'
import store from '@/store'
import router from '@/router'

Vue.component('star-rating', StarRating)

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.config.productionTip = false

describe('App.vue', () => {
  it('should have Drawer, Footer and Header', () => {
    const vm = new Vue({
      template: '<App />',
      components: {
        App
      },
      store,
      router
    }).$mount()
    vm._watcher.run()

    expect(vm.$el.querySelector('nav')).to.not.equal(undefined)
    expect(vm.$el.querySelector('.navigation-drawer')).to.not.equal(undefined)
    expect(vm.$el.querySelector('footer')).to.not.equal(undefined)
  })

  it('not update title when route is not valid', done => {
    router.replace('/unknown-route')

    const vm = new Vue({
      template: '<App />',
      components: {
        App
      },
      store,
      router
    }).$mount()
    vm._watcher.run()

    router.replace('/employment')

    Vue.nextTick(done)
  })
})
