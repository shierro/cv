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
import { monthDiff } from '@/utils/dateUtil'

const latestStartDate = new Date(2017, 11, 20)
const today = new Date()

export default {
  data: () => ({
    jobs: [
      {
        title: 'Fullstack Developer / DevOps',
        company: {
          name: 'ClinkIT Solutions / RareBirds',
          stay: `November 2017 - Present (${monthDiff(latestStartDate, today)} mos)`,
          location: 'Remote'
        },
        taskHeader: 'Responsibilities:',
        tasks: [
          'Create micro services(lambda or ec2) - following TDD',
          'Create SPA(react-boilerplate fork) apps based on zeplin mockups',
          'Create a chatbot on facebook & telegram',
          'App integrations - XERO, Tilda, Mixpanel, Typeform, bookeo, Mailchimp, Facebook API, Telegram API, Paypal, Salesforce, etc.',
          'RND - Reporting & communication platforms',
          'Backlog management using JIRA. Convert CEO/CIO/PO requirements to technical solutions & chunked tasks',
          'Semi-gitflow pattern. Release management w/ semantic versioning',
          'Set-up & utilize AWS technologies - [EC2, SNS, Cloudfront, Cloudwatch, Lambda, RDS, etc]',
          'Work remotely with different folks(Austraian, Russian, Filipino, Indonesian) on different timezones'
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
          'Perform Scrum techniques',
          'Create micro services',
          'Follow TDD',
          'Utilize a CI/CD pipeline - Jenkins, OpenShift, Sonarqube',
          'Project management through JIRA',
          'Create SPA(React w/Redux) from scratch',
          'Create css using SASS',
          'Create Unit & e2e Tests',
          'Use git for source code control',
          'Maintain & update legacy systems'
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
          'Follow SCRUM techniques',
          'Build and deploy applications to multiple environments utilizing Docker',
          'Manage code quality through code reviews',
          'Research and development - Video conferencing',
          'Project management using Redmine',
          'Follow Git workflow',
          'Create workflow automations(testing, deployment)',
          'Optimize website performance',
          'Convert mock-ups to usable AngularJS components'
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
          'Legacy website Maintenance/enhancement',
          '3rd party platform integrations',
          'RDBMS Schema modeling / optimization',
          'Connecting, documenting & managing Restful APIs',
          'Building websites from scratch',
          'Creating a realtime chat platform'
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
