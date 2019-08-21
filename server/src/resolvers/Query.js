const { getUserId } = require('../utils')

const posts = (root, args, ctx) => ctx.prisma.posts()

const post = (root, args, ctx) => ctx.prisma.post({ id: args.id })

const users = (root, args, ctx) => ctx.prisma.users()

const user = (root, args, ctx) => {
  const userId = getUserId(ctx)
  return ctx.prisma.user({ id: userId })
}

module.exports = {
  posts,
  post,
  users,
  user
}