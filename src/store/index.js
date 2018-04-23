import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import Education from '@/components/content/Education'
import Employment from '@/components/content/Employment'
import TechnicalExperience from '@/components/content/TechnicalExperience'
import LanguageAndTech from '@/components/content/LanguageAndTech'
import Contact from '@/components/content/Contact'
import AboutMe from '@/components/content/AboutMe'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  getters,
  state: {
    routeList: [
      {
        path: '/',
        name: 'Main',
        redirect: '/employment'
      },
      {
        title: 'Employment',
        icon: 'assignment',
        class: 'material-icons icon green--text text--darken-2 icon--large',
        path: '/employment',
        name: 'Employment'
      },
      {
        title: 'Technical Experience',
        icon: 'business',
        class: 'material-icons icon yellow--text text--darken-2 icon--large',
        path: '/technical-experience',
        name: 'TechnicalExperience'
      },
      {
        title: 'Language and Technologies',
        icon: 'code',
        class: 'material-icons icon red--text text--darken-2 icon--large',
        path: '/language-and-tech',
        name: 'LanguageAndTech'
      },
      {
        title: 'Education',
        icon: 'school',
        class: 'material-icons icon blue--text text--darken-2 icon--large',
        path: '/education',
        name: 'Education'
      },
      {
        title: 'Contact',
        icon: 'call',
        class: 'material-icons icon orange--text text--darken-2 icon--large',
        path: '/contact',
        name: 'Contact'
      },
      {
        title: 'About Me',
        icon: 'person',
        class: 'material-icons icon deep-purple--text text--darken-2 icon--large',
        path: '/about-me',
        name: 'AboutMe'
      }
    ],
    components: {
      Employment,
      TechnicalExperience,
      LanguageAndTech,
      Education,
      Contact,
      AboutMe
    }
  },
  strict: debug
})
