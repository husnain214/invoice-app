const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const Invoice = require('../models/invoice')

let token = ''

const initialInvoices = [
  {
    createdAt: '2021-08-18',
    paymentDue: '2021-08-19',
    description: 'Re-branding',
    paymentTerms: 1,
    clientName: 'Jensen Huang',
    clientEmail: 'jensenh@mail.com',
    status: 'paid',
    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom',
    },
    clientAddress: {
      street: '106 Kendell Street',
      city: 'Sharrington',
      postCode: 'NR24 5WQ',
      country: 'United Kingdom',
    },
    items: [
      {
        name: 'Brand Guidelines',
        quantity: 1,
        price: 1800.90,
        total: 1800.90,
      },
    ],
    total: 1800.90,
  },
  {
    createdAt: '2021-08-21',
    paymentDue: '2021-09-20',
    description: 'Graphic Design',
    paymentTerms: 30,
    clientName: 'Alex Grim',
    clientEmail: 'alexgrim@mail.com',
    status: 'pending',
    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom',
    },
    clientAddress: {
      street: '84 Church Way',
      city: 'Bradford',
      postCode: 'BD1 9PB',
      country: 'United Kingdom',
    },
    items: [
      {
        name: 'Banner Design',
        quantity: 1,
        price: 156.00,
        total: 156.00,
      },
      {
        name: 'Email Design',
        quantity: 2,
        price: 200.00,
        total: 400.00,
      },
    ],
    total: 556.00,
  },
]

beforeEach(async () => {
  await User.deleteMany({})

  const passwordHash = await bcrypt.hash('husnain123', 10)
  const user = new User({
    name: 'husnain',
    email: 'husnaindbs@gmail.com',
    passwordHash,
    profile_pic: '/assets/p.jpg'
  })

  const savedUser = await user.save()

  const loggedUser = await api
    .post('/api/login')
    .send({
      email: 'husnaindbs@gmail.com',
      password: 'husnain123'
    })

  token = 'Bearer ' + JSON.parse(loggedUser.text).token

  await Invoice.deleteMany({})

  initialInvoices.forEach(invoice => invoice['user'] = savedUser._id.toHexString())

  await Invoice.insertMany(initialInvoices)
}, 20000)

describe('tests for when there is some data stored in database', () => {
  test('number of invoices is correct', async () => {
    const response = await api.get('/api/invoices').set('Authorization', token)

    expect(response.body).toHaveLength(initialInvoices.length)
  })

  test('the default _id in mongoose is changed to just id', async () => {
    const response = await api.get('/api/invoices').set('Authorization', token)

    expect(response.body[0].id).toBeDefined()
  }, 100000)

  test('required details are not missing from request data', async () => {
    const newInvoice_1 = {
      createdAt: '2021-08-18',
      paymentDue: '2021-08-19',
      description: 'Re-branding',
      paymentTerms: 1,
    }

    await api.post('/api/invoices')
      .set('Authorization', token)
      .send(newInvoice_1)
      .expect(400)
  })
})

describe('testing all REST API requests', () => {
  test('testing POST request', async () => {
    const newInvoice = {
      createdAt: '2021-09-24',
      paymentDue: '2021-10-01',
      description: 'Website Redesign',
      paymentTerms: 7,
      clientName: 'John Morrison',
      clientEmail: 'jm@myco.com',
      status: 'paid',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '79 Dover Road',
        city: 'Westhall',
        postCode: 'IP19 3PF',
        country: 'United Kingdom',
      },
      items: [
        {
          name: 'Website Redesign',
          quantity: 1,
          price: 14002.33,
          total: 14002.33,
        },
      ],
      total: 14002.33,
    }

    await api.post('/api/invoices')
      .set('Authorization', token)
      .send(newInvoice)
      .expect(201)

    const allInvoices = await Invoice.find({})

    expect(allInvoices.length).toBe(initialInvoices.length + 1)
  }, 20000)

  test('testing DELETE request', async () => {
    let allInvoices = await Invoice.find({})
    const id = allInvoices[0]._id.toHexString()

    await api.delete(`/api/invoices/${id}`)
      .set('Authorization', token)
      .expect(204)

    allInvoices = await Invoice.find({})

    expect(allInvoices).toHaveLength(initialInvoices.length - 1)
  })
})


afterAll(() => {
  mongoose.connection.close()
})