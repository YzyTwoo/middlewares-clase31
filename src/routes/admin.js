const express = require('express');
const router = express.Router();
const {admin} = require('../controllers/adminControllers');
const validationAdmin = require('../middlewares/validationAdminMiddleware')

router.get('/', validationAdmin ,admin)


module.exports = router