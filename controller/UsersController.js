const { UsersService } = require('../services')
const utils = require('../utils');

module.exports = {
    create: (req, res) => {
        UsersService.create(req.body)
            .then(user => res.status(201).send(user))
            .catch(err => res.status(400).send({ message: 'error creating user', err }));
    },
    find: (req, res) => {
        UsersService.find()
            .then(users => res.status(200).send(users))
            .catch(err => res.status(404).send({ message: 'error getting users' }))
    },
    findbyId: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await UsersService.findbyId(id);
            res.status(200).send(user);
        } catch (error) {
            res.status(401).send({ message: 'Not found', error })
        }
    },
    findbyIdandUpdate: (req, res) => {
        const { id } = req.params;
        const { body } = req
        UsersService.findbyId(id)
            .then(user => UsersService.update(user, body))
            .then(updateuser => res.status(200).send(updateuser))
            .catch(error => res.status(404).send({ message: 'cannot update user' }, error))
    },
    findbyIdAndDelete: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await UsersService.findbyId(id);
            await UsersService.update(user, { is_active: false })
            res.status(204).send();
        } catch (error) {
            res.status(404).send({ message: 'Error deleting user', error })
        }
    },
    signup: async (req, res) => {
        try {
            const userExist = await UsersService.findByEmail(req.body.email)
            if (userExist) res.status(400).send({ message: 'user already exists' })

            const user = await UsersService.create(req.body)
            res.status(201).send({ message: 'User created succesfully', user })
        } catch (error) {
            res.status(400).send({ message: 'Error creating user', error })
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body
        try {
            const user = await UsersService.findByEmail(email);
            if (!user) res.status(404).send({ message: 'user not found' });
            const isMatch = UsersService.comparePasswords(password, user.password);
            if (!isMatch) res.status(400).send({ message: 'Invalid credentials' });
            const token = utils.createToken({
                id: user._id,
                name: user.first_name,
                email: user.email,
            });
            res.status(200).send({ message: 'Welcome', token })
        } catch (error) {
            res.status(400).send({ message: 'Error login in', error })

        }
    }
}

