const express = require('express')
const router = express.Router()
const login = require('../utils/login')

/**
 * @swagger
 * /login:
 *   post:
 *     tags: [
 *       login
 *     ]
 *     sumary: login
 *     consumes:
 *       - application/json
 *     parameters:
 *      - in: body
 *        name: Usuário
 *        schema:
 *         type: object
 *         properties:
 *           username:
 *             type: string
 *           password:
 *             type: string
 *     responses:
 *       200:
 *         description: success
 */
router.post('/', function(req, res) {
  login.login(req, res)
})

/**
 * @swagger
 * /login:
 *   get:
 *     tags: [
 *       login
 *     ]
 *     summary: Verifica o token
 *     description: Verifica se o token ja expirou
 *     consumes:
 *      - application/json
 *     parameters:
 *      - name: authorization
 *        in: header
 *        required: true
 *        description: Recebido ao logar
 *        schema:
 *         type: string
 *         $ref: '#/definitions/token'
 *     responses:
 *       200:
 *         description: A verificação foi feita, se for valido o valor é true, caso contrário é false
 *         schema:
 *           type: object
 *           properties:
 *             valid:
 *               type: boolean
 *               example: true
 */
router.get('/', function(req, res) {
  login.isValid(req, res)
})

module.exports = router
