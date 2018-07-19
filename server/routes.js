const express = require('express')
const routes = express.Router()
const userControllers = require('./controllers/users')

routes.get('/all', userControllers.getAll)
routes.post('/new', userControllers.addNewUser)

module.exports = routes
