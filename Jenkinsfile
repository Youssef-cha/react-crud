stage('Install Dependencies') {

            steps {

                echo 'Installing dependencies...'

                bat 'npm install'

            }

        }

        stage('Build') {

            steps {

                echo 'Building application...'

                bat 'npm run build'

            }

        }

        stage('Test') {

            steps {

                echo 'Testion application...'

                bat 'npm test -- --watchAll=false'

            }

        }
 
