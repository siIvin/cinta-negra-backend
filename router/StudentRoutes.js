const express = require('express');
const router = express.Router();
const StudentsController = require('../controller/StudentsController');
const {StudentValidator}= require('../Validators')


router.post('/students', StudentValidator.createOrUpdate, StudentsController.create);
//Get all
router.get('/students', StudentsController.find);
//Read one
router.get('/students/:id', StudentsController.findbyId);
router.patch('/students/:id', StudentValidator.createOrUpdate, StudentsController.findbyIdandUpdate);
router.delete('/students/:id', StudentsController.findbyIdAndDelete);

module.exports = router