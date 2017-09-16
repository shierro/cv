<template>
  <v-navigation-drawer
    persistent
    light
    overflow
    permanent
  >
    <v-card elevation-1 class="drawer__card">
      <v-avatar class="drawer__card--avatar">
        <img src="../assets/picture.jpg" />
      </v-avatar>
      <span class="drawer__card--name">
        {{ fullName }}
      </span>
      <span class="drawer__card--title">
        {{ jobTitle }}
      </span>
    </v-card>
    <v-list two-line class="drawer__nav-list">
      <template v-for="(nav, index) in navList">
        <v-list-tile 
          avatar 
          ripple 
          v-bind:key="index"
          v-on:click.stop="navigate(index, nav.route, nav.title)"
          :class="active === index ? 'active' : ''">
          <v-list-tile-content>
            <v-list-tile-title class="drawer__nav-list--title">
              <i :class="nav.class">{{nav.icon }}</i>
              <span>{{ nav.title }}</span>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider v-bind:key="index"></v-divider>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    name: {
      first: 'Theodoro',
      middleInitial: 'S.',
      last: 'Pelingan',
      suffix: 'Jr.'
    },
    jobTitle: 'Fullstack Web Developer'
  }),
  computed: {
    fullName () {
      return `${this.name.first} ${this.name.middleInitial} ${this.name.last} ${this.name.suffix}`
    },
    active () {
      switch (this.$route.name) {
        case 'TechnicalExperience':
          return 1
        case 'LanguageAndTech':
          return 2
        case 'Education':
          return 3
        case 'Contact':
          return 4
        default:
          return 0
      }
    },
    navList () {
      return this.$store.state.navList
    }
  },
  methods: {
    navigate (index, route, title) {
      this.$router.replace(route)
      this.$store.dispatch('updateTitle', title)
    }
  }
}
</script>

<style lang="scss">
 .drawer {
   &__card {
    display: block;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;

    &--avatar{
      height: 100px !important;
      width: auto !important;
      display: block;

      img {
        border-style: groove;
      }
    }

    &--name {
      font-weight: 600;
      font-size: 1.2em;
      display: block;
    }
   }

   &__nav-list {
    padding: 0px;
    
    li.active {
      background-color: $bg-color-dark-gray;
      
      span {
        color: $color-blue;
        font-weight: 600;
      }
    }

    &--title {
      height: 30px;
      line-height: 30px;
      cursor: pointer;

      i {
        margin-bottom: 5px;
      }
    }
   }
 }
</style>


