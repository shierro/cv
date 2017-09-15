<template>
  <v-footer class="indigo links__container">
    <span class="white--text credits__text hidden-sm-and-down">{{ credits }}</span>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      credits: '© 2017'
    }
  }
}
</script>

<style lang="scss">
  .credits {
    &__text {
      position: absolute;
      right: 0;
    }
  }
</style>
