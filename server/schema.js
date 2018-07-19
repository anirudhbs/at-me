const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tweetSchema = new Schema({
  author: String,
  body: String,
  date: {
    type: Date,
    default: Date.now
  },
  meta: {
    likes: {
      type: Number,
      default: 0
    }
  }
})

const userSchema = new Schema({
  googleId: String,
  displayName: String,
  date: {
    type: Date,
    default: Date.now
  }
})

const Tweets = mongoose.model('tweets', tweetSchema)
const Users = mongoose.model('users', userSchema)

module.exports = {
  Tweets,
  Users
}
