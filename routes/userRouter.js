const express = require('express')
const router = express.Router()
const user = require('../controller/userController')

router.get('/', async function(_, res) {
  try{
    const data = await user.getAll()
    res.status(200).send({data: data})
  } catch(err){
    res.status(400).send()
  }
})

router.post('/', async function(req, res) {
  try{
    const data = await user.create(req.body)
    res.status(200).send({data: data})
  } catch(err){
    res.status(400).send()
  }
})

router.get('/:user_id', async function(req, res) {
  try{
    const data = await user.getById(req.params.user_id)
    res.status(200).send({data: data})
  } catch(err){
    res.status(400).send()
  }
})

router.put('/:user_id', async function(req, res) {
  try{
    const data = await user.update(req.params.user_id, req.body)
    res.status(200).send({data: data})
  } catch(err){
    res.status(400).send()
  }
})

router.delete('/:user_id', async function(req, res) {
  try{
    const data = await user.remove(req.params.user_id)
    res.status(200).send({data: data})
  } catch(err){
    res.status(400).send()
  }
})

module.exports = router
