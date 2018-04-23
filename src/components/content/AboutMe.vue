<template>
  <v-container fluid class="about-me">
    <v-flex class="headline about-me__headline">{{ headLine }}</v-flex>
    <v-divider></v-divider>
  <v-container class="aboutme__details">
    <v-container v-for="(me, index) in aboutMeList" :key="index">
      <v-container :key="`title-${index}`" class="title">{{ me.title }}</v-container>
      <v-container :key="`subheading-${index}`" class="subheading">
        <a :href="me.content" target="_blank">{{ me.content }}</a>
        </v-container>
      <v-divider v-bind:key="index"></v-divider>
    </v-container>
  </v-container>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headLine: 'Personal Stuff',
    aboutMeList: [
      {
        title: 'Semi-Professional Gamer',
        content: 'https://steamcommunity.com/profiles/76561198155982984/'
      },
      {
        title: 'PLUM Profile',
        content: 'https://app.plum.io/profile/theodoropelinganjr'
      }
    ]
  })
}
</script>

