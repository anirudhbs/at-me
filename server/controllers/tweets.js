const tweets = {}
const models = require('../models')

tweets.addNewTweet = async (req, res) => {
  // const { googleId, displayName } = req.body
  // const newUser = await models.addNewUser(googleId, displayName)
  // res.send(newUser)
  res.send('making new tweet')
}

tweets.getAll = async (req, res) => {
  res.send('array of tweets')
}

module.exports = tweets
