const mongoose = require('mongoose')
const { Users, Tweets } = require('./schema')

const url = 'mongodb://127.0.0.1:27017/atme'
const models = {}

mongoose.connect(url, {
  useNewUrlParser: true
}, (err, res) => {
  if (err) {
    console.log('error connecting to DB', err)
  } else {
    console.log('successfully connected to DB')
  }
})

models.getAllUsers = async function () {
  const users = await Users.find()
  return users
}

models.addNewUser = async function (googleId, displayName) {
  if (await checkIfUserExists(googleId)) {
    return {
      error: 'user already exists'
    }
  }
  const user = new Users({
    googleId: googleId,
    displayName: displayName
  })
  await user.save()
  return {
    message: 'user added'
  }
}

async function checkIfUserExists (googleId) {
  const user = await Users.findOne({ googleId })
  if (user && 'googleId' in user) {
    return true
  }
  return false
}

models.addNewTweet = async function (authorId, displayName, body) {
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

models.getAllTweets = async function () {
  const tweets = await Tweets.find()
  return tweets
}

models.getUserDetails = async function (id) { // takes in user ID and returns complete user object
  const user = await Users.findOne({ googleId: id })
  return user
}

module.exports = models
