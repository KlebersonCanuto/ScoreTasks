const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  points: { type: Number, required: true, default: 0 }
})

const User = mongoose.model('user', UserSchema)

module.exports = User