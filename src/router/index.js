import Vue from 'vue'
import Router from 'vue-router'
import Education from '@/components/Education'
import Employment from '@/components/Employment'
import TechnicalExpertise from '@/components/TechnicalExpertise'
import LanguageAndTech from '@/components/LanguageAndTech'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      redirect: '/employment'
    },
    {
      path: '/employment',
      name: 'Employment',
      component: Employment
    },
    {
      path: '/education',
      name: 'Education',
      component: Education
    },
    {
      path: '/technical-expertise',
      name: 'TechnicalExpertise',
      component: TechnicalExpertise
    },
    {
      path: '/language-and-tech',
      name: 'LanguageAndTech',
      component: LanguageAndTech
    }
  ]
})
