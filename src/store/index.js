import Vue from 'vue'
import Vuex from 'vuex'
import header from './modules/header'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    header
  },
  state: {
    navList: [
      {
        title: 'Employment',
        icon: 'assignment',
        class: 'material-icons icon green--text text--darken-2 icon--large',
        route: '/employment'
      },
      {
        title: 'Technical Experience',
        icon: 'business',
        class: 'material-icons icon yellow--text text--darken-2 icon--large',
        route: '/technical-experience'
      },
      {
        title: 'Language and Technologies',
        icon: 'code',
        class: 'material-icons icon red--text text--darken-2 icon--large',
        route: '/language-and-tech'
      },
      {
        title: 'Education',
        icon: 'school',
        class: 'material-icons icon blue--text text--darken-2 icon--large',
        route: '/education'
      },
      {
        title: 'Contact',
        icon: 'call',
        class: 'material-icons icon orange--text text--darken-2 icon--large',
        route: '/contact'
      }

    ]
  },
  strict: debug
})
