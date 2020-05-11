const moongose = require('mongoose');
const Schema = moongose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    }
})

const books = moongose.model('book', bookSchema);
    module.exports = books