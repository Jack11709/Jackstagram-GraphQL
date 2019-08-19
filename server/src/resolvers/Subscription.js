const newPostSubscribe = (root, args, ctx) => {
  return ctx.prisma.$subscribe.post({ mutation_in: ['CREATED'] }).node()
}

const newPost = {
  subscribe: newPostSubscribe,
  resolve: payload => payload
}

const newLikeSubscribe = (root, args, ctx) => {
  return ctx.prisma.$subscribe.like({ mutation_in: ['CREATED'] }).node()
}

const newLike = {
  subscribe: newLikeSubscribe,
  resolve: payload => payload
}

module.exports = { newPost, newLike }