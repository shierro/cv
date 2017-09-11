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
        <v-divider v-if="index + 1 < navList.length" v-bind:key="index"></v-divider>
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
    active: 0,
    jobTitle: 'Fullstack Web Developer',
    navList: [
      {
        title: 'Employment',
        icon: 'assignment',
        class: 'material-icons icon green--text text--darken-2 icon--large',
        route: '/employment'
      },
      {
        title: 'Education',
        icon: 'school',
        class: 'material-icons icon blue--text text--darken-2 icon--large',
        route: '/education'
      },
      {
        title: 'Technical Expertise',
        icon: 'business',
        class: 'material-icons icon yellow--text text--darken-2 icon--large',
        route: '/technical-expertise'
      },
      {
        title: 'Language and Technologies',
        icon: 'code',
        class: 'material-icons icon red--text text--darken-2 icon--large',
        route: '/language-and-tech'
      }
    ]
  }),
  computed: {
    fullName: function () {
      return `${this.name.first} ${this.name.middleInitial} ${this.name.last} ${this.name.suffix}`
    }
  },
  methods: {
    navigate (index, route, title) {
      this.active = index
      this.$router.replace(route)
      this.$store.dispatch('updateTitle', title)
    }
  }
}
</script>

<style lang="scss">
$gray: #FAFAFA;
$blue: #3F51B5;
$dark-gray: rgba(0,0,0,.12);

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
      background-color: $dark-gray;
      box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
      
      span {
        color: $blue;
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


