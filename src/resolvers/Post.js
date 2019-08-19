const owner = (root, args, ctx) => ctx.prisma.post({ id: root.id }).owner()

const likes = (root, args, ctx) => ctx.prisma.post({ id: root.id }).likes()

module.exports = { owner, likes }