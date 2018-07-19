const express = require('express')
const app = express()
const routes = require('./routes')
const PORT = 3000

app.use('/api/users', routes)

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
