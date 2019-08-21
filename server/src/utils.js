const jwt = require('jsonwebtoken')
const { secret } = require('./config/environment')

const getUserId = ctx => {
  const token = ctx.request.cookies.token
  if (!token) throw new Error('Unauthorized')
  const { userId } = jwt.verify(token, secret)
  return userId
}

module.exports = { getUserId }