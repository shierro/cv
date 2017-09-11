<template>
  <v-app id="app" toolbar footer>
    <drawer></drawer>
    <main-header></main-header>
    <main>
      <router-view></router-view>
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
