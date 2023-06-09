const userRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname).split('.').at(0) + '-' + file.originalname)
  }
})

const upload = multer({ storage })

userRouter.post('/', upload.single('profile-picture'), async (request, response) => {
  const { email, name, password } = request.body
  const profilePicPath = request.file.path
  let fileData = fs.readFileSync(profilePicPath)

  if (!email || !password || !request.file) {
    fs.unlink(profilePicPath)
    return response.status(400).json({
      error: 'email, password, profile picture are required',
    })
  }

  const existingUser = await User.findOne({ email })

  if (existingUser) {
    fs.unlink(profilePicPath)
    return response.status(400).json({
      error: 'email must be unique',
    })
  }

  if (password.length < 3) {
    fs.unlink(profilePicPath)
    return response.status(400).json({
      error: 'password must be atleast 3 characters',
    })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    name,
    email,
    profile_pic: fileData ? fileData.toString('base64') : null,
    passwordHash,
  })

  const savedUser = await user.save()

  response.status(201).send(savedUser)
})

userRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('invoices')
  response.json(users)
})

userRouter.put('/:id', async (request, response) => {
  const id = request.params.id
  const user = await User.findById(id)

  user['theme'] = request.body.theme

  await User.findByIdAndUpdate(id, user, { updated: true })
  response.json(user)
})

module.exports = userRouter
