const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
const Subscription = require('./resolvers/Subscription')
const Post = require('./resolvers/Post')
const User = require('./resolvers/User')
const Like = require('./resolvers/Like')

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: { Mutation, Query, Post, User, Subscription, Like },
  context: request => ({ ...request, prisma })
})

server.start(() => console.log('Server is running on port 4000'))