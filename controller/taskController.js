const Task = require('../model/taskModel')

const create = async (req) => {
  try{
    const task = new Task({...req})
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

module.exports = {
  getAll,
  create,
}