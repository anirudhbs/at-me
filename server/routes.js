const express = require('express')
const routes = express.Router()
const userControllers = require('./controllers/users')
const tweetControllers = require('./controllers/tweets')
const middlwares = require('./middleware')

routes.get('/users/all', userControllers.getAll)
routes.post('/users/new', userControllers.addNewUser)

routes.get('/tweets/all', tweetControllers.getAll)
routes.post('/tweets/new', middlwares.authentication, tweetControllers.addNewTweet)
routes.get('/users/:id/tweets', tweetControllers.getTweetsByUser)

module.exports = routes
