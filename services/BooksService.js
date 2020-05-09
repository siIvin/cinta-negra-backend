const books = require('../models/Books');
module.exports = {
    create: (body) => books.create(body),
    find: () => books.find(),
    findbyId: (id) => books.findById(id),
    update: (user, body) => {
        Object.assign(user, body);
        return user.save()
    },
}