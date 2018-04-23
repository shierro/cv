import Vue from 'vue'
import Education from '@/components/content/Education'

describe('Education.vue', () => {
  const componentData = Education.data()

  it('should render correct data', () => {
    const Constructor = Vue.extend(Education)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('.educ__headline').textContent)
      .to.equal(componentData.headLine)
    expect(vm.$el.querySelector('.educ__body--school__name').textContent)
      .to.equal(componentData.school.name)
    expect(vm.$el.querySelector('.educ__body--school__address').textContent)
      .to.equal(componentData.school.address)
    expect(vm.$el.querySelector('.educ__body--duration').textContent)
      .to.equal(componentData.duration)
  })
})
