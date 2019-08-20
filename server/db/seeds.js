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
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566302745/jackstagram/glfggbxsdzzgyb9u1jto.jpg'
        },
        {
          content: 'Can\'t stop making all these posts!',
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566302744/jackstagram/mnn8aaim7c7mz8oi1x1c.jpg'
        },
        {
          content: 'One more for the gram!',
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566302751/jackstagram/ygw7ccof8r3pznvsuu0m.jpg'
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
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566302745/jackstagram/htzoa03etagsrtlozd3v.jpg'
        },
        {
          content: 'Can\'t stop baking a bunch of cakes!',
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566302744/jackstagram/mxhi7rfawozzsi3x5amx.jpg'
        },
        {
          content: 'I 💖 Cheeseburger',
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566302744/jackstagram/h9lstbf2z16vfe11mqml.jpg'
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
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566306877/jackstagram/xkbonslxmscwdpn9fnl5.jpg'
        },
        {
          content: 'Doing stuff yo',
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566306878/jackstagram/uj4xiegs6iikwfxnnec3.jpg'
        },
        {
          content: 'Best day out!',
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566306821/jackstagram/krsf35xnav7rrdsaxbb5.jpg'
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
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566302744/jackstagram/mnn8aaim7c7mz8oi1x1c.jpg'
        },
        {
          content: 'Some vegan things',
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566302744/jackstagram/mnn8aaim7c7mz8oi1x1c.jpg'
        },
        {
          content: 'Some brexit stuff',
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566302744/jackstagram/mnn8aaim7c7mz8oi1x1c.jpg'
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
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566306821/jackstagram/fwtdnitsrl5r6ewlh46p.jpg'
        },
        {
          content: 'Really growing into this nickname',
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566306821/jackstagram/tuoyzvcx01yvs4aalnaf.jpg'
        },
        {
          content: 'Marsha',
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566302744/jackstagram/mnn8aaim7c7mz8oi1x1c.jpg'
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
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566302744/jackstagram/mnn8aaim7c7mz8oi1x1c.jpg'
        },
        {
          content: 'Tout le monde!',
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566306821/jackstagram/dnlnbz65x1qxy4pkmonw.jpg'
        },
        {
          content: 'Seeing some watches!',
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566306823/jackstagram/x2jxidncozbjyyzoueql.jpg'
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
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566302751/jackstagram/ygw7ccof8r3pznvsuu0m.jpg'
        },
        {
          content: 'Some random post!',
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566302745/jackstagram/glfggbxsdzzgyb9u1jto.jpg'
        },
        {
          content: 'some more random stuff!',
          image: 'https://res.cloudinary.com/dluvdbh8c/image/upload/v1566302744/jackstagram/mnn8aaim7c7mz8oi1x1c.jpg'
        }
      ]
    }
  })
}

seed()