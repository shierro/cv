import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import MainHeader from '@/components/Header'

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.config.productionTip = false

const mockedStore = {
  getters: {
    getTitle () {
      return 'Mock Title'
    }
  }
}

describe('Header.vue', () => {
  it('should render with mocked message', function () {
    const vm = new Vue({
      template: '<div><main-header></main-header></div>',
      components: {
        MainHeader
      },
      store: new Vuex.Store(mockedStore)
    }).$mount()

    expect(vm.$el.querySelector('.toolbar--fixed')).to.not.equal(undefined)
    expect(vm.$el.querySelector('.toolbar__title').textContent.trim()).to.equal(mockedStore.getters.getTitle())
    expect(vm.$el.querySelector('.links__container').children.length).to.equal(3)
  })
})
