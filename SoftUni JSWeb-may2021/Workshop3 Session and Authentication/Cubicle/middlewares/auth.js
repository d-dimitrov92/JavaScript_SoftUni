const bcrypt = require('bcrypt');

const userService = require('../services/user');

module.exports = () => (req, res, next) => {
    req.auth = {
        register: userService.createUser,
        login
    }

    next();

    async function login({ username, password }) {
        const user = await userService.getUserByUsername(username);

        if (!user) {
            throw new Error('Wrong username or password.');
        } else {
            const isMatch = await bcrypt.compare(password, user.hashedPassword);
            if (!isMatch) {
                throw new Error('Wrong username or password.');
            } else {

            }
        }
    }
};

async function login({ username, password }) {
    const user = await userService.getUserByUsername(username);

    if (!user) {
        throw new Error('Wrong username or password.');
    } else {
        const isMatch = await bcrypt.compare(password, user.hashedPassword);
        if (!isMatch) {
            throw new Error('Wrong username or password.');
        } else {

        }
    }
}