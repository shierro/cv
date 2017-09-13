<template>
  <v-flex class="tech-exp">
    <v-container class="headline tech-exp__headline">{{ headline }}</v-container>
    <v-divider></v-divider>
    <v-expansion-panel popout focusable>
      <v-expansion-panel-content 
        expand
        class="details__container"
        v-for="(project, index) in projects" 
        v-model="project.expanded"
        :key="index">
        <div class="title details__header--job__title" slot="header"> {{ project.title }} </div>
        <div class="subheading tech-exp__sub-heading">{{ project.subTitle }}</div>
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
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    headline: 'Projects',
    projects: [
      {
        expanded: true,
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
        expanded: false,
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
        expanded: false,
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
        expanded: false,
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
        expanded: false,
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
        expanded: false,
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

   &__sub-heading {
     padding: 10px 0px;
   }
 }
</style>

