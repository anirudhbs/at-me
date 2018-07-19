const express = require('express')
const routes = express.Router()
const userControllers = require('./controllers/users')
const tweetControllers = require('./controllers/tweets')

routes.get('/users/all', userControllers.getAll)
routes.post('/users/new', userControllers.addNewUser)

routes.post('/tweets/new', tweetControllers.addNewTweet)
routes.get('/tweets/all', tweetControllers.getAll)

module.exports = routes
