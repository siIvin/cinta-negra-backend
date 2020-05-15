const express = require('express');
const router = express.Router();
const UsersController = require('../controller/UsersController');
const {UserValidator}= require('../Validators')
router.post('/users/signup', UsersController.signup);
router.post('/users/login', UsersController.login);

module.exports = router;