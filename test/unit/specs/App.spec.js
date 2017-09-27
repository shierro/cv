import Vue from 'vue'
import Vuetify from 'vuetify'
import StarRating from 'vue-star-rating'
import Vuex from 'vuex'

import App from '@/App'
import router from '@/router'
import getters from '@/store/getters'

Vue.use(Vuex)

Vue.component('star-rating', StarRating)

Vue.use(Vuetify)
Vue.config.productionTip = false

const debug = process.env.NODE_ENV !== 'production'
const state = {
  routeList: [
    {
      path: '/',
      name: 'Main',
      redirect: '/employment'
    },
    {
      title: 'Employment',
      icon: 'assignment',
      class: 'material-icons icon green--text text--darken-2 icon--large',
      path: '/employment',
      name: 'Employment'
    },
    {
      title: 'Technical Experience',
      icon: 'business',
      class: 'material-icons icon yellow--text text--darken-2 icon--large',
      path: '/technical-experience',
      name: 'TechnicalExperience'
    }
  ],
  route: {
    path: '/employment'
  }
}

const store = new Vuex.Store({
  dispatch: (title) => 'Test Title!',
  getters,
  state,
  strict: debug
})

describe('App.vue', () => {
  it('should have Drawer, Footer and Header', () => {
    const vm = new Vue({
      template: '<App />',
      components: {
        App
      },
      router,
      store
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
