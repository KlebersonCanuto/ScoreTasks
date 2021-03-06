const express = require('express')
const router = express.Router()
const User = require('../controller/userController')

/**
 * @swagger
 * /user:
 *   get:
 *     tags: [
 *       user
 *     ]
 *     sumary: Return all users
 *     description: Return a list of users
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
 *                 $ref: '#/definitions/User'
 */
router.get('/', async function(_, res) {
  try{
    const users = await User.getAll()
    res.status(200).send({data: users})
  } catch(err){
    res.status(400).send()
  }
})

/**
 * @swagger
 * /user:
 *   post:
 *     tags: [
 *       user
 *     ]
 *     sumary: Create a new user
 *     description: Create a new user
 *     consumes:
 *       - application/json
 *     parameters:
 *      - in: body
 *        name: Usuário
 *        schema:
 *         type: object
 *         properties:
 *           email:
 *             type: string
 *           password:
 *             type: string
 *           confirmPassword:
 *             type: string
 *     responses:
 *       200:
 *         description: success
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               type: object
 *               $ref: '#/definitions/User'
 */
router.post('/', async function(req, res) {
  try{
    const user = await User.create(req.body)
    res.status(200).send({data: user})
  } catch(err){
    res.status(400).send()
  }
})

/**
 * @swagger
 * /user/{user_id}:
 *   get:
 *     tags: [
 *       user
 *     ]
 *     sumary: Return a specific user
 *     description: Return a specific user with parameter id
 *     parameters:
 *       - name: user_id
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
 *               $ref: '#/definitions/User'
 */
router.get('/:user_id', async function(req, res) {
  try{
    const user = await User.getById(req.params.user_id)
    res.status(200).send({data: user})
  } catch(err){
    res.status(400).send()
  }
})

/**
 * @swagger
 * /user/{user}:
 *   put:
 *     tags: [
 *       user
 *     ]
 *     sumary: Edit a user
 *     description: Edit a user
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: user
 *         in: path
 *         required: true
 *       - in: body
 *         name: Usuário
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *     responses:
 *       200:
 *         description: success
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               type: object
 *               $ref: '#/definitions/User'
 */
router.put('/:user_id', async function(req, res) {
  try{
    const user = await User.update(req.params.user_id, req.body)
    res.status(200).send({data: user})
  } catch(err){
    res.status(400).send()
  }
})

/**
 * @swagger
 * /user/{user_id}:
 *   delete:
 *     tags: [
 *       user
 *     ]
 *     sumary: Return a specific user
 *     description: Return a specific user with parameter id
 *     parameters:
 *       - name: user_id
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
 *               $ref: '#/definitions/User'
 *       400:
 *         description: user doesn't exist
 */
router.delete('/:user_id', async function(req, res) {
  try{
    const user = await User.remove(req.params.user_id)
    res.status(200).send({data: user})
  } catch(err){
    res.status(400).send()
  }
})

module.exports = router
