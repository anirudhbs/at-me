const tweets = {}
const models = require('../models/models')

tweets.addNewTweet = async (req, res) => {
  const author = res.locals.id
  const { body } = req.body
  const user = await models.getUserDetails(author)
  const { displayName } = user
  const newTweet = await models.addNewTweet(author, displayName, body)
  res.send(newTweet)
}

tweets.getAll = async (req, res) => {
  const tweets = await models.getAllTweets()
  res.send(tweets)
}

tweets.getTweetsByUser = async (req, res) => {
  const { id } = req.params
  const tweets = await models.getTweetsByUser(id)
  res.send(tweets)
}

module.exports = tweets
