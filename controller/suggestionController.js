const Suggestion = require('../model/taskModel')

const create = async (args) => {
  try{
    const suggestion = new Suggestion({...args, date: Date().toString()})
    await suggestion.save()
    return suggestion
  } catch(err){
    throw 400
  }
}

const getAll = async () => {
  try{
    const suggestions = await Suggestion.find({}).exec()
    return suggestions
  } catch(err){
    throw 400
  }
};

const getById = async (id) => {
  try{
    const suggestion = await Suggestion.findById(id).exec()
    return suggestion
  } catch(err){
    throw 400
  }
};

const remove = async (id) => {
  try{
    const suggestion = await Suggestion.findById(id).exec()
    await suggestion.remove()
    return suggestion
  } catch(err){
    throw 400
  }
}

module.exports = {
  getAll,
  getById,
  create,
  remove,
}