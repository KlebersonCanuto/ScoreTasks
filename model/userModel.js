const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  points: { type: Number, required: true, default: 0 },
  tasksDone: { type: Number, required: true, default: 0 }
})

const User = mongoose.model('user', UserSchema)

module.exports = User