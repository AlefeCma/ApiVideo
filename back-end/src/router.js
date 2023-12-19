const express = require('express')

const taskController = require('./controllers/tasksController')
const tasksMiddleware = require('./middlewares/tasksMiddleware')

const router = express.Router()


router.get('/tasks',taskController.getAll)
router.post('/tasks',tasksMiddleware.validateBody,taskController.createTask)
router.delete('/tasks/:id',taskController.deleteTask)
router.put('/tasks/:id',tasksMiddleware.validateBody,taskController.updateTask)


module.exports = router