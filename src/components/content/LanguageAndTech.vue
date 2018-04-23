<template>
  <v-container fluid class="lang-tech">
    <v-flex v-for="(category, index) in languages" v-bind:key="index">
      <v-container class="headline lang-tech__headline">{{ category.headline }}</v-container>
      <v-divider></v-divider>
      <v-list>
        <template v-for="(lang, index) in category.list">
          <v-list-tile v-bind:key="index">
            <v-list-tile-content>
              <v-list-tile-title 
                class="title"
                v-text="lang.name">
              </v-list-tile-title>
            </v-list-tile-content>
                <star-rating
                  :rating="lang.rating"
                  :read-only="readOnly"
                  :increment="increment"
                  text-class="star-rating__text"
                ></star-rating>
          </v-list-tile>
        </template>
      </v-list>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    readOnly: true,
    increment: 0.5,
    languages: {
      native: {
        list: [
          { name: 'Javascript', rating: 4.5 },
          { name: 'HTML/HTML5', rating: 4.5 },
          { name: 'CSS/CSS3', rating: 4 },
          { name: 'PHP', rating: 4 },
          { name: 'Java', rating: 3.5 }
        ],
        headline: 'Native'
      },
      javascript: {
        list: [
          { name: 'jQuery', rating: 4.5 },
          { name: 'NodeJS', rating: 4.5 },
          { name: 'ExpressJS', rating: 4.5 },
          { name: 'React w/Redux', rating: 4 },
          { name: 'Angular 1 w/ MD', rating: 4 },
          { name: 'Vue w/Vuex & Vuetify', rating: 4 },
          { name: 'SocketIO', rating: 4 },
          { name: 'Mocha, Chai, Sinon, Supertest', rating: 4 },
          { name: 'ES6,7', rating: 4 },
          { name: 'Grunt/Gulp/Webpack', rating: 4 },
          { name: 'Istanbul', rating: 4 },
          { name: 'Sequelize/Mongoose', rating: 4 },
          { name: 'npm/yarn/bower', rating: 4 },
          { name: 'babel', rating: 4 },
          { name: 'Nightwatch/Enzyme', rating: 3.5 },
          { name: 'WebRTC', rating: 3.5 }
        ],
        headline: 'Javascript'
      },
      php: {
        list: [
          { name: 'Laravel 5', rating: 4 },
          { name: 'CI 2,3', rating: 4 },
          { name: 'Eloquent, Doctrine', rating: 4 },
          { name: 'Composer', rating: 4 }
        ],
        headline: 'PHP Tech'
      },
      css: {
        list: [
          { name: 'Bootstrap', rating: 4 },
          { name: 'Material', rating: 4 },
          { name: 'Vuetify', rating: 4 },
          { name: 'SCSS', rating: 4 }
        ],
        headline: 'CSS Tech'
      },
      database: {
        list: [
          { name: 'MySQL/MariaDB/SQL Server', rating: 4 },
          { name: 'PostgreSQL', rating: 4 },
          { name: 'MongoDB', rating: 4 },
          { name: 'Redis', rating: 4 }
        ],
        headline: 'Database'
      },
      others: {
        list: [
          { name: 'GIT/SVN', rating: 4.5 },
          { name: 'docker/compose/swarm', rating: 4.5 },
          { name: 'AWS - EC2, Lambda, Cloudwatch, cloudfront, SNS, Route53, S3, etc.', rating: 4 },
          { name: 'TravisCI/CircleCI/Jenkins/BB Pipelines', rating: 4 },
          { name: 'CodeClimate/SonarQube', rating: 4 },
          { name: 'OpenShift', rating: 4 },
          { name: 'Kong/AWS API Gateway', rating: 3.5 },
          { name: 'Bash', rating: 3.5 },
          { name: 'New Relic', rating: 3.5 },
          { name: 'Kubernetes', rating: 3.5 },
          { name: 'GCP w/Codefresh', rating: 3.5 },
          { name: 'ELK Stack', rating: 3.5 },
          { name: 'stefanprodan/dockprom Stack', rating: 3.5 },
          { name: 'GraphQL', rating: 3.5 }
        ],
        headline: 'Dev/Ops & stuff'
      }
    }
  })
}
</script>

<style lang="scss">
  .lang-tech {
    .star-rating {
      &__text {
        min-width: 25px;
      }
    }

    &__headline {
      @include headline();
    }

    ul {
      li {
        padding: 5px 0px;
      }
    }
  }
</style>

