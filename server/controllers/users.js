const jwt = require('jsonwebtoken')
const users = {}
const models = require('../models')

users.getAll = async (req, res) => {
  const users = await models.getAllUsers()
  res.send(users)
}

users.addNewUser = async (req, res) => {
  const { googleId, displayName } = req.body
  const token = jwt.sign({ id: googleId }, 'lookatmydab', { // todo: move secret key
    expiresIn: 86400
  })
  await models.addNewUser(googleId, displayName)
  res.send({
    success: true,
    id: googleId,
    token: token
  })
}

module.exports = users
