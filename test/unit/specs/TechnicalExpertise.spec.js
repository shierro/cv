import Vue from 'vue'
import _ from 'lodash'
import TechnicalExperience from '@/components/TechnicalExperience'

describe('TechnicalExpertise.vue', () => {
  const componentData = TechnicalExperience.data()

  it('should render correct headline & number of items under a category', () => {
    const Constructor = Vue.extend(TechnicalExperience)
    const vm = new Constructor().$mount()

    const projectList = vm.$el.querySelector('.expansion-panel').children
    expect(vm.$el.querySelector('.tech-exp__headline').textContent)
      .to.equal(componentData.headline)

    // TODO: Test other stuff like sub-heading, etc
    _.each(projectList, (project, index) => {
      expect(project.querySelector('.details__header--job__title').textContent.trim())
        .to.equal(componentData.projects[index].title)
    })
  })
})
