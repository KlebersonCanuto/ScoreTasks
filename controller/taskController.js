const Task = require('../model/taskModel')

const create = async (arg) => {
  try{
    const task = new Task({...arg})
    await task.save()
    return task
  } catch(err){
    throw 400
  }
}

const getAll = async () => {
  try{
    const tasks = await Task.find().exec()
    return tasks
  } catch(err){
    throw 400
  }
};

const getById = async (arg) => {
  try{
    const tasks = await Task.findById(arg).exec()
    return tasks
  } catch(err){
    throw 400
  }
};

module.exports = {
  getAll,
  getById,
  create,
}