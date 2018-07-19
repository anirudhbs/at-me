const users = {}
const models = require('../models')

users.getAll = async (req, res) => {
  const users = await models.getAllUsers()
  res.send(users)
}

module.exports = users
