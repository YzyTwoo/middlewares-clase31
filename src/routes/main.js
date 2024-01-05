const express = require('express')
const router = express.Router()
const {main} = require('../controllers/mainControllers')

router.get('/', main)

module.exports = router