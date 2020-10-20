def branchName = env.BRANCH_NAME.toLowerCase()
script {
    if (branchName.contains("/")) {
        // ignore branch type
        branchName = branchName.split("/")[1]
    }
}
branchName = branchName.replace("-", "")

pipeline {
    options {
      buildDiscarder(logRotator(numToKeepStr: '3')) // Aufräum-Strategie des Builds, hier Log Rotation mit 3 aufbewahrten Builds
    }

    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Npm Install') {
            steps {
                sh "npm install"
                sh "npm audit fix"
            }
        }

        stage('Webpack') {
            steps {
                sh "npm run build"
            }
        }

        stage('Docker Develop') {
                    when {
                        branch 'develop'
                    }
                    steps {
                        script {
                            def dockerfile = "Dockerfile"
                            def customImage = docker.build("coding-camp-2020:develop", "-f ${dockerfile} --build-arg environment=development .")
                            docker.withRegistry('https://coding-camp.artifactory.sybit.de', 'sybit_ausbildung_artifactory') {
                                                customImage.push("develop")
                                            }
                        }
                        echo "build image for develop"
                    }
                }

        stage('Trigger Deploy') {
                    when {
                        branch 'develop'
                    }
                    steps {
                        build job: 'CodingCamp-Deploy', quietPeriod: 120, wait: false
                    }
                }
        }
    }
