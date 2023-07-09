const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const loginRouter = require('express').Router()
const User = require('../models/user')
const fs = require('fs')

loginRouter.post('/', async (request, response) => {
  const { email, password } = request.body

  const user = await User.findOne({ email })
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    console.log(request)
    return response.status(401).json({
      error: 'invalid email or password',
    })
  }

  const profilePicPath = user.profile_pic

  let fileData = fs.readFileSync(profilePicPath)

  const userForToken = {
    email: email,
    id: user._id,
  }

  const token = jwt.sign(userForToken, process.env.SECRET)

  response.status(200).send({
    token,
    email: user.email,
    name: user.name,
    theme: user.theme,
    profile_pic: fileData ? fileData.toString('base64') : null
  })
})

module.exports = loginRouter
