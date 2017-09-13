<template>
  <v-container fluid>
    <div class="headline tech-exp__headline">{{ headline }}</div>
    <v-flex v-for="(project, index) in projects" :key="index">
      <v-divider></v-divider>
      <v-container>
          <div class="title"> {{ project.title }} </div>
          <div class="subheading">{{ project.subTitle }}</div>
          <v-divider></v-divider>
          <v-flex class="body-2 details__task--header">{{project.featureHeader}}</v-flex>
          <v-list dense>
            <template v-for="(feature, index) in project.features">
              <v-list-tile v-bind:key="index">
                <v-list-tile-content>
                  <v-list-tile-title v-text="feature"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
      </v-container>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headline: 'Projects',
    projects: [
      {
        title: 'E-commerce for Travel Insurance',
        subTitle: 'Web platform for indonesia that provides the company the ability to sell insurance online.',
        featureHeader: 'Modules',
        features: [
          'Frontend module',
          'Orchestration Module',
          'Order Module',
          'Payment Module',
          'Job Queuing Module',
          'Quotation Module'
        ]
      },
      {
        title: 'Chat Platform',
        subTitle: 'A platform that lets users from across the globe communicate with specific people through SMS, email, & partner applications using a web platform.',
        featureHeader: 'Features',
        features: [
          'Report generation',
          'Auto reply, Auto ban, Auto filter(inbound & outbound rules)',
          'admin interfaces ',
          'message mapping & queueing systems',
          'monitoring systems with alert mechanism using SMS & Email.'
        ]
      },
      {
        title: 'Online Enrollment System',
        subTitle: 'A web application that enables students to search and apply for courses in certain across the globe.',
        featureHeader: 'Modules',
        features: [
          'Video Interview',
          'Search and compare courses',
          'Online Application'
        ]
      },
      {
        title: 'Robotics Controller',
        subTitle: 'A bundled nodejs application that feeds instructions to UiPath(Robotics).',
        featureHeader: 'What it does',
        features: [
          'Retrieves data & instructions from a queue',
          'Parses instructions & feeds it to UiPath Robot API',
          'Monitors UiPath Job and send update to queue',
          'Auto upate itself'
        ]
      },
      {
        title: 'Campaign Manager',
        subTitle: 'A web application that is used to manage campaigns and has a rest API to allow the ecommerce-platform to consume data.',
        featureHeader: 'Modules',
        features: [
          'Manage campaigns(CRUD)',
          'Manage rules inside a campaign',
          'Manage promo codes',
          'REST API to consume campaign benefits'
        ]
      },
      {
        title: 'Life Insurance Product Quotation Module',
        subTitle: 'A module that allows users to get a quote and send leads to salesforce.',
        featureHeader: 'What it does',
        features: [
          'Gather customer info',
          'Generate quote',
          'Send customer data to salesforce'
        ]
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/_index.scss';

 .tech-exp {
   &__headline {
     @include headline();
   }
 }
</style>

