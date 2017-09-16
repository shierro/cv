import Vue from 'vue'
import _ from 'lodash'
import Employment from '@/components/Employment'

describe('Employment.vue', () => {
  const componentData = Employment.data()

  it('should render correct headline & number of items under a category', () => {
    const Constructor = Vue.extend(Employment)
    const vm = new Constructor().$mount()

    const jobList = vm.$el.getElementsByClassName('details__container')

    // TODO: Test other stuff like sub-heading, etc
    _.each(jobList, (job, index) => {
      expect(job.querySelector('.details__header--job__title').textContent.trim())
        .to.equal(componentData.jobs[index].title)
      expect(job.querySelector('.details__header--company__name').textContent.trim())
        .to.equal(componentData.jobs[index].company.name)
      expect(job.querySelector('.details__header--company__stay').textContent.trim())
        .to.equal(componentData.jobs[index].company.stay)
      expect(job.querySelector('.details__header--company__location').textContent.trim())
        .to.equal(componentData.jobs[index].company.location)
    })
  })
})
