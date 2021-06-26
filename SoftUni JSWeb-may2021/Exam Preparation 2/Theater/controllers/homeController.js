const router = require('express').Router();
const { isGuest, isUser } = require('../middlewares/guards');

router.get('/', async (req, res) => {
    const query = Object.values(req.query).join('');
    const plays = await req.storage.getAllPlays(query);

    res.render('home', { plays });
});

module.exports = router;