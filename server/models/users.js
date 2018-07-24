const { Users } = require('../schema')
const users = {}

users.getAllUsers = async function () {
  const users = await Users.find()
  return users
}

users.addNewUser = async function (googleId, displayName) {
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

users.getUserDetails = async function (id) { // takes in user ID and returns complete user object
  const user = await Users.findOne({ googleId: id })
  return user
}

async function checkIfUserExists (googleId) {
  const user = await Users.findOne({ googleId })
  if (user && 'googleId' in user) {
    return true
  }
  return false
}

module.exports = users
