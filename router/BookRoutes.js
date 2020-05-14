const express = require('express');
const router = express.Router();
const BooksController = require('../controller/BooksController');
const {BookValidator}= require('../Validators')


router.post('/books', BookValidator.createOrUPdate, BooksController.create);
//Get all
router.get('/books', BooksController.find);
//Read one
router.get('/books/:id', BooksController.findbyId);
router.patch('/books/:id', BookValidator.createOrUPdate, BooksController.findbyIdandUpdate);
router.delete('/books/:id', BooksController.findbyIdAndDelete);

module.exports = router