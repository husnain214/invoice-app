const invoiceRouter = require('express').Router()
const Invoice = require('../models/invoice')
const { userExtractor } = require('../utils/middleware')

invoiceRouter.post('/', userExtractor, async (request, response) => {
  const { body, user } = request

  const invoiceFields = [
    'createdAt',
    'paymentDue',
    'description',
    'paymentTerms',
    'clientName',
    'clientEmail',
    'status',
    'senderAddress',
    'clientAddress',
    'items',
    'total',
  ]

  const missingFields = invoiceFields.filter(
    (field) => body[field] === undefined
  )

  if (missingFields.length > 0) {
    return response.status(400).json({
      error: `The following invoice fields are missing: ${missingFields.join(
        ', '
      )}`,
    })
  }

  const invoiceData = { user: user._id }

  invoiceFields.forEach((field) => (invoiceData[field] = body[field]))

  const invoice = new Invoice(invoiceData)

  const savedInvoice = await invoice.save()
  user.invoices = user.invoices.concat(savedInvoice._id)

  await user.save()

  response.status(201).json(savedInvoice)
})

invoiceRouter.delete('/:id', userExtractor, async (request, response) => {
  const id = request.params.id
  const user = request.user
  const invoice = await Invoice.findById(id)

  if (invoice.user.toString() !== user.id) {
    return response.status(401).json({
      error: 'token is missing or invalid',
    })
  }

  await Invoice.findByIdAndRemove(id)
  response.status(204).end()
})

invoiceRouter.get('/', userExtractor, async (request, response) => {
  const user = request.user

  const invoices = await Invoice.find({ user }).populate('user')
  response.json(invoices)
})

invoiceRouter.put('/:id', async (request, response) => {
  const { body } = request
  const id = request.params.id

  const invoice = await Invoice.findById(id)

  await Invoice.findByIdAndUpdate(id, body, { updated: true })
  response.json(invoice)
})

module.exports = invoiceRouter
