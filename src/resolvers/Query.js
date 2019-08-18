module.exports = {
  posts: (root, args, ctx) => ctx.prisma.posts(),
  post: (root, args, ctx) => ctx.prisma.post({ id: args.id })
}