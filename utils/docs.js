const swaggerJSDoc = require('swagger-jsdoc')

const options = {
  swaggerDefinition: {
    info: {
      title: 'ScoreTasks',
      version: '1.0.0',
      description: 'API',
    },
    host: 'localhost:3030',
    basePath: '/',
  },
  apis: ['./routes/*.js']
}

module.exports = swaggerJSDoc(options)
