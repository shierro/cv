<template>
  <v-app id="example-1" toolbar footer>
    <drawer></drawer>
    <v-toolbar class="indigo" dark>
      <v-toolbar-title>{{ toolbarTitle }}</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
      </v-container>
    </main>
    <v-footer class="indigo">
      <span class="white--text">{{ credits }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Drawer from './Drawer'

export default {
  data () {
    return {
      toolbarTitle: 'Professional Resume',
      credits: '© 2017'
    }
  },
  components: {
    Drawer
  }
}
</script>
<style lang="scss" scoped>
</style>

