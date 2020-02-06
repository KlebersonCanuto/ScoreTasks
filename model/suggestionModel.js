const mongoose = require('mongoose')

const SuggestionSchema = mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, required: true }
})

const Suggestion = mongoose.model('suggestion', SuggestionSchema)

module.exports = Suggestion