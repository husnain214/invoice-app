const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const bcrypt = require('bcryptjs')
const User = require('../models/user')

beforeEach(async () => {
  await User.deleteMany({})
}, 20000)

describe('there are no users in the database', () => {
  test('users can successfully create an account with valid information', async () => {
    const usersAtStart = await User.find({})

    const newUser = {
      name: 'Saad',
      email: 'wqqe@gmail.com',
      profile_pic: '/assets/pic.jpg',
      password: 'doraemon'
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await User.find({})

    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)
  })

  test('creation fails if email or password is missing', async () => {
    const usersAtStart = await User.find({})

    const newUser_1 = {
      name: 'Superuser',
      password: 'salainen',
    }

    const newUser_2 = {
      email: 'wqqe@gmail.com',
      name: 'Superuser'
    }

    const newUser_3 = {
      email: 'wqqe@gmail.com',
      name: 'Superuser',
      password: 'salainen'
    }

    const result_1 = await api
      .post('/api/users')
      .send(newUser_1)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    const result_2 = await api
      .post('/api/users')
      .send(newUser_2)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    const result_3 = await api
      .post('/api/users')
      .send(newUser_3)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result_1.body.error).toContain('email, password, profile picture are required')
    expect(result_2.body.error).toContain('email, password, profile picture are required')
    expect(result_3.body.error).toContain('email, password, profile picture are required')

    const usersAtEnd = await User.find({})
    expect(usersAtEnd).toEqual(usersAtStart)
  }, 15000)
})

describe('there are some users in the database', () => {
  beforeEach(async () => {
    const passwordHash = await bcrypt.hash('doraemon', 10)
    const user = new User({
      name: 'Saad Atif',
      email: 'saadcheema@gmail.com',
      passwordHash,
      profile_pic: '/assets/ap.png'
    })

    await user.save()
  })

  test('users can log in with valid credentials', async () => {
    const loggingUser = {
      email: 'saadcheema@gmail.com',
      password: 'doraemon'
    }

    await api
      .post('/api/login')
      .send(loggingUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('creation fails with proper status code and message if email already taken', async () => {
    const usersAtStart = await User.find({})

    const newUser = {
      email: 'saadcheema@gmail.com',
      name: 'Husnain Zahid',
      profile_pic: '/assets/ap.png',
      password: 'husnain123'
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('email must be unique')

    const usersAtEnd = await User.find({})
    expect(usersAtEnd).toEqual(usersAtStart)
  })

  test('creation succeeds with a fresh email', async () => {
    const usersAtStart = await User.find({})

    const newUser = {
      email: 'saadwow@gmail.com',
      name: 'Saad Zahid',
      profile_pic: '/assets/asp.png',
      password: 'boom',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await User.find({})
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    const emails = usersAtEnd.map(u => u.email)
    expect(emails).toContain(newUser.email)
  })
})

afterAll(async () => {
  await mongoose.connection.close()
})