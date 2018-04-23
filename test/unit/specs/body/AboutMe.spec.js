import Vue from 'vue'
import _ from 'lodash'
import AboutMe from '@/components/content/AboutMe'

describe('AboutMe.vue', () => {
  const componentData = AboutMe.data()

  it('should render correct data', () => {
    const Constructor = Vue.extend(AboutMe)
    const { aboutMeList } = AboutMe.data()
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('.about-me__headline').textContent)
      .to.equal(componentData.headLine)

    const details = vm.$el.querySelector('.aboutme__details').children
    _.each(details, (detail, index) => {
      expect(aboutMeList[index].title).to.equal(detail.firstChild.textContent)
      expect(aboutMeList[index].content).to.equal(detail.children[1].textContent)
    })
  })
})
