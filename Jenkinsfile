pipeline { 
  agent any 

  tools {
    nodejs 'nodejs'
  }
 
  stages {
    stage ('Checkout Code') {
      steps {
        checkout scm
      }
    }
    stage ('Verify Tools'){
      steps {
        parallel (
          node: { sh "npm -v" },
          git: { sh "git version" }
        )
      }
    }
    stage ('Build app') {
      steps {
        sh "npm prune"
        sh "npm install"
      }
    }
    stage ('Test'){
      steps {
        parallel (
          lint: { sh "npm run lint" },
          unit: { sh "npm run unit" }
        )
      }
    }
 
    stage ('Build and Deploy') {
      steps {
        sh "npm run deploy-to-git"
      }
    }
    stage ('Clean') {
      steps {
        sh "rm -rf node_modules"
      }
    }
  }
}
