require('dotenv').config()
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/userRouter')
const taskRouter = require('./routes/taskRouter')
const loginRouter = require('./routes/loginRouter')
const schema = require('./utils/schemas')
const graphqlHTTP = require('express-graphql')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./utils/docs')
const cors = require('cors')
const app = express()

const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useCreateIndex', true)
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/login', loginRouter)
app.use('/task', taskRouter)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
