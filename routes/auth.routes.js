const express = require('express');
const  { loginUser, registerUser } = require('../controllers/auth.controllers.js');

const router = express.Router()

router.route('/login').post(loginUser)
router.route('/').post(registerUser)

module.exports = router


