const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tweetSchema = new Schema({
  author: String,
  content: String,
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
  userName: String,
  displayName: String
})

const Tweets = mongoose.model('tweets', tweetSchema)
const Users = mongoose.model('users', userSchema)

module.exports = {
  Tweets,
  Users
}
