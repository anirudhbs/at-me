const mongoose = require('mongoose')
const { Users } = require('./schema')

const url = 'mongodb://127.0.0.1:27017/'
const models = {}

mongoose.connect(url)

// const user = new Users({
//   userName: 'anirudh',
//   displayName: 'Anirudh'
// })

models.getAllUsers = async function () {
  const users = await Users.find()
  return users
}

module.exports = models
