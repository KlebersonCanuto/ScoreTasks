const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
  name: String,
  description: String,
  points: Number,
  positive: Boolean,
  categories: Array,
  owner: String,
  done: Boolean
})

const Task = mongoose.model('task', TaskSchema)

module.exports = Task