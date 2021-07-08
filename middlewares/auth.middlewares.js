const asyncHandler = require('express-async-handler');
const User = require('../models/user.models.js');
const jwt = require('jsonwebtoken');

const protect = asyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      let token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, 'DamianLis@2021')

      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  } else {
    res.status(401)
    throw new Error('Not authorized, token failed')
  }
})

module.exports = {protect}

