const express = require('express')
const router = express.Router()
const Suggestion = require('../controller/taskController')

router.get('/', async function(_, res) {
  try{
    const suggestions = await Suggestion.getAll()
    res.status(200).send({data: suggestions})
  } catch(err){
    res.status(400).send()
  }
})

router.post('/', async function(req, res) {
  try{
    const suggestion = await Suggestion.create({...req.body})
    res.status(200).send({data: suggestion})
  } catch(err){
    res.status(400).send()
  }
})

router.get('/:suggestion_id', async function(req, res) {
  try{
    const suggestion = await Suggestion.getById(req.params.suggestion_id)
    res.status(200).send({data: suggestion})
  } catch(err){
    res.status(400).send()
  }
})

router.delete('/:suggestion_id', async function(req, res) {
  try{
    const suggestion = await Suggestion.remove(req.params.suggestion_id)
    res.status(200).send({data: suggestion})
  } catch(err){
    res.status(400).send()
  }
})

module.exports = router
