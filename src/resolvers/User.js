const posts = (root, args, ctx) => ctx.prisma.user({ id: ctx.id }).posts()

const likes = (root, args, ctx) => ctx.prisma.user({ id: ctx.id }).likes()

module.exports = { posts, likes } 