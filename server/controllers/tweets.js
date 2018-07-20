const tweets = {}
const models = require('../models')

tweets.addNewTweet = async (req, res) => {
  const author = res.locals.id
  const { body } = req.body
  const newTweet = await models.addNewTweet(author, body)
  res.send(newTweet)
}

tweets.getAll = async (req, res) => {
  const tweets = await models.getAllTweets()
  res.send(tweets)
}

module.exports = tweets
