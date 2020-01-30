const express = require('express')
const router = express.Router()

/**
 * @swagger
 * definitions:
 *   Task:
 *     required:
 *       - name
 *       - description
 *       - points
 *       - positive
 *     properties:
 *       name:
 *         type: string
 *       _id:
 *         type: string
 *       description:
 *         type: string
 *       points:
 *         type: number
 *       positive:
 *         type: boolean
 *       _v:
 *         type: integer
 *       categories:
 *         type: array
 *         items:
 *          type: string
 */

router.get('/', function(_, res) {
  res.render('index', { title: 'ScoreTasks' });
});

module.exports = router
