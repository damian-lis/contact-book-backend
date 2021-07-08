const jwt = require('jsonwebtoken')

const generateToken = (id) => {
  return jwt.sign({ id }, 'DamianLis@2021', {
    expiresIn: '30d',
  })
}

module.exports = generateToken


