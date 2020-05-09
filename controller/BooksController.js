const { BooksService } = require('../services')

module.exports = {
    create: (req, res) => {
        BooksService.create(req.body)
            .then(book => res.status(201).send(book))
            .catch(err => res.status(400).send({ message: 'error creating book', err }));
    },
    find: (req, res) => {
        BooksService.find()
            .then(books => res.status(200).send(books))
            .catch(err => res.status(404).send({ message: 'error getting books',err }))
    },
    findbyId: async (req, res) => {
        const { id } = req.params;
        try {
            const book = await BooksService.findbyId(id);
            res.status(200).send(book);
        } catch (error) {
            res.status(401).send({ message: 'Not found', error })
        }
    },
    findbyIdandUpdate: (req, res) => {
        const { id } = req.params;
        const { body } = req
        BooksService.findbyId(id)
            .then(book => BooksService.update(book, body))
            .then(updatebook => res.status(200).send(updatebook))
            .catch(error => res.status(404).send({ message: 'cannot update book' }, error))
    },
    findbyIdAndDelete: async (req, res) => {
        const { id } = req.params;
        try {
            const book = await BooksService.findbyId(id);
            await BooksService.update(book, { is_active: false })
            res.status(204).send();
        } catch (error) {
            res.status(404).send({ message: 'Error deleting book', error })
        }
    }}
