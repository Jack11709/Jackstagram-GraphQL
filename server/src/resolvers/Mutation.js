const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const { getUserId } = require('../utils')

const createPost = (root, args, ctx) => {
  const userId = getUserId(ctx)
  return ctx.prisma.createPost({ ...args, owner: { connect: { id: userId } } })
}

// ! Fix this update resolver, currently not finding the id of the post
const updatePost = (root, args, ctx) => ctx.prisma.updatePost({ ...args }) 

const deletePost = (root, args, ctx) => ctx.prisma.deletePost({ id: args.id })

const register =  async (root, args, ctx) => {
  const password = await bcrypt.hash(args.password, 10)
  const user  = await ctx.prisma.createUser({ ...args, password })
  const token = jwt.sign({ userId: user.id }, secret)
  return { token, user }
}

const login = async (root, args, ctx) => {
  const user = await ctx.prisma.user({ email: args.email })
  if (!user) throw new Error('Not Found')
  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) throw new Error('Unauthorised')
  const token = jwt.sign({ userId: user.id }, secret)
  return { token, user }
}

const like = async (root, args, ctx) => {
  const userId = getUserId(ctx)
  const postExists = await ctx.prisma.$exists.like({ 
    user: { id: userId },
    post: { id: args.postId }
  })
  if (postExists) throw new Error(`Already liked post ${args.postId}`)
  return ctx.prisma.createLike({
    user: { connect: { id: userId } },
    post: { connect: { id: args.postId } }
  })
}

module.exports = {
  createPost,
  updatePost,
  deletePost,
  register,
  login,
  like
}