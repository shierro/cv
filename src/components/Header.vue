<template>
  <v-toolbar class="indigo" dark fixed>
    <v-toolbar-title class="hidden-sm-and-down display-1">{{ toolbarTitle }}</v-toolbar-title>
    <v-flex class="links__container text-xs-right">
      <v-btn 
        icon 
        v-for="(account, index) in accounts" 
        :class="account.class"
        :alt="account.name"
        :title="account.name"
        :href="account.link"
        target="__blank"
        v-bind:key="index"></v-btn>
    </v-flex>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    accounts: [
      {
        name: 'linkedin',
        class: `blue--text links__container--linkedin`,
        link: 'https://www.linkedin.com/in/theodoro-pelingan-jr-31b70711a/'
      },
      {
        name: 'stackoverflow',
        class: `yellow--text links__container--stackoverflow`,
        link: 'https://stackoverflow.com/users/4772229/theo'
      },
      {
        name: 'github',
        class: `green--text links__container--github`,
        link: 'https://github.com/shierro'
      }
    ]
  }),
  computed: {
    toolbarTitle () {
      return this.$store.getters.getTitle
    }
  }
}
</script>

<style lang="scss" scoped>
  .links {
    &__container {
      align-items: center;
      justify-content: center;

      &--linkedin {
        background-image: url(../assets/linkedin.png);
        background-size: 37px !important;
      }

      &--stackoverflow {
        background-image: url(../assets/stackoverflow.png);
      }

      &--github {
        background-image: url(../assets/github.png);
      }

      .btn--icon {
        background-size: 36px;
      }
    }
  }

  .toolbar {
    &__title {
      font-weight: 800 !important;
    }

    &__content {
      padding-left:4px;
    }
  }
</style>


