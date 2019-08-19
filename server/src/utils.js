const jwt = require('jsonwebtoken')
const { secret } = require('./config/environment')

const getUserId = ctx => {
  const auth = ctx.request.get('Authorization')
  if (!auth) throw new Error('Unauthorized')
  const token = auth.replace('Bearer ', '')
  const { userId } = jwt.verify(token, secret)
  return userId
}

module.exports = { getUserId }