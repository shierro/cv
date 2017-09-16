import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import _ from 'lodash'
import LeftDrawer from '@/components/Drawer'
import store from '../../../src/store'
import router from '../../../src/router'

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.config.productionTip = false

describe('Drawer.vue', () => {
  const vm = new Vue({
    template: '<div><left-drawer></left-drawer></div>',
    components: {
      LeftDrawer
    },
    store,
    router
  }).$mount()
  const navListRendered = vm.$el.getElementsByTagName('li')

  it('should render and display correct info', () => {
    expect(vm.$el.querySelector('.drawer__card')).to.not.equal(undefined)
    expect(vm.$el.querySelector('.drawer__card--title').textContent.trim()).to.equal(LeftDrawer.data().jobTitle)

    _.each(navListRendered, (nav, index) => {
      expect(nav.querySelector('span').textContent).to.equal(store.state.navList[index].title)
      expect(nav.querySelector('.icon').textContent).to.equal(store.state.navList[index].icon)
    })
  })

  it('should navigate properly', () => {
    vm._watcher.run()
    let targetIndex
    _.each(navListRendered, (nav, index) => {
      // simulate click event
      const clickEvent = new window.Event('click')
      nav.dispatchEvent(clickEvent)
      // path / will render Employment
      targetIndex = (index <= 0 ? 1 : index + 1)
      expect(router.app._route.path).to.equal(router.options.routes[targetIndex].path)
    })
  })

  it('should compute full name and `active` properly', () => {
    let targetIndex
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

    _.each(navListRendered, (nav, index) => {
      targetIndex = (index <= 0 ? 1 : index + 1)
      mockSource.$route.name = router.options.routes[targetIndex].name
      expect(LeftDrawer.computed.active.call(mockSource))
        .to.equal(index)
    })
  })
})
