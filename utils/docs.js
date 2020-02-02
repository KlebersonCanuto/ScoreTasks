const swaggerJSDoc = require('swagger-jsdoc')

const options = {
  swaggerDefinition: {
    info: {
      title: 'ScoreTasks',
      version: '1.0.0',
      description: 'API',
    },
    host: 'https://scoretasks.herokuapp.com',
    basePath: '/',
  },
  apis: ['./routes/*.js']
}

module.exports = swaggerJSDoc(options)
