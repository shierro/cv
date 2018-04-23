<template>
<v-flex class="employment">
  <v-expansion-panel popout focusable>
    <v-expansion-panel-content
      expand
      v-for="(job, index) in jobs"
      class="details__container"
      v-model="job.expanded"
      v-bind:key="index">
      <div class="headline details__header--job-title" slot="header">{{ job.title }}</div>
      <div class="details__header">
        <div class="subheading">
          <span class="details__header--company-name">{{ job.company.name }}</span> 
          <span class="details__header--company-stay">{{ job.company.stay }}</span>
        </div>
        <div class="subheading details__header--company-location">{{ job.company.location }}</div>
      </div>
      <v-divider></v-divider>
      <v-flex class="title details__task--header">{{job.taskHeader}}</v-flex>
      <v-list dense>
        <template v-for="(task, index) in job.tasks">
          <v-list-tile v-bind:key="index">
            <v-list-tile-content>
              <v-list-tile-title v-text="task"></v-list-tile-title>
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
    jobs: [
      {
        title: 'Fullstack Developer / DevOps',
        company: {
          name: 'ClinkIT Solutions / RareBirds',
          stay: 'November 2017 - Present (5 mos)',
          location: 'Remote'
        },
        taskHeader: 'Responsibilities:',
        tasks: [
          'Create micro-services while implementing code best practices',
          'Create Unit & e2e Tests',
          'Write serverless apps using the latest node version',
          'Create SPA(react-boilerplate fork) apps',
          'Design UI using SASS',
          'App integrations - XERO, Tilda, Mixpanel, Typeform, bookeo, Mailchimp, Facebook API, Telegram API, Paypal, etc.',
          'RND - Reporting & communication platforms',
          'Create chatbots on facebook & telegram',
          'Backlog management using JIRA. Convert CEO/CIO/PO requirements to technical solutions',
          'Semi-gitflow pattern. Release management w/ semantic versioning',
          'Set-up & utilize AWS technologies - [EC2, SNS, Cloudfront, Cloudwatch, Lambda, RDS, etc]',
          'Work with different folks(Australian, Russian, Filipino, Indonesian) on different timezones'
        ],
        expanded: true
      },
      {
        title: 'Fullstack Web Developer',
        company: {
          name: 'VISEO',
          stay: 'April 2017 - December 2017 (8 mos)',
          location: 'Makati, PH'
        },
        taskHeader: 'Responsibilities:',
        tasks: [
          'Perform Scrum ceremonies',
          'Create services following the microservice Architecture',
          'Do Test Driven Development',
          'Do CI / CD with Jenkins & automated tests',
          'Track tasks through JIRA',
          'Create SPA(React w/Redux)',
          'Create css using SASS',
          'Create Unit & e2e Tests',
          'Follow Github Code Lifecycle'
        ],
        expanded: false
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
          'Build and deploy applications to different environments (Staging, Pre-Prod, Prod)',
          'Do and be subject to code review',
          'Research the most appropriate tech(open source or proprietary) to provide for client/internal needs.',
          'Track tickets/tasks through Redmine',
          'Follow Git workflow',
          'Perform workflow automation(testing, deployment)',
          'Optimize website performance'
        ],
        expanded: false
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
          'Building websites from scratch',
          'Uploading website files to server via FTP',
          'Creating CRON Jobs via linux bash',
          'Identifying system bottlenecks',
          'Event Driven/Realtime Systems',
          'Website testing/debugging/Architecture',
          'Building Websites that will actually scale.',
          'Optimize website performance'
        ],
        expanded: false
      }
    ]
  })
}
</script>

<style lang="scss">
  .expansion-panel {
    background-color: $color-white;
  }
</style>
