<template>
  <v-container fluid class="educ">
    <v-container class="educ_header">
      <v-flex class="headline educ__headline">{{ headLine }}</v-flex>
      <v-divider></v-divider>
      <v-container class="educ_body">
        <v-flex class="title educ__body--school__name">{{ school.name }}</v-flex>
        <v-flex class="sub-heading educ__school__address">{{ school.address }}</v-flex>
        <v-flex class="sub-heading">{{ duration }}</v-flex>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      headLine: 'Bachelor of Science in Information Technology',
      school: {
        name: 'Saint Louis University',
        address: 'Baguio City, Philippines'
      },
      duration: '2009 to 2014'
    })
  }
</script>

<style lang="scss">
  @import '../assets/styles/_index.scss';

  .educ {

    &__headline {
      @include headline();
    }
  }
</style>

