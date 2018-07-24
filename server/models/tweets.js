const { Tweets } = require('../schema')
const tweets = {}

tweets.addNewTweet = async function (authorId, displayName, body) {
  const tweet = new Tweets({
    authorId,
    displayName,
    body
  })
  await tweet.save()
  return {
    message: 'tweet added'
  }
}

tweets.getAllTweets = async function () {
  const tweets = await Tweets.find()
  return tweets
}

tweets.getTweetsByUser = async function (id) {
  const tweets = await Tweets.find({ authorId: id })
  return tweets
}

module.exports = tweets
