export default {
  currentNav: (state, getters) => {
    return getters.navList.find(element => {
      return element.path === state.route.path
    })
  },
  navList: state => {
    return state.routeList.filter(nav => {
      return nav.redirect === undefined
    })
  },
  routeList: state => {
    const routeList = JSON.parse(JSON.stringify(state.routeList))
    routeList.forEach((route, index) => {
      route.component = state.components[route.name]
    })
    return routeList
  },
  getToolbarTitle: (state, getters) => {
    return getters.currentNav.title
  }
}
