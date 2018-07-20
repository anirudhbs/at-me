const jwt = require('jsonwebtoken')
const middlwares = {}

middlwares.authentication = async (req, res, next) => {
  const { authorization } = req.headers
  const token = authorization.split(' ')[1]
  jwt.verify(token, 'lookatmydab', (err, decoded) => { // todo: move secret key
    if (err) {
      res.json({
        error: 'user not authenticated'
      })
    } else {
      res.locals.id = decoded.id
      next()
    }
  })
}

module.exports = middlwares
