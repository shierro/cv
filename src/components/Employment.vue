<template>
  <div>
    <v-container
      fluid
      elevation-3
      v-for="(job, index) in jobs"
      class="details__container"
      v-bind:key="index">
      <div class="headline details__header--job__title">{{ job.title }}</div>
      <div class="details__header">
        <div class="subheading">
          <span class="details__header--company__name">{{ job.company.name }}</span> 
          <span class="details__header--company__stay">{{ job.company.stay }}</span>
        </div>
        <div class="subheading">Makati, PH</div>
      </div>
      <v-divider></v-divider>
      <v-flex class="title details__task--header">{{job.taskHeader}}</v-flex>
      <v-list dense>
        <template v-for="(task, index) in job.tasks">
          <v-divider v-bind:key="index"></v-divider>
          <v-list-tile v-bind:key="index" @click="clickTask()">
            <v-list-tile-content>
              <v-list-tile-title v-text="task"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    jobs: [
      {
        title: 'Fullstack Web Developer',
        company: {
          name: 'VISEO',
          stay: 'April 2017 - Present',
          location: 'Makati, PH'
        },
        taskHeader: 'Responsibilities:',
        tasks: [
          'Perform Scrum ceremonies',
          'Create services following the microservice Architecture',
          'Do Test Driven Development',
          'Do CI / CD',
          'Jenkins, OpenPass, Kubernetes',
          'Track tasks through JIRA',
          'Create SPA(React w/Redux)',
          'Create css using SASS',
          'Create Unit & e2e Tests',
          'Follow Github Code Lifecycle'
        ]
      },
      {
        title: 'Software Engineer 2',
        company: {
          name: 'Twistresources',
          stay: 'September 2016 – April 2017 (8 mos)',
          location: 'Angeles City, Pampanga, PH'
        },
        taskHeader: 'Responsibilities:',
        tasks: [
          'Perform scrum ceremonies',
          'Follow as much as possible the AGILE Manifesto',
          'Work with different Project environments (Staging, Pre-Prod, Prod)',
          'Do and be subject to code review',
          'Research the most appropriate tech(open source or proprietary) to provide for client/internal needs.',
          'Meet Tight Deadlines',
          'Track tickets/tasks through Redmine',
          'Follow Git workflow',
          'Perform workflow automation(testing, deployment)',
          'Optimize website performance'
        ]
      },
      {
        title: 'Web Developer',
        company: {
          name: 'Rossking Pty. Ltd.',
          stay: 'Mar 2015 – Sep 2016 (1yr 7mos)',
          location: 'Baguio City, PH'
        },
        taskHeader: 'Responsibilities:',
        tasks: [
          'Website Maintenance/enhancement',
          'Creating,documenting & connecting to web RESTFUL APIs',
          'RDBMS Schema Modeling',
          'Improving Website performance',
          'Building websites from scratch',
          'Uploading website files to server via FTP',
          'Creating CRON Jobs via linux bash',
          'Identifying system bottlenecks',
          'Event Driven/Realtime Systems',
          'Website testing/debugging/Architecture',
          'Building Websites that will actually scale.',
          'Optimize website performance'
        ]
      }
    ]
  }),
  methods: {
    clickTask () {
      // Do something..
    }
  }
}
</script>

<style lang="scss" scoped>
  $gray: #FAFAFA;
  $white: #FFFFFF;

  .application--light {
    .list {
      background-color: $gray !important;
    }
  }

  .details {
    &__container {
      padding: 20px;
      background-color: $white;
    }

    &__header {
      padding-bottom: 5px; 

      &--company {
        &__name {
          font-weight: 600;
        }
      }


      &--job {
        &__title {
          font-weight: 800 !important;
        }
      }
    }

    &__task {
      &--header {
        padding-top: 15px;
        padding-bottom: 5px;
      }
    }
  }
</style>


