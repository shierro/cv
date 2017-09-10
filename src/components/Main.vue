<template>
  <v-app id="example-1" toolbar footer>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      light
      enable-resize-watcher
      overflow
      :mini-variant.sync="mini"
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <img src="../assets/picture.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Theo</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.native.stop="toggleDrawer()">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
    </v-navigation-drawer>
    <v-toolbar class="indigo" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ toolbarTitle }}</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <!--v-router-->
      </v-container>
    </main>
    <v-footer class="indigo">
      <span class="white--text">© 2017</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      drawer: true,
      mini: false,
      toolbarTitle: 'Professional Resume'
    }
  },
  methods: {
    toggleDrawer () {
      this.drawer = !this.drawer
    }
  }
}
</script>
