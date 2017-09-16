import Vue from 'vue'
import Router from 'vue-router'
import Education from '@/components/Education'
import Employment from '@/components/Employment'
import TechnicalExperience from '@/components/TechnicalExperience'
import LanguageAndTech from '@/components/LanguageAndTech'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({

  // Arrange according to drawer navigation
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
      path: '/technical-experience',
      name: 'TechnicalExperience',
      component: TechnicalExperience
    },
    {
      path: '/language-and-tech',
      name: 'LanguageAndTech',
      component: LanguageAndTech
    },
    {
      path: '/education',
      name: 'Education',
      component: Education
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
