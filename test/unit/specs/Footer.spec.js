import Vue from 'vue'
import Footer from '@/components/Footer'

describe('Footer.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Footer)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.credits__text').textContent)
      .to.equal('© 2017')
  })
})
