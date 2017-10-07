pipeline { 
  agent { 
    node { 
      label 'docker'
    }
  }
  tools {
    node 'node'
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
          docker: { sh "docker -v" }
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
 
    stage ('Build container') {
      steps {
        sh "npm run build"
      }
    }
    stage ('Deploy') {
      steps {
        input "Ready to deploy?"
        sh "echo TODO is deploy to gh pages"
      }
    }
    stage ('Verify') {
      steps {
        input "Everything good?"
      }
    }
    stage ('Clean') {
      steps {
        sh "npm prune"
        sh "rm -rf node_modules"
      }
    }
  }
}
