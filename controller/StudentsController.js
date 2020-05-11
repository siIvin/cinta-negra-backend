const { StudentsService } = require('../services')

module.exports = {
    create: (req, res) => {
        StudentsService.create(req.body)
            .then(student => res.status(201).send(student))
            .catch(err => res.status(400).send({ message: 'error creating student', err }));
    },
    find: (req, res) => {
        StudentsService.find()
            .then(students => res.status(200).send(students))
            .catch(err => res.status(404).send({ message: 'error getting students',err }))
    },
    findbyId: async (req, res) => {
        const { id } = req.params;
        try {
            const student = await StudentsService.findbyId(id);
            res.status(200).send(student);
        } catch (error) {
            res.status(401).send({ message: 'Not found', error })
        }
    },
    findbyIdandUpdate: (req, res) => {
        const { id } = req.params;
        const { body } = req
        StudentsService.findbyId(id)
            .then(student => StudentsService.update(student, body))
            .then(updatestudent => res.status(200).send(updatestudent))
            .catch(error => res.status(404).send({ message: 'cannot update student' }, error))
    },
    findbyIdAndDelete: async (req, res) => {
        const { id } = req.params;
        try {
            const student = await StudentsService.findbyId(id);
            await StudentsService.update(student, { is_active: false })
            res.status(204).send();
        } catch (error) {
            res.status(404).send({ message: 'Error deleting student', error })
        }
    }}
