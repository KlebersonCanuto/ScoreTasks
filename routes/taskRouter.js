const express = require('express')
const router = express.Router()
const task = require('../controller/taskController')

/**
 * @swagger
 * /task:
 *   get:
 *     tags: [
 *       task
 *     ]
 *     sumary: Return all tasks
 *     description: Return a list of tasks
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: success
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               type: array
 *               items:
 *                 type: object
 *                 $ref: '#/definitions/Task'
 */
router.get('/', async function(_, res) {
  try{
    const data = await task.getAll()
    res.status(200).send({data: data})
  } catch(err){
    res.status(400).send()
  }
})

/**
 * @swagger
 * /task:
 *   post:
 *     tags: [
 *       task
 *     ]
 *     sumary: Create a new task
 *     description: Create a new task
 *     consumes:
 *       - application/json
 *     parameters:
 *      - in: body
 *        name: Usuário
 *        schema:
 *         type: object
 *         properties:
 *           name:
 *             type: string
 *           description:
 *             type: string
 *           points:
 *             type: number
 *           positive:
 *             type: boolean
 *     responses:
 *       200:
 *         description: success
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               type: object
 *               $ref: '#/definitions/Task'
 */
router.post('/', async function(req, res) {
  try{
    const data = await task.create(req.body)
    res.status(200).send({data: data})
  } catch(err){
    res.status(400).send()
  }
})

/**
 * @swagger
 * /task/{task_id}:
 *   get:
 *     tags: [
 *       task
 *     ]
 *     sumary: Return a specific task
 *     description: Return a specific task with parameter id
 *     parameters:
 *       - name: task_id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: success
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               type: object
 *               $ref: '#/definitions/Task'
 */
router.get('/:task_id', async function(req, res) {
  try{
    const data = await task.getById(req.params.task_id)
    res.status(200).send({data: data})
  } catch(err){
    res.status(400).send()
  }
})

/**
 * @swagger
 * /task/{task_id}:
 *   put:
 *     tags: [
 *       task
 *     ]
 *     sumary: Create a new task
 *     description: Create a new task
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: task_id
 *         in: path
 *         required: true
 *       - in: body
 *         name: Usuário
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             description:
 *               type: string
 *             points:
 *               type: number
 *             positive:
 *               type: boolean
 *             categories:
 *               type: array
 *               items:
 *                type: string
 *     responses:
 *       200:
 *         description: success
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               type: object
 *               $ref: '#/definitions/Task'
 */
router.put('/:task_id', async function(req, res) {
  try{
    const data = await task.update(req.params.task_id, req.body)
    res.status(200).send({data: data})
  } catch(err){
    res.status(400).send()
  }
})

/**
 * @swagger
 * /task/{task_id}:
 *   delete:
 *     tags: [
 *       task
 *     ]
 *     sumary: Return a specific task
 *     description: Return a specific task with parameter id
 *     parameters:
 *       - name: task_id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: success
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               type: object
 *               $ref: '#/definitions/Task'
 *       400:
 *         description: task doesn't exist
 */
router.delete('/:task_id', async function(req, res) {
  try{
    const data = await task.remove(req.params.task_id)
    res.status(200).send({data: data})
  } catch(err){
    res.status(400).send()
  }
})

module.exports = router
