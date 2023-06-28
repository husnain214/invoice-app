const mongoose = require('mongoose')
const { isEmail } = require('validator')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: isEmail,
      message: 'Please provide a valid email',
    },
  },
  theme: {
    type: Boolean,
    required: true,
    default: 0,
  },
  profile_pic: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    unique: true,
    required: true,
  },
  invoices: [
    {
      ref: 'Invoice',
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash
  },
})

module.exports = mongoose.model('User', userSchema)
