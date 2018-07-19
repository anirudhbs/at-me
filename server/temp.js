const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/'
mongoose.connect(url, {
  useNewUrlParser: true
})
const { Users } = require('./schema')

const user = new Users({
  userName: 'anirudh',
  displayName: 'Anirudh'
})

user.save()
  .then(res => {
    console.log('res', res)
  })
  .catch(err => {
    console.log('err', err)
  })
