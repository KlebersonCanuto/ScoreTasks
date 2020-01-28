const express = require('express')
const router = express.Router()
const task = require('../controller/taskController')

router.get('/', async function(req, res, next) {
  try{
    const data = await task.getAll()
    res.status(200).send({data: data})
  } catch(err){
    res.status(400).send()
  }
})

router.post('/', async function(req, res, next) {
  try{
    const data = await task.create(req.body)
    res.status(200).send({data: data})
  } catch(err){
    res.status(400).send()
  }
})

module.exports = router
