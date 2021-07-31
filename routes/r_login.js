const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authorization');
const controller = require('../controllers/c_login');

router.post('/login', auth.basicAuth, controller.postLogin);
router.post('/login/forgotPassword', auth.basicAuth, controller.forgotPassword);

module.exports = router;