<template>
  <v-app id="cv" toolbar footer>
    <drawer></drawer>
    <v-toolbar class="indigo" dark fixed>
      <v-toolbar-title>{{ toolbarTitle }}</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <employment></employment>
      </v-container>
    </main>
    <main-footer></main-footer>
  </v-app>
</template>

<script>
import Drawer from './Drawer'
import Footer from './Footer'
import Employment from './Employment'

export default {
  data () {
    return {
      toolbarTitle: 'Professional Resume',
      credits: '© 2017'
    }
  },
  components: {
    Drawer,
    mainFooter: Footer,
    Employment
  }
}
</script>
