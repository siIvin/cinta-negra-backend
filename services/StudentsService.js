const students = require('../models/Students');
module.exports = {
    create: (body) =>students.create(body),
    find: () =>students.find(),
    findbyId: (id) =>students.findById(id),
    update: (student, body) => {
        Object.assign(student, body);
        return student.save()
    },
}