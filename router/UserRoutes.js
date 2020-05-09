const express = require('express');
const router = express.Router();
const UsersController = require('../controller/UsersController');
const {UserValidator}= require('../Validators');


router.post('/users', UserValidator.create, UsersController.create);
//Get all
router.get('/users', UsersController.find);
//Read one
router.get('/users/:id', UsersController.findbyId);
router.patch('/users/:id', UsersController.findbyIdandUpdate);
router.delete('/users/:id',UsersController.findbyIdAndDelete);

module.exports = router