const express = require('express');
const router = express.Router();
const UsersController = require('../controller/UsersController');
const {UserValidator}= require('../Validators')
router.post('/users/signup', UserValidator.create, UsersController.signup);
router.post('/users/login', UserValidator.create, UsersController.login);

module.exports = router;