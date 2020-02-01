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
 */
router.post('/login', function(req, res) {
  login.login(req, res)
})

router.get('/login', function(req, res) {
  login.isValid(req, res)
})

module.exports = router
