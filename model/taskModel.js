const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    required: true
  },
  positive: {
    type: Boolean,
    required: true
  },
  categories: {
    type: Array,
  }
})

const Task = mongoose.model('task', TaskSchema)

module.exports = Task