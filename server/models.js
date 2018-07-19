const mongoose = require('mongoose')
const { Users } = require('./schema')

const url = 'mongodb://127.0.0.1:27017/'
const models = {}

mongoose.connect(url) // todo: add useNewUrlParser: true flag

models.getAllUsers = async function () {
  const users = await Users.find()
  return users
}

models.addNewUser = async function (userId, displayName) {
  const user = new Users({
    userName: userId,
    displayName: displayName
  })

  await user.save()
  return 'done'
}

module.exports = models
