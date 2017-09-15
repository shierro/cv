<template>
  <v-container fluid class="contact">
    <v-flex class="headline educ__headline">{{ headLine }}</v-flex>
    <v-divider></v-divider>
    <v-list two-line>
      <template v-for="(contact, index) in contacts">
        <v-list-tile avatar v-bind:key="contact.type">
          <v-list-tile-avatar>
            <i :class="contact.class">{{contact.icon }}</i>
          </v-list-tile-avatar>
          <v-list-tile-content class="educ__list--contact">
            <v-list-tile-title v-html="contact.type" class="educ__list--contact__type"></v-list-tile-title>
            <v-list-tile-sub-title>
              <a :href="contact.href" target="__blank">{{ contact.value }}</a>
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-container>  
</template>

<script>
export default {
  data: () => ({
    headLine: 'You may reach me by any of these means',
    contacts: [
      {
        type: 'E-mail',
        value: 'theodoro.pelingan@gmail.com',
        class: 'material-icons icon green--text text--darken-2 icon--large',
        icon: 'email',
        href: 'mailto:theodoro.pelingan@gmail.com'
      },
      {
        type: 'Linkedin',
        value: 'https://www.linkedin.com/in/theodoro-pelingan-jr',
        class: 'material-icons icon blue--text text--darken-2 icon--large',
        icon: 'linkedin',
        href: 'https://www.linkedin.com/in/theodoro-pelingan-jr'
      },
      {
        type: 'Call or SMS',
        value: '+63906 5784 859',
        class: 'material-icons icon red--text text--darken-2 icon--large',
        icon: 'call',
        href: 'tel:+639065784859'
      },
      {
        type: 'Skype',
        value: 'theodoro.pelingan.jr',
        class: 'material-icons icon yellow--text text--darken-2 icon--large',
        icon: 'contacts',
        href: 'callto:theodoro.pelingan.jr'
      }
    ]
  })
}
</script>

<style lang="scss">
  .educ {
    &__list {
      &--contact {
        user-select: all;

        &__type {
          user-select: none;
        }
      }
    }
  }
</style>

