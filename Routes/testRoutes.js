const express = require('express')
const router = express.Router()
const { postTest, getTest, getTestId } = require('../controllers/testController')

router.post('/post', postTest)

router.get('/get', getTest)

router.get('/getById/:id', getTestId)

module.exports = router