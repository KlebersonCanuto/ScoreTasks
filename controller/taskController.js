const Task = require('../model/taskModel')

const create = async (args) => {
  try{
    const task = new Task({...args, done: false})
    await task.save()
    return task
  } catch(err){
    throw 400
  }
}

const getAll = async (owner) => {
  try{
    const tasks = await Task.find({owner}).exec()
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

const getByPositive = async (owner, positive) => {
  try{
    const tasks = await Task.find({owner, positive}).exec()
    return tasks
  } catch(err){
    throw 400
  }
};

const getCategory = async (owner, category) => {
  try{
    const tasks = await Task.find({owner, categories: category}).exec()
    return tasks
  } catch(err){
    throw 400
  }
};

const update = async (id, args) => {
  try{
    const { name, description, points, positive, categories, owner } = args
    let task = await Task.findById(id).exec()
    if(task.owner !== owner) throw 400
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

const changeDone = async (id, owner) => {
  try{
    let task = await Task.findById(id).exec()
    let points = task.points
    if(task.owner !== owner) throw 400
    if(task.done) points = points * -1
    if(!task.positive) points = points * -1
    const numTasks = task.done?-1:1 
    task.done = !task.done
    await task.save()
    return { points, task, numTasks }
  } catch(err){
    throw 400
  }
}

const remove = async (id, owner) => {
  try{
    const task = await Task.findById(id).exec()
    if(task.owner !== owner) throw 400
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
  remove,
  changeDone,
  getByPositive,
  getCategory
}