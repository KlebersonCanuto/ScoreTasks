const User = require('../model/userModel')

const create = async (args) => {
  try{
    const user = new User({...args})
    console.log(user)
    await user.save()
    return user
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
};

const getById = async (id) => {
  try{
    const user = await User.findById(id).select(['-password']).exec()
    return user
  } catch(err){
    throw 400
  }
};

const update = async (id, args) => {
  try{
    const { username, email } = args
    let user = await User.findById(id).exec()
    user.username = username
    user.email = email
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
  create,
  update,
  remove
}