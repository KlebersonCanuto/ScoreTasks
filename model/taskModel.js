const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
  name: String,
  description: String,
  points: Number,
  positive: Boolean,
  categories: Array
})

const Task = mongoose.model('task', TaskSchema)

module.exports = Task