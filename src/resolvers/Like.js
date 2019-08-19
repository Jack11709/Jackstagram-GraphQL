const post = (root, args, ctx) => ctx.prisma.like({ id: root.id }).post()

const user = (root, args, ctx) => ctx.prisma.like({ id: root.id }).user()

module.exports = { post, user }