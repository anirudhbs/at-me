const users = {}
const models = require('../models')

users.getAll = async (req, res) => {
  const users = await models.getAllUsers()
  res.send(users)
}

users.addNewUser = async (req, res) => {
  const { googleId, displayName } = req.body
  const newUser = await models.addNewUser(googleId, displayName)
  res.send(newUser)
}

module.exports = users
