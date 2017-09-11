import * as types from '../mutation-types'

// initial state
const state = {
  title: 'Employment'
}

// getters
const getters = {
  getTitle: state => state.title
}

// actions
const actions = {
  updateTitle ({ commit }, title) {
    commit(types.UPDATE_TITLE, { title })
  }
}

// mutations
const mutations = {
  [types.UPDATE_TITLE] (state, { title }) {
    state.title = title
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
