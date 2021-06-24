const router = require('express').Router();

const User = require('../models/User');
const { getUserByUsername } = require('../services/user');

router.get('/', async (req, res) => {
    const user = await getUserByUsername(req.user.username);
    console.log(user);
    res.render('user/profile', user);
});

module.exports = router;