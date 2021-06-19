const User = require('../models/User');

async function createUser({ username, hashedPassword }) {
    const user = new User({
        username,
        hashedPassword
    });

    await user.save();
}

async function getUserByUsername(username) {
    return await User.findOne({ username: { $regex: username, $options: 'i' } });
}

module.exports = {
    createUser,
    getUserByUsername
}