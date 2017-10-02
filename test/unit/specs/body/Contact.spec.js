import Vue from 'vue'
import Contact from '@/components/body/Contact'

describe('Contact.vue', () => {
  const componentData = Contact.data()

  it('should render correct data', () => {
    const Constructor = Vue.extend(Contact)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('.educ__headline').textContent)
      .to.equal(componentData.headLine)

    expect(vm.$el.querySelector('.list--two-line').children.length)
      .to.equal(componentData.contacts.length)
  })
})
