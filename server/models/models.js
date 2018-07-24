const mongoose = require('mongoose')
const tweets = require('./tweets')
const users = require('./users')

const url = 'mongodb://127.0.0.1:27017/atme'

mongoose.connect(url, {
  useNewUrlParser: true
}, (err, res) => {
  if (err) {
    console.log('error connecting to DB', err)
  } else {
    console.log('successfully connected to DB')
  }
})

module.exports = Object.assign({}, tweets, users)
