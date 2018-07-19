const mongoose = require('mongoose')
const { Users } = require('./schema')

const url = 'mongodb://127.0.0.1:27017/'
const models = {}

mongoose.connect(url) // todo: add useNewUrlParser: true flag

models.getAllUsers = async function () {
  const users = await Users.find()
  return users
}

models.addNewUser = async function (googleId, displayName) {
  if (await checkIfUserExists()) {
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
  if ('googleId' in user) {
    return true
  }
  return false
}

module.exports = models
