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
import Footer from './components/Footer'
import MainHeader from './components/Header'

export default {
  components: {
    mainFooter: Footer,
    Drawer,
    MainHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
