const express = require('express')
const router = express.Router()
const {registerUser, loginUser} = require('../controllers/authController')
router.post('/post', registerUser)
router.post('/posts', loginUser)

module.exports = router