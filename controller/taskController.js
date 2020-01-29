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

const getById = async (id) => {
  try{
    const task = await Task.findById(id).exec()
    return task
  } catch(err){
    throw 400
  }
};

const update = async (args) => {
  try{
    const { id, name, description, points, positive, categories } = args
    let task = await Task.findById(id).exec()
    task.name = name
    task.description = description
    task.points = points
    task.positive = positive
    task.categories = categories
    await task.save()
    return task
  } catch(err){
    throw 400
  }
}

const remove = async (id) => {
  try{
    const task = await Task.findById(id).exec()
    await task.remove()
    return task
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