const books = require('../models/Books');
module.exports = {
    create: (body) => books.create(body),
    find: () => books.find(),
    findbyId: (id) => books.findById(id),
    update: (book, body) => {
        Object.assign(book, body);
        return book.save()
    },
}