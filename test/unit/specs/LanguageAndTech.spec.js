import Vue from 'vue'
import Vuetify from 'vuetify'
import _ from 'lodash'
import LanguageTech from '@/components/LanguageAndTech'
import StarRating from 'vue-star-rating'

Vue.use(Vuetify)
Vue.component('star-rating', StarRating)

describe('LanguageAndTech.vue', () => {
  const componentData = LanguageTech.data()
  const techCategories = Object.keys(componentData.languages)
  it('should render correct headline & number of items under a category', () => {
    const vm = new Vue({
      template: '<div><LanguageTech /></div>',
      components: {
        LanguageTech
      }
    }).$mount()

    const techList = vm.$el.querySelector('.lang-tech').children
    _.each(techList, (tech, index) => {
      expect(tech.firstChild.textContent)
        .to.equal(componentData.languages[techCategories[index]].headline)

      expect(tech.querySelector('ul').children.length)
        .to.equal(componentData.languages[techCategories[index]].list.length)
    })
  })
})
