import 'babel-polyfill'
import Vue from 'vue'
import Vuetify from 'vuetify'
import _ from 'lodash'
import LeftDrawer from '@/components/Drawer'
import router from '@/router'
import { sync } from 'vuex-router-sync'
import Vuex from 'vuex'
import { expect } from 'chai'

Vue.use(Vuetify)
Vue.config.productionTip = false

describe('Drawer.vue', () => {
  const state = {
    route: {
      path: '/employment'
    }
  }

  const getters = {
    navList: () => [{
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
    }],
    currentNav: (state, getters) => {
      return getters.navList.find(element => {
        return element.path === state.route.path
      })
    }
  }

  const store = new Vuex.Store({
    state,
    getters
  })

  const vm = new Vue({
    template: '<LeftDrawer />',
    components: {
      LeftDrawer
    },
    store,
    router
  }).$mount()

  const navListRendered = vm.$el.getElementsByTagName('li')
  sync(store, router)

  it('should render and display correct info', () => {
    expect(vm.$el.querySelector('.drawer__card')).to.not.equal(undefined)
    expect(vm.$el.querySelector('.drawer__card--title').textContent.trim()).to.equal(LeftDrawer.data().jobTitle)

    const navList = getters.navList()
    _.each(navListRendered, (nav, index) => {
      expect(nav.querySelector('span').textContent).to.equal(navList[index].title)
      expect(nav.querySelector('.icon').textContent).to.equal(navList[index].icon)
    })
  })

  it('should navigate properly', () => {
    vm._watcher.run()
    let targetIndex
    _.each(navListRendered, (nav, index) => {
      // simulate click
      const clickEvent = new window.Event('click')
      nav.dispatchEvent(clickEvent)
      // path / will render Employment
      targetIndex = (index <= 0 ? 1 : index + 1)
      const targetRoute = router.options.routes[targetIndex]
      expect(state.route.path).to.equal(targetRoute.path)
    })
  })

  it('should compute full name properly', () => {
    const mockSource = {
      name: {
        first: 'Theodoro',
        middleInitial: 'S.',
        last: 'Pelingan',
        suffix: 'Jr.'
      },
      '$route': {
        name: 'TechnicalExperience'
      }
    }

    expect(LeftDrawer.computed.fullName.call(mockSource))
      .to.equal('Theodoro S. Pelingan Jr.')
  })
})
