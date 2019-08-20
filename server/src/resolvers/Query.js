const posts = (root, args, ctx) => ctx.prisma.posts()

const post = (root, args, ctx) => ctx.prisma.post({ id: args.id })

const users = (root, args, ctx) => ctx.prisma.users()

module.exports = {
  posts,
  post,
  users
}