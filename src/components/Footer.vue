<template>
  <v-footer class="indigo links__container" fixed>
    <v-btn 
      icon 
      v-for="(account, index) in accounts" 
      :class="account.class"
      :alt="account.name"
      :title="account.name"
      :href="account.link"
      target="__blank"
      v-bind:key="index"></v-btn>
    <span class="white--text credits__text hidden-sm-and-down">{{ credits }}</span>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      credits: '© 2017',
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .credits {
    &__text {
      position: absolute;
      right: 0;
    }
  }

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
</style>

