const express = require('express')
const router = express.Router()
const task = require('../controller/taskController')

router.get('/', async function(_, res) {
  try{
    const data = await task.getAll()
    res.status(200).send({data: data})
  } catch(err){
    res.status(400).send()
  }
})

router.post('/', async function(req, res) {
  try{
    const data = await task.create(req.body)
    res.status(200).send({data: data})
  } catch(err){
    res.status(400).send()
  }
})

router.get('/:task_id', async function(req, res) {
  try{
    const data = await task.getById(req.params.task_id)
    res.status(200).send({data: data})
  } catch(err){
    res.status(400).send()
  }
})

router.put('/:task_id', async function(req, res) {
  try{
    const data = await task.update(req.params.task_id, req.body)
    res.status(200).send({data: data})
  } catch(err){
    res.status(400).send()
  }
})

router.delete('/:task_id', async function(req, res) {
  try{
    const data = await task.remove(req.params.task_id)
    res.status(200).send({data: data})
  } catch(err){
    res.status(400).send()
  }
})

module.exports = router
