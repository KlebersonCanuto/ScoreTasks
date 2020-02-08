const User = require('../model/userModel')
const bcrypt = require('bcrypt')

const create = async (args) => {
  try{
    const { password, confirmPassword, email } = args
    if(password === confirmPassword){
      const hash = bcrypt.hashSync(password, Number(process.env.HASH))
      let user = new User()
      user.password = hash
      user.email = email.toLowerCase()
      await user.save()
      return user
    } else {
      throw 400
    }
  } catch(err){
    throw 400
  }
}

const getAll = async () => {
  try{
    const users = await User.find().select(['-password']).exec()
    return users
  } catch(err){
    throw 400
  }
}

const getById = async (id) => {
  try{
    const user = await User.findById(id).select(['-password']).exec()
    return user
  } catch(err){
    throw 400
  }
}

const getByEmail = async (email) => {
  try{
    const user = await User.findOne({email}).exec()
    return user
  } catch(err){
    throw 400
  }
}

const update = async (id, args) => {
  try{
    const { email } = args
    let user = await User.findById(id).exec()
    user.email = email
    await user.save()
    return user
  } catch(err){
    throw 400
  }
}

const updatePoints = async (id, points, numTasks) => {
  try{
    let user = await User.findById(id).exec()
    user.points = user.points+points
    user.tasksDone = user.tasksDone+numTasks
    await user.save()
    return user
  } catch(err){
    throw 400
  }
}

const remove = async (id) => {
  try{
    const user = await User.findById(id).select(['-password']).exec()
    await user.remove()
    return user
  } catch(err){
    throw 400
  }
}

module.exports = {
  getAll,
  getById,
  getByEmail,
  create,
  update,
  remove,
  updatePoints
}