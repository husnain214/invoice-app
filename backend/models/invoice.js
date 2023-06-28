const mongoose = require('mongoose')

const invoiceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    required: true,
  },
  paymentDue: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  paymentTerms: {
    type: Number,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  clientEmail: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  senderAddress: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  clientAddress: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      },
    },
  ],
  total: {
    type: Number,
    required: true,
  },
})

invoiceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Invoice', invoiceSchema)
