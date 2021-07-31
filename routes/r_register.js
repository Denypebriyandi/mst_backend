const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authorization');
const controller = require('../controllers/c_register');

router.post('/register', auth.basicAuth, controller.postRegister);

module.exports = router;