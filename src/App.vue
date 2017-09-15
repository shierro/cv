<template>
  <v-app id="app" toolbar footer>
    <drawer></drawer>
    <main-header></main-header>
    <main>
      <v-slide-x-reverse-transition>
        <router-view></router-view>
      </v-slide-x-reverse-transition>
    </main>
    <main-footer></main-footer>
  </v-app>
</template>

<script>
import Drawer from './components/Drawer'
import mainFooter from './components/Footer'
import MainHeader from './components/Header'

export default {
  components: {
    mainFooter,
    Drawer,
    MainHeader
  },
  mounted () {
    const currentNav = this.$store.state.navList.filter(nav => nav.route === this.$route.path)
    if (currentNav.length > 0) {
      this.$store.dispatch('updateTitle', currentNav[0].title)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
