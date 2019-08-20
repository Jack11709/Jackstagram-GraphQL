const { prisma } = require('../src/generated/prisma-client')
const bcrypt = require('bcryptjs')

const seed = async () => {
  await prisma.createUser({
    username: 'SyntacticSugarBear',
    email: 'jack@email',
    password: await bcrypt.hash('pass', 10),
    posts: {
      create: [
        {
          content: 'Hey this is my first post!',
          image: 'my-image-url'
        },
        {
          content: 'Can\'t stop making all these posts!',
          image: 'my-image-url'
        },
        {
          content: 'One more for the gram!',
          image: 'my-image-url'
        }
      ]
    }
  })

  await prisma.createUser({
    username: 'PNutFudge',
    email: 'paula@email',
    password: await bcrypt.hash('pass', 10),
    posts: {
      create: [
        {
          content: 'Hey this is my first post too!',
          image: 'my-image-url'
        },
        {
          content: 'Can\'t stop baking a bunch of cakes!',
          image: 'my-image-url'
        },
        {
          content: 'I 💖 Cheeseburger',
          image: 'my-image-url'
        }
      ]
    }
  })

  await prisma.createUser({
    username: 'Charizard',
    email: 'charlotte@email',
    password: await bcrypt.hash('pass', 10),
    posts: {
      create: [
        {
          content: 'Hey this is my first post too!',
          image: 'my-image-url'
        },
        {
          content: 'Doing stuff yo',
          image: 'my-image-url'
        },
        {
          content: 'Best day out!',
          image: 'my-image-url'
        }
      ]
    }
  })

  await prisma.createUser({
    username: 'MickyGinger',
    email: 'mike@email',
    password: await bcrypt.hash('pass', 10),
    posts: {
      create: [
        {
          content: 'Hey this is my first post too!',
          image: 'my-image-url'
        },
        {
          content: 'Some vegan things',
          image: 'my-image-url'
        },
        {
          content: 'Some brexit stuff',
          image: 'my-image-url'
        }
      ]
    }
  })

  await prisma.createUser({
    username: 'Wesleydale',
    email: 'wes@email',
    password: await bcrypt.hash('pass', 10),
    posts: {
      create: [
        {
          content: 'Hey this is my first post too!',
          image: 'my-image-url'
        },
        {
          content: 'Really growing into this nickname',
          image: 'my-image-url'
        },
        {
          content: 'Marsha',
          image: 'my-image-url'
        }
      ]
    }
  })

  await prisma.createUser({
    username: 'GerBear',
    email: 'gerry@email',
    password: await bcrypt.hash('pass', 10),
    posts: {
      create: [
        {
          content: 'Hey this is my first post too!',
          image: 'my-image-url'
        },
        {
          content: 'Tout le monde!',
          image: 'my-image-url'
        },
        {
          content: 'Seeing some watches!',
          image: 'my-image-url'
        }
      ]
    }
  })

  await prisma.createUser({
    username: 'CaseyNails',
    email: 'casey@email',
    password: await bcrypt.hash('pass', 10),
    posts: {
      create: [
        {
          content: 'Hey this is my first post too!',
          image: 'my-image-url'
        },
        {
          content: 'Some random post!',
          image: 'my-image-url'
        },
        {
          content: 'some more random stuff!',
          image: 'my-image-url'
        }
      ]
    }
  })
}

seed()